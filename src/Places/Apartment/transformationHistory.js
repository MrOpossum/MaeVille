import React from 'react';
import { Link } from 'react-router-dom';
import Col1 from "../../components/col1";
import Col2 from "../../components/col2";
import Col3 from "../../components/col3";
import SetCol1 from "../../components/SetCol1";


import Bedroom from "../../Images/Bedroom/Apartment.jpg";

import anri_emily_white_dress_transparent from "../../Images/Characters/Anri-Flat-EM/anri_emily_white_dress_transparent.png";
import P_g_red_tank_top_transparent from "../../Images/Characters/Palin-gotti-Mid_amy/P_g_red_tank_top_transparent.png";

const transformationHistory = ( props ) => {
    
    if(props.flags.includes("TransformationHistorySandy")){
        
        const transformationHistoryGoBack = () =>{
            props.onSpliceFlag("TransformationHistorySandy");
            props.onAddMinutes(10);
        }
        
        return(
            <>
            <Col1>
                <SetCol1/>
            </Col1>
            <Col2 BackImage = {Bedroom}>
                <img alt = {"Not found"} src={anri_emily_white_dress_transparent} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                <img alt = {"Not found"} src={props.SandyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>
    
            <Col3 > 
    
                <Link to={"/transformationHistory"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick ={transformationHistoryGoBack}>*Sigh*</button>
                </Link>
                
            </Col3>
            </>
        );

    } else if(props.flags.includes("TransformationHistoryAmy")){
        const transformationHistoryGoBack = () =>{
            props.onSpliceFlag("TransformationHistoryAmy");
            props.onAddMinutes(10);
        }
        
        return(
            <>
            <Col1>
                <SetCol1/>
            </Col1>
            <Col2 BackImage = {Bedroom}>
            <img alt = {"Not found"} src={P_g_red_tank_top_transparent} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            <img alt = {"Not found"} src={props.AmyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>
    
            <Col3 > 
    
                <Link to={"/transformationHistory"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick ={transformationHistoryGoBack} >*Sigh*</button>
                </Link>
                
            </Col3>
            </>
        );
    }
    
    else {
        const inspectSandyChanges = () =>{
            props.onPushFlag("TransformationHistorySandy");
            props.onAddMinutes(10);
        }

        const inspectAmyChanges = () =>{
            props.onPushFlag("TransformationHistoryAmy");
            props.onAddMinutes(10);
        }

        const transformationGoBackHome = () =>{
            props.onAddMinutes(10);
        }
    
        return(
            <>
            <Col1>
                <SetCol1/>
            </Col1>
            <Col2 BackImage = {Bedroom}>
                
            </Col2>
    
            <Col3 > 
                <p>
                    It has been a long way since we started. People have changed. Who do you want to remember?
                </p>
    
                <Link to={"/transformationHistory"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick ={inspectSandyChanges} style={{display: 
                        ( 
                            (props.flags.includes("MET_SANDY")) ? "":"none"
                        )}}
                        >Sandy</button>
                </Link>
                <Link to={"/transformationHistory"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick ={inspectAmyChanges} style={{display: 
                        ( 
                            (props.flags.includes("MET_AMY")) ? "":"none"
                        )}}
                        >Amy</button>
                </Link>
                <Link to={"/Home"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick={transformationGoBackHome}>Go back</button>
                </Link>
                
    
            </Col3>
            </>
        );
    }
    
    
    


}


export default transformationHistory;