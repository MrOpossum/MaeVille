import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';

import Col1 from "../../components/col1";
import Col2 from "../../components/col2";
import Col3 from "../../components/col3";
import SetCol1 from "../../components/SetCol1";

//Images
import TheOffice from "../../Images/TheAcademy/TheOffice.jpg"


const TheAcademyOffice = (props) => {

    const [inputTextValue, setInputTextValue] = useState("");

    if(props.flags.includes("LISA_DIRECTOR_GRABS_YOU_INTO_ACADEMY")){
        let GoToDormAtAcademyAfterIntroduction = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("GoToDormAtAcademyAfterIntroduction");
            props.onSpliceFlag("LISA_DIRECTOR_GRABS_YOU_INTO_ACADEMY");
        }
    
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {TheOffice}>
                <img alt ={"Not found"} src={props.LisaImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
            
            <Col3 > 

                <p>The woman takes you to a massive office. She sits down and glances at you briefly.</p>
                <p>"Mss. {props.name}. You will start our program tomorrow moring. For now you should go to the dorm with your new roomates." The woman says</p>
                <p>"Oh, and Mss. {props.name}, You should think of a proper name for yourself."</p>
                <p></p>
                <TextField
                    value={inputTextValue}
                    onChange={(event) => setInputTextValue(event.target.value)}
                    placeholder={props.name}
                    style = {{marginLeft: "15px", backgroundColor:"white"}}
                />
                <p></p>

                
                   
                <Link to={"/TheAcademyDorm"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GoToDormAtAcademyAfterIntroduction} >Go to dorm</button>
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
            <Col2 BackImage = {TheOffice}>
            <img alt ={"Not found"} src={props.LisaImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                    
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


export default TheAcademyOffice;