import React, {useEffect, useState} from "react";
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

    function LetsGoNoTut(){
        alert(`Lets give you some juicy spoilers then. \n What you need to know is that two witches (Amy, and Sandy) just moved into your apartment building. \n Turns out that one of them accidentally involved you into a world of magic. \n Amy comes from a long dinasty of wizards, and her family is pretty wealthy. Sandy is a "new blood" witch. Which means that she is the first in her family to learn magic. \n The witches moved here because this city, Maeville, has awakened strong (lewd) magic. And plenty of wizards have come to try their luck and discover what this place has to offer. But be careful, magic can change you in unexpected ways. \n In this game I'm building an open world where you can choose your path. Will you become a scientist who wants do know why magic works? Will you become a fighter who wants to become stronger than anyone else? Will you find runes to transform yourself, or seduce others?`);
        if(document.getElementById("_0_Start_name_input").value === ""){
            props.changeName("Max");    
        } else{
            props.changeName(document.getElementById("_0_Start_name_input").value);
        }

        props.onSpliceFlag("FARM_UNVISITED");
        props.onPushFlag("MET_AMY");
        props.onPushFlag("MET_SANDY");
        props.onPushFlag("STORE_DISCOVERED");
        props.onPushFlag("FUR_FOREST_DISCOVERED");
        props.onPushFlag("BAR_DISCOVERED");
        props.onPushFlag("HILL_DISCOVERED");
        props.onPushFlag("EVEMQMeetEveAtTheBar");
        props.onAddMoney(300);
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
            
            <p>Hello! This game is in early development, and I realized that the beginning might be confusing. So if you want to see some kindof random events with some sexy scenes attached, you are most welcome. ( ͡° ͜ʖ ͡°)</p>
            <p>Else. If you want to start the game ASAP. Just read the following <a>spoilers</a> </p>
            
            
            <Link to={"/Home"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick={LetsGoNoTut}>Let's go.</button>
            </Link>


            
        </Col3>
        </>
        )



    }
export default _0_Start;


