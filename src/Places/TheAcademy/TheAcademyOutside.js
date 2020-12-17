import React from "react";
import { Link } from "react-router-dom";

import Col1 from "../../components/col1";
import Col2 from "../../components/col2";
import Col3 from "../../components/col3";
import SetCol1 from "../../components/SetCol1";

//Images
import AcademyOutside from "../../Images/TheAcademy/AcademyOutside.jpg"

const TheAcademyOutside = (props) => {

    if(props.flags.includes("AMY_WILL_SHOW_ACADEMY_0")){
        let MIDDLE_AGE_WOMAN_AT_ACADEMY_INTRODUCTION = () =>{
            props.onAddMinutes(10);
            props.onPushFlags("MIDDLE_AGE_WOMAN_AT_ACADEMY_INTRODUCTION");
            props.onSpliceFlag("AMY_WILL_SHOW_ACADEMY_0");
        }
    
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {AcademyOutside}>
                <img alt ={"Not found"} src={props.AmyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
            
            <Col3 > 

                <p>"So you came. This benefits us both." Amy comments. "Hurry, I don't want anyone here to recognize me." Amy pushes you. "You'll be fine" And Amy scatters. Her shilouette becoming a mere dot in the horizon.</p>
                   
                <Link to={"/TheAcademyOutside"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {MIDDLE_AGE_WOMAN_AT_ACADEMY_INTRODUCTION} >You see a middle-aged woman approach you</button>
                </Link>  
            </Col3>
            </>
  
      )
    } else if(props.flags.includes("MIDDLE_AGE_WOMAN_AT_ACADEMY_INTRODUCTION")){
        let LISA_DIRECTOR_GRABS_YOU_INTO_ACADEMY = () =>{
            props.onAddMinutes(10);
            props.onPushFlags("LISA_DIRECTOR_GRABS_YOU_INTO_ACADEMY");
            props.onSpliceFlag("MIDDLE_AGE_WOMAN_AT_ACADEMY_INTRODUCTION");
        }
    
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {AcademyOutside}>
                <img alt ={"Not found"} src={props.LisaImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
            
            <Col3 > 

                
                <p>"You must be the new student." The woman scoffs. "Too masculine for my taste, but we can fix that" She hits your sholder and pushes your back. "Bad posture. No breasts, no butt, ugly... Girl, you will be work" The cougar chuckles. "Luckly your family paid a lot for this.. I can se why."</p>
                <p>The woman grabs your arm. She's really strong. "Let's go."</p>
                   
                <Link to={"/TheAcademy"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LISA_DIRECTOR_GRABS_YOU_INTO_ACADEMY} >The woman drags you in.</button>
                </Link>  
            </Col3>
            </>
  
      )
    }


    else {
        let GoToGameMap = () =>{
            props.onAddMinutes(10);
        }
    
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {AcademyOutside}>
                    
            </Col2>  
    
            <Col3 > 
                   
                   
    
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GoToGameMap}>Game map</button>
                </Link>  
            </Col3>
            </>
  
      )

    }

}


export default TheAcademyOutside;