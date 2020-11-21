import React from 'react';
import { Link } from 'react-router-dom';
import Col1 from "../../components/col1";
import Col2 from "../../components/col2";
import Col3 from "../../components/col3";
import SetCol1 from "../../components/SetCol1";


//Images
import Bedroom from "../../Images/Bedroom/Apartment.jpg"



const Home = ( props ) => {

    const addMinutesFunc = () =>{
        props.onAddMinutes(20)
    }

    const SleepAtHomeClickFunc = () =>{
        props.onAddMinutes(480);
        props.onSetEnergy(100);
    }

    const setEnergy100 = () =>{
        props.onSetEnergy(100);
    }


    if(props.flags.includes("FirstMorningFap")){
        props.onSpliceFlag("FirstMorningFap");
        props.onPushFlag("FirstMorning")
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
            <Col2 BackImage = {Bedroom}>
                
            </Col2>
    
            <Col3 > 
                <p>
                    Dawn comes. The first thing you notice is the massive hard-on in your pants, fuck, you are horny. You shift around bumping your dick against the sheets, until you...
                </p>
                
                <Link to={"/FapInApartment"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick ={addMinutesFunc}>Masturbate</button>
                </Link>
                <Link to={"/Home"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary">Ignore it</button>
                </Link>
    
            </Col3>
            </>
            )
    
    } else if (props.flags.includes("FirstMorning")){
        props.onSpliceFlag("FirstMorning");
        
        if(Math.random() < .65){
            props.onPushFlag("WillMeetSandyOutsideApartment")
        } else{
            props.onPushFlag("WillMeetAmyOutsideApartment")
        }

        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {Bedroom}>
                
            </Col2>
    
            <Col3 > 
                <p>
                    You hear unusual movement outside your apartment.
                </p>
                
                <Link to={"/GoOutside"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary">Go outside</button>
                </Link>
    
            </Col3>
            </>
            )
    } else if(props.flags.includes("WearingLacBracelet") && props.items["LacBracelet"] > 0 && props.items["farmCowMilkBottle"] > 0){
        const DrankMilkWithLacBraClick = () =>{
            props.onPushFlag("DrankMilkwithLacBracelet");
            props.onSpliceFlag("WearingLacBracelet");
            props.onAddEnergy(5);
            props.onAddMinutes(10);
            if(props.energy > 100){
                setEnergy100()
            }
            props.onAddItem("farmCowMilkBottle",-1);
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
                    You are home. It has been an nice day until now. You feel a little groggy.
                </p>

                <p>
                    Note that you have some fresh milk in your inventory. Drinking it would help you get some energy.
                </p>
    
                <Link to={"/GoOutside"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary">Go outside</button>
                </Link>
                <Link to={"/Home"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick ={DrankMilkWithLacBraClick}>Drink milk</button>
                </Link>
                <Link to={"/SleepAtHome"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick ={SleepAtHomeClickFunc}>Sleep</button>
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
                onAddMinutes = {props.onAddMinutes}
                onAddEnergy = {props.onAddMinutes}
                />
            </Col1>
            <Col2 BackImage = {Bedroom}>
                
            </Col2>
    
            <Col3 > 
                <p>
                    You are home.
                </p>
    
                <Link to={"/GoOutside"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary">Go outside</button>
                </Link>
                <Link to={"/SleepAtHome"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick ={SleepAtHomeClickFunc}>Sleep</button>
                </Link>
                
    
            </Col3>
            </>
            )
    }


    



    }
export default Home;

