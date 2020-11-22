import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";

import Barn from "./Farm/TheBarn";
import GameMap from "./GameMap";
import MilkCowsAtFarm from "./Farm/MilkCowsAtFarm";
import Apartment from "./Apartment"
import TheFarmStore from "./Farm/TheFarmStore";

//Images

const Farm = ( props ) => {


      let GameMapSwitch = () => {
        return (
          <>
          <GameMap
          money = {props.money}
          energy = {props.energy}
          date = {props.date}
          onAddMinutes = {props.onAddMinutes}
          onSpliceFlag = {props.onSpliceFlag}
          onPushFlag = {props.onPushFlag}
          onSetHour = {props.onSetHour}
          flags = {props.flags}
          ></GameMap>
          </>
        );
      };      

      let TheBarnSwitch = () =>{
        return (
            <>
            <Barn
            money = {props.money}
            energy = {props.energy}
            date = {props.date}
            onAddMinutes = {props.onAddMinutes}
            onSpliceFlag = {props.onSpliceFlag}
            onPushFlag = {props.onPushFlag}
            onSetHour = {props.onSetHour}
            flags = {props.flags}
            name = {props.name}
            onAddItem = {props.onAddItem}
            onAddAttractiveness = {props.onAddAttractiveness}
            attractiveness = {props.attractiveness}
            onChangeRelationship = {props.onChangeRelationship}
            ></Barn>
            </>
          ); 
      }

      let MilkCowsAtFarmSwitch = () =>{
        return (
            <>
            <MilkCowsAtFarm
            money = {props.money}
            energy = {props.energy}
            date = {props.date}
            onAddMinutes = {props.onAddMinutes}
            onSpliceFlag = {props.onSpliceFlag}
            onPushFlag = {props.onPushFlag}
            onSetHour = {props.onSetHour}
            flags = {props.flags}
            name = {props.name}
            onAddItem = {props.onAddItem}
            onAddSkills = {props.onAddSkills}
            onChangeRelationship = {props.onChangeRelationship}
            skills = {props.skills}
            onAddEnergy = {props.onAddEnergy}
            onSetEnergy = {props.onSetEnergy}
            ></MilkCowsAtFarm>
            </>
          ); 
      }      

      let ApartementSwitchToSleepAtHome = () =>{
        return(
            <Apartment
            
            
            />
        )
      }

      let TheFarmStoreSwitch = () =>{
        return (
            <>
            <TheFarmStore
            money = {props.money}
            energy = {props.energy}
            date = {props.date}
            onAddMinutes = {props.onAddMinutes}
            onSpliceFlag = {props.onSpliceFlag}
            onPushFlag = {props.onPushFlag}
            onSetHour = {props.onSetHour}
            flags = {props.flags}
            name = {props.name}
            onAddItem = {props.onAddItem}
            onAddSkills = {props.onAddSkills}
            onChangeRelationship = {props.onChangeRelationship}
            skills = {props.skills}
            onAddEnergy = {props.onAddEnergy}
            onSetEnergy = {props.onSetEnergy}
            ></TheFarmStore>
            </>
          ); 
      }      


    return(

        <Router>
            <div>
            <Switch>
                <Route exact path="/GameMap" component={GameMapSwitch} />
                <Route exact path="/TheBarn" component={TheBarnSwitch} />
                <Route exact path="/TheFarmStore" component={TheFarmStoreSwitch} />
                <Route exact path="/MilkCowsAtFarm" component={MilkCowsAtFarmSwitch} />
                <Route exact path="/SleepAtHome" component={ApartementSwitchToSleepAtHome} />
                

                <Redirect to="/TheBarn" />
                </Switch>
            </div>
        </Router>
        )
    }
export default Farm;