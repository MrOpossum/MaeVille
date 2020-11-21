import React from 'react';
import { Link } from 'react-router-dom';

import Col1 from "../components/col1";
import Col2 from "../components/col2";
import Col3 from "../components/col3";


//Images
import madrid from '../Images/Banners/madrid.png'
import Window_black_pink_flash from "../Images/Bedroom/Window_black_pink_flash.png"


const _0_Start = ( props ) => {

    function changeNameFunc(){
        if(document.getElementById("_0_Start_name_input").value === ""){
            props.changeName("Max");    
        } else{
            props.changeName(document.getElementById("_0_Start_name_input").value);
        }

    }

    return(
        <>
        <Col1 BackImage = {madrid}>
          <h1 id="col_1_title"> MayVille </h1>
        </Col1>
        <Col2 BackImage = {Window_black_pink_flash}>
            <p>
              You are <input type="text" placeholder="Max" id ="_0_Start_name_input"/> You live alone in a small apartment. You are currently unemployed and living from government checks. 
            </p>
            <p>One night you see a flash of light through your window.</p>
        </Col2>

        <Col3 > 
        <Link to={"/_1_Inspect"} style={{ textDecoration: "none" }}>
            <button type="button" className="btn btn-primary" onClick={changeNameFunc}>Inspect</button>
        </Link>
        <Link to={"/_1_Ignore"} style={{ textDecoration: "none" }}>
            <button type="button" className="btn btn-primary" onClick={changeNameFunc}>Ingore</button>
        </Link>
        </Col3>
        </>
        )



    }
export default _0_Start;

