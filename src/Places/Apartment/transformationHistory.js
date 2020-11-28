import React from 'react';
import { Link } from 'react-router-dom';
import Col1 from "../../components/col1";
import Col2 from "../../components/col2";
import Col3 from "../../components/col3";
import SetCol1 from "../../components/SetCol1";


import Bedroom from "../../Images/Bedroom/Apartment.jpg";

import AnriRhoadesBlueCowgirlBikini_transparent from "../../Images/Bedroom/AnriRhoadesBlueCowgirlBikini_transparent.png";
import anri_emily_white_dress_transparent from "../../Images/Characters/Anri-Flat-EM/anri_emily_white_dress_transparent.png";
import P_g_whiteTop_frontView_Transparent from "../../Images/Characters/Palin-gotti-Mid_amy/P_g_whiteTop_frontView_Transparent.png";

let characterImageHeight = "400px";
let characterImageHeightAmy = "500px";



const transformationHistory = ( props ) => {

    if(props.flags.includes("SandyMidBreasts_1")){
        var SandyImage = AnriRhoadesBlueCowgirlBikini_transparent;
    } else{
        var SandyImage = anri_emily_white_dress_transparent;
    }

    if(props.flags.includes("AmyLargeBreasts_1")){
        var AmyImage = ""
    } else{
        var AmyImage = P_g_whiteTop_frontView_Transparent
    }
    
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
                <div className = "row">
                    <div className = "col-6">
                        <img src={SandyImage} height={characterImageHeight}></img>
                    </div>
                    <div className = "col-6">
                        <img src={P_g_whiteTop_frontView_Transparent} height={characterImageHeight}></img>
                    </div>
                </div>
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
                <div className = "row">
                    <div className = "col-6">
                        <img src={AmyImage} height={characterImageHeightAmy}></img>
                    </div>
                    <div className = "col-6">
                        <img src={anri_emily_white_dress_transparent} height={characterImageHeightAmy}></img>
                    </div>
                </div>
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
    
        let amyEnabledButton = "none";
        let sandyEnabledButton = "none";

        if(props.flags.includes("MET_AMY")){
            amyEnabledButton = "";
        }

        if(props.flags.includes("MET_SANDY")){
            sandyEnabledButton = "";
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
                    <button type="button" className="btn btn-primary" onClick ={inspectSandyChanges} style = {{display:sandyEnabledButton}}>Sandy</button>
                </Link>
                <Link to={"/transformationHistory"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick ={inspectAmyChanges} style = {{display:amyEnabledButton}}>Amy</button>
                </Link>
                <Link to={"/Home"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick={transformationGoBackHome}>Go back home</button>
                </Link>
                
    
            </Col3>
            </>
        );
    }
    
    
    


}


export default transformationHistory;