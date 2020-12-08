import React from "react";
import { Link } from "react-router-dom";

import Col1 from "../../components/col1";
import Col2 from "../../components/col2";
import Col3 from "../../components/col3";
import SetCol1 from "../../components/SetCol1";

//Images

import AmyLivingRoom from "../../Images/AmyApartment/AmyLivingRoom.jpg";
import AmyLivingRoom_withAmy_whiteTop from "../../Images/AmyApartment/AmyLivingRoom_withAmy_whiteTop.png";
import SandyAndAmyInAmyApartment_KitchenImageTopAndWhiteTop from "../../Images/AmyApartment/SandyAndAmyInAmyApartment_KitchenImageTopAndWhiteTop.png";
import ButtonBurstingFromShirtNippyBleakAtlanticridleyturtlemobileCROPPEDONLYTOP from "../../Images/AmyApartment/Scenes/ButtonBurstingFromShirt-NippyBleakAtlanticridleyturtle-mobile-CROPPEDONLYTOP.mp4";
import TwoLesbosSuckThirdLesboMilk_CUTSHORT from "../../Images/AmyApartment/Scenes/TwoLesbosSuckThirdLesboMilk_CUTSHORT.mp4";
import ApartmentHallway from "../../Images/Apartment/ApartmentHallway.jpg";

//LACBRAQ
import MastasiaMassiveBoobsAmyDidNotResistCut from "../../Images/AmyApartment/Scenes/LACBRAQ/MastasiaMassiveBoobsAmyDidNotResistCut.mp4";
import LACBRAQSandySucksAmyBreast_amyapmt from "../../Images/AmyApartment/Scenes/LACBRAQ/LACBRAQSandySucksAmyBreast_amyapmt.mp4"
import LACBRAQAmyGivesYouBJAmyApmt from "../../Images/AmyApartment/Scenes/LACBRAQ/LACBRAQAmyGivesYouBJAmyApmt.mp4";
import LACBRAQSandyStartsFillingUp from "../../Images/AmyApartment/Scenes/LACBRAQ/LACBRAQSandyStartsFillingUp.mp4";
import LACBRAQBurstingOutOfShirtFatishWoman from "../../Images/AmyApartment/Scenes/LACBRAQ/LACBRAQBurstingOutOfShirtFatishWoman.mp4";
import LACBRAQSandyBreastGrowthInAmyApmtAndMilkManuu from "../../Images/AmyApartment/Scenes/LACBRAQ/LACBRAQSandyBreastGrowthInAmyApmtAndMilkManuu.mp4";
import LACBRAQYouSuckSandysBreastsFullOfMilk from "../../Images/AmyApartment/Scenes/LACBRAQ/LACBRAQYouSuckSandysBreastsFullOfMilk.mp4";
import LACBRAQSandyEngorgedBreastsWontDrinkMilk from "../../Images/AmyApartment/Scenes/LACBRAQ/LACBRAQSandyEngorgedBreastsWontDrinkMilk.jpg";
////SANTMQ
import SANTQAmyFuckedSchoolgirlUniform from "../../Images/AmyApartment/Scenes/SANTMQ/SANTQAmyFuckedSchoolgirlUniform.mp4";


let diceRollCount = 0;
let currentDiceRoll = 0;
let stateOfFight = 0;

const AmyApartment = (props) => {

  //Se reinicia cada vez que se refreshea
  //Use redux. A simple currentDiceRoll will sufice.

  function normal_distribution() {
    let u = 0, v = 0;
    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) return normal_distribution(); // resample between 0 and 1
    return num;
  } 
  
  
  
  
  if (props.flags.includes("LACBRAQGoToAmyApartment")) {
    let UnbuttonShirt = () => {
      props.onSpliceFlag("LACBRAQGoToAmyApartment");
      props.onPushFlag("LACBRAQSandyComesIn");
      props.onChangeRelationship("Amy", 3);
      props.onAddMinutes(10);
    };
    let RefuseToUnbuttonShirt = () => {
      props.onSpliceFlag("LACBRAQGoToAmyApartment");
      props.onPushFlag("LACBRAQRefuseUnbuttonedShirtOnAmysCommand");
      props.onChangeRelationship("Amy", -3);
      props.onAddMinutes(10);
    };

    return (
      <>
        <Col1>
          <SetCol1 />
        </Col1>
        <Col2 BackImage={AmyLivingRoom_withAmy_whiteTop}></Col2>

        <Col3>
          <p>
            *Sigh* "{props.name}. Magic made you change. Somehow Sandy lost that
            bracelet and you took it." Amy opens her apartment and you both go
            in.
          </p>
          <p>
            "I'll make this quick. Listen carefully:
            <ul>
              <li>
                Number 1. Magic exists. And now that you interacted with it, it
                will never leave you alone.
              </li>
              <li>
                Number 2. If you are not careful, you will die. Or worse. And
                trust me, there are plenty of things worse than death.
              </li>
              <li>
                Number 3. This building is protected by strong magic, you should
                be safe if you stay inside. But, you can't just live your life
                in your room. That would be boring.
              </li>
              <li>
                Number 4. Unbutton your shirt. I need to suck all the milk from
                your breasts or you'll start growing again."
              </li>
            </ul>
          </p>

          <Link to={"/AmyApartment"} style={{ textDecoration: "none" }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={UnbuttonShirt}
            >
              Unbutton your shirt.
            </button>
          </Link>
          <Link to={"/AmyApartment"} style={{ textDecoration: "none" }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={RefuseToUnbuttonShirt}
            >
              Refuse to unbutton your shirt.
            </button>
          </Link>
        </Col3>
      </>
    );
  } else if (props.flags.includes("LACBRAQRefuseUnbuttonedShirtOnAmysCommand")) {

    let SandyComesIntoTheApartment = () => {
      props.onSpliceFlag("LACBRAQRefuseUnbuttonedShirtOnAmysCommand");
      props.onPushFlag("LACBRAQSandyComesIn");
      props.onChangeRelationship("Amy", -3);
      props.onAddMinutes(10);
    };

    return (
      <>
        <Col1>
          <SetCol1 />
        </Col1>
        <Col2 BackImage = {" "}
                    rowHeight = {" "}
            >
            <video autoPlay loop 
            style ={{width: "100%", height: props.col2Height, objectFit: "cover"}}>
                <source src={ButtonBurstingFromShirtNippyBleakAtlanticridleyturtlemobileCROPPEDONLYTOP} type="video/mp4"/>
            </video>
            </Col2>   

        <Col3>
          <p> "{props.name} I do not have the time for games." Amy is losing her patience. You feel how your body moves by itself and starts exposing your breasts.</p>
          <p>"You are in my property. And you know no magic. You will do what I command" Explains Amy.</p>

          <Link to={"/AmyApartment"} style={{ textDecoration: "none" }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={SandyComesIntoTheApartment}
            >
              You hear some noise outside.
            </button>
          </Link>
        </Col3>
      </>
    );
  } else if (props.flags.includes("LACBRAQSandyComesIn")) {
    let AmyAndSandyDrainYou = () => {
        props.onSpliceFlag("LACBRAQSandyComesIn");
        props.onPushFlag("LACBRAQAmyAndSandyStartToDrainYou");
        props.onChangeRelationship("Sandy", 2);
        props.onAddMinutes(10);
      };
  
      return (
        <>
          <Col1>
            <SetCol1 />
          </Col1>
          <Col2 BackImage = {" "}
                    rowHeight = {" "}
            >
            <video autoPlay muted loop 
            style ={{width: "100%", height: props.col2Height, objectFit: "cover"}}>
                <source src={ButtonBurstingFromShirtNippyBleakAtlanticridleyturtlemobileCROPPEDONLYTOP} type="video/mp4"/>
            </video>
            </Col2>    
          <Col3>
            <p>You hear a knock on the door. "Come in Sandy" Says Amy. And you see Sandy coming in. </p>
            <p>You can't even see Sandys reaction. Amy grabs your face and looks you in the eyes. "Don't enjoy this." She says.</p>
            <p>"Sandy he is YOUR responsibility after this. You'll teach him about magic. If you don't he'll probably die" Sandy nods. You see her face. She is excited, her eyes fixed on your chest. </p>
            <p>You feel a massive erection comming in. And the same feeling from the previous night starts building up on your chest.</p>
            <p>"Hurry up Sandy!" Amy yells.</p>
  
            <Link to={"/AmyApartment"} style={{ textDecoration: "none" }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={AmyAndSandyDrainYou}
              >
                You chest swells.
              </button>
            </Link>
          </Col3>
        </>
      );

  } else if(props.flags.includes("LACBRAQAmyAndSandyStartToDrainYou")){
    let YouHaveBeenDrained = () => {
        props.onSpliceFlag("LACBRAQAmyAndSandyStartToDrainYou");
        props.onPushFlag("LACBRAQAmyAndSandyDrainedYouNowYouLeave");
        props.onAddMinutes(10);
      };
  
      return (
        <>
          <Col1>
            <SetCol1 />
          </Col1>
          <Col2 BackImage = {" "}
                    rowHeight = {" "}
            >
            <video autoPlay loop 
            style ={{width: "100%", height: props.col2Height, objectFit: "cover"}}>
                <source src={TwoLesbosSuckThirdLesboMilk_CUTSHORT} type="video/mp4"/>
            </video>
            </Col2>  
          <Col3>
          <p>Amy places her hand on your chest. Both girls start sucking on your breasts. Kneading your milky mounds. You can feel the pressure building up. And the feeling of their lips makes you shiver. An orgasmic wave flows throug you. And your nipples slowly expand to make way for the flow that's about to discharge."</p>
            <p>You close your eyes and feel whats happening to you. You shake, you are dizzy and can't sand straight. Your senses overload. You are in orgasmic bliss.</p>
  
            <Link to={"/AmyApartment"} style={{ textDecoration: "none" }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={YouHaveBeenDrained}
              >
                You are floating in pleasure.
              </button>
            </Link>
          </Col3>
        </>
      );
  } else if(props.flags.includes("LACBRAQAmyAndSandyDrainedYouNowYouLeave")){
    let GoHomeAfterAmySendsYouHome = () => {
        props.onSpliceFlag("LACBRAQAmyAndSandyDrainedYouNowYouLeave");
        props.onPushFlag("SandyTeachesMagicQuestInHerApartmentPart_1");
        props.onPushFlag("MagicDiscovered");
        props.onAddMinutes(10);
        props.onAddItem("LacBracelet",-1);
        props.onSpliceFlag("WearingLacBracelet");
      };
  
      return (
        <>
          <Col1>
            <SetCol1 />
          </Col1>
          <Col2 BackImage={SandyAndAmyInAmyApartment_KitchenImageTopAndWhiteTop}></Col2>
  
          <Col3>
          <p>"I guess that's it" Amy says. "You did enjoy it... I told you not to." Sandy also has the largest grin on her face. She's giggling.</p>
          <p>"I hope you also enjoy taking care of this guy from now on." Amy remarks. A small grin showing in her face.</p>
          <p>And you all burst laughing. The warmth you feel floods your senses. You are happy.</p>
          <p>You look at your chest. It's back to normal. Sandy looks at you. And the laughter calms down.</p>
            <p>"{props.name}, come at my apartment soon. I'll teach you the basics" Says Sandy. She then strolls out of the aparment.</p>

            <p>"You should leave too. " Amy says.</p>
  
            <Link to={"/Home"} style={{ textDecoration: "none" }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={GoHomeAfterAmySendsYouHome}
              >
                Go home
              </button>
            </Link>
          </Col3>
        </>
      );
  } else if(props.flags.includes("LACBRAQHelpSandyTakeBraceletBackGoToAmyApmt")){
    let LACBRAQKnockOnAmysDoor = () =>{
      props.onAddMinutes(10);
      props.onSpliceFlag("LACBRAQHelpSandyTakeBraceletBackGoToAmyApmt");
      if(Math.random() < .25){ //Amy uses the bracelet.
        props.onPushFlag("LACBRAQAmyDoesNotResistHerselfAndUsesBracelet");
      } else{ //Amy does not use the bracelet.
        props.onPushFlag("LACBRAQAmyResistsHerselfAndDoesNotUseBracelet");
      }
  }


    return(
        <>
        <Col1>
            <SetCol1
            />
        </Col1>
        <Col2 BackImage = {ApartmentHallway}>
            <img alt = {"Not found"} src={props.SandyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img> {/*Should I add Sandy image?*/}
        </Col2>

        <Col3 > 

          <p>Sandy quickly leads you to Amys apartment.</p>
          <p>"Here we are..." - Sandy says, there is a hint of hesitation in her voice. She positions herself just besides the door.</p>
          <p>"She should not see me if I stay here" - Sandy whispers. "Go on..."</p>

            <Link to={"/AmyApartment"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {LACBRAQKnockOnAmysDoor}>Knock on the door</button>
            </Link>  
        </Col3>
        </>
    )
  } else if(props.flags.includes("LACBRAQAmyDoesNotResistHerselfAndUsesBracelet")){
    let LACBRAQGoIntoAmyApartmentSheDidNotResist_1 = () =>{
      props.onAddMinutes(10);
      props.onSpliceFlag("LACBRAQAmyDoesNotResistHerselfAndUsesBracelet");
      props.onPushFlag("LACBRAQGoIntoAmyApartmentSheDidNotResist_1");
    }

    return(
        <>
        <Col1>
            <SetCol1
            />
        </Col1>
        <Col2 BackImage = {ApartmentHallway}></Col2>  

        <Col3 > 

        <p>No one answers. You hear a muffled moan coming from inside the room. Sandy gets closer to the door to listen.
        "ahh~" "yesss~" You hear.</p>
        <p>"Oh may gawd" Sandy says, a huge grin on her face. "She is using ma bracelet!"
        Sandy takes a pebble out of her pocket. "I knew this would be useful" Sandy places the pebble over the knob, and... Nothing happens.</p>
        <p>"JUST COME IN!" Shouts amy from the inside. And the door opens.</p>
                



            

            <Link to={"/AmyApartment"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {LACBRAQGoIntoAmyApartmentSheDidNotResist_1}>Go in</button>
            </Link>  
        </Col3>
        </>
    )
  } else if(props.flags.includes("LACBRAQGoIntoAmyApartmentSheDidNotResist_1")){

    let LACBRAQGoIntoAmyApartmentSheDidNotResist_2 = () =>{
      props.onAddMinutes(10);
      props.onSpliceFlag("LACBRAQGoIntoAmyApartmentSheDidNotResist_1");
      props.onPushFlag("LACBRAQGoIntoAmyApartmentSheDidNotResist_2");
    }

    return(
        <>
        <Col1>
            <SetCol1
            />
        </Col1>
        <Col2 BackImage = {" "}
                    rowHeight = {" "}
            >
            <video autoPlay loop 
            style ={{width: "100%", height: props.col2Height, objectFit: "cover"}} controls>
                <source src={MastasiaMassiveBoobsAmyDidNotResistCut} type="video/mp4"/>
            </video>
            </Col2>  

        <Col3 > 

        <p>You see a woman sporting the largest breasts you had ever seen. She's Amy!</p>
            <p>Amy is lying down in delight. Milk constantly flowing out of her giantic breasts. You see her massaging the massive orbs and the milk flow only gets stronger</p>
            <p>Amy groans and howls. And looks at Sandy</p>
            <p>"I..g-guess the bracelet was yours" Says Amy in between moans.</p>
            <p>Sandy is awestruck. She slowly moves towards Amy. Specifically, towards Amys massive chest. Her eyes fixated onto the large milky mounds. Sandy kneels and caresses Amy chest.</p>
            <p>"Unhgggg... *moan*, *heavy breathing*... I lovee this!" Amy yells.
            You see Amys chest pulsating. The room is filled with a sweet an intoxicating smell of milk. You mind if void of toughts.</p>
                
            <Link to={"/AmyApartment"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {LACBRAQGoIntoAmyApartmentSheDidNotResist_2}>Sandy gets closer</button>
            </Link>  
        </Col3>
        </>
    )
  } else if(props.flags.includes("LACBRAQGoIntoAmyApartmentSheDidNotResist_2")){
    let LACBRAQGoIntoAmyApartmentSheDidNotResist_3 = () =>{
      props.onAddMinutes(10);
      props.onSpliceFlag("LACBRAQGoIntoAmyApartmentSheDidNotResist_2");
      props.onPushFlag("LACBRAQGoIntoAmyApartmentSheDidNotResist_3");
    }

    return(
        <>
        <Col1>
            <SetCol1
            />
        </Col1>
        <Col2 BackImage = {" "}
                    rowHeight = {" "}
            >
            <video autoPlay loop 
            style ={{width: "100%", height: props.col2Height, objectFit: "cover"}} controls>
                <source src={LACBRAQSandySucksAmyBreast_amyapmt} type="video/mp4"/>
            </video>
            </Col2>  

        <Col3 > 


        <p>Sandy latches to Amy's chest. And now Amys breasts are shrinking. Slowly decreasing in size into something manageable.
            Sandy is now in Amys lap, sucking all the milk she can. You relax, and notice the massive erection in your pants. 
            Sandy is in ecstacy. Completely relaxed, orgasming and shivering of pleasure. </p>

            <Link to={"/AmyApartment"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {LACBRAQGoIntoAmyApartmentSheDidNotResist_3}>Amy looks at you. grins, and signals you to get closer.</button>
            </Link>  
        </Col3>
        </>
    )
  }else if(props.flags.includes("LACBRAQGoIntoAmyApartmentSheDidNotResist_3")){
    let LACBRAQGoIntoAmyApartmentSheDidNotResist_4 = () =>{
      props.onAddMinutes(10);
      props.onSpliceFlag("LACBRAQGoIntoAmyApartmentSheDidNotResist_3");
      props.onPushFlag("LACBRAQGoIntoAmyApartmentSheDidNotResist_4");
    }

    return(
        <>
        <Col1>
            <SetCol1
            />
        </Col1>
        <Col2 BackImage = {" "}
                    rowHeight = {" "}
            >
            <video autoPlay loop 
            style ={{width: "100%", height: props.col2Height, objectFit: "cover"}} controls>
                <source src={LACBRAQAmyGivesYouBJAmyApmt} type="video/mp4"/>
            </video>
            </Col2>  

        <Col3 > 

              <p>You erection practically walks itself towards Amy. She unbuttons your pants and starts sucking your dick ravenously. The warmth of her lips is enough to send you over the edge. Spraying cum all over her face.
              "I don't blame you" Amy says. I'm just too good at this.</p>
              <p>Sandy opens her eyes. And hugs Amy. And for a moment, there was silence.
"Sandy" Amy says softly. "You know you should not have this bracelet. This is way stronger than it seems"
 "I guess you are right" Sandy chuckles.</p>
        
              <p>"And... You brought {props.name} into this... You will have to take care of that, you know." Amy sighs.
 Sandy is still dreamy, so Amy turns to you.</p>
 
        

            <Link to={"/AmyApartment"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {LACBRAQGoIntoAmyApartmentSheDidNotResist_4}>Amy talks to you</button>
            </Link>  
        </Col3>
        </>
    )
  }else if(props.flags.includes("LACBRAQGoIntoAmyApartmentSheDidNotResist_4")){
    let LACBRAQAmyTellsYouToLeaveGoHome = () =>{
      props.onAddMinutes(10);
      props.onSpliceFlag("LACBRAQGoIntoAmyApartmentSheDidNotResist_4");
      props.onPushFlag("SandyTeachesMagicQuestInHerApartmentPart_1");
      props.onPushFlag("MagicDiscovered");
      props.onSetItem("LacBracelet",0);
      props.onSpliceFlag("WearingLacBracelet");
      props.onPushFlag("LACBRAQFinished");
    }

    return(
        <>
        <Col1>
            <SetCol1
            />
        </Col1>
        <Col2 BackImage = {AmyLivingRoom}>
          <img alt = {"Not found"} src = {props.SandyImageNaked} style ={{width : props.characterImageWidth, height: props.characterImageHeight}} ></img>
          <img alt = {"Not found"} src = {props.AmyImageNaked} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
        </Col2>  
        <Col3 > 

              <p> "{props.name}. This world is filled with magic, and it's really dangerous. And now that Sandy brought you here you can't leave."
                Amy slowly stands up. Her chest now almost back to normal. </p>

                <p>"You should know that I come from a powerful family, and this building is protected, so as long as you are in here you should be fine." Amy now points at Sandy. "I also don't have the time to teach you. So Sandy will take care of that. Right Sandy?".
                Sandy nods.</p>
          <p>"Now, I have to clean the mess I've made. This place will be smelling like milk all week. You both should leave the aparment now"</p>
 
 
        

            <Link to={"/Home"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {LACBRAQAmyTellsYouToLeaveGoHome}>Go back home</button>
            </Link>  
        </Col3>
        </>
    )
  }
  
  else if(props.flags.includes("LACBRAQAmyResistsHerselfAndDoesNotUseBracelet")){
    let LACBRAQDistractAmyMinigame_1 = () =>{
      props.onAddMinutes(10);
      props.onSpliceFlag("LACBRAQAmyResistsHerselfAndDoesNotUseBracelet");
      props.onPushFlag("LACBRAQDistractAmyMinigame_1");
    }


    return(
        <>
        <Col1>
            <SetCol1
            />
        </Col1>
        <Col2 BackImage = {AmyLivingRoom}>
          <img alt = {"Not found"} src = {props.AmyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
           
        </Col2>  

        <Col3 > 

            <p>Amy opens the door... You realize you are not prepared for this moment. Amys gaze is heavy. And you can feel how quickly she's loosing her patience.</p>
            
          

            <Link to={"/AmyApartment"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {LACBRAQDistractAmyMinigame_1}>Distract amy</button>
            </Link>  
        </Col3>
        </>
    )
    
    
  } else if(props.flags.includes("LACBRAQDistractAmyMinigame_1")){
    
    
    let amyDeception_1 = Math.round(props.Amy["mind"] * normal_distribution()*1.8,0);
    let amyDeception_2 = Math.round(props.Amy["mind"] * normal_distribution()*1.8,0);
    let amyDeception_3 = Math.round(props.Amy["mind"] * normal_distribution()*1.8,0);
    let amyLowestRoll = Math.min(amyDeception_1,amyDeception_2,amyDeception_3);
    

    let LACBRAQRollDice_1 = () =>{
      props.onAddMinutes(10);
      if(diceRollCount < 4){
        currentDiceRoll = Math.round(props.mind * normal_distribution()*2,0)
        diceRollCount += 1
      }
      
      if(currentDiceRoll > amyLowestRoll){
        props.onSpliceFlag("LACBRAQDistractAmyMinigame_1");
        props.onPushFlag("LACBRAQDistractedAmySuccesfully_1");
        props.onChangeRelationship("Amy",1);
        currentDiceRoll = 0;
        diceRollCount = 0;
        
      }
      if(diceRollCount >= 3){ //Did not manage to distract
        if(currentDiceRoll > amyLowestRoll){
          props.onSpliceFlag("LACBRAQDistractAmyMinigame_1");
          props.onPushFlag("LACBRAQDistractedAmySuccesfully_1");
          props.onChangeRelationship("Amy",1);
          currentDiceRoll = 0;
          diceRollCount = 0;
        } else{
          props.onSpliceFlag("LACBRAQDistractAmyMinigame_1");
          props.onPushFlag("LACBRAQDidNotManageToDistractAmy");
          props.onChangeRelationship("Amy",-3);
          currentDiceRoll = 0;
          diceRollCount = 0;
        }
        
      }
    }

    return(
        <>
        <Col1>
            <SetCol1
            />
        </Col1>
        <Col2 BackImage = {AmyLivingRoom}>
           <img alt = {"Not found"} src={props.AmyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
        </Col2>  

        <Col3 > 

            <p>Amy opens the door... You realize you are not prepared for this moment. Amys gaze is heavy. And you can feel how quickly she's loosing her patience.</p>

            <p>You need to distract Amy. Amy is pretty smart. She rolled: {amyDeception_1}, {amyDeception_2}, and {amyDeception_3}. You will roll a dice three times. You need to defeat her lowest roll, {amyLowestRoll}</p>
            <p>You rolled: {currentDiceRoll ? currentDiceRoll: "You have not rolled yet"}</p>
            
          

            <Link to={"/AmyApartment"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {LACBRAQRollDice_1}>{currentDiceRoll > amyLowestRoll ? "Victory":"Roll deception"}</button>
            </Link>  
        </Col3>
        </>
    )
  } else if(props.flags.includes("LACBRAQDistractedAmySuccesfully_1")){
    let amyDeception_1 = Math.round(props.Amy["mind"] * normal_distribution()*1.8,0);
    let amyDeception_2 = Math.round(props.Amy["mind"] * normal_distribution()*1.8,0);
    let amyDeception_3 = Math.round(props.Amy["mind"] * normal_distribution()*1.8,0);
    let amyLowestRoll = Math.min(amyDeception_1,amyDeception_2,amyDeception_3);
    

    let LACBRAQRollDice_2 = () =>{
      props.onAddMinutes(10);
      if(diceRollCount < 4){
        currentDiceRoll = Math.round(props.mind * normal_distribution()*2,0);
        diceRollCount += 1;
      }
      
      if(currentDiceRoll > amyLowestRoll){
        props.onSpliceFlag("LACBRAQDistractedAmySuccesfully_1");
        props.onPushFlag("LACBRAQDistractedAmySuccesfully_2");
        props.onChangeRelationship("Amy",3);
        currentDiceRoll = 0;
        diceRollCount = 0;
        
      }
      if(diceRollCount >= 3){ //Did not manage to distract
        if(currentDiceRoll > amyLowestRoll){
          props.onSpliceFlag("LACBRAQDistractedAmySuccesfully_1");
          props.onPushFlag("LACBRAQDistractedAmySuccesfully_2");
          props.onChangeRelationship("Amy",3);
          currentDiceRoll = 0;
          diceRollCount = 0;
        } else{
          props.onSpliceFlag("LACBRAQDistractedAmySuccesfully_1");
          props.onPushFlag("LACBRAQDidNotManageToDistractAmy");
          props.onChangeRelationship("Amy",-3);
          currentDiceRoll = 0;
          diceRollCount = 0;
        }
        
      }
    }

    return(
        <>
        <Col1>
            <SetCol1
            />
        </Col1>
        <Col2 BackImage = {AmyLivingRoom}>
          <img alt = {"Not found"} src = {props.AmyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
           
        </Col2>  

        <Col3 > 

                <p>Sandy sneaks into Amy's aparment. You managed to strike a decent conversation about Tennis with Amy.
                    In the corner of your eye you see Sandy, she is looking everywhere for her bracelet but she can't seem to find it anywhere.
                    You are running out things to say. Amy is getting suspicious.</p>

            <p>You need to distract Amy. Amy is pretty smart. She rolled: {amyDeception_1}, {amyDeception_2}, and {amyDeception_3}. You will roll a dice three times. You need to defeat her lowest roll, {amyLowestRoll}</p>
            <p>You rolled: {currentDiceRoll ? currentDiceRoll: "You have not rolled yet"}</p>
            
          

            <Link to={"/AmyApartment"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {LACBRAQRollDice_2}>{currentDiceRoll > amyLowestRoll ? "Victory":"Roll deception"}</button>
            </Link>  
        </Col3>
        </>
    )
  } else if(props.flags.includes("LACBRAQDistractedAmySuccesfully_2")){
    let LACBRAQAmyComesBackWithBottleOfMilk = () =>{
      props.onAddMinutes(10);
      props.onSpliceFlag("LACBRAQDistractedAmySuccesfully_2");
      props.onPushFlag("LACBRAQDistractAmyScene_1");
    }


    return(
        <>
        <Col1>
            <SetCol1
            />
        </Col1>
        <Col2 BackImage = {AmyLivingRoom}>
          <img alt = {"Not found"} src = {props.SandyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}} ></img>
          <img alt = {"Not found"} src = {props.AmyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
           
        </Col2>  

        <Col3 > 

            
              <p>You conjure an obscure reference about a controversial match a few years ago. And Amy floods you with rules and drawn out explanations.
    You shift a bit. You see Sandy smiling, she makes a sign, she found the bracelet! Now it's time to leave.</p>

              <p>*Thud* Sandy falls down. Amy immediately truns around and sees Sandy.
              "You Skank" Amy says. She then turns and sees you. "And you are with her... What a nice thieving couple." Amy glances at Sandys wrist. "So that's yours, I should have known. The Lactation bracelet, such a nice touch for a Farmgirl" Amy grins. "And you brought the damn Zans with you. You had to bring a fucking COMMONER into this world. He is your responsability now you know." Amy pauses.</p>

              <p>You see Sandy struggling to move. "What did you do!?" Sandy demanded. 
              "Well Sandy, I do not leave my stuff lying around without protection".  Sandy chuckled. "I have plenty of runes to make sure no one messes with my stuff"</p>

              <p>"But the bracelet is mine!" Sandy interrupted. 
              "Is it?" Amy rebutted. You can see shame in Sandys face.
              You try to move, but realize you are bound by some energy. You can't move. Some force makes you kneel.
              "Don't try anything {props.name}. You can't do anything" Amys face changes into a mischievous grin. She looks at Sandy.</p>
              <p>"I have an idea! And I think you'll love it Sandy. Lets give {props.name} a crash course on magic. And you will get to use your bracelet Sandy! Everyone wins." Amy laughs.</p>

              <p>You see amy heading to her kitchen while whistiling the London bridge is falling down.</p>

            <Link to={"/AmyApartment"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {LACBRAQAmyComesBackWithBottleOfMilk}>Amy comes back with a bottle of milk</button>
            </Link>  
        </Col3>
        </>
    )
  } else if(props.flags.includes("LACBRAQDistractAmyScene_1")){
    let LACBRAQWrongAnswerToAmy_1 = () =>{
      props.onAddMinutes(10);
      props.onSpliceFlag("LACBRAQDistractAmyScene_1");
      props.onPushFlag("LACBRAQWrongAnswerToAmy_1");
    }


    return(
        <>
        <Col1>
            <SetCol1
            />
        </Col1>
        <Col2 BackImage = {AmyLivingRoom}>
          <img alt = {"Not found"} src = {props.SandyImageNaked} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
        </Col2>  

        <Col3 > 

            <p>Sandys eyes widen. She knows something is about to happen. 
              "By your expression I can see you know what I'll do. Let's start then." Amy stands in front of you both. 
              "The game is simple, I ask {props.name} a question. If he can't answer, you will drink some of this infused milk" - Sandy is starting to sweat, but she is grinning.
              "Im glad you are so excited Sandy! Let's see how long it takes to break you" Amy now looks at you.</p>
              <p>"{props.name}. How is this city called? The real name."</p>

            <Link to={"/AmyApartment"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {LACBRAQWrongAnswerToAmy_1}>Mayville</button>
                <button type="button" className="btn btn-primary" onClick = {LACBRAQWrongAnswerToAmy_1}>ummmmm???</button>
            </Link>  
        </Col3>
        </>
    )
  } else if(props.flags.includes("LACBRAQWrongAnswerToAmy_1")){
    let LACBRAQWrongAnswerToAmy_2 = () =>{
      props.onAddMinutes(10);
      props.onSpliceFlag("LACBRAQWrongAnswerToAmy_1");
      props.onPushFlag("LACBRAQWrongAnswerToAmy_2");
    }


    return(
        <>
        <Col1>
            <SetCol1
            />
        </Col1>
        <Col2 BackImage = {" "}
                    rowHeight = {" "}
            >
            <video autoPlay loop 
            style ={{width: "100%", height: props.col2Height, objectFit: "cover"}} controls>
                <source src={LACBRAQSandyStartsFillingUp} type="video/mp4"/>
            </video>
            </Col2>  
        
        

        <Col3 > 

            <p>"Wrong answer. The real name of this city is 'Valv'. The city of burried treasure." Amy approaches Sandy. "Be a good girl and drink this" Amy asks. 
            Sandy eagerly complies. Amy takes the bottle to her mouth, and Sandy takes a big gulp.
            "Good girl" Amy encourages Sandy. "Ít should kick in any minute now." Sandy is breathing heavily, her face flusehd.</p>
            <p>"Next question. How many men and woman have died because they could not control their own magic. This year."</p>



            <Link to={"/AmyApartment"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {LACBRAQWrongAnswerToAmy_2}>....</button>
                <button type="button" className="btn btn-primary" onClick = {LACBRAQWrongAnswerToAmy_2}>42?</button>
                <button type="button" className="btn btn-primary" onClick = {LACBRAQWrongAnswerToAmy_2}>666?</button>
            </Link>  
        </Col3>
        </>
    )
  }else if(props.flags.includes("LACBRAQWrongAnswerToAmy_2")){
    let LACBRAQAmyPunishingAmyForStealing_1 = () =>{
      props.onAddMinutes(10);
      props.onSpliceFlag("LACBRAQWrongAnswerToAmy_2");
      props.onPushFlag("LACBRAQAmyPunishingAmyForStealing_1");
    }


    return(
        <>
        <Col1>
            <SetCol1
            />
        </Col1>
        <Col2 BackImage = {" "}
                    rowHeight = {" "}
            >
            <video autoPlay loop 
            style ={{width: "100%", height: props.col2Height, objectFit: "cover"}} controls>
                <source src={LACBRAQBurstingOutOfShirtFatishWoman} type="video/mp4"/>
            </video>
            </Col2>  
        
        

        <Col3 > 

        <p>"Wrong!" Amy chuckles. "17. You  know how many of those 84 were new magic? All of them. You know how many humans discovered magic this year. 18. And that includes you. So try not to die baby...."</p>

        <p>Amy is interrupted by Sandy gasping for air. "It's starting" Amy says. "You don't want to miss this. It's really hot."</p>

        <p>Sandy is clutching her chest. "I can't... Br..eathe" Sandy mutters.
          "Just hold a bit more Sandy" Amy says calmly. </p>
          <p>And it starts. "Oh my gooood" Sandy shouts. "YES!" Sandy unbuttons her shirt, her breasts are red and swollen. You can see them pulsating.
          "I need more" Sandy pleads.</p>

            <Link to={"/AmyApartment"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {LACBRAQAmyPunishingAmyForStealing_1}>Your heart beats faster</button>
            </Link>  
        </Col3>
        </>
    )
  }else if(props.flags.includes("LACBRAQAmyPunishingAmyForStealing_1")){
    let LACBRAQDrinkFromSandyChest = () =>{
      props.onAddMinutes(10);
      props.onSpliceFlag("LACBRAQAmyPunishingAmyForStealing_1");
      props.onPushFlag("LACBRAQDrinkFromSandyChest");
      props.onChangeRelationship("Sandy",2);
    }
    let LACBRAQDontDrinkFromSandyChest = () =>{
      props.onAddMinutes(10);
      props.onSpliceFlag("LACBRAQAmyPunishingAmyForStealing_1");
      props.onPushFlag("LACBRAQDontDrinkFromSandyChest");
      props.onChangeRelationship("Amy",2);
    }


    return(
        <>
        <Col1>
            <SetCol1
            />
        </Col1>
        <Col2 BackImage = {" "}
              rowHeight = {" "}
        >
          <video autoPlay loop 
          style ={{width: "100%", height: props.col2Height, objectFit: "cover"}} controls>
              <source src={LACBRAQSandyBreastGrowthInAmyApmtAndMilkManuu} type="video/mp4"/>
          </video>
        </Col2>   
        
        <Col3 > 

            <p>"Wow, you are really enjoying this. Luckly for you, {props.name} could not answer his second question". Amy makes Sandy drink more of the white liquid from the bottle.</p>

            <p>"I can feel it" Sandy gasps. "They are filling uuunhhhhh". Sandy tries to bring her arms to her breasts. But stops mid air. And looks at Amy.
            "Lovely, isn't it. You really tought it was going to be that easy? No girl, you can't milk yourself, just like a cow. Someone else will have to do it."... Amy is shaking.</p>
            <p>You can see the desperation in Sandys face. "There is too much pressure" Sandy pleads. And you see her breast rising slowly every second.
</p>
            <p>Amy places her foot in your shoulder. "Third question. Would you like to drink from her breasts?"</p>
            <p>Sandy turns to see you. Her eyes imploring for release.
            "Before you answer, you should realize that her milk could cause some... reactions"</p>            



            <Link to={"/AmyApartment"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {LACBRAQDrinkFromSandyChest}> Drink from Sandys chest</button>
                <button type="button" className="btn btn-primary" onClick = {LACBRAQDontDrinkFromSandyChest}> Do not drink from Sandys chest</button>
            </Link>  
        </Col3>
        </>
    )
  } else if(props.flags.includes("LACBRAQDrinkFromSandyChest")){
    let LACBRAQDidDistractAmyLeave = () =>{
      props.onAddMinutes(10);
      props.onSpliceFlag("LACBRAQDrinkFromSandyChest");
      props.onPushFlag("LACBRAQDidDistractAmyLeave");
    }


    return(
        <>
        <Col1>
            <SetCol1
            />
        </Col1>
        <Col2 BackImage = {" "}
              rowHeight = {" "}
        >
          <video autoPlay loop 
          style ={{width: "100%", height: props.col2Height, objectFit: "cover"}} controls>
              <source src={LACBRAQYouSuckSandysBreastsFullOfMilk} type="video/mp4"/>
          </video>
        </Col2>   

        <Col3 > 

            <p>Your body is not heavy anymore. You try to stand up. "No" Commands Amy. "Get there on your knees"</p>
            <p>"Hngggg...." Sandy moans. You crawl closer to Sandy. The smell of milk innundates your senses. The sweetness clouds your mind, you float closer to her chest. her breasts swelling closer to you. And you meet her nipples, large, tender, beautiful.</p>
            <p>Sandy is huffing at this point, she is gasping for air, breathing heavily, shaking. And the milk came crashing into you. Too much to keep to yourself, milk dripping out of your mouth, and you drink every drop of the white liquid ravenously.
            Time flies by, Sandy has been in ecstasy for who knows how long, she quivers. </p>


            <Link to={"/AmyApartment"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {LACBRAQDidDistractAmyLeave}> {props.name}... {props.name}</button>
            </Link>  
        </Col3>
        </>
    )
  } else if(props.flags.includes("LACBRAQDidDistractAmyLeave")){
    let LACBRAQSandyTeachesMagicAfterSuccessDistractAmy = () =>{
      props.onAddMinutes(60);
      props.onSpliceFlag("LACBRAQDidDistractAmyLeave");
      props.onPushFlag("SandyTeachesMagicQuestInHerApartmentPart_1");
      props.onPushFlag("MagicDiscovered");
      props.onSetItem("LacBracelet",0);
      props.onSpliceFlag("WearingLacBracelet");
      props.onPushFlag("LACBRAQFinished");
    }


    return(
        <>
        <Col1>
            <SetCol1
            />
        </Col1>
        <Col2 BackImage = {AmyLivingRoom}>
          <img alt = {"Not found"} src = {props.SandyImageNaked} style ={{width : props.characterImageWidth, height: props.characterImageHeight}} ></img>
          <img alt = {"Not found"} src = {props.AmyImageNaked} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
        </Col2>  

        <Col3 > 

            <p>Sandy exhales. The milk flow has subsided. But her breasts are still larger than her original A cups. You lock eyes...</p>
            <p>"Lovely!" Interrupts Amy. She sighs. You made a mess in my aparment, but the entretainment was worth. Amy looks at Sandy. "Look at her she has fallen asleep" Amy laughs. "She is still too weak".</p>
            <p>Amy takes an empty bottle, gets closer to Sandy and presses her hand against Sandys chest, milk flows out of Sandys chest, filling half the bottle.
            "This milk will be useful for future experiments." Amy comments.</p>
            <p>And breaking the calm in the scene. Amy shouts "Get out of my place!" Her commanding voice pierces your ears. "And don't ever try this kindof shit again!".</p>
            <p>Sandy leaves. But before she whispers to you: "See me in my apartment. I have to teach you magic now"</p>

            <Link to={"/Home"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {LACBRAQSandyTeachesMagicAfterSuccessDistractAmy}>Leave</button>
            </Link>  
        </Col3>
        </>
    )
  }
  
  
  else if(props.flags.includes("LACBRAQDontDrinkFromSandyChest")){
    let LACBRAQAmyTellsYouGoToHerApmtAfter = () =>{
      props.onAddMinutes(10);
      props.onSpliceFlag("LACBRAQDontDrinkFromSandyChest");
      props.onPushFlag("LACBRAQAmyTellsYouGoToHerApmtAfter");
      props.onChangeRelationship("Amy",4);
      props.onChangeRelationship("Sandy",-5);
    }


    return(
        <>
        <Col1>
            <SetCol1
            />
        </Col1>
        <Col2 BackImage = {LACBRAQSandyEngorgedBreastsWontDrinkMilk}>
        </Col2>   

        <Col3 > 

              <p>"I am actually kindof impressed" Amy remarks. "You seem to have some brains."</p>
              <p>"F-F-UUUCKKKK!" Sandy shouts. Her breasts streched to their limit.</p>
              <p>"Oh Sandy... No one can help you now." Amy chuckles.</p>
              <p>Sandy is shaking, sweating, and short of breath. You can see the pain in her eyes... or is it pleasure?
              You see how Sandy is struggling to move, every muscle contracted, every fiber of her being wanting release, and it can't come.
              "Sweet baby" Says Amy. She approaches Sandy slowly. "You won't find release. My little spell will not allow it".
              Sandy starts crying. "Just remember, you did this to yourself." Amy, turns to you.</p>

            <Link to={"/AmyApartment"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {LACBRAQAmyTellsYouGoToHerApmtAfter}>Amy speaks to you </button>
            </Link>  
        </Col3>
        </>
    )
  } else if(props.flags.includes("LACBRAQAmyTellsYouGoToHerApmtAfter")){
    let LACBRAQFinishCanGoToAmyAfter = () =>{
      props.onAddMinutes(10);
      props.onSpliceFlag("LACBRAQAmyTellsYouGoToHerApmtAfter");
      props.onPushFlag("AmyTeachesMagicQuestInHerApartmentPart_1");
      props.onPushFlag("Amy_college");
      props.onPushFlag("MagicDiscovered");
    }


    return(
        <>
        <Col1>
            <SetCol1
            />
        </Col1>
        <Col2 BackImage = {AmyLivingRoom}>
          <img alt = {"Not found"} src = {props.SandyImageNaked} style ={{width : props.characterImageWidth, height: props.characterImageHeight}} ></img>
          <img alt = {"Not found"} src = {props.AmyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
        </Col2>   

        <Col3 > 
              <p>Amy talks - "You might have some future here {props.name}. Feel free to come see me, I might teach you a few things." Amy approaches, her face is close to yours. "And... {props.name}..."  Amy says sweetly. "Don't you ever fucking dare enter my apartment without my permission again!". "LEAVE"</p>

            <Link to={"/Home"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {LACBRAQFinishCanGoToAmyAfter}>Leave </button>
            </Link>  
        </Col3>
        </>
    )
  }
  
  else if(props.flags.includes("LACBRAQDidNotManageToDistractAmy")){
    let amyRoll_1 = Math.round(props.Amy["physical"] * normal_distribution()*2,0);
    let amyRoll_2 = Math.round(props.Amy["physical"] * normal_distribution()*2,0);
    let amyRoll_3 = Math.round(props.Amy["physical"] * normal_distribution()*2,0);
    let amyLowestRoll = Math.min(amyRoll_1,amyRoll_2,amyRoll_3);
    
    let LACBRAQRollDice_fight = () =>{
      props.onAddMinutes(10);
      
      currentDiceRoll = Math.max(Math.round(props.mind * normal_distribution()*2,0),Math.round(props.Sandy["physical"] * normal_distribution()*2,0))
      diceRollCount += 1;
      
      
      if(currentDiceRoll > amyLowestRoll){
        diceRollCount = 0;
        stateOfFight += 1;
      } else{
          props.onSpliceFlag("LACBRAQDidNotManageToDistractAmy");
          props.onPushFlag("LACBRAQLostFightAgainstAmy");
          currentDiceRoll = 0;
          diceRollCount = 0;
          stateOfFight = 0;
        }

        if(stateOfFight >= 5){
          props.onSpliceFlag("LACBRAQDidNotManageToDistractAmy");
          props.onPushFlag("LACBRAQWonfightAgainstAmy");
          currentDiceRoll = 0;
          diceRollCount = 0;
          stateOfFight = 0;
        }
        

      }
    

    
      var CurrentAmyImageFight = props.AmyImageFight
      switch(stateOfFight){
        case 1:
          CurrentAmyImageFight = props.AmyImageFight1;
          break
        case 2:
          CurrentAmyImageFight = props.AmyImageFight2;
          break
        case 3:
          CurrentAmyImageFight = props.AmyImageFight3;
          break
        case 4:
          CurrentAmyImageFight = props.AmyImageFight4;
          break
        case 5:
          CurrentAmyImageFight = props.AmyImageNaked 
          break
        default:
          CurrentAmyImageFight = props.AmyImage
          break
      }
    


    return(
        <>
        <Col1>
            <SetCol1
            />
        </Col1>
        <Col2 BackImage = {AmyLivingRoom}>
          <img alt = {"Not found"} src = {CurrentAmyImageFight} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
        </Col2>  

        <Col3 > 

          <p>You can't find anything more to say. Amy rolls her eyes and spots Sandy. "Sandy!" - Amy shouts </p>
          <p>"{props.name}" - Sandy shouts.</p>        
          <p>Amy looks at you. Frowns.  And Sandy howls, and throws herself at Amy.</p>


          <p>You are now in a fight. Roll dice. You or sandy need to roll higher than Amy. Amy rolled: {amyRoll_1}, {amyRoll_2}, and {amyRoll_3}.You will roll a dice three times. You need to defeat her lowest roll, {amyLowestRoll}.</p>
          <p>You need to roll higher than Amy until she is completely naked</p>
          
          <p>You and Sandy rolled: {currentDiceRoll ? currentDiceRoll: "You have not rolled yet"}</p>

            <Link to={"/AmyApartment"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {LACBRAQRollDice_fight}>Roll dice</button>
            </Link>  
        </Col3>
        </>
    )
  } else if(props.flags.includes("LACBRAQWonfightAgainstAmy")){
    let LACBRAQLeaveAmyApartmentAfterWinningFight = () =>{
      props.onAddMinutes(10);
      props.onSpliceFlag("LACBRAQWonfightAgainstAmy");
      props.onPushFlag("SandyTeachesMagicQuestInHerApartmentPart_1");
      props.onPushFlag("MagicDiscovered");
      props.onSetItem("LacBracelet",0);
      props.onSpliceFlag("WearingLacBracelet");
      props.onPushFlag("LACBRAQFinished");
      props.onChangeRelationship("Amy", -10);
      props.onChangeRelationship("Sandy", 10);
    }


    return(
        <>
        <Col1>
            <SetCol1
            />
        </Col1>
        <Col2 BackImage = {AmyLivingRoom}>
          <img alt = {"Not found"} src = {props.SandyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}} ></img>
          <img alt = {"Not found"} src = {props.AmyImageNaked} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
        </Col2>  

        <Col3 > 

            <p>Amy is breathing heavily. Sandy is exhausted. </p>
            <p>"Why the hell are you even here?!"Amy asks. Sandy quickly looks around Amys apartment. </p>
            <p>"Ha! Here it is." Sandy takes the bracelet and puts it on.</p>
            <p>"All of this for that dammned bracelet! Are you out of your mind!" Amy is furious. "You kinky small town minx!".
            You can see how the adrenaline is kicking into Amys system.</p>
            <p>"Fuck." Sandy mutters. "Scatter!" Sandy lunges herself to the hallway. Amys gaze fixed onto you.</p>
            <p>Sandy leaves the aparment, grabs your arm and pulls you out. </p>
            <p>"I must go. Find me in my aparment soon. I need to start teaching you the basics" Sandy then quickly runs to her aparment.</p>

            <Link to={"/Home"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {LACBRAQLeaveAmyApartmentAfterWinningFight}>Leave</button>
            </Link>  
        </Col3>
        </>
    )
  } else if(props.flags.includes("LACBRAQLostFightAgainstAmy")){
    
    let LACBRAQAmyComesBackWithBottleOfMilk = () =>{
      props.onAddMinutes(10);
      props.onPushFlag("LACBRAQDistractAmyScene_1");
      props.onSpliceFlag("LACBRAQLostFightAgainstAmy");
    }


    return(
        <>
        <Col1>
            <SetCol1
            />
        </Col1>
        <Col2 BackImage = {AmyLivingRoom}>
          <img alt = {"Not found"} src = {props.SandyImageNaked} style ={{width : props.characterImageWidth, height: props.characterImageHeight}} ></img>
          <img alt = {"Not found"} src = {props.AmyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
        </Col2>  

        <Col3 > 

            <p>You can't move. And it seems like Sandy can't either. </p>
            <p>"What the FUCK was all that about?" Amy demands to know. "I DO NOT take kindly to motherfuckers getting into my apartment and fighting me. AND YOU ASSHOLES ARE NOT EVEN STRONG." Amy is furious. "This is not only annoying, is a massive lack of respect.". Amy looks at Sandy dead in the eye. </p>
            <p>"WHY THE FUCK ARE YOU HERE. AND WHY DID YOU BRING A DAMMNED ZANS WITH YOU?!" Amy shouts.</p>
            <p>Sandy is exhausted and short of breath. Her eyes do not want to meet Amys. "I... I just..." Sandy mutters.
            "Sandy. Remember, I am not like you. I have come from a really powerful family. I can't just assume you meant no harm." Amy stomps the floor. A roaring sound pierces your ears. "So tell me right fucking now what's happening. Or I will have to use some strong runes on you." Amy is serious. And the atmosphere is tense.</p>
            <p>"I WANTED MY BRACELET!" Sandy blurted.</p>
            <p>"Your bracel..." Amy paused for a moment. "ALL THIS FOR THAT BRACELET!" Amy huffs, turns around, paces through the room for a moment. You can feel your heart beat in your thoat.</p>
            <p>Amy heads to a drawer and takes the bracelet out. She dangles it in front of Sandy.
            "I can't move" Sandy says. "Of course you can't" Amy answers. "This house is filled with pretty strong protective magic". Amy puts the bracelet in Sandy's wrist.</p>
            <p>"I have an idea! And I think you'll love it Sandy. Lets give {props.name} a crash course on magic. And you will get to use your bracelet Sandy! Everyone wins." Amy laughs.</p>

            <Link to={"/AmyApartment"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {LACBRAQAmyComesBackWithBottleOfMilk}>Amy comes back with a bottle of milk</button>
            </Link>  
        </Col3>
        </>
    )
  } else if(props.flags.includes("AmyTeachesMagicQuestInHerApartmentPart_1")){
    let SANTMQAmyApartmentConnectRocks = () =>{
      props.onAddMinutes(10);
      props.onPushFlag("SANTMQAmyApartmentConnectRocks");
      props.onSpliceFlag("AmyTeachesMagicQuestInHerApartmentPart_1");
    }


    return(
        <>
        <Col1>
            <SetCol1
            />
        </Col1>
        <Col2 BackImage = {AmyLivingRoom}>
          <img alt = {"Not found"} src = {props.AmyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
        </Col2>  

        <Col3 > 

            <p>You get to Amys apartment. The air is tense. It seems like this girl never stops working.</p>
            <p>"Hello {props.name}." Amy interrupts your train of tought. "I don't have much time. But since you impressed me I'll teach you a bit." Amy says. This class will be about Surface spells.</p>
            <p>"Surface spells are spells that cover areas of land. And the more land covered the more preparation and power you need to cast it. One example of a surface spell is the spell my family casted over this building."</p>
            <p>"Surface spells can also appear in nature. According to my reasearch Maeville is covered by a natural surface spell... It... It seems that Maeville makes people horny. And this place has a really high chance to spawn lust-related artifacts or runes."</p>
            <p>Amy rubs her thighs togheter. You notice she's blushing.</p>
            <p>"{props.name} Let's make this a bit more interactive, so you can learn.
            I'll show you how to cast a simple surface spell. And if you do it right, I'll reward you." - Amy winks.</p>
            <p>Amy gives you four marked rocks and a chalk. "The spell is simple, these rocks are already charged. You just need to place them on the floor and connect them with the chalk"</p>

            <Link to={"/AmyApartment"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {SANTMQAmyApartmentConnectRocks}>Connect the rocks</button>
            </Link>  
        </Col3>
        </>

    )
  } else if(props.flags.includes("SANTMQAmyApartmentConnectRocks")){
    let SANTMQAmyTeachesMagicBreathe = () =>{
      props.onAddMinutes(10);
      props.onPushFlag("SANTMQAmyTeachesMagicBreathe");
      props.onSpliceFlag("SANTMQAmyApartmentConnectRocks");
    }


    return(
        <>
        <Col1>
            <SetCol1
            />
        </Col1>
        <Col2 BackImage = {AmyLivingRoom}>
          <img alt = {"Not found"} src = {props.AmyImageNaked} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
        </Col2>  

        <Col3 > 

              <p>The floor starts glowing. And you hear Amy giggle. </p>
              <p>"Pretty common magic actually" Amy glances at your dick. "You know what it does? </p>
              <p>"The rocks I gave you are pretty common around here. They are aphrodisiacs. And now everything inside that square you made will slowly get aroused." Amy steps into the square. "This is an Amazing feeling" Amy moans. "But you are still weak, when I do this I can't control myself". Amy is breathing heavily.</p>

              <p>"Now {props.name}, focus on feeling the energy around us. Feel the magic, focus on you breath".</p>



            <Link to={"/AmyApartment"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {SANTMQAmyTeachesMagicBreathe}>Take a deep breath</button>
            </Link>  
        </Col3>
        </>

    )
  } else if (props.flags.includes("SANTMQAmyTeachesMagicBreathe")){
    let SANTMQAmyCumsAfterGettingPounded = () =>{
      props.onAddMinutes(10);
      props.onPushFlag("SANTMQAmyCumsAfterGettingPounded");
      props.onSpliceFlag("SANTMQAmyTeachesMagicBreathe");
    }


    return(
        <>
        <Col1>
            <SetCol1
            />
        </Col1>
        <Col2 BackImage = {" "}
                    rowHeight = {" "}
            >
        <video autoPlay loop
            style ={{width: "100%", height: props.col2Height, objectFit: "cover"}} controls>
                <source src={SANTQAmyFuckedSchoolgirlUniform} type="video/mp4"/>
            </video>
        </Col2>  

        <Col3 > 

                    <p>You close your eyes, breathe, and feel the energy around you. You feel it at the tip of your nose, your ears, you feel it in the tingling around your cock.</p>
                    <p>"Ahhh... Unhhhg..." Amy moans. "I love it when men are focused" Amy pants. "Come closer {props.name}"
                    You step into the surface spell and you feel your already hard cock getting harder. You see Amys gaze 
                    "I allways wanted to try this" Amy comments, and jumps towards your dick.
                    "Ffuukckkk YES!" Amy moans. Getting pounded by your rock hard erection.</p>
        





            <Link to={"/AmyApartment"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {SANTMQAmyCumsAfterGettingPounded}>cum</button>
            </Link>  
        </Col3>
        </>

    )
  } else if(props.flags.includes("SANTMQAmyCumsAfterGettingPounded")){
    let SANTMQLeaveAmyHouseAfterFucking = () =>{
      props.onAddMinutes(10);
      props.onPushFlag("AMY_MONEY_BLESSING");
      props.onSpliceFlag("SANTMQAmyCumsAfterGettingPounded");
      props.onPushFlag("SandyTeachesMagicQuestInHerApartmentPart_1");
    }



    return(
        <>
        <Col1>
            <SetCol1
            />
        </Col1>
        <Col2 BackImage = {AmyLivingRoom}>
          <img alt = {"Not found"} src = {props.AmyImageNaked} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
        </Col2>   

        <Col3 > 

        
          <p>Amy sights. And kisses you. 
          "{props.name}. That was a good lesson. But I can't teach you more. You should go to Sandys apartment, she'll teach you more." Says Amy. "Also, My family has a global blessing which gives us money from time to time. I'll make sure you get some of that." Amy winks. </p>
          <p>"Now leave baby, I need to keep studying".</p>

            <Link to={"/Home"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {SANTMQLeaveAmyHouseAfterFucking}>Leave</button>
            </Link>  
        </Col3>
        </>

    )
  }
  
  
  else {
    return (
      <>
        <Col1>
          <SetCol1 />
        </Col1>
        <Col2 BackImage={AmyLivingRoom}></Col2>

        <Col3>
          <p>You are in Amys apartment</p>

          <Link to={"/Home"} style={{ textDecoration: "none" }}>
            <button type="button" className="btn btn-primary">
              Go home
            </button>
          </Link>

          <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
            <button type="button" className="btn btn-primary">
              Game map
            </button>
          </Link>
        </Col3>
      </>
    );
  }
};

export default AmyApartment;
