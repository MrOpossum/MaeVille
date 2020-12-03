import React from "react";
import { Link } from "react-router-dom";

import Col1 from "../../components/col1";
import Col2 from "../../components/col2";
import Col3 from "../../components/col3";
import SetCol1 from "../../components/SetCol1";

//Images

import BarInside from "../../Images/TheBar/BarInside.png"
import BabishSinsMerge_transparent from "../../Images/TheBar/BabishSinsMerge_transparent.png";
////SANTMQ




const TheBar = (props) => {
    function normal_distribution() {
        let u = 0, v = 0;
        while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
        while(v === 0) v = Math.random();
        let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
        num = num / 10.0 + 0.5; // Translate to 0 -> 1
        if (num > 1 || num < 0) return normal_distribution(); // resample between 0 and 1
        return num;
      }
    let leaveBar = () =>{
        props.onAddMinutes(10);
    }

    if(props.flags.includes("EVEMQMeetEveAtTheBar")){
        let EVEMQApproachEveAtTheBarMeetHer = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("EVEMQApproachEveAtTheBarMeetHer"); 
            props.onSpliceFlag("EVEMQMeetEveAtTheBar");
            props.onPushFlag("BAR_DISCOVERED");
        }

        let ABInfoMeteorShowerAskForTip = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("ABInfoMeteorShowerAskForTip"); 
            props.onPushFlag("BAR_DISCOVERED");
        }
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {BarInside}>
                    <img alt = {"Not found"} src = {props.EveImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                    <img alt = {"Not found"} src = {BabishSinsMerge_transparent} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                    
            </Col2>  
    
            <Col3 > 
                   
                   <p>You enter the bar. You see plenty of people, anthros and other beings talking, drinking, and mixing into a beehive of noise and activity. </p>
                   <p>There is a woman dressed in black talking to the bartender.</p>
                    
                    
    
                <Link to={"/TheBar"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {EVEMQApproachEveAtTheBarMeetHer}>Approach the woman</button>
                </Link> 
                <Link to={"/TheBar"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {ABInfoMeteorShowerAskForTip}>Talk to the bartender</button>
                </Link> 
                <Link to={"/TheBarOutside"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {leaveBar}>Go outside</button>
                </Link>  
            </Col3>
            </>
  
      )
    } else if(props.flags.includes("EVEMQApproachEveAtTheBarMeetHer")){
        
        let EVEMQApproachEveAtTheBarMeetHerHello = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("EVEMQApproachEveAtTheBarMeetHerHello"); 
            props.onSpliceFlag("EVEMQApproachEveAtTheBarMeetHer");
        }

        let EVEMQApproachEveAtTheBarMeetHerHoller = () =>{
            props.onAddMinutes(10);
            props.onChangeRelationship("Eve",-5);
            props.onPushFlag("EVEMQApproachEveAtTheBarMeetHerHoller"); 
            props.onSpliceFlag("EVEMQApproachEveAtTheBarMeetHer");
        }

        let EVEMQApproachEveAtTheBarMeetHerStayShut = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("EVEMQApproachEveAtTheBarMeetHerStayShut");
            props.onSpliceFlag("EVEMQApproachEveAtTheBarMeetHer");
        }
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {BarInside}>
                    <img alt = {"Not found"} src = {props.EveImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 

                    <p>You get closer to the colorful haired woman. She notices you, and your mind goes adrift, you get lost in her eyes and keep walking forward. </p>
                   
            
                    
    
                <Link to={"/TheBar"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {EVEMQApproachEveAtTheBarMeetHerHello}>"Hello"</button>
                </Link> 
                <Link to={"/TheBar"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {EVEMQApproachEveAtTheBarMeetHerHoller}>Aside from being sexy, what do you do for a living?</button>
                </Link>
                <Link to={"/TheBar"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {EVEMQApproachEveAtTheBarMeetHerStayShut}>Don't speak</button>
                </Link>  
                 
            </Col3>
            </>
  
      )
    }  else if(props.flags.includes("EVEMQApproachEveAtTheBarMeetHerHello")){
        let complimentRoll = Math.round(props.attractiveness * normal_distribution()*2,0);
        console.log(complimentRoll);
        let EVEMQIamPropsName = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("EVEMQIamPropsName");
            props.onSpliceFlag("EVEMQApproachEveAtTheBarMeetHerHello");
        }
        let EVEMQAreYouMad = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("EVEMQApproachEveAtTheBarMeetHerHoller");
            props.onSpliceFlag("EVEMQApproachEveAtTheBarMeetHerHello");
        }
        let EVEMQComplimentMoonEarings = () =>{
            props.onAddMinutes(10);
            if(complimentRoll > 7){
                props.onPushFlag("EVEMQComplimentMoonEarings")
            }else{
                props.onPushFlag("EVEMQApproachEveAtTheBarMeetHerHoller")
            }
            props.onSpliceFlag("EVEMQApproachEveAtTheBarMeetHerHello");
        }
        let EVEMQComplimentClothes = () =>{
            props.onAddMinutes(10);
            if(complimentRoll > 13){
                props.onPushFlag("EVEMQComplimentClothes")
            }else{
                props.onPushFlag("EVEMQApproachEveAtTheBarMeetHerHoller")
            }
            props.onSpliceFlag("EVEMQApproachEveAtTheBarMeetHerHello");
        }
        let EVEMQComplimentEyeliner = () =>{
            props.onAddMinutes(10);
            if(complimentRoll > 9){
                props.onPushFlag("EVEMQComplimentEyeliner");
            } else{
                props.onPushFlag("EVEMQApproachEveAtTheBarMeetHerHoller")
            }
            props.onSpliceFlag("EVEMQApproachEveAtTheBarMeetHerHello");
        }
    
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {BarInside}>
                    <img alt = {"Not found"} src = {props.EveImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 


                    <p>"Hello" Answers the girl politetly. She looks at your clothes, and looks away, she seems to be waiting for you to say something else</p>
                   
            

    
                <Link to={"/TheBar"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {EVEMQIamPropsName}>I am {props.name}</button>
                </Link> 
                <Link to={"/TheBar"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {EVEMQAreYouMad}>Are you mad?</button>
                </Link>
                <Link to={"/TheBar"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {EVEMQComplimentMoonEarings}>Compliment her moon earings</button>
                </Link>  
                <Link to={"/TheBar"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {EVEMQComplimentClothes}>Compliment her clothes</button>
                </Link>  
                <Link to={"/TheBar"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {EVEMQComplimentEyeliner}>Compliment her eyeliner</button>
                </Link>                  
                 
            </Col3>
            </>
  
      )
    }else if(props.flags.includes("EVEMQIamPropsName")){
        let EVEMQEveWillBeAtTheHill = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("EVEMQEveWillBeAtTheHill");
            props.onSpliceFlag("EVEMQIamPropsName");
            props.onPushFlag("HILL_DISCOVERED");
        }

        let ABIAnythingElseGoingOnAfterMeetingEve = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("ABIAnythingElseGoingOnAfterMeetingEve");
            props.onSpliceFlag("EVEMQIamPropsName");
        }
        
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {BarInside}>
                    <img alt = {"Not found"} src = {props.EveImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                    <img alt = {"Not found"} src = {BabishSinsMerge_transparent} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                    
            </Col2>  
    
            <Col3 > 
                   

                   <p>"Nice to meet you {props.name}, I am Evelyn" Evelyn looks at you quizzically. </p>
                   <p>"Here you go" Interrupts the bartender. Placing a cherry colored drink in front of Evelyn.</p>
                   <p>"Thank you!" Says the woman. "No problem Eve" Answers the bartender.</p>
                   <p>"I have to go" Says Evelyn looking at you.</p>
                   <p>"That was... Mediocre" Says the bartender. "I used to be akward like that. I like you kid, lemme give you a tip."</p>
                   <p>Ash gestures you to come closer.</p>
                    <p>"That girl wanted to know about star stones. They are runes that share energy with space. She was specially interested in a moon stone. And they are not easy to find. But I heard that a meteor shower will hit this town soon. You should go to the hill just outside the town. If you are lucky, a moon stone will fall there."</p>


    
                <Link to={"/TheBarOutside"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {EVEMQEveWillBeAtTheHill}>Leave the bar</button>
                </Link> 
                <Link to={"/TheBar"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {ABIAnythingElseGoingOnAfterMeetingEve}>Do you know if there is anything else going on?</button>
                </Link> 
                 
            </Col3>
            </>
  
      )
    }else if(props.flags.includes("EVEMQComplimentMoonEarings")){
        let EVEMQEveWillBeAtTheHill = () =>{
            props.onPushFlag("HILL_DISCOVERED");
            props.onChangeRelationship("Eve",5);
            props.onAddMinutes(10);
            props.onPushFlag("EVEMQEveWillBeAtTheHill");
            props.onSpliceFlag("EVEMQComplimentMoonEarings");
        }

        let ABIAnythingElseGoingOnAfterMeetingEve = () =>{
            props.onAddMinutes(10);
            props.onChangeRelationship("Eve",5);
            props.onPushFlag("ABIAnythingElseGoingOnAfterMeetingEve");
            props.onSpliceFlag("EVEMQComplimentMoonEarings");
        }
        
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {BarInside}>
                    <img alt = {"Not found"} src = {props.EveImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                    <img alt = {"Not found"} src = {BabishSinsMerge_transparent} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                    
            </Col2>  
    
            <Col3 > 
                   

                <p>The girls face light up."I love this earings!" Comments the girl. "I am Evelyn. By the way."</p>
                <p>"I am {props.name} you answer".</p>
                <p>"You know, I only wear this earings on special nights. Can you see how they shine? They only shine when the moon is closest to the earth."</p>
                <p>"It's beautiful" You answer. </p>
                <p>Evelyn smiles.</p>
                <p>"Here is your drink Eve." Interrupts the bartender.  "Thank you, Ash" Answers Eve. </p>
                <p>"{props.name}, I have some buisiness to attend to. But you should know that there will be a meteor shower soon. Come to the hill just outside town. I'll be there. Maybe you'll get lucky and get some good loot."</p>
                <p>(Eve then leaves and you are left with the bartender.)</p>
                <p>"What's with you". Asks the bartender</p>

    
                <Link to={"/TheBarOutside"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {EVEMQEveWillBeAtTheHill}>Leave the bar</button>
                </Link> 
                <Link to={"/TheBar"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {ABIAnythingElseGoingOnAfterMeetingEve}>Do you know if there is anything else going on?</button>
                </Link> 
                 
            </Col3>
            </>
  
      )
    }else if(props.flags.includes("EVEMQComplimentClothes")){
        let EVEMQEveWillBeAtTheHill = () =>{
            props.onPushFlag("HILL_DISCOVERED");
            props.onChangeRelationship("Eve",5);
            props.onAddMinutes(10);
            props.onPushFlag("EVEMQEveWillBeAtTheHill");
            props.onSpliceFlag("EVEMQComplimentClothes");
        }

        let ABIAnythingElseGoingOnAfterMeetingEve = () =>{
            props.onAddMinutes(10);
            props.onChangeRelationship("Eve",5);
            props.onPushFlag("ABIAnythingElseGoingOnAfterMeetingEve");
            props.onSpliceFlag("EVEMQComplimentClothes");
        }
        
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {BarInside}>
                    <img alt = {"Not found"} src = {props.EveImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                    <img alt = {"Not found"} src = {BabishSinsMerge_transparent} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                    
            </Col2>  
    
            <Col3 > 
                   

                <p>"Thank you!" The girl says. "Today I made special effort to dress nicely. I have some people to impress today you know. What's your name?" The woman asks.</p>
                <p>"{props.name}" You answer.</p>
                <p>"Nice to meet you, I am Evelyn, you can call me Eve" Eve pauses for a moment. And looks for something in her purse "{props.name}, could you tell me what you think about this?" She takes out a small, round, blue marble. "This is a rune I made myself, It draws it's power from neptune... Or at least it should."</p>
                <p>"It's beautiful" You answer. </p>
                <p>Evelyn smiles.</p>
                <p>"Here is your drink Eve." Interrupts the bartender.  "Thank you, Ash" Answers Eve. </p>
                <p>"{props.name}, I have some buisiness to attend to. But you should know that there will be a meteor shower soon. Come to the hill just outside town. I'll be there. Maybe you'll get lucky and get some good loot."</p>
                <p>(Eve leaves and you are left with the bartender.)</p>
                <p>"What's with you". Asks the bartender</p>

    
                <Link to={"/TheBarOutside"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {EVEMQEveWillBeAtTheHill}>Leave the bar</button>
                </Link> 
                <Link to={"/TheBar"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {ABIAnythingElseGoingOnAfterMeetingEve}>Do you know if there is anything else going on?</button>
                </Link> 
                 
            </Col3>
            </>
  
      )
    }else if(props.flags.includes("EVEMQComplimentEyeliner")){
        let EVEMQEveWillBeAtTheHill = () =>{
            props.onPushFlag("HILL_DISCOVERED");
            props.onChangeRelationship("Eve",5);
            props.onAddMinutes(10);
            props.onPushFlag("EVEMQEveWillBeAtTheHill");
            props.onSpliceFlag("EVEMQComplimentEyeliner");
        }

        let ABIAnythingElseGoingOnAfterMeetingEve = () =>{
            props.onAddMinutes(10);
            props.onChangeRelationship("Eve",5);
            props.onPushFlag("ABIAnythingElseGoingOnAfterMeetingEve");
            props.onSpliceFlag("EVEMQComplimentEyeliner");
        }
        
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {BarInside}>
                    <img alt = {"Not found"} src = {props.EveImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                    <img alt = {"Not found"} src = {BabishSinsMerge_transparent} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                    
            </Col2>  
    
            <Col3 > 
                   
                   <p>"Thank you!" The girl says. "Today I made special effort to look nice. I have some people to impress today you know. What's your name?" The woman asks.</p>
                   <p>"{props.name}" You answer.</p>
                   <p>"Nice to meet you, I am Evelyn, you can call me Eve" Eve pauses for a moment. And looks for something in her purse "{props.name}, could you tell me what you think about this?" She takes out a small, round, blue marble. "This is a rune I made myself, It draws it's power from neptune... Or at least it should."</p>
                   <p>"It's beautiful" You answer. </p>
                   <p>Evelyn smiles.</p>
                   <p>"Here is your drink Eve." Interrupts the bartender.  "Thank you, Ash" Answers Eve. </p>
                   <p>"{props.name}, I have some buisiness to attend to. But you should know that there will be a meteor shower soon. Come to the hill just outside town. I'll be there. Maybe you'll get lucky and get some good loot."</p>
                   <p>(Eve leaves and you are left with the bartender.)</p>
                   <p>"What's with you". Asks the bartender</p>

    
                <Link to={"/TheBarOutside"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {EVEMQEveWillBeAtTheHill}>Leave the bar</button>
                </Link> 
                <Link to={"/TheBar"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {ABIAnythingElseGoingOnAfterMeetingEve}>Do you know if there is anything else going on?</button>
                </Link> 
                 
            </Col3>
            </>
  
      )
    }
    
    
    else if(props.flags.includes("EVEMQApproachEveAtTheBarMeetHerHoller")){
        let ABInfoTippedTheBartender50MeteorShower = () =>{
            props.onAddMoney(-50);
            props.onAddMinutes(10);
            props.onPushFlag("ABInfoTippedTheBartender50MeteorShower");
            props.onSpliceFlag("EVEMQApproachEveAtTheBarMeetHerHoller");
        }

        let ABInfoTippedTheBartender50MeteorShowerDontTip = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("ABInfoTippedTheBartender50MeteorShowerDontTip");
            props.onSpliceFlag("EVEMQApproachEveAtTheBarMeetHerHoller");
        }
        
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {BarInside}>
                    <img alt = {"Not found"} src = {props.EveImageButt} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                    <img alt = {"Not found"} src = {BabishSinsMerge_transparent} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                    
            </Col2>  
    
            <Col3 > 
                   
                   
                   <p>The girl looks at you. And waves at the bartender. </p>
                   <p>"Ash." The bartender looks at you. </p>
                   <p>"Yeah" Ash answers.</p>
                    <p>"I'll go sit at a table in the back". The girl stands up and leaves. </p>
                    <p>"Bad move men" Says the bartender. "You won't win that kind of girl with shallow coments. Let me give you a tip..." The bartender shakes a tipjar in fron of him and gestures towards it. "It might be a great tip" He grins.</p>


    
                <Link to={"/TheBar"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {ABInfoTippedTheBartender50MeteorShower}>Place $50 in the jar</button>
                </Link> 
                <Link to={"/TheBar"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {ABInfoTippedTheBartender50MeteorShowerDontTip}>Don't tip the bartender</button>
                </Link> 
                 
            </Col3>
            </>
  
      )
    }else if(props.flags.includes("EVEMQApproachEveAtTheBarMeetHerStayShut")){
        let ABInfoTippedTheBartender50MeteorShower = () =>{
            props.onAddMoney(-50);
            props.onChangeRelationship("Eve",5);
            props.onAddMinutes(10);
            props.onPushFlag("ABInfoTippedTheBartender50MeteorShower");
            props.onSpliceFlag("EVEMQApproachEveAtTheBarMeetHerHoller");
        }

        let ABInfoTippedTheBartender50MeteorShowerDontTip = () =>{
            props.onChangeRelationship("Eve",5);
            props.onAddMinutes(10);
            props.onPushFlag("ABInfoTippedTheBartender50MeteorShowerDontTip");
            props.onSpliceFlag("EVEMQApproachEveAtTheBarMeetHerHoller");
        }
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {BarInside}>
                    <img alt = {"Not found"} src = {props.EveImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                    <img alt = {"Not found"} src = {BabishSinsMerge_transparent} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                    
            </Col2>  
    
            <Col3 > 

                <p>You sit beside the girl. She looks at you but wont speak.</p>                   
                <p>You both look at each others eyes for a second, and the girl smiles and looks away. A small thunder stops your heart. And the clear disorientation makes the girl laugh.</p>        
                <p>"Here is your drink Eve." Interrupts the bartender.  "Thank you, Ash" Answers Eve. </p>
                <p>Eve looks at you once more and leaves.</p>
                <p>"That was smooth men, just make sure to talk next time. The girl is gone and the chemistry too..." Says the bartender. "You know, I know where you can find that girl later." The bartender shakes a tipjar in fron of him and gestures towards it. "It might be a great tip" He grins.</p>

    
            
                <Link to={"/TheBar"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {ABInfoTippedTheBartender50MeteorShower}>Place $50 in the jar</button>
                </Link> 
                <Link to={"/TheBar"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {ABInfoTippedTheBartender50MeteorShowerDontTip}>Don't tip the bartender</button>
                </Link> 
                 
            </Col3>
            </>
  
      )
    }
    
    
    
    
    else if(props.flags.includes("ABInfoMeteorShowerAskForTip")){
        let ABInfoTippedTheBartender50MeteorShower = () =>{
            props.onAddMoney(-50);
            props.onAddMinutes(10);
            props.onPushFlag("ABInfoTippedTheBartender50MeteorShower");
            props.onSpliceFlag("ABInfoMeteorShowerAskForTip");
        }

        let ABInfoTippedTheBartender50MeteorShowerDontTip = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("ABInfoTippedTheBartender50MeteorShowerDontTip");
            props.onSpliceFlag("ABInfoMeteorShowerAskForTip");
        }
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {BarInside}>
                    <img alt = {"Not found"} src = {BabishSinsMerge_transparent} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                    
            </Col2>  
    
            <Col3 > 

                    <p>The bartender serves a drink to the woman. "There you go Evelyn. Enjoy" The girl smiles, thanks the bartender and stands up. You notice she steals a glance at you before leaving.</p>

                    <p>You ask the bartender if there is any gossip floating around</p>
                    <p>"Let me give you a tip..." The bartender shakes a tipjar in fron of him and gestures towards it. "It might be a great tip" He grins.</p>
            

    
            
                <Link to={"/TheBar"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {ABInfoTippedTheBartender50MeteorShower}>Place $50 in the jar</button>
                </Link> 
                <Link to={"/TheBar"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {ABInfoTippedTheBartender50MeteorShowerDontTip}>Don't tip the bartender</button>
                </Link> 
                 
            </Col3>
            </>
  
      )
    } else if(props.flags.includes("ABInfoTippedTheBartender50MeteorShower")){
        let EVEMQEveWillBeAtTheHill = () =>{
            props.onPushFlag("HILL_DISCOVERED");
            props.onAddMinutes(10);
            props.onPushFlag("EVEMQEveWillBeAtTheHill");
            props.onSpliceFlag("ABInfoTippedTheBartender50MeteorShower");
        }

        let ABIAnythingElseGoingOnAfterMeetingEve = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("ABIAnythingElseGoingOnAfterMeetingEve");
            props.onSpliceFlag("ABInfoTippedTheBartender50MeteorShower");
        }
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {BarInside}>
                    <img alt = {"Not found"} src = {BabishSinsMerge_transparent} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                    
            </Col2>  
    
            <Col3 > 

                    <p>Ash gestures you to come closer.</p>
                    <p>"That girl wanted to know about star stones. They are runes that share energy with space. She was specially interested in a moon stone. And they are not easy to find. But I heard that a meteor shower will hit this town soon. You should go to the hill just outside the town. If you are lucky, a moon stone will fall there."</p>
            

    
            
                <Link to={"/TheBarOutside"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {EVEMQEveWillBeAtTheHill}>Leave</button>
                </Link> 
                <Link to={"/TheBar"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {ABIAnythingElseGoingOnAfterMeetingEve}> Do you know about anything else going on?</button>
                </Link> 
                 
            </Col3>
            </>
  
      )
    } else if(props.flags.includes("ABInfoTippedTheBartender50MeteorShowerDontTip")){
        let ABInfoLeaveBar = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("ABInfoTippedTheBartender50MeteorShowerDontTip");
        }

        let ABIAnythingElseGoingOnAfterMeetingEve = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("ABIAnythingElseGoingOnAfterMeetingEve");
            props.onSpliceFlag("ABInfoTippedTheBartender50MeteorShowerDontTip");
        }
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {BarInside}>
                    <img alt = {"Not found"} src = {BabishSinsMerge_transparent} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                    
            </Col2>  
    
            <Col3 > 

                <p>Ash seems a bit baffled. "Well, do you need anything else?"</p>
            
                <Link to={"/TheBarOutside"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {ABInfoLeaveBar}>Leave</button>
                </Link> 
                <Link to={"/TheBar"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {ABIAnythingElseGoingOnAfterMeetingEve}>Will you tell me anything for free?</button>
                </Link> 
                 
            </Col3>
            </>
  
      )
    } else if(props.flags.includes("ABIAnythingElseGoingOnAfterMeetingEve")){
        let ABInfoLeaveBarDiscoverTheCompany = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("COMPANY_DISCOVERED");
            props.onSpliceFlag("ABIAnythingElseGoingOnAfterMeetingEve");
            props.onSpliceFlag("SCIENCELABQSStart");
        }
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {BarInside}>
                    <img alt = {"Not found"} src = {BabishSinsMerge_transparent} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                    
            </Col2>  
    
            <Col3 > 

                    <p>"Something is always going on. And I might know or not know a bit of everything" Ash comments.</p>
                    <p>"I'll tell you something for free. A new company built their headquarters here. They seem... Suspicious. You might want to check them out."</p>
            
                <Link to={"/TheBarOutside"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {ABInfoLeaveBarDiscoverTheCompany}>Leave</button>
                </Link> 
                 
            </Col3>
            </>
  
      )
    }
    
    
    
    else {
    
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {BarInside}>
                    <img alt = {"Not found"} src = {BabishSinsMerge_transparent} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
                   
                   
    
                <Link to={"/TheBarOutside"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {leaveBar}>Leave bar</button>
                </Link>  
            </Col3>
            </>
  
      )

    }

}


export default TheBar;