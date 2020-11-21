import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Col1 from "../../components/col1";
import Col2 from "../../components/col2";
import Col3 from "../../components/col3";
import SetCol1 from "../../components/SetCol1";


//Images
import BegginingSandyOutside from "../../Images/Apartment_outside/Sandy-A_outside-Anri_Emily.png";

const LacBraQHelpSandyOpenDoor = ( props ) => {

    const addMinutesFunc = () =>{
        props.onAddMinutes(10); 
    }

    const KeepListeningToSandyFunc = ()=>{
        props.onAddMinutes(10); 
        props.onChangeRelationship("Sandy",10);
        props.onPushFlag("ListenMoreToSandy");
    }

    if(props.flags.includes("ListenMoreToSandy")){
        props.onSpliceFlag("ListenMoreToSandy");
        return(
        <>
        <Col1>
            <SetCol1
                money = {props.money}
                energy = {props.energy}
                date = {props.date}
            />
        </Col1>
        <Col2 BackImage = {BegginingSandyOutside}>            
        </Col2>

        <Col3 > 
        <p>"It's tricky to open the front door" - you say. You explain that you need to turn the key a bit before actually inserting it.</p>
              <p>You then present yourself. Just after you finish she answers exitedly - "Thank you! I am Sandy. Just moved in! We are neighbors! This city is great, did you know there is a farm just outside the city? I think I will go there, since I come from a farm, but now I'm here because I need to study and get a job. I think I will get a job as a... ...waiter, but I'm not sure how, maybe as a barista, because I like coffe. I'm also not sure what I want to study, I wanted to study art, but my friends say I will not make any money. Maybe somehting else like....." -She talks but at this point you can't process anything.</p>

              <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick ={addMinutesFunc}>Head out</button>
              </Link>

        </Col3>
        </>
        )
    } else{
        if(!props.flags.includes("MET_SANDY")){
            props.onPushFlag("MET_SANDY");
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
        <Col2 BackImage = {BegginingSandyOutside}>            
        </Col2>

        <Col3 > 
              <p>"It's tricky to open the front door" - you say. You explain that you need to turn the key a bit before actually inserting it.</p>
              <p>You then present yourself. Just after you finish she answers exitedly - "Thank you! I am Sandy. Just moved in! We are neighbors! This city is great, did you know there is a farm just outside the city? I think I will go there, since I come from a farm, but now I'm here because I need to study and get a job. I think I will get a job as a......". She talks, a lot. And you can feel her zest for life in every sentence.</p>
              
              <Link to={"/LacBraQHelpSandyOpenDoor"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick ={KeepListeningToSandyFunc}>Keep listening</button>
              </Link>
              

              <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick ={addMinutesFunc}>Head out</button>
              </Link>

        </Col3>
        </>
        )
    }
}


    

export default LacBraQHelpSandyOpenDoor;

