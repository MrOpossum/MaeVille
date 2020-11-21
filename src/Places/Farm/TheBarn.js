import React from 'react';
import { Link } from 'react-router-dom';
import Col1 from "../../components/col1";
import Col2 from "../../components/col2";
import Col3 from "../../components/col3";
import SetCol1 from "../../components/SetCol1";


//Images
import FarmgirlOwner from "../../Images/Farm/farmgirl_owner.jpg";
import FarmBarn from "../../Images/Farm/farm_barn.jpg";



const TheBarn = ( props ) => {

    const addMinutesFunc = () =>{
        props.onAddMinutes(10)
    }

    if(props.flags.includes("FARM_UNVISITED")){
        props.onSpliceFlag("FARM_UNVISITED");

        const HowDoesFarmWorkFunc = () =>{
            props.onAddMinutes(20);
            props.onPushFlag("HOW_DOES_FARM_WORK");
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
            <Col2 BackImage = {FarmgirlOwner}>
                
            </Col2>
    
            <Col3 > 
                <p>"Welcome!" You hear someone say. "I have not seen you around before, do you need any help?"</p>        
                
                <Link to={"/TheBarn"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick ={HowDoesFarmWorkFunc}>Yes, how does this farm work?</button>
                </Link>
                <Link to={"/TheBarn"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary">No, I don't need help</button>
                </Link>
                
            </Col3>
            </>
            )
    
    } else if(props.flags.includes("HOW_DOES_FARM_WORK")){
        props.onSpliceFlag("HOW_DOES_FARM_WORK");
        return(
<>
            <Col1>
                <SetCol1
                money = {props.money}
                energy = {props.energy}
                date = {props.date}
                />
            </Col1>
            <Col2 BackImage = {FarmgirlOwner}>
                
            </Col2>
    
            <Col3 > 
            <p>"Well, this is my small business dream. Here you can take anything you work for, I just get a small cut of anything you make." - Said the cowgirl.
            "Here, have a flask, try milking the cows over there, a lovely girl is already doing so."</p>
                
                <Link to={"/MilkCowsAtFarm"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" >Go milk the cows</button>
                </Link>
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary">Leave</button>
                </Link>
    
            </Col3>
            </>
            
        );
    }
    
    
    else{
        return(
            <>
            <Col1>
                <SetCol1
                money = {props.money}
                energy = {props.energy}
                date = {props.date}
                />
            </Col1>
            <Col2 BackImage = {FarmBarn}>
                
            </Col2>
    
            <Col3 > 
                <p>You are at the farm. A nice oasis of nature outside the city.</p>
              
    
                <Link to={"/MilkCowsAtFarm"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick={addMinutesFunc}>Milk the cows</button>
                </Link>
                <Link to={"/FarmStore"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick={addMinutesFunc}>Go to the farm store</button>
                </Link>
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick={addMinutesFunc}>Game Map</button>
                </Link>

    
            </Col3>
            </>
            )
    }


    



    }
export default TheBarn;

