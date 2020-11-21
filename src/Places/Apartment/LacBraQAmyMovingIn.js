import React from 'react';
import { Link } from 'react-router-dom';

import Col1 from "../../components/col1";
import Col2 from "../../components/col2";
import Col3 from "../../components/col3";
import SetCol1 from "../../components/SetCol1";


//Images
import BegginingAmyOutside from "../../Images/Apartment_outside/Amy-A_outside-BP_Gotti.png";

const LacBraQAmyMovingIn = ( props ) => {

    const addMinutesFunc = () =>{
        props.onAddMinutes(10); 
    }

    const OfferedHelpToMoveBoxes = ()=>{
        props.onAddMinutes(10); 
        props.onChangeRelationship("Amy",3);
        props.onPushFlag("LACQBRA_OFFERED_AMY_TO_MOVE_BOXES");
    }

    if(props.flags.includes("LACQBRA_OFFERED_AMY_TO_MOVE_BOXES")){
        props.onSpliceFlag("LACQBRA_OFFERED_AMY_TO_MOVE_BOXES");

        return(
        <>
        <Col1>
            <SetCol1
                money = {props.money}
                energy = {props.energy}
                date = {props.date}
            />
        </Col1>
        <Col2 BackImage = {BegginingAmyOutside}>            
        </Col2>

        <Col3 > 
        
             <p>"Thank you!" - Says Amy. "But I'm almost finished and I'd rather finish by myself". Amy does seem glad you asked.</p>
              <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick ={addMinutesFunc}>Head out</button>
              </Link>

        </Col3>
        </>
        )
    } else{
        if(!props.flags.includes("MET_AMY")){
            props.onPushFlag("MET_AMY");
        }
        
    return(
        <>
        <Col1>
            <SetCol1
                money = {props.money}
                energy = {props.energy}
                date = {props.date}
            />
        </Col1>
        <Col2 BackImage = {BegginingAmyOutside}>            
        </Col2>

        <Col3 > 
                <p>Hello! Nice to meet you. I am Amy and I just moved in. </p>
                <p>Amy walks into the building, she seems in a hurry.</p>
              
              <Link to={"/LacBraQAmyMovingIn"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick ={OfferedHelpToMoveBoxes}>Help Amy move the boxes</button>
              </Link>
              

              <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick ={addMinutesFunc}>Leave</button>
              </Link>

        </Col3>
        </>
        )
    }
}


    

export default LacBraQAmyMovingIn;

