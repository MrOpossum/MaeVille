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
import TransfromationHistory from "./Apartment/transformationHistory";
import TheStore from "./City/TheStore";
import TheFurForest from "./TheFurForest/TheFurForest";
import TheBarOutside from "./TheBar/TheBarOutside";
import TheBar from "./TheBar/TheBar";
import TheHill from "./City/TheHill";
import TheLabOutside from "./TheLab/TheLabOutside";
import TheLab from "./TheLab/TheLab";
import TheGallery from "./TheGallery/TheGallery";
import TheGalleryOutside from "./TheGallery/TheGalleryOutside";

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
import Vergara_Nadia_store_dress_transparent from "../Images/Characters/Maria_NStyles_Vergara/Vergara_Nadia_store_dress_transparent.png";
//Eve
import Evelyn_b7_s1 from "../Images/Characters/Evelyn/Evelyn_b7_s1.png";
import Evelyn_b7_s1_butt_transparent from "../Images/Characters/Evelyn/Evelyn_b7_s1_butt_transparent.png"
import Evelyn_b7_s1_sd1 from "../Images/Characters/Evelyn/Evelyn_b7_s1_sd1.png";
import Evelyn_b7_s1_sd2 from "../Images/Characters/Evelyn/Evelyn_b7_s1_sd2.png";
import Evelyn_b7_s1_sd3 from "../Images/Characters/Evelyn/Evelyn_b7_s1_sd3.png";
import Evelyn_b7_s1_sd4_fuckVideo from "../Images/Characters/Evelyn/Evelyn_b7_s1_sd4_fuckVideo.mp4";
//Amy
import Amy_b4_h2_f1_m2_s1 from "../Images/Characters/Amy/Amy_b4_h2_f1_m2_s1.png";
import Amy_b4_h2_f1_m2_s2 from "../Images/Characters/Amy/Amy_b4_h2_f1_m2_s2.png";
import Amy_b4_h2_f1_m2_s3 from "../Images/Characters/Amy/Amy_b4_h2_f1_m2_s3.png";
import Amy_b7_h2_f1_m2_s1 from "../Images/Characters/Amy/Amy_b7_h2_f1_m2_s1.png";
import Amy_b7_h2_f1_m2_s2 from "../Images/Characters/Amy/Amy_b7_h2_f1_m2_s2.png";
import Amy_b7_h2_f1_m2_s3 from "../Images/Characters/Amy/Amy_b7_h2_f1_m2_s3.png";
import Amy_b10_h2_f1_m2_s1 from "../Images/Characters/Amy/Amy_b10_h2_f1_m2_s1.png";
import Amy_b10_h2_f1_m2_s2 from "../Images/Characters/Amy/Amy_b10_h2_f1_m2_s2.png";
import Amy_b10_h2_f1_m2_s3 from "../Images/Characters/Amy/Amy_b10_h2_f1_m2_s3.png";
//Sandy
import Sandy_b1_h2_f1_m2_s1 from "../Images/Characters/Sandy/Sandy_b1_h2_f1_m2_s1.png";
import Sandy_b1_h2_f1_m2_s2 from "../Images/Characters/Sandy/Sandy_b1_h2_f1_m2_s2.png";
import Sandy_b1_h2_f1_m2_s3 from "../Images/Characters/Sandy/Sandy_b1_h2_f1_m2_s3.png";
import Sandy_b6_h2_f1_m2_s1 from "../Images/Characters/Sandy/Sandy_b6_h2_f1_m2_s1.png";
import Sandy_b6_h2_f1_m2_s2 from "../Images/Characters/Sandy/Sandy_b6_h2_f1_m2_s2.png";
import Sandy_b6_h2_f1_m2_s3 from "../Images/Characters/Sandy/Sandy_b6_h2_f1_m2_s3.png";
import Sandy_b8_h2_f1_m2_s1 from "../Images/Characters/Sandy/Sandy_b8_h2_f1_m2_s1.png";
import Sandy_b8_h2_f1_m2_s2 from "../Images/Characters/Sandy/Sandy_b8_h2_f1_m2_s2.png";
import Sandy_b8_h2_f1_m2_s3 from "../Images/Characters/Sandy/Sandy_b8_h2_f1_m2_s3.png";

//Maddy
import MaddyBusiness_transparent_b_1 from "../Images/Characters/Maddeline/MaddyBusiness_transparent_b_1.png";
import Maddy_S4_H4_t from "../Images/Characters/Maddeline/Maddy_S4_H4_t.png";


//Images

const Apartment = ( props ) => {
  
  var characterImageHeight = "500px";
  var characterImageWidth = "23vw";
  if(window.screen.width < 600){
    characterImageWidth = "45vw";
  } else if(window.screen.width < 1280){
    characterImageWidth = "35vw";
  }


  //The base image
  var SandyImage = anri_emily_white_dress_transparent;
  var SandyImageNaked = anri_emily_NakedStanding_transparent;

  var AmyImage = P_g_whiteTop_frontView_Transparent;
  var AmyImageNaked = P_g_Naked_smile_1_transparent;

  var MariaImage = Vergara_Nadia_store_dress_transparent;

  var EveImage =Evelyn_b7_s1;
  var EveImageButt = Evelyn_b7_s1_butt_transparent;
  var EveImageS1 = Evelyn_b7_s1_sd1;
  var EveImageS2 = Evelyn_b7_s1_sd2;
  var EveImageS3 = Evelyn_b7_s1_sd3;
  var fuckingEveVideo_s4 = Evelyn_b7_s1_sd4_fuckVideo; //Note the video changes if you are woman. Add later ofc
  
  var MaddyImage = MaddyBusiness_transparent_b_1;
  
  //Eve
  if(props.charactersStats.Eve.breast === 1){
  
  } else{
    EveImage = Evelyn_b7_s1;
    EveImageS1 = Evelyn_b7_s1_sd1;
    EveImageS2 = Evelyn_b7_s1_sd2;
    EveImageS3 = Evelyn_b7_s1_sd3;
    fuckingEveVideo_s4 = Evelyn_b7_s1_sd4_fuckVideo;
  }

  //Sandy
  var SandyImageS1;
  var SandyImageS2;
  var SandyImageS3;

  if(props.charactersStats.Sandy.breast <= 3){
      SandyImage = anri_emily_white_dress_transparent;
      SandyImageNaked = anri_emily_NakedStanding_transparent;
      SandyImageS1 = Sandy_b1_h2_f1_m2_s1;
      SandyImageS2 = Sandy_b1_h2_f1_m2_s2;
      SandyImageS3 = Sandy_b1_h2_f1_m2_s3;

  } else if(props.charactersStats.Sandy.breast <= 6){
      SandyImage = AnriRhoadesBlueCowgirlBikini_transparent;    
      SandyImageS1 = Sandy_b6_h2_f1_m2_s1;
      SandyImageS2 = Sandy_b6_h2_f1_m2_s2;
      SandyImageS3 = Sandy_b6_h2_f1_m2_s3;
      SandyImageNaked = Sandy_b6_h2_f1_m2_s3;

  } else {
      SandyImage = Sandy_b8_h2_f1_m2_s1;  
      SandyImageNaked = Sandy_b8_h2_f1_m2_s3;  
      SandyImageS1 = Sandy_b8_h2_f1_m2_s1;
      SandyImageS2 = Sandy_b8_h2_f1_m2_s2;
      SandyImageS3 = Sandy_b8_h2_f1_m2_s3;
  }


  //Amy
  var AmyImageS1;
  var AmyImageS2;
  var AmyImageS3;
  if(props.charactersStats.Amy.breast <= 3){
    //Pass
  } else if(props.charactersStats.Amy.breast <= 6){
    AmyImage = P_g_whiteTop_frontView_Transparent;
    AmyImageNaked = P_g_Naked_smile_1_transparent;
    var AmyImageFight = AmyImage;
    var AmyImageFight1 = P_g_Naked_smile_1_transparent_fight_1;
    var AmyImageFight2 = P_g_Naked_smile_1_transparent_fight_2;
    var AmyImageFight3 = P_g_Naked_smile_1_transparent_fight_3;
    var AmyImageFight4 = P_g_Naked_smile_1_transparent_fight_4;
    AmyImageS1 = Amy_b4_h2_f1_m2_s1;
    AmyImageS2 = Amy_b4_h2_f1_m2_s2;
    AmyImageS3 = Amy_b4_h2_f1_m2_s3;

    if(props.flags.includes("Amy_College")){
      AmyImage = Palin_gotti_School_1_transparent;
      AmyImageNaked = Palin_gotti_School_2_transparent;
      var AmyImageNaked_2_down = Palin_gotti_School_3_transparent;
    }
  } else if(props.charactersStats.Amy.breast <= 9){
      AmyImage = Amy_b7_h2_f1_m2_s1;  
      AmyImageNaked = Amy_b7_h2_f1_m2_s3;  
      AmyImageS1 = Amy_b7_h2_f1_m2_s1;
      AmyImageS2 = Amy_b7_h2_f1_m2_s2;
      AmyImageS3 = Amy_b7_h2_f1_m2_s3;
  } else {
    AmyImage = Amy_b10_h2_f1_m2_s1;  
    AmyImageNaked = Amy_b10_h2_f1_m2_s3;  
    AmyImageS1 = Amy_b10_h2_f1_m2_s1;
    AmyImageS2 = Amy_b10_h2_f1_m2_s2;
    AmyImageS3 = Amy_b10_h2_f1_m2_s3;
  }



  //Maddy
  if(props.charactersStats.Maddy.breast <= 3 && props.charactersStats.Maddy.heigth < 4 && props.charactersStats.Maddy.muscle < 4){
    MaddyImage = MaddyBusiness_transparent_b_1;
  }else if(props.charactersStats.Maddy.breast < 4 && props.charactersStats.Maddy.heigth >= 4 && props.charactersStats.Maddy.muscle >= 4){
    MaddyImage = Maddy_S4_H4_t;
  }



  var DrugStealthModifier = 1;

  var standardButtonWidth = "300px";
  var col2Height = "500px"; //make sure it's the same as col2

  if(props.flags.includes("ResearchApplicationII")){
    DrugStealthModifier = 1.5;
  } else if(props.flags.includes("ResearchApplicationIII")){
    DrugStealthModifier = 3;
  }



    let HomeSwitch = () => {
        return (
          <Home
          money = {props.money}
          standardButtonWidth = {standardButtonWidth}
          col2Height = {col2Height}
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
          onSetItem = {props.onSetItem}

          characterImageHeight = {characterImageHeight}
          characterImageWidth   = {characterImageWidth}
          onSetCharacterStats = {props.onSetCharacterStats}
          charactersStats = {props.charactersStats}       
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
          EveImage = {EveImage}
          EveImageButt = {EveImageButt}
          EveImageS1 = {EveImageS1}
          EveImageS2 = {EveImageS2}
          EveImageS3 = {EveImageS3}

          AmyImageS1 = {AmyImageS1}
          AmyImageS2 = {AmyImageS2}
          AmyImageS3 = {AmyImageS3}
          SandyImageS1 = {SandyImageS1}
          SandyImageS2 = {SandyImageS2}
          SandyImageS3 = {SandyImageS3}       
          fuckingEveVideo_s4 = {fuckingEveVideo_s4}
          DrugStealthModifier = {DrugStealthModifier}
          ></Home>
        );
      };

    let FapInApartmentSwitch = () =>{
        return(
            <FapInApartment
              onAddMinutes = {props.onAddMinutes}
              money = {props.money}
          standardButtonWidth = {standardButtonWidth}
          col2Height = {col2Height}
              energy = {props.energy}
              date = {props.date}
            />
        )
    } 

    let GoOutsideSwitch = () => {
        return (
          <GoOutside
          money = {props.money}
          standardButtonWidth = {standardButtonWidth}
          col2Height = {col2Height}
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
          onSetCharacterStats = {props.onSetCharacterStats}
          charactersStats = {props.charactersStats}  
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
          EveImage = {EveImage}
          EveImageButt = {EveImageButt}
          EveImageS1 = {EveImageS1}
          EveImageS2 = {EveImageS2}
          EveImageS3 = {EveImageS3}
          AmyImageS1 = {AmyImageS1}
          AmyImageS2 = {AmyImageS2}
          AmyImageS3 = {AmyImageS3}
          SandyImageS1 = {SandyImageS1}
          SandyImageS2 = {SandyImageS2}
          SandyImageS3 = {SandyImageS3}  
          fuckingEveVideo_s4 = {fuckingEveVideo_s4}
          DrugStealthModifier = {DrugStealthModifier}
          ></GoOutside>
        );
      };
      

      let LacBraQHelpSandyOpenDoorSwitch = () =>{
        return (
          <LacBraQHelpSandyOpenDoor
          money = {props.money}
          standardButtonWidth = {standardButtonWidth}
          col2Height = {col2Height}
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
          standardButtonWidth = {standardButtonWidth}
          col2Height = {col2Height}
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
          standardButtonWidth = {standardButtonWidth}
          col2Height = {col2Height}
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
          standardButtonWidth = {standardButtonWidth}
          col2Height = {col2Height}
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
          physical = {props.physical}

          characterImageHeight = {characterImageHeight}
          characterImageWidth   = {characterImageWidth}
          onSetCharacterStats = {props.onSetCharacterStats}
          charactersStats = {props.charactersStats}  
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
          EveImage = {EveImage}
          EveImageButt = {EveImageButt}
          EveImageS1 = {EveImageS1}
          EveImageS2 = {EveImageS2}
          EveImageS3 = {EveImageS3}
          AmyImageS1 = {AmyImageS1}
          AmyImageS2 = {AmyImageS2}
          AmyImageS3 = {AmyImageS3}
          SandyImageS1 = {SandyImageS1}
          SandyImageS2 = {SandyImageS2}
          SandyImageS3 = {SandyImageS3}  
          fuckingEveVideo_s4 = {fuckingEveVideo_s4}
          DrugStealthModifier = {DrugStealthModifier}
          >


        </SandyApartment>
      )
    }

    let GoToAmyApartment = () =>{
      return(
        <AmyApartment
          money = {props.money}
          standardButtonWidth = {standardButtonWidth}
          col2Height = {col2Height}
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
          onSetCharacterStats = {props.onSetCharacterStats}
          charactersStats = {props.charactersStats}  
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
          EveImage = {EveImage}
          EveImageButt = {EveImageButt}
          EveImageS1 = {EveImageS1}
          EveImageS2 = {EveImageS2}
          EveImageS3 = {EveImageS3}
          AmyImageS1 = {AmyImageS1}
          AmyImageS2 = {AmyImageS2}
          AmyImageS3 = {AmyImageS3}
          SandyImageS1 = {SandyImageS1}
          SandyImageS2 = {SandyImageS2}
          SandyImageS3 = {SandyImageS3}  
          fuckingEveVideo_s4 = {fuckingEveVideo_s4}
          DrugStealthModifier = {DrugStealthModifier}
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
          standardButtonWidth = {standardButtonWidth}
          col2Height = {col2Height}
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
          onSetCharacterStats = {props.onSetCharacterStats}
          charactersStats = {props.charactersStats}  
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
          EveImage = {EveImage}
          EveImageButt = {EveImageButt}
          EveImageS1 = {EveImageS1}
          EveImageS2 = {EveImageS2}
          EveImageS3 = {EveImageS3}
          AmyImageS1 = {AmyImageS1}
          AmyImageS2 = {AmyImageS2}
          AmyImageS3 = {AmyImageS3}
          SandyImageS1 = {SandyImageS1}
          SandyImageS2 = {SandyImageS2}
          SandyImageS3 = {SandyImageS3}  
          fuckingEveVideo_s4 = {fuckingEveVideo_s4}
          DrugStealthModifier = {DrugStealthModifier}
          ></Barn>
          </>
        ); 
    }

    let MilkCowsAtFarmSwitch = () =>{
      return (
          <>
          <MilkCowsAtFarm
          money = {props.money}
          standardButtonWidth = {standardButtonWidth}
          col2Height = {col2Height}
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
          onSetCharacterStats = {props.onSetCharacterStats}
          charactersStats = {props.charactersStats}  
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
          EveImage = {EveImage}
          EveImageButt = {EveImageButt}
          EveImageS1 = {EveImageS1}
          EveImageS2 = {EveImageS2}
          EveImageS3 = {EveImageS3}
          AmyImageS1 = {AmyImageS1}
          AmyImageS2 = {AmyImageS2}
          AmyImageS3 = {AmyImageS3}
          SandyImageS1 = {SandyImageS1}
          SandyImageS2 = {SandyImageS2}
          SandyImageS3 = {SandyImageS3}  
          fuckingEveVideo_s4 = {fuckingEveVideo_s4}
          DrugStealthModifier = {DrugStealthModifier}
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
          standardButtonWidth = {standardButtonWidth}
          col2Height = {col2Height}
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
          onAddMoney = {props.onAddMoney}

          characterImageHeight = {characterImageHeight}
          characterImageWidth   = {characterImageWidth}
          onSetCharacterStats = {props.onSetCharacterStats}
          charactersStats = {props.charactersStats}  
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
          EveImage = {EveImage}
          EveImageButt = {EveImageButt}
          EveImageS1 = {EveImageS1}
          EveImageS2 = {EveImageS2}
          EveImageS3 = {EveImageS3}
          AmyImageS1 = {AmyImageS1}
          AmyImageS2 = {AmyImageS2}
          AmyImageS3 = {AmyImageS3}
          SandyImageS1 = {SandyImageS1}
          SandyImageS2 = {SandyImageS2}
          SandyImageS3 = {SandyImageS3}  
          fuckingEveVideo_s4 = {fuckingEveVideo_s4}
          DrugStealthModifier = {DrugStealthModifier}
          ></TheFarmStore>
          </>
        ); 
    }  

    let GoToTransfromationHistory = () => {
      return (
        <TransfromationHistory
        money = {props.money}
          standardButtonWidth = {standardButtonWidth}
          col2Height = {col2Height}
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
          onSetCharacterStats = {props.onSetCharacterStats}
          charactersStats = {props.charactersStats}  
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
        EveImageS1 = {EveImageS1}
          EveImageS2 = {EveImageS2}
          EveImageS3 = {EveImageS3}
          AmyImageS1 = {AmyImageS1}
          AmyImageS2 = {AmyImageS2}
          AmyImageS3 = {AmyImageS3}
          SandyImageS1 = {SandyImageS1}
          SandyImageS2 = {SandyImageS2}
          SandyImageS3 = {SandyImageS3}  
          fuckingEveVideo_s4 = {fuckingEveVideo_s4}
          DrugStealthModifier = {DrugStealthModifier}
        ></TransfromationHistory>
      );
    };

    let GoToTheStore = () => {
      return (
        <TheStore
        money = {props.money}
          standardButtonWidth = {standardButtonWidth}
          col2Height = {col2Height}
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
          onSetCharacterStats = {props.onSetCharacterStats}
          charactersStats = {props.charactersStats}  
          onAddMoney = {props.onAddMoney}
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
        MariaImage = {MariaImage}
        EveImageS1 = {EveImageS1}
          EveImageS2 = {EveImageS2}
          EveImageS3 = {EveImageS3}
          AmyImageS1 = {AmyImageS1}
          AmyImageS2 = {AmyImageS2}
          AmyImageS3 = {AmyImageS3}
          SandyImageS1 = {SandyImageS1}
          SandyImageS2 = {SandyImageS2}
          SandyImageS3 = {SandyImageS3}  
          fuckingEveVideo_s4 = {fuckingEveVideo_s4}
          DrugStealthModifier = {DrugStealthModifier}
        ></TheStore>
      );
    };

    

    let GoToTheFurForest = () => {
      return (
        <TheFurForest
        money = {props.money}
        standardButtonWidth = {standardButtonWidth}
        col2Height = {col2Height}
        onAddMoney = {props.onAddMoney}
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
        physical = {props.physical}
        Sandy = {props.Sandy}
        name = {props.name}
        

        characterImageHeight = {characterImageHeight}
        characterImageWidth   = {characterImageWidth}
        onSetCharacterStats = {props.onSetCharacterStats}
        charactersStats = {props.charactersStats}  
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
        MariaImage = {MariaImage}
        EveImage = {EveImage}
        EveImageButt = {EveImageButt}
        MaddyImage = {MaddyImage}
        EveImageS1 = {EveImageS1}
        EveImageS2 = {EveImageS2}
        EveImageS3 = {EveImageS3}
          AmyImageS1 = {AmyImageS1}
          AmyImageS2 = {AmyImageS2}
          AmyImageS3 = {AmyImageS3}
          SandyImageS1 = {SandyImageS1}
          SandyImageS2 = {SandyImageS2}
          SandyImageS3 = {SandyImageS3}  
        fuckingEveVideo_s4 = {fuckingEveVideo_s4}
        DrugStealthModifier = {DrugStealthModifier}
        ></TheFurForest>
      );
    };

    
    let GoToTheBarOutside = () =>{
      return (
        <TheBarOutside
        money = {props.money}
          standardButtonWidth = {standardButtonWidth}
          col2Height = {col2Height}
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
        physical = {props.physical}
        Sandy = {props.Sandy}
        attractiveness = {props.attractiveness}
        onAddMoney = {props.onAddMoney}
        name = {props.name}

        characterImageHeight = {characterImageHeight}
        characterImageWidth   = {characterImageWidth}
          onSetCharacterStats = {props.onSetCharacterStats}
          charactersStats = {props.charactersStats}  
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
        EveImage = {EveImage}
        EveImageButt = {EveImageButt}
        MariaImage = {MariaImage}
        EveImageS1 = {EveImageS1}
          EveImageS2 = {EveImageS2}
          EveImageS3 = {EveImageS3}
          AmyImageS1 = {AmyImageS1}
          AmyImageS2 = {AmyImageS2}
          AmyImageS3 = {AmyImageS3}
          SandyImageS1 = {SandyImageS1}
          SandyImageS2 = {SandyImageS2}
          SandyImageS3 = {SandyImageS3}  
          fuckingEveVideo_s4 = {fuckingEveVideo_s4}
          DrugStealthModifier = {DrugStealthModifier}
        ></TheBarOutside>
      );
    };

    let GoToTheBar = () =>{
      return (
        <TheBar
        money = {props.money}
          standardButtonWidth = {standardButtonWidth}
          col2Height = {col2Height}
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
        physical = {props.physical}
        Sandy = {props.Sandy}
        attractiveness = {props.attractiveness}
        onAddMoney = {props.onAddMoney}
        name = {props.name}

        characterImageHeight = {characterImageHeight}
        characterImageWidth   = {characterImageWidth}
          onSetCharacterStats = {props.onSetCharacterStats}
          charactersStats = {props.charactersStats}  
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
        MariaImage = {MariaImage}
        EveImage = {EveImage}
        EveImageButt = {EveImageButt}
        EveImageS1 = {EveImageS1}
          EveImageS2 = {EveImageS2}
          EveImageS3 = {EveImageS3}
          AmyImageS1 = {AmyImageS1}
          AmyImageS2 = {AmyImageS2}
          AmyImageS3 = {AmyImageS3}
          SandyImageS1 = {SandyImageS1}
          SandyImageS2 = {SandyImageS2}
          SandyImageS3 = {SandyImageS3}  
          fuckingEveVideo_s4 = {fuckingEveVideo_s4}
          DrugStealthModifier = {DrugStealthModifier}
        ></TheBar>
      );
    };

    let GoToTheHill = () =>{
      return (
        <TheHill
        money = {props.money}
          standardButtonWidth = {standardButtonWidth}
          col2Height = {col2Height}
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
        physical = {props.physical}
        Sandy = {props.Sandy}
        attractiveness = {props.attractiveness}
        onAddMoney = {props.onAddMoney}
        name = {props.name}
        relations = {props.relations}

        characterImageHeight = {characterImageHeight}
        characterImageWidth   = {characterImageWidth}
          onSetCharacterStats = {props.onSetCharacterStats}
          charactersStats = {props.charactersStats}  
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
        MariaImage = {MariaImage}
        EveImage = {EveImage}
        EveImageButt = {EveImageButt}
        MaddyImage = {MaddyImage}
        EveImageS1 = {EveImageS1}
        EveImageS2 = {EveImageS2}
        EveImageS3 = {EveImageS3}
          AmyImageS1 = {AmyImageS1}
          AmyImageS2 = {AmyImageS2}
          AmyImageS3 = {AmyImageS3}
          SandyImageS1 = {SandyImageS1}
          SandyImageS2 = {SandyImageS2}
          SandyImageS3 = {SandyImageS3}  
        fuckingEveVideo_s4 = {fuckingEveVideo_s4}
          DrugStealthModifier = {DrugStealthModifier}
        ></TheHill>
      );
    };
    let GoToTheLabOutside = () =>{
      return (
        <TheLabOutside
        money = {props.money}
          standardButtonWidth = {standardButtonWidth}
          col2Height = {col2Height}
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
        physical = {props.physical}
        Sandy = {props.Sandy}
        attractiveness = {props.attractiveness}
        onAddMoney = {props.onAddMoney}
        name = {props.name}
        relations = {props.relations}

        characterImageHeight = {characterImageHeight}
        characterImageWidth   = {characterImageWidth}
          onSetCharacterStats = {props.onSetCharacterStats}
          charactersStats = {props.charactersStats}  
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
        MariaImage = {MariaImage}
        EveImage = {EveImage}
        EveImageButt = {EveImageButt}
        MaddyImage = {MaddyImage}
        EveImageS1 = {EveImageS1}
          EveImageS2 = {EveImageS2}
          EveImageS3 = {EveImageS3}
          AmyImageS1 = {AmyImageS1}
          AmyImageS2 = {AmyImageS2}
          AmyImageS3 = {AmyImageS3}
          SandyImageS1 = {SandyImageS1}
          SandyImageS2 = {SandyImageS2}
          SandyImageS3 = {SandyImageS3}  
          fuckingEveVideo_s4 = {fuckingEveVideo_s4}
          DrugStealthModifier = {DrugStealthModifier}
        ></TheLabOutside>
      );
    };
    let GoToTheLab = () =>{
      return (
        <TheLab
        money = {props.money}
          standardButtonWidth = {standardButtonWidth}
          col2Height = {col2Height}
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
        physical = {props.physical}
        Sandy = {props.Sandy}
        attractiveness = {props.attractiveness}
        onAddMoney = {props.onAddMoney}
        name = {props.name}
        relations = {props.relations}
        onSetResearchTime = {props.onSetResearchTime}
        researchTime = {props.researchTime}
        lab = {props.lab}
        onSetLab = {props.onSetLab}

        characterImageHeight = {characterImageHeight}
        characterImageWidth   = {characterImageWidth}
          onSetCharacterStats = {props.onSetCharacterStats}
          charactersStats = {props.charactersStats}  
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
        MariaImage = {MariaImage}
        EveImage = {EveImage}
        EveImageButt = {EveImageButt}
        MaddyImage = {MaddyImage}
        EveImageS1 = {EveImageS1}
        EveImageS2 = {EveImageS2}
        EveImageS3 = {EveImageS3}
          AmyImageS1 = {AmyImageS1}
          AmyImageS2 = {AmyImageS2}
          AmyImageS3 = {AmyImageS3}
          SandyImageS1 = {SandyImageS1}
          SandyImageS2 = {SandyImageS2}
          SandyImageS3 = {SandyImageS3}  
        fuckingEveVideo_s4 = {fuckingEveVideo_s4}
          DrugStealthModifier = {DrugStealthModifier}
        ></TheLab>
      );
    };

    let GoToTheGalleryOutside = () =>{
      return (
        <TheGalleryOutside
        money = {props.money}
          standardButtonWidth = {standardButtonWidth}
          col2Height = {col2Height}
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
        physical = {props.physical}
        Sandy = {props.Sandy}
        attractiveness = {props.attractiveness}
        onAddMoney = {props.onAddMoney}
        name = {props.name}
        relations = {props.relations}
        onSetResearchTime = {props.onSetResearchTime}
        researchTime = {props.researchTime}
        lab = {props.lab}
        onSetLab = {props.onSetLab}

        characterImageHeight = {characterImageHeight}
        characterImageWidth   = {characterImageWidth}
          onSetCharacterStats = {props.onSetCharacterStats}
          charactersStats = {props.charactersStats}  
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
        MariaImage = {MariaImage}
        EveImage = {EveImage}
        EveImageButt = {EveImageButt}
        MaddyImage = {MaddyImage}
        EveImageS1 = {EveImageS1}
        EveImageS2 = {EveImageS2}
        EveImageS3 = {EveImageS3}
          AmyImageS1 = {AmyImageS1}
          AmyImageS2 = {AmyImageS2}
          AmyImageS3 = {AmyImageS3}
          SandyImageS1 = {SandyImageS1}
          SandyImageS2 = {SandyImageS2}
          SandyImageS3 = {SandyImageS3}  
        fuckingEveVideo_s4 = {fuckingEveVideo_s4}
          DrugStealthModifier = {DrugStealthModifier}
        ></TheGalleryOutside>
      );
    };
    
    let GoToTheGallery = () =>{
      return (
        <TheGallery
        money = {props.money}
          standardButtonWidth = {standardButtonWidth}
          col2Height = {col2Height}
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
        physical = {props.physical}
        Sandy = {props.Sandy}
        attractiveness = {props.attractiveness}
        onAddMoney = {props.onAddMoney}
        name = {props.name}
        relations = {props.relations}
        onSetResearchTime = {props.onSetResearchTime}
        researchTime = {props.researchTime}
        lab = {props.lab}
        onSetLab = {props.onSetLab}

        characterImageHeight = {characterImageHeight}
        characterImageWidth   = {characterImageWidth}
          onSetCharacterStats = {props.onSetCharacterStats}
          charactersStats = {props.charactersStats}  
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
        MariaImage = {MariaImage}
        EveImage = {EveImage}
        EveImageButt = {EveImageButt}
        MaddyImage = {MaddyImage}
        EveImageS1 = {EveImageS1}
        EveImageS2 = {EveImageS2}
        EveImageS3 = {EveImageS3}
          AmyImageS1 = {AmyImageS1}
          AmyImageS2 = {AmyImageS2}
          AmyImageS3 = {AmyImageS3}
          SandyImageS1 = {SandyImageS1}
          SandyImageS2 = {SandyImageS2}
          SandyImageS3 = {SandyImageS3}  
        fuckingEveVideo_s4 = {fuckingEveVideo_s4}
          DrugStealthModifier = {DrugStealthModifier}
        ></TheGallery>
      );
    };    

   

    
    

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

                <Route exact path="/TransformationHistory" component={GoToTransfromationHistory} />
                <Route exact path="/TheStore" component={GoToTheStore} />
                <Route exact path="/TheFurForest" component={GoToTheFurForest} />

                <Route exact path="/TheBar" component={GoToTheBar} />
                <Route exact path="/TheBarOutside" component={GoToTheBarOutside} />

                <Route exact path="/TheHill" component={GoToTheHill} />
                
                <Route exact path="/TheLab" component={GoToTheLab} />
                <Route exact path="/TheLabOutside" component={GoToTheLabOutside} />

                <Route exact path="/TheGalleryOutside" component={GoToTheGalleryOutside} />
                <Route exact path="/TheGallery" component={GoToTheGallery} />


                

                <Redirect to="/Home" />
                </Switch>
            </div>
        </Router>
        )
    }
export default Apartment;