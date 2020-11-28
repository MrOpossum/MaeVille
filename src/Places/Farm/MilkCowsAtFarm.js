import React from 'react';

import { Link } from 'react-router-dom';

import Col1 from "../../components/col1";
import Col2 from "../../components/col2";
import Col3 from "../../components/col3";
import SetCol1 from "../../components/SetCol1";


//Images
import FarmCowLyingDown from "../../Images/Farm/farm_cow_lying_down.jpg";
import AnriEmilyFarmGirl from "../../Images/Farm/anri_emily-cowgirl_swap-Transparent.png";

const MilkCowsAtFarm = ( props ) => {

    
    let addMinutesFunc =() =>{
        props.onAddMinutes(5);
    }
    

    let FindBraceletWithCowsBeginning = () => {
        props.onAddMinutes(120); 
        let currentEnergy = props.energy;
        currentEnergy = currentEnergy - 25 * (Math.random()/(props.skills["Milking"]+1))
        props.onSetEnergy(currentEnergy);
        props.onAddSkills("Milking",Math.random() * 5);
        props.onAddItem("farmCowMilkBottle",1);
        props.onPushFlag("FindBraceletAfteRMilkingCows")
    }

    let GenericCowMilk = () => {
        props.onAddMinutes(120); 
        let currentEnergy = props.energy;
        currentEnergy = currentEnergy - 25 * (Math.random() * 10/(props.skills["Milking"]+1)) 
        props.onSetEnergy(currentEnergy);
        let ObtainedBottles = Math.floor(Math.log2(props.skills["Milking"] + (Math.random() * 10))/2);
        props.onAddSkills("Milking",Math.random() * 5);
        props.onAddItem("farmCowMilkBottle",ObtainedBottles);

    }

    if(props.flags.includes("LacBraQSandyInFarm")){
        const LACBRAQInterceptSandy = () =>{
            props.onAddMinutes(10); 
            props.onPushFlag("LACBRAQInterceptSandy");
            props.onChangeRelationship("Sandy",2);
        }

        props.onSpliceFlag("LacBraQSandyInFarm");

        if(props.flags.includes("MET_SANDY")){
            return(
                <>
                <Col1>
                    <SetCol1
                money = {props.money}
                energy = {props.energy}
                date = {props.date}
                onAddMinutes = {props.onAddMinutes}
                onAddEnergy = {props.onAddMinutes}
                />
                </Col1>
                <Col2 BackImage = {FarmCowLyingDown}>            
                <img src = {AnriEmilyFarmGirl} style = {{height: "65vh"}} alt = {"Can't Find"}/>
                </Col2>
        
                <Col3 > 
                
                    <p>You see that Sandy just finished filling her third flask of milk. She hurriedly gets up and heads to the exit.</p>
        
                      <Link to={"/MilkCowsAtFarm"} style={{ textDecoration: "none" }}>
                            <button type="button" className="btn btn-primary" onClick ={LACBRAQInterceptSandy}>Intercept Sandy</button>
                      </Link>
                      <Link to={"/MilkCowsAtFarm"} style={{ textDecoration: "none" }}>
                            <button type="button" className="btn btn-primary" onClick ={FindBraceletWithCowsBeginning}>Let Sandy go and milk the cows</button>
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
                onAddMinutes = {props.onAddMinutes}
                onAddEnergy = {props.onAddMinutes}
                />
                </Col1>
                <Col2 BackImage = {FarmCowLyingDown}>            
                <img src = {AnriEmilyFarmGirl} style = {{height: "65vh"}} alt = {"Can't Find"}/>
                </Col2>
        
                <Col3 > 
                
                    <p>You see a a girl that just finished filling her third flask of milk. She hurriedly gets up and heads to the exit.</p>
                    <p>Hey! I have seen you. You live in the same building as I. I am Sandy. You are?</p>
        
                      <Link to={"/MilkCowsAtFarm"} style={{ textDecoration: "none" }}>
                        <button type="button" className="btn btn-primary" onClick ={LACBRAQInterceptSandy}>My name is {props.name}</button>
                      </Link>
                      <Link to={"/MilkCowsAtFarm"} style={{ textDecoration: "none" }}>
                            <button type="button" className="btn btn-primary" onClick ={FindBraceletWithCowsBeginning}>Let Sandy go and milk the cows</button>
                      </Link>
        
                </Col3>
                </>
            )
            
        }

        
    } else if(props.flags.includes("LACBRAQInterceptSandy")){
        props.onSpliceFlag("LACBRAQInterceptSandy");

        

        return(
            <>
                <Col1>
                    <SetCol1
                money = {props.money}
                energy = {props.energy}
                date = {props.date}
                onAddMinutes = {props.onAddMinutes}
                onAddEnergy = {props.onAddMinutes}
                />
                </Col1>
                <Col2 BackImage = {FarmCowLyingDown}>      
                <img src = {AnriEmilyFarmGirl} style = {{height: "65vh"}} alt = {"Can't Find"}/>      
                </Col2>
        
                <Col3 > 
                
                <p> "Hey!, Farms are great aren't they! And fresh milk is my absolute favourite! I love everything about this place!" - Sandy said, shuffling her feet.</p>
          
                <p>"{props.name}, I have so much to do, we'll talk later, ok?"</p>
        
                      <Link to={"/MilkCowsAtFarm"} style={{ textDecoration: "none" }}>
                        <button type="button" className="btn btn-primary" onClick ={FindBraceletWithCowsBeginning}>Milk the cows</button>
                      </Link>
                      <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                            <button type="button" className="btn btn-primary" onClick ={addMinutesFunc}>Leave the farm</button>
                      </Link>
        
                </Col3>
                </>
        )
    }
    
    else if(props.flags.includes("FindBraceletAfteRMilkingCows")){
        props.onSpliceFlag("FindBraceletAfteRMilkingCows");

        let LACBRAQWearBracelet = ()=>{
            props.onAddItem("LacBracelet",1)
            props.onPushFlag("WearingLacBracelet")
        }

        let LACBRAQTakeBracelet = ()=>{
            props.onAddItem("LacBracelet",1);
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
        <Col2 BackImage = {FarmCowLyingDown}>            
        </Col2>

        <Col3 > 
                <p>Turns out milking cows is easier than you expected! but you are not in shape and get tired easily. You manage to get one bottle of milk!</p>
                <p>Before leaving you notice something shiny in the grass, it's a bracelet. It's white and it has a small drop-shaped pendant on it.</p>

                
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick ={LACBRAQWearBracelet}>Wear the bracelet and leave</button>
                </Link>

                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick ={LACBRAQTakeBracelet}>Take the bracelet but don't wear it</button>
                </Link>

                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" >Leave</button> {/* Quest over */}
                </Link>
        
        </Col3>
        </>
        )

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
        <Col2 BackImage = {FarmCowLyingDown}>            
        </Col2>

        <Col3 > 
                <p>Milking cows takes some skill, but you will get better.</p>
                <p>You think your skill is around: {Math.floor(props.skills["Milking"])}</p>
                <Link to={"/MilkCowsAtFarm"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick ={GenericCowMilk}>Milk the cows</button>
                </Link>
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary">Leave the farm</button>
                </Link>
        
        </Col3>
        </>
        )
    }
}


    

export default MilkCowsAtFarm;

