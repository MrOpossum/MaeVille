import React from 'react';
import { Link } from 'react-router-dom';
import Col1 from "../../components/col1";
import Col2 from "../../components/col2";
import Col3 from "../../components/col3";
import SetCol1 from "../../components/SetCol1";


//Images
import Bedroom from "../../Images/Bedroom/Apartment.jpg";
import AnriRhoadesBlueCowgirlBikini_transparent from "../../Images/Bedroom/AnriRhoadesBlueCowgirlBikini_transparent.png";
import anri_emily_white_dress_transparent from "../../Images/Characters/Anri-Flat-EM/anri_emily_white_dress_transparent.png";


let characterImageHeight = "400px";
let characterImageHeightAmy = "500px";

const Home = ( props ) => {

    if(props.flags.includes("SandyMidBreasts_1")){
        var SandyImage = AnriRhoadesBlueCowgirlBikini_transparent;
    } else{
        var SandyImage = anri_emily_white_dress_transparent;
    }

    const addMinutesFunc = () =>{
        props.onAddMinutes(20)
    }

    const SleepAtHomeClickFunc = () =>{
        props.onAddMinutes(480);
        props.onSetEnergy(100);
    }

    const goToTransformationHistory = () =>{
        props.onAddMinutes(10);
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
            console.log(props.items);
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
    } else if(props.flags.includes("LACBRAQGoHomeWithSandyNoMilkDrink")){
        let LACBRAQWakeUpInApartmentSandyLeaves = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("LACBRAQGoHomeWithSandyNoMilkDrink");
            props.onChangeRelationship("Sandy",1);
            props.onPushFlag("SandyTeachesMagicQuestInHerApartmentPart_1");
        }
        

        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {Bedroom}>    
                <img src={SandyImage} height={characterImageHeight}></img>
            </Col2>
            
            <Col3 > 
            <p>You see Sandy. She is smiling. "Well... I guess I have some explaining to do." Says Sandy. You notice her breasts have shrunk since yesterday, but they are larger than before. </p>
            <p>"Hey." Sandy snaps her fingers. "I know they are new and lovely, but I need your attention"... Sandy sighs.
            "Magic exists {props.name}, it's very real. As real as these new boobies. Usually most people never realize. But you had to go to the farm last night.</p>
            <p>I know its confusing, but magic happens every single day, everywhere around us. It's is not easy to understand, I don't think anyone really understands how it works. And now you are part of this world. Once you have direct contact with magic it will be drawn to you, you can't ignore it anymore. </p>
            <p>Since I did this to you I will help you as much as I can. But I am not an expert, I am not even good at this." Amy stretches.
            "{props.name}, you should know that this city is special. The magic around here is strentening, and it's nothing like we have ever seen before. A lot of pople will move here. Good people, bad people, everything in between. We'll have to be really careful."</p>
            <p>"You should also know that you will be safe inside this building. Let me tell ya: In this same building there is another magic user. Her name is Amy. And her family is really powerful. They made this building a fortess, nothing evil can get in here. So if you are ever in doubt. Just get back here like a muddy pig" - Sandy laughs at her own joke.
            "Have my number, Come see me when you can. I need to show you the basics of magic"</p>
            <Link to={"/Home"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {LACBRAQWakeUpInApartmentSandyLeaves}>I should see Sandy soon</button>
            </Link>
                                          
                
            </Col3>
            </>
        );
    } else if(props.flags.includes("LACBRAQGoHomeWithSandyMilkDrink")){
        let LACBRAQWakeUpInApartmentSandyLeaves_PossibleMilkReaction = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("LACBRAQGoHomeWithSandyMilkDrink");
            props.onChangeRelationship("Sandy",1);
            props.onPushFlag("SandyTeachesMagicQuestInHerApartmentPart_1");
        }
        

        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {Bedroom}>    
                <img src={SandyImage} height={characterImageHeight}></img>
            </Col2>
            
            <Col3 > 
            <p>You see Sandy. She is smiling. "Well... I guess I have some explaining to do." Says Sandy. You notice her breasts have shrunk since yesterday, but they are larger than before. </p>
            <p>"Hey." Sandy snaps her fingers. "I know they are new and lovely, but I need your attention"... Sandy sighs.
            "Magic exists {props.name}, it's very real. As real as these new boobies. Usually most people never realize. But you had to go to the farm last night.</p>
            <p>I know its confusing, but magic happens every single day, everywhere around us. It's is not easy to understand, I don't think anyone really understands how it works. And now you are part of this world. Once you have direct contact with magic it will be drawn to you, you can't ignore it anymore. </p>
            <p>Since I did this to you I will help you as much as I can. But I am not an expert, I am not even good at this." Amy stretches.
            "{props.name}, you should know that this city is special. The magic around here is strentening, and it's nothing like we have ever seen before. A lot of pople will move here. Good people, bad people, everything in between. We'll have to be really careful."</p>
            <p>"You should also know that you will be safe inside this building. Let me tell ya: In this same building there is another magic user. Her name is Amy. And her family is really powerful. They made this building a fortess, nothing evil can get in here. So if you are ever in doubt. Just get back here like a muddy pig" - Sandy laughs at her own joke.
            "Have my number, Come see me when you can. I need to show you the basics of magic"</p>
            <p>"Oh, and by the way. Avoid dairy and don't touch your chest for a few days. You drank my milk, and you might start up some weird reaction"</p>
            <Link to={"/Home"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {LACBRAQWakeUpInApartmentSandyLeaves_PossibleMilkReaction}>I should see Sandy soon</button>
            </Link>
                                          
                
            </Col3>
            </>
        );
    } else if(props.flags.includes("LACBRAQDrankSandyMilk")){
        const DrankMilkWithLacBraClick = () =>{
            props.onPushFlag("DrankMilkwithLacBracelet");
            props.onSpliceFlag("WearingLacBracelet");
            props.onSpliceFlag("LACBRAQDrankSandyMilk");
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
                <Link to={"/transformationHistory"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick ={goToTransformationHistory}>Transformation history</button>
                </Link>
                
    
            </Col3>
            </>
            )
    }


    



    }
export default Home;

