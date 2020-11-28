import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";

import Home from "./Apartment/Home";
import FapInApartment from "./Apartment/FapInApartment";
import GoOutside from "./Apartment/GoOutside";
import LacBraQHelpSandyOpenDoor from "./Apartment/LacBraQHelpSandyOpenDoor";
import LacBraQAmyMovingIn from "./Apartment/LacBraQAmyMovingIn";
import App from "../App"
import SleepAtHome from "./Apartment/SleepAtHome"
import SandyApartment from './Apartment/SandyApartment';
import AmyApartment from "./Apartment/AmyApartment";

//Images

const Apartment = ( props ) => {
    
    let HomeSwitch = () => {
        return (
          <Home
          money = {props.money}
          energy = {props.energy}
          date = {props.date}
          onAddMinutes = {props.onAddMinutes}
          onSpliceFlag = {props.onSpliceFlag}
          onPushFlag = {props.onPushFlag}
          onSetHour = {props.onSetHour}
          flags = {props.flags}
          onAddEnergy = {props.onAddEnergy}
          onSetEnergy = {props.onSetEnergy}
          onAddItem = {props.onAddItem}
          items ={props.items}
          onChangeRelationship = {props.onChangeRelationship}
          ></Home>
        );
      };

    let FapInApartmentSwitch = () =>{
        return(
            <FapInApartment
              onAddMinutes = {props.onAddMinutes}
              money = {props.money}
              energy = {props.energy}
              date = {props.date}
            />
        )
    } 

    let GoOutsideSwitch = () => {
        return (
          <GoOutside
          money = {props.money}
          energy = {props.energy}
          date = {props.date}
          onAddMinutes = {props.onAddMinutes}
          onSpliceFlag = {props.onSpliceFlag}
          onPushFlag = {props.onPushFlag}
          onSetHour = {props.onSetHour}
          flags = {props.flags}
          onChangeRelationship = {props.onChangeRelationship}
          name = {props.name}
          onSetItem = {props.onSetItem}
          onAddMoney = {props.onAddMoney}
          ></GoOutside>
        );
      };
      

      let LacBraQHelpSandyOpenDoorSwitch = () =>{
        return (
          <LacBraQHelpSandyOpenDoor
          money = {props.money}
          energy = {props.energy}
          date = {props.date}
          onAddMinutes = {props.onAddMinutes}
          onSpliceFlag = {props.onSpliceFlag}
          onPushFlag = {props.onPushFlag}
          onSetHour = {props.onSetHour}
          flags = {props.flags}
          onChangeRelationship = {props.onChangeRelationship}
          ></LacBraQHelpSandyOpenDoor>
        );
      }  

      let LacBraQAmyMovingInSwitch = () =>{
        return (
          <LacBraQAmyMovingIn
          money = {props.money}
          energy = {props.energy}
          date = {props.date}
          onAddMinutes = {props.onAddMinutes}
          onSpliceFlag = {props.onSpliceFlag}
          onPushFlag = {props.onPushFlag}
          onSetHour = {props.onSetHour}
          flags = {props.flags}
          onChangeRelationship = {props.onChangeRelationship}
          ></LacBraQAmyMovingIn>
        );
      }

    let GoToAppJs = () =>{
      return(
        <App></App>
      )
    }

    let GoToFarm = () =>{
      return(
        <App></App>
      )
    }

    let SleepAtHomeSwitch = () =>{
      return( 
        <SleepAtHome
        money = {props.money}
        energy = {props.energy}
        date = {props.date}
        onAddMinutes = {props.onAddMinutes}
        onSpliceFlag = {props.onSpliceFlag}
        onPushFlag = {props.onPushFlag}
        onSetHour = {props.onSetHour}
        flags = {props.flags}
        onChangeRelationship = {props.onChangeRelationship}
        onAddEnergy = {props.onAddEnergy}
        ></SleepAtHome>
        
      )
    }

    let GoToSandyApartment = () =>{
      return(
        <SandyApartment
          money = {props.money}
          energy = {props.energy}
          date = {props.date}
          onAddMinutes = {props.onAddMinutes}
          onSpliceFlag = {props.onSpliceFlag}
          onPushFlag = {props.onPushFlag}
          onSetHour = {props.onSetHour}
          flags = {props.flags}
          onAddEnergy = {props.onAddEnergy}
          onSetEnergy = {props.onSetEnergy}
          onAddItem = {props.onAddItem}
          items ={props.items}
          name = {props.name}
          onChangeRelationship = {props.onChangeRelationship}
          onSetItem = {props.onSetItem}
          >


        </SandyApartment>
      )
    }

    let GoToAmyApartment = () =>{
      return(
        <AmyApartment
          money = {props.money}
          energy = {props.energy}
          date = {props.date}
          onAddMinutes = {props.onAddMinutes}
          onSpliceFlag = {props.onSpliceFlag}
          onPushFlag = {props.onPushFlag}
          onSetHour = {props.onSetHour}
          flags = {props.flags}
          onAddEnergy = {props.onAddEnergy}
          onSetEnergy = {props.onSetEnergy}
          onAddItem = {props.onAddItem}
          items ={props.items}
          name = {props.name}
          onChangeRelationship = {props.onChangeRelationship}
          Amy = {props.Amy}
          mind = {props.mind}
          onSetItem = {props.onSetItem}
          Sandy = {props.Sandy}
          physical = {props.physical}
          >


        </AmyApartment>
      )
    }

    return(

        <Router>
            <div>
            <Switch>
                <Route exact path="/Home" component={HomeSwitch} />

                <Route exact path="/GoOutside" component={GoOutsideSwitch} />
                <Route exact path="/FapInApartment" component={FapInApartmentSwitch} />
                <Route exact path="/SleepAtHome" component={SleepAtHomeSwitch} />
                
                <Route exact path="/LacBraQHelpSandyOpenDoor" component={LacBraQHelpSandyOpenDoorSwitch} />
                <Route exact path="/LacBraQAmyMovingIn" component={LacBraQAmyMovingInSwitch} />
                
                <Route exact path="/GameMap" component={GoToAppJs} />
                <Route exact path="/Farm" component={GoToFarm} />
                <Route exact path="/TheBarn" component={GoToFarm} />
                <Route exact path="/TheFarmStore" component={GoToFarm} />
                <Route exact path="/MilkCowsAtFarm" component={GoToFarm} />

                <Route exact path="/SandyApartment" component={GoToSandyApartment} />
                <Route exact path="/AmyApartment" component={GoToAmyApartment} />
                

                <Redirect to="/Home" />
                </Switch>
            </div>
        </Router>
        )
    }
export default Apartment;