import React from "react";
import { Link } from "react-router-dom";

import Col1 from "../../components/col1";
import Col2 from "../../components/col2";
import Col3 from "../../components/col3";
import SetCol1 from "../../components/SetCol1";

//Images

import outsideBar from "../../Images/TheBar/outsideBar.jpg";
import Evelyn from "../../Characters/Evelyn";
import Amy from "../../Characters/Amy";
import Sandy from "../../Characters/Sandy";

////SANTMQ


var CurrentLocation = "/TheBarOutside";

const TheBarOutside = (props) => {


    if(props.flags.includes("NO_MORE_ENERGY")){
        return(
            <>
            <Col1>
                <SetCol1/>
            </Col1>
            <Col2 BackImage = {""}>            
            </Col2>
    
            <Col3 > 
                    <Link to={"/SleepAtHome"} style={{ textDecoration: "none" }}>
                        <button type="button" className="btn btn-primary" style = {{width: props.standardButtonWidth}}>You have no more energy, lets go home</button>
                    </Link>
            
            </Col3>
            </>
            )
        }

    else if(props.flags.includes("SANTMQSandyWillBeInBar")){
        let GoToGameMap = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("EVEMQMeetEveAtTheBar");
            props.onSpliceFlag("SANTMQSandyWillBeInBar");
            props.onPushFlag("BAR_DISCOVERED");
        }
        let GoToTheBar = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("EVEMQMeetEveAtTheBar");
            props.onSpliceFlag("SANTMQSandyWillBeInBar");
            props.onPushFlag("BAR_DISCOVERED");
        }

        
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {outsideBar}>
                    <img alt = {"Not found"} src = {props.SandyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
                   
                   <p>"Heyyoo" Hollers Sandy. "Welcome to the bar. This place is an absolute goldmine of information and hot gals. But you have to be careful. You don't want to go around angering people." </p>
                   <p>"You need to pay to enter the bar, and you can pay to access different sections of the bar. The richest wizards have the juiciest gossip."</p>
                   <p>"In the bar you can ask for news, gossip and most importantly, find girls" Sandy winks at you.</p>
                   <p>"Everyone you meet has something to offer, but if you piss them off, you might get cursed. Also be very careful if someone gives you anything. A ring, a weird drink, a shiny stone. If you ever get something like that, go to the store, Maria will tell you what it is."</p>
                   <p>"As I said, I have some things to do, but you should mingle around in the bar." Sandy takes some cash from her bag. "I'll pay for you this time"</p>

                    
    
                <Link to={"/TheBar"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GoToTheBar}>Enter the bar</button>
                </Link>  
            </Col3>
            </>
  
      )
    } 
    
    
    
    else {


        if(!props.flags.includes("GALLERY_DISCOVERED")){
            props.onPushFlag("BartenderWillTellYouAboutTheGallery");
        }

        let GoToGameMap = () =>{
            props.onAddMinutes(10);
        }

        let EnterTheBar = () =>{
            props.onAddMinutes(10);
            props.onAddMoney(-100);
        }


        let theLinks = () =>{
            return(
                <Link to={"/TheBar"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {EnterTheBar} disabled = {(props.money > 100 ? false:true)}>Pay $100 to enter the bar</button>
                </Link> 
            )  
        }

        if(props.flags.includes("WITH_EVE")){
            return(
                <>
                <Col1>
                    <SetCol1></SetCol1>
                </Col1>
                <Evelyn
                    backImageChar = {outsideBar}
                    ImageChar = {props.EveImage}
                    ImageCharS1 = {props.EveImageS1}
                    ImageCharS2 = {props.EveImageS2}
                    ImageCharS3 = {props.EveImageS3}
                    VideoCharFuckingS4 = {props.fuckingEveVideo_s4}
                    characterImageWidth = {props.characterImageWidth}
                    characterImageHeight = {props.characterImageHeight}
                    CurrentLocation = {CurrentLocation}
                    DrugStealthModifier = {props.DrugStealthModifier}
                > 
                    
                </Evelyn>
                </>
            )
    }

    if(props.flags.includes("WITH_SANDY")){
        return(
            <>
            <Col1>
                <SetCol1></SetCol1>
            </Col1>
            <Sandy
                backImageChar = {outsideBar}
                ImageChar = {props.SandyImage}
                ImageCharS1 = {props.SandyImageS1}
                ImageCharS2 = {props.SandyImageS2}
                ImageCharS3 = {props.SandyImageS3}
                VideoCharFuckingS4 = {props.fuckingSandyVideo_s4}
                characterImageWidth = {props.characterImageWidth}
                characterImageHeight = {props.characterImageHeight}
                CurrentLocation = {CurrentLocation}
                DrugStealthModifier = {props.DrugStealthModifier}
            > 
                
            </Sandy>
            </>
        )
    }

    if(props.flags.includes("WITH_AMY")){
        return(
            <>
            <Col1>
                <SetCol1></SetCol1>
            </Col1>
            <Amy
                backImageChar = {outsideBar}
                ImageChar = {props.AmyImage}
                ImageCharS1 = {props.AmyImageS1}
                ImageCharS2 = {props.AmyImageS2}
                ImageCharS3 = {props.AmyImageS3}
                VideoCharFuckingS4 = {props.fuckingAmyVideo_s4}
                characterImageWidth = {props.characterImageWidth}
                characterImageHeight = {props.characterImageHeight}
                CurrentLocation = {CurrentLocation}
                DrugStealthModifier = {props.DrugStealthModifier}
            > 
                
            </Amy>
            </>
        )
    }


    if(Math.random() < .05 && props.flags.includes("MET_EVE")){
        
        return(
            <>
            <Col1>
                <SetCol1></SetCol1>
            </Col1>
            <Evelyn
                backImageChar = {outsideBar}
                ImageChar = {props.EveImage}
                ImageCharS1 = {props.EveImageS1}
                ImageCharS2 = {props.EveImageS2}
                ImageCharS3 = {props.EveImageS3}
                VideoCharFuckingS4 = {props.fuckingEveVideo_s4}
                characterImageWidth = {props.characterImageWidth}
                characterImageHeight = {props.characterImageHeight}
                CurrentLocation = {CurrentLocation}
                DrugStealthModifier = {props.DrugStealthModifier}
            > 
                <p>Hello {props.name} I come here to see the stars and relax. </p>
                {theLinks()}
            </Evelyn>
            </>
        )
    } else if(Math.random() < 0.10 && props.flags.includes("MET_AMY")){
        
        return(
            <>
            <Col1>
                <SetCol1></SetCol1>
            </Col1>
            <Amy
                backImageChar = {outsideBar}
                ImageChar = {props.AmyImage}
                ImageCharS1 = {props.AmyImageS1}
                ImageCharS2 = {props.AmyImageS2} 
                ImageCharS3 = {props.AmyImageS3}
                VideoCharFuckingS4 = {props.fuckingAmyVideo_s4}
                characterImageWidth = {props.characterImageWidth}
                characterImageHeight = {props.characterImageHeight}
                CurrentLocation = {CurrentLocation}
                DrugStealthModifier = {props.DrugStealthModifier}
            > 
                <p>Hey! This is a really nice place to study the stars</p>
                {theLinks()}
            </Amy>
            </>
        )
    } else if(Math.random() < 0.15 && props.flags.includes("MET_SANDY")){
        
        return(
            <>
            <Col1>
                <SetCol1></SetCol1>
            </Col1>
            <Sandy
                backImageChar = {outsideBar}
                ImageChar = {props.SandyImage}
                ImageCharS1 = {props.SandyImageS1}
                ImageCharS2 = {props.SandyImageS2}
                ImageCharS3 = {props.SandyImageS3}
                VideoCharFuckingS4 = {props.fuckingSandyVideo_s4}
                characterImageWidth = {props.characterImageWidth}
                characterImageHeight = {props.characterImageHeight}
                CurrentLocation = {CurrentLocation}
                DrugStealthModifier = {props.DrugStealthModifier}
            > 
                <p>Howdy {props.name}. I love this place, away from all the mess of the city</p>
                {theLinks()}
            </Sandy>
            </>
        )
    }
    

    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {outsideBar}>
            </Col2>  
    
            <Col3 > 
                   
                   <p></p>
    
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GoToGameMap}>Game map</button>
                </Link>  
                <Link to={"/TheBar"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {EnterTheBar} disabled = {(props.money > 100 ? false:true)}>Pay $100 to enter the bar</button>
                </Link>  
            </Col3>
            </>
  
      )

    }

}


export default TheBarOutside;