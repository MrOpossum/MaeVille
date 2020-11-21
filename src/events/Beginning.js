import Button from '@material-ui/core/Button';
import React from 'react';
import { Link } from 'react-router-dom';


import Col1 from "../components/col1";
import Col2 from "../components/col2";
import Col3 from "../components/col3";

import Upload from "../components/Upload";


//Images
import madrid from '../Images/Banners/madrid.png'
import anri_emily_lying_down_transparent from '../Images/Characters/Anri-Flat-EM/anri-emily-lying_down_transparent.png';



const Beginning = ( props ) => {

    let disabledContinueButton = true

    if(props.date - new Date(2020,0,1,0,0) === 0){
    }else{
        disabledContinueButton = false;
    }

    let logTheFlags = () =>{
        console.log("Your flags are: ", props.flags);
    }
    
    //Linked place:
    console.log(props.currentLink)

    return(
            <>
            <Col1 BackImage = {madrid}>
                <h1 id="col_1_title"> MayVille </h1>
            </Col1>
            <Col2 BackImage = {anri_emily_lying_down_transparent}>
                <h2>Welcome, I hope you enjoy the game.</h2>
                <p>I plan to build an amazing open-world game for all transformation lovers.</p>
                <p>This game contains graphic adult content. Only play this if you are 18 or older</p>
                <Link to={"/_0_Start"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary">I can play the game</button>
                </Link>
                    <p>If you have a save file, upload it here</p>
                <Button>
                    <Upload/>    
                </Button>
                

                <Link to={props.currentLink} style={{ textDecoration: "none" }} >
                    <button type="button" className="btn btn-primary" disabled = {disabledContinueButton}
                    onClick = {logTheFlags}>Continue from save file</button>
                </Link>
            </Col2>

            <Col3 BackImage = {madrid} > 
            </Col3>
            </>
        )



    }
export default Beginning;

