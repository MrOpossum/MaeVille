import React, {useEffect} from "react";
import { Link } from "react-router-dom";

import Col1 from "../../components/col1";
import Col2 from "../../components/col2";
import Col3 from "../../components/col3";
import SetCol1 from "../../components/SetCol1";

//Images


const TheAcademy = (props) => {

    const [inputTextValue, setInputTextValue] = useEffect("");

    if(props.flags.includes("LISA_DIRECTOR_GRABS_YOU_INTO_ACADEMY")){
        let GoToDormAtAcademyAfterIntroduction = () =>{
            props.onAddMinutes(10);
            props.onPushFlags("GoToDormAtAcademyAfterIntroduction");
            props.onSpliceFlag("LISA_DIRECTOR_GRABS_YOU_INTO_ACADEMY");
        }
    
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {asdasd}>
                
            </Col2>  
            
            <Col3 > 

                <p>The woman takes you to a massive office. She sits down and glances at you briefly.</p>
                <p>"Mss. {props.name}. You will start our program tomorrow moring. For now you should go to the dorm with your new roomates." The woman says</p>
                <p>"Oh, and Mss. {props.name}, You should think of a proper name for yourself."</p>
                <TextField
                    value={inputTextValue}
                    onChange={(event) => setInputTextValue(event.target.value)}
                    placeholder={props.name}
                />

                
                   
                <Link to={"/TheAcademyDorm"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GoToDormInAcademy} >Go to dorm</button>
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
            <Col2 BackImage = {asdasd}>
                    
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


export default TheAcademy;