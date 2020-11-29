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

import Barn from "./Farm/TheBarn";
import MilkCowsAtFarm from "./Farm/MilkCowsAtFarm";
import TheFarmStore from "./Farm/TheFarmStore";

///Characters
import AnriRhoadesBlueCowgirlBikini_transparent from "../Images/Characters/Anri_Rhoades_2/AnriRhoadesBlueCowgirlBikini_transparent.png";
import anri_emily_white_dress_transparent from "../Images/Characters/Anri-Flat-EM/anri_emily_white_dress_transparent.png";
import P_g_whiteTop_frontView_Transparent from "../Images/Characters/Palin-gotti-Mid_amy/P_g_whiteTop_frontView_Transparent.png";
import anri_emily_NakedStanding_transparent from "../Images/Characters/Anri-Flat-EM/anri_emily_NakedStanding_transparent.png";
import P_g_Naked_smile_1_transparent from "../Images/Characters/Palin-gotti-Mid_amy/P_g_Naked_smile_1_transparent.png";
import P_g_Naked_smile_1_transparent_fight_1 from "../Images/Characters/Palin-gotti-Mid_amy/P_g_Naked_smile_1_transparent_fight_1.png";
import P_g_Naked_smile_1_transparent_fight_2 from "../Images/Characters/Palin-gotti-Mid_amy/P_g_Naked_smile_1_transparent_fight_2.png";
import P_g_Naked_smile_1_transparent_fight_3 from "../Images/Characters/Palin-gotti-Mid_amy/P_g_Naked_smile_1_transparent_fight_3.png";
import P_g_Naked_smile_1_transparent_fight_4 from "../Images/Characters/Palin-gotti-Mid_amy/P_g_Naked_smile_1_transparent_fight_4.png";
import Palin_gotti_School_1_transparent from "../Images/Characters/Palin-gotti-Mid_amy/Palin_gotti_School_1_transparent.png";
import Palin_gotti_School_2_transparent from "../Images/Characters/Palin-gotti-Mid_amy/Palin_gotti_School_2_transparent.png";
import Palin_gotti_School_3_transparent from "../Images/Characters/Palin-gotti-Mid_amy/Palin_gotti_School_3_transparent.png";

//Images

const Apartment = ( props ) => {
  
  var characterImageHeight = "70vh";
  var characterImageWidth = "49vw";
  if(window.screen.width < 400){
    characterImageHeight   = "50vh";
  }


  //The base image
  var SandyImage = anri_emily_white_dress_transparent;
  var SandyImageNaked = anri_emily_NakedStanding_transparent;

  var AmyImage = P_g_whiteTop_frontView_Transparent;
  var AmyImageNaked = P_g_Naked_smile_1_transparent;

  if(props.flags.includes("SandyMidBreasts_1")){
      SandyImage = AnriRhoadesBlueCowgirlBikini_transparent;
  } else{
      SandyImage = anri_emily_white_dress_transparent;
      SandyImageNaked = anri_emily_NakedStanding_transparent;
  }

  if(props.flags.includes("AmyLargeBreasts_1")){
      AmyImage = ""
  } else if(props.flags.includes("Amy_College")){
      AmyImage = Palin_gotti_School_1_transparent;
      AmyImageNaked = Palin_gotti_School_2_transparent;
      var AmyImageNaked_2_down = Palin_gotti_School_3_transparent;

  }
  else{
      AmyImage = P_g_whiteTop_frontView_Transparent
      AmyImageNaked = P_g_Naked_smile_1_transparent
      var AmyImageFight = AmyImage
      var AmyImageFight1 = P_g_Naked_smile_1_transparent_fight_1
      var AmyImageFight2 = P_g_Naked_smile_1_transparent_fight_2
      var AmyImageFight3 = P_g_Naked_smile_1_transparent_fight_3
      var AmyImageFight4 = P_g_Naked_smile_1_transparent_fight_4
  }



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

          characterImageHeight = {characterImageHeight}
          characterImageWidth   = {characterImageWidth}
          SandyImage = {SandyImage}
          SandyImageNaked = {SandyImageNaked}
          AmyImage = {AmyImage}
          AmyImageNaked = {AmyImageNaked}
          AmyImageNaked_2_down = {AmyImageNaked_2_down}
          AmyImageFight = {AmyImageFight}
          AmyImageFight1 = {AmyImageFight1}
          AmyImageFight2 = {AmyImageFight2}
          AmyImageFight3 = {AmyImageFight3}
          AmyImageFight4 = {AmyImageFight4}
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

          characterImageHeight = {characterImageHeight}
          characterImageWidth   = {characterImageWidth}
          SandyImage = {SandyImage}
          SandyImageNaked = {SandyImageNaked}
          AmyImage = {AmyImage}
          AmyImageNaked = {AmyImageNaked}
          AmyImageNaked_2_down = {AmyImageNaked_2_down}
          AmyImageFight = {AmyImageFight}
          AmyImageFight1 = {AmyImageFight1}
          AmyImageFight2 = {AmyImageFight2}
          AmyImageFight3 = {AmyImageFight3}
          AmyImageFight4 = {AmyImageFight4}
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
          Amy = {props.Amy}
          Sandy = {props.Sandy}

          characterImageHeight = {characterImageHeight}
          characterImageWidth   = {characterImageWidth}
          SandyImage = {SandyImage}
          SandyImageNaked = {SandyImageNaked}
          AmyImage = {AmyImage}
          AmyImageNaked = {AmyImageNaked}
          AmyImageNaked_2_down = {AmyImageNaked_2_down}
          AmyImageFight = {AmyImageFight}
          AmyImageFight1 = {AmyImageFight1}
          AmyImageFight2 = {AmyImageFight2}
          AmyImageFight3 = {AmyImageFight3}
          AmyImageFight4 = {AmyImageFight4}
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


          characterImageHeight = {characterImageHeight}
          characterImageWidth   = {characterImageWidth}
          SandyImage = {SandyImage}
          SandyImageNaked = {SandyImageNaked}
          AmyImage = {AmyImage}
          AmyImageNaked = {AmyImageNaked}
          AmyImageNaked_2_down = {AmyImageNaked_2_down}
          AmyImageFight = {AmyImageFight}
          AmyImageFight1 = {AmyImageFight1}
          AmyImageFight2 = {AmyImageFight2}
          AmyImageFight3 = {AmyImageFight3}
          AmyImageFight4 = {AmyImageFight4}
          >


        </AmyApartment>
      )
    }

    /////////////FARM:


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

          characterImageHeight = {characterImageHeight}
          characterImageWidth   = {characterImageWidth}
          SandyImage = {SandyImage}
          SandyImageNaked = {SandyImageNaked}
          AmyImage = {AmyImage}
          AmyImageNaked = {AmyImageNaked}
          AmyImageNaked_2_down = {AmyImageNaked_2_down}
          AmyImageFight = {AmyImageFight}
          AmyImageFight1 = {AmyImageFight1}
          AmyImageFight2 = {AmyImageFight2}
          AmyImageFight3 = {AmyImageFight3}
          AmyImageFight4 = {AmyImageFight4}
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


          characterImageHeight = {characterImageHeight}
          characterImageWidth   = {characterImageWidth}
          SandyImage = {SandyImage}
          SandyImageNaked = {SandyImageNaked}
          AmyImage = {AmyImage}
          AmyImageNaked = {AmyImageNaked}
          AmyImageNaked_2_down = {AmyImageNaked_2_down}
          AmyImageFight = {AmyImageFight}
          AmyImageFight1 = {AmyImageFight1}
          AmyImageFight2 = {AmyImageFight2}
          AmyImageFight3 = {AmyImageFight3}
          AmyImageFight4 = {AmyImageFight4}
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

          characterImageHeight = {characterImageHeight}
          characterImageWidth   = {characterImageWidth}
          SandyImage = {SandyImage}
          SandyImageNaked = {SandyImageNaked}
          AmyImage = {AmyImage}
          AmyImageNaked = {AmyImageNaked}
          AmyImageNaked_2_down = {AmyImageNaked_2_down}
          AmyImageFight = {AmyImageFight}
          AmyImageFight1 = {AmyImageFight1}
          AmyImageFight2 = {AmyImageFight2}
          AmyImageFight3 = {AmyImageFight3}
          AmyImageFight4 = {AmyImageFight4}
          ></TheFarmStore>
          </>
        ); 
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

                <Route exact path="/TheBarn" component={TheBarnSwitch} />
                <Route exact path="/TheFarmStore" component={TheFarmStoreSwitch} />
                <Route exact path="/MilkCowsAtFarm" component={MilkCowsAtFarmSwitch} />
                <Route exact path="/SleepAtHome" component={ApartementSwitchToSleepAtHome} />

                <Route exact path="/SandyApartment" component={GoToSandyApartment} />
                <Route exact path="/AmyApartment" component={GoToAmyApartment} />
                

                <Redirect to="/Home" />
                </Switch>
            </div>
        </Router>
        )
    }
export default Apartment;