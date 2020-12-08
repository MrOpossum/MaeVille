import React from 'react';
import { Link } from 'react-router-dom';
import Col1 from "../../components/col1";
import Col2 from "../../components/col2";
import Col3 from "../../components/col3";
import SetCol1 from "../../components/SetCol1";


//Images
import Bedroom from "../../Images/Bedroom/Apartment.jpg";


const buttonWidth = "300px";
const Home = ( props ) => {
    const addMinutesFunc = () =>{
        props.onAddMinutes(20)
    }

    const SleepAtHomeClickFunc = () =>{
        props.onAddMinutes(480);
        props.onSetEnergy(100);
    }

    const goToInventory = () => {
        props.onAddMinutes(10);
        props.onPushFlag("OpenInventoryAtHome")
    }

    const goToTransformationHistory = () =>{
        props.onAddMinutes(10);
    }

    const goToAmyApartment = () =>{
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
                />
            </Col1>
            <Col2 BackImage = {Bedroom}>
                
            </Col2>
    
            <Col3 > 
                <p>
                    Dawn comes. The first thing you notice is the massive hard-on in your pants, fuck, you are horny. You shift around bumping your dick against the sheets, until you...
                </p>
                
                <Link to={"/FapInApartment"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick ={addMinutesFunc} style={{width: props.standardButtonWidth}}>Masturbate</button>
                </Link>
                <Link to={"/Home"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" style={{width: props.standardButtonWidth}}>Ignore it</button>
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
                    <button type="button" className="btn btn-primary" style={{width: props.standardButtonWidth}}>Go outside</button>
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
                    <button type="button" className="btn btn-primary" style={{width: props.standardButtonWidth}}>Go outside</button>
                </Link>
                <Link to={"/Home"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick ={DrankMilkWithLacBraClick} style={{width: props.standardButtonWidth}}> Drink milk</button>
                </Link>
                <Link to={"/SleepAtHome"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick ={SleepAtHomeClickFunc} style={{width: props.standardButtonWidth}}>Sleep</button>
                </Link>
                
    
            </Col3>
            </>
        );
    } else if(props.flags.includes("LACBRAQGoHomeWithSandyNoMilkDrink")){
        let LACBRAQWakeUpInApartmentSandyLeaves = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("LACBRAQGoHomeWithSandyNoMilkDrink");
            props.onSpliceFlag("WearingLacBracelet");
            props.onSetItem("LacBracelet",0);

            props.onChangeRelationship("Sandy",1);
            props.onPushFlag("SandyTeachesMagicQuestInHerApartmentPart_1");
            props.onPushFlag("MagicDiscovered");
        }
        

        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {Bedroom}>    
                <img src={props.SandyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
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
                <button type="button" className="btn btn-primary" onClick = {LACBRAQWakeUpInApartmentSandyLeaves} style={{width: props.standardButtonWidth}}>I should see Sandy soon</button>
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
            props.onPushFlag("MagicDiscovered");
        }
        

        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {Bedroom}>    
                <img src={props.SandyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
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
                <button type="button" className="btn btn-primary" onClick = {LACBRAQWakeUpInApartmentSandyLeaves_PossibleMilkReaction} style={{width: props.standardButtonWidth}}>I should see Sandy soon</button>
            </Link>
                                          
                
            </Col3>
            </>
        );
    } else if(props.flags.includes("OpenInventoryAtHome")){

        const closeInventory = () =>{
            props.onSpliceFlag("OpenInventoryAtHome");
        }
        const DrinkMilkFromInventory = () =>{
            if(props.flags.includes("WearingLacBracelet")){
                props.onPushFlag("DrankMilkwithLacBracelet");
                props.onSpliceFlag("WearingLacBracelet");
            }
            props.onAddEnergy(5);
            props.onAddMinutes(10);
            if(props.energy > 100){
                setEnergy100()
            }
            props.onAddItem("farmCowMilkBottle",-1);
        }

        const WearLACBraceletFromInventory = () =>{
            props.onPushFlag("WearingLacBracelet");
        }

        const StopWearingLACBraceletFromInventory = () =>{
            props.onSpliceFlag("WearingLacBracelet")
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
                    Let's see what you got.
                </p>
    
                <Link to={"/Home"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick ={closeInventory} style={{width: props.standardButtonWidth}}>Close inventory</button>
                </Link>
                <Link to={"/Home"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick ={DrinkMilkFromInventory}  style={{display: 
                        ( 
                            (props.items.farmCowMilkBottle) ? "":"none"
                        ),
                        width: props.standardButtonWidth
                    
                    }}
                    
                    >Drink milk</button>
                </Link>
                <Link to={"/Home"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick ={WearLACBraceletFromInventory} style={{display: 
                        ( 
                            (props.items.LacBracelet && !props.flags.includes("WearingLacBracelet")) ? "":"none"
                        ), width: props.standardButtonWidth
                        }}>Wear white farm bracelet</button>
                </Link>
                <Link to={"/Home"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick ={StopWearingLACBraceletFromInventory} style={{display: 
                        ( 
                            (props.flags.includes("WearingLacBracelet")) ? "":"none"
                        ),
                        width: props.standardButtonWidth
                    }}
                    
                    >Stop wearing white farm bracelet</button>
                </Link>
                
    
            </Col3>
            </>
            )
    }
    
    
    
    
    else{


        let SleepForXTime = () =>{
            props.onAddMinutes(240);
            props.onAddEnergy(40);
            if(props.energy > 100){
                setEnergy100();
            }
        }
        let goToSandyApartment = () =>{
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
                    You are home.
                </p>
            
                <Link to={"/GoOutside"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" style={{width: props.standardButtonWidth, alignSelf:"center"}}>Go outside</button>
                </Link>
                <Link to={"/SleepAtHome"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick ={SleepAtHomeClickFunc} style={{width: props.standardButtonWidth}}>Sleep</button>
                </Link>
                <Link to={"/TransformationHistory"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick ={goToTransformationHistory} style={{width: props.standardButtonWidth}}>Transformation history</button>
                </Link>
                <Link to={"/Home"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick ={goToInventory} style={{width: props.standardButtonWidth}}>Inventory</button>
                </Link>
                <Link to={"/Home"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick ={SleepForXTime} style={{width: props.standardButtonWidth}}>Sleep for 4 hours</button>
                </Link>

                <Link to={"/AmyApartment"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick ={goToAmyApartment} style = {{
                        display:(props.flags.includes("AmyTeachesMagicQuestInHerApartmentPart_1") ? "": "none"), width: props.standardButtonWidth
                    }}
                    
                    >Go to Amy's apartment</button>
                </Link>
                <Link to={"/SandyApartment"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick ={goToSandyApartment} style = {{
                        display:(props.flags.includes("SandyTeachesMagicQuestInHerApartmentPart_1") ? "": "none"), width: props.standardButtonWidth
                    }}
                    
                    >Go to Sandy's apartment</button>
                </Link>      
                        

                
    
            </Col3>
            </>
            )
    }


    



    }
export default Home;

