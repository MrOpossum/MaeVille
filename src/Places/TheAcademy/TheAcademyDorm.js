import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

import Col1 from "../../components/col1";
import Col2 from "../../components/col2";
import Col3 from "../../components/col3";
import SetCol1 from "../../components/SetCol1";
import SimpleDialog from "../../components/SimpleDialog";

//Images
import DormRoom from "../../Images/TheAcademy/DormRoom.png";
import outfitPajamasCloset_t from "../../Images/TheAcademy/closet/outfitPajamasCloset_t.png";
import schoolGirlCostume from "../../Images/TheAcademy/closet/SchoolgirlCostume_t.png";
import TheAcademyShower from "../../Images/TheAcademy/TheAcademyShower.jpg";

import You_gender_9_to_8 from "../../Images/Characters/You/You-gender-9-to-8.mp4";
import anime_sex_in_shower_1_cut from "../../Images/TheAcademy/shower/anime_sex_in_shower_1_cut.mp4";
import shower_back_men_8plus from "../../Images/TheAcademy/shower/shower-back-men-8plus.png";
import oliviaWildeNippleImage from "../../Images/TheAcademy/Dorm/oliviaWildeNippleImage.png";
import classroomBackground from "../../Images/TheAcademy/classroom/classroomBackground.jpg";
import StealingPantiesFeminizationGingerPOV720_cut from "../../Images/TheAcademy/classroom/StealingPantiesFeminizationGingerPOV720_cut.mp4";
import cock_hero_ufeel_1_cut from "../../Images/TheAcademy/classroom/cock_hero_ufeel_1_cut.mp4"


import bustyElf from "../../Images/TheAcademy/Dorm/bustyElf.jpg";

const TheAcademyDorm = (props) => {

    let goToGameMap = () =>{
        props.onAddMinutes(10);
    }

    const [inputTextValue, setInputTextValue] = useState("");
    const [openDialog, setOpenDialog] = useState(false);
    const [openDialog2, setOpenDialog2] = useState(false);
    const [openDialog3, setOpenDialog3] = useState(false);
    const [canContinue, setCanContinue] = useState(false);

    let InspectTheCloset = () =>{
        props.onAddMinutes(10);
        props.onPushFlag("InspectTheClosetInDorm");
    }
    

    if (props.flags.includes("InspectTheClosetInDorm")){
        let BackToDorm = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("InspectTheClosetInDorm");
        }
        
        let WearTheClothes = () =>{
            props.onAddMinutes(10);
            if(!(props.flags.includes("WearingAcademyOutfit"))){
                props.onPushFlag("WearingAcademyOutfit");
                alert(`"They are cute." You think. "What if... I wore them?" You take the clothes and put them on.`);
                if(props.gender >= 7){
                    alert(`The clothes barely fit you. And your frame stretches them`);
                    alert(`You hear a voice in your head. It's the mistress. "I like your style". She says, satisfaction in her voice`);
                }
            }else{
                alert("You are already wearing the clothes");
                if(props.gender >= 5){
                    alert(`The clothes fit you fairly well They sit on your frame nicely. You might even pass as a woman if no one is paying close attention`);
                } else if(props.gender >= 3){
                    alert("The outfit fits you perfectly. It hugs your curves and highlights your frame. Your cleavage makes your breasts appear as if they were floating. And the tiny skirt you are wearing flatters your butt for any observer.");
                } else if(props.gender < 3){
                    alert("The outfit barely fits you. Your chest is bursting out of the top waiting for a small jiggle to be set free. The tiny skirt you are wearing looks more like a belt, your buttcheecks hide any semblance of modesty from your lower half.");
                }

            }
            
        }
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {DormRoom}>
                <img alt ={"Not found"} src={props.YourselfImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                {window.screen.width > 600 ? <img alt ={"Not found"} src={outfitPajamasCloset_t} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img> : ""}
                <img alt ={"Not found"} src={schoolGirlCostume} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>

            </Col2>  
    
            <Col3 > 
                   
                   <p>You see yourself and a set of clothes... They are, slutty.</p>
                   
    
                <Link to={"/TheAcademyDorm"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {BackToDorm} >Go back</button>
                </Link>  
                <Link to={"/TheAcademyDorm"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {WearTheClothes} >Wear the clothes</button>
                </Link>  
            </Col3>
            </>
  
      )
    }
    else if(props.flags.includes("GoToDormAtAcademyAfterIntroduction")){
        let InspectTheCloset = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("InspectTheClosetInDorm");
        }

        let LeaveTheDormShowerAlert = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("FirstShowerInDorm");
            props.onSpliceFlag("GoToDormAtAcademyAfterIntroduction");
            alert("Just as you tried to leave, an anouncement blared on the air: 'All girls to the shower. I repeat, it's time to shower'. \n You see no speakers, the sound seems to be directly in your head. You see a trove of girls moving through the hall.");
            alert("Mary bumps with you. 'Let's go. Lisa does not like anyone to be tardy.' Mary then joins the wave of girls and you follow.");
        }

        let TalkToMaryInDormSheIsUnpacking = () =>{
            props.onAddMinutes(10);
            alert("Mary looks at you. 'I wish I could talk, but I need to finish unpacking before the shower call'. Mary then continues unpacking");
        }
    
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {DormRoom}>
                <img alt ={"Not found"} src={props.MaryImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
            
            <Col3 > 

               <p>You enter a large room with three beds. You see a girl furiously unpacking two suitcases. "Damn it Nikki. Why do my parents let you do this, I allways end up picking up after you, and if I don't I allways get the blame." Mutters the girl, at enough volume for you to hear her.</p>
               <p>The door closes and the girl realizes you have been listening to her. She squeaks. "You scared me!" Her voice cracking a bit. "I was just organizing my" She pauses. "And my sisters stuff. We just arrived and she fled. Now I have to organize everything." The girl goes back to unpacking. "And would you look at that. NO TOOTHBRUSH!" She complains.</p>
               <p>"I am Mary" The woman says.</p>
               <p>"I am {props.name}" You answer.</p>
               <p>You realize there is a bed labeled with your name. You have a personal closet and a drawer.</p>

                
                   
                <Link to={"/TheAcademyDorm"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {InspectTheCloset} >Inspect the closet</button>
                </Link>  
                <Link to={"/TheAcademyDorm"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LeaveTheDormShowerAlert} >Leave the dorm</button>
                </Link>  
                <Link to={"/TheAcademyDorm"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {TalkToMaryInDormSheIsUnpacking} >Talk to Mary</button>
                </Link>  
            </Col3>
            </>
  
      )
    } else if(props.flags.includes("FirstShowerInDorm")){
        let ShowerInFrontOfEveryone = () =>{
            setOpenDialog3(true);
        }

        
        let FindACornerToShower = () =>{
            setOpenDialog(true);
        }
    
        let MasturbateInFrontOfAll = () =>{
            setOpenDialog2(true);
        }
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {TheAcademyShower}>
                <img alt ={"Not found"} src={props.MaryImageNaked} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>   
                <img alt ={"Not found"} src={props.NikkiImageTowel} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>   
                
                {/* Find a corner to shower dialog */}
                <SimpleDialog
                    openDialog={openDialog}
                    handleDialogClose = {()=>{
                            setOpenDialog(false);
                            props.onAddMinutes(10);
                            props.onSpliceFlag("FirstShowerInDorm");
                            props.onSetGender(props.gender - 1);
                            props.onPushFlag("BackToDormAfterFirstShower");
                        }
                    }
                >
                    <p style={{color:"black"}}>"Aren't you shy." You hear the voice of the headmistress say.  "Don't worry everyone has some insecurity about their body, I it because your hair? Your flat chest? Your wide frame? Oh. There is just so much to fix!" </p>
                    <p style={{color:"black"}}>You feel dizzy, your hair lengthens a bit and your frame becomes smaller. You don't feel weaker. But you look much thinner than before.</p>
                    <video autoPlay loop controls>
                        <source src={You_gender_9_to_8} type="video/mp4"/>
                    </video>
                    <p style={{color:"black"}}>"It's not much, but it's a start". The voice says. You look around and see every girl focused on getting thoroughly clean before the shower is over. You do the same.  And go back to your dorm.</p>
                    
                </SimpleDialog>


                <SimpleDialog
                    openDialog={openDialog2}
                    handleDialogClose = {()=>{
                            setOpenDialog2(false);
                            props.onAddMinutes(10);
                            props.onPushFlag("YouShallNotFap");
                            props.onSpliceFlag("FirstShowerInDorm");
                            props.onPushFlag("BackToDormAfterFirstShower");
                            alert("For immersion purposes. Do not touch your dick until the next class. You can pleasure yourself in any other way you wish.");
                            
                        }
                    }
                >
                    <p style={{color:"black"}}>You place your hand on your erect member, there are so many beautiful woman around that you can barely contain yourself. You start stroking and the girls notice what you are doing. One gets closer to you. </p>
                    <video autoPlay loop controls>
                        <source src={anime_sex_in_shower_1_cut} type="video/mp4"/>
                    </video>

                    <p style={{color:"black"}}>You are extremely horny. But you can't get off. You hear a voice in your head. "Horny thing, aren't you?" It's the voice of the headmistress. "You should control your urges. At least until we get that dick of yours sorted out." The headmistress pauses. "You won't be able to get off anymore sweety. At least not using your penis..." The girls that were with you scatter. They probably got a message as well.</p>
                </SimpleDialog>

                <SimpleDialog
                //shower normally
                    openDialog={openDialog3}
                    handleDialogClose = {()=>{
                            setOpenDialog3(false);
                            props.onAddMinutes(10);
                            props.onSpliceFlag("FirstShowerInDorm");
                            props.onPushFlag("BackToDormAfterFirstShower");
                            
                        }
                    }
                >
                    
                    <p style={{color:"black"}}>Most girls are not paying attention to you. Some are stealing glances. One even seems to be drawn to your member. Maybe a little more action would have pushed her to fuck you...</p>
                    
                    <img alt ={"Not found"} src={shower_back_men_8plus} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>

                    <p style={{color:"black"}}> You look around and see every girl focused on getting thoroughly clean before the shower is over. You do the same. And go back to your dorm.</p>


                    
                </SimpleDialog>

                
            </Col2>  
    
            <Col3 > 
                   <p>"{props.name}" says Mary. "This is my sister Nikki." Nikki looks at you. "Well, hello." She purrs.</p>
                   <p>You have no idea what to do... Shower in front of everyone? Look for a corner? Wait for people to leave? Your toughts get interrupted by Mary. "You should shower. Fast. Lisa does not like anyone to be late"</p>
                   
    
                <Link to={"/TheAcademyDorm"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {ShowerInFrontOfEveryone}>Shower in front of everyone</button>
                </Link>  
                <Link to={"/TheAcademyDorm"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {FindACornerToShower}>Find a corner to shower</button>
                </Link>  
                <Link to={"/TheAcademyDorm"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {MasturbateInFrontOfAll}>Masturbate</button>
                </Link>  
            </Col3>
            </>
  
      )
    } else if (props.flags.includes("BackToDormAfterFirstShower")){
        let InspectTheCloset = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("InspectTheClosetInDorm");
        }

        let TalkToMary = () =>{
            setOpenDialog(true);
        }    

        let TalkToNikki = () =>{
            setOpenDialog2(true);
        }

        let Sleep = () =>{
            setOpenDialog3(true);
        }
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {DormRoom}>
            

                {/* Talk to Mary */}
                <SimpleDialog
                    openDialog={openDialog}
                    handleDialogClose = {()=>{
                            setOpenDialog(false);
                            props.onAddMinutes(10);                            
                        }
                    }
                >
                    
                    <p style={{color:"black"}}>You approach Mary, when she notices you she opens some random tab in her laptop. "I'm working" Mary says. You notice she's blushing. And maybe even breathing a bit heavier than normal.</p>
                    <img alt ={"Not found"} src={props.MaryImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                </SimpleDialog>

                {/* Talk to Nikki */}
                <SimpleDialog
                    openDialog={openDialog2}
                    handleDialogClose = {()=>{
                            setOpenDialog2(false);
                            props.onAddMinutes(10);                            
                        }
                    }
                >
                    
                    <p style={{color:"black"}}>Nikki lowers down her phone and looks at you. "You know. I'm glad you are here. You being here is a first for this all-girls school".</p>
                    <img alt ={"Not found"} src={props.NikkiImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                </SimpleDialog>

                {/* Sleep */}
                <SimpleDialog
                    openDialog={openDialog3}
                    handleDialogClose = {()=>{
                            setOpenDialog3(false);
                            props.onAddMinutes(10);
                            props.onPushFlag("FirstMorningAtAcademy");
                            props.onSpliceFlag("BackToDormAfterFirstShower");
                        }
                    }
                >
                    
                    <p style={{color:"black"}}>You start drifting asleep. Your mind starts fogging. You are relaxed and much more calm that you should probably be when sleeping in a random bed for the first time. You take a deep breath and feel your nipples tingling. They are erect, and the cloth rubbing against them gives you pleasure that you had never felt before.</p>
                    <p style={{color:"black"}}> You try to move your hand towards your cock. But a numbness fills you before you can reach it. "No masturbation outside allowed hours" You hear a voice say. While your cock still is throbbing you fall back into the pleasure of your pulsating nipples. And fall asleep.</p>
                    <img alt ={"Not found"} src={oliviaWildeNippleImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                </SimpleDialog>                

            </Col2>  
    
            <Col3 > 
                   
                   

                <p>You are back in your room. Mary and Nikki are sitting in their beds. Mary has a laptop and she seems to be working on something. Nikki is on her phone occasionally grinning.</p>
                <Link to={"/TheAcademyDorm"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {TalkToMary} >Talk to Mary</button>
                </Link> 
                <Link to={"/TheAcademyDorm"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {TalkToNikki} >Talk to Nikki</button>
                </Link> 

                <Link to={"/TheAcademyDorm"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {Sleep} >Sleep</button>
                </Link> 


                <Link to={"/TheAcademyDorm"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {InspectTheCloset} >Inspect the closet</button>
                </Link>  
            </Col3>
            </>
  
      )
    } else if(props.flags.includes("FirstMorningAtAcademy")){
        let GoToClass = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("FirstClassAtAcademy");
            props.onSpliceFlag("FirstMorningAtAcademy");
        }
    
        let TalkToMary = () =>{
            setOpenDialog(true);
        }    

        let TalkToNikki = () =>{
            setOpenDialog2(true);
        }
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {DormRoom}>
                {/* Talk to Mary */}
                <SimpleDialog
                    openDialog={openDialog}
                    handleDialogClose = {()=>{
                            setOpenDialog(false);
                            props.onAddMinutes(10);                            
                        }
                    }
                >
                    
                    <p style={{color:"black"}}>"Good morning" Says Mary. A grin on her face. "I allways sleep well in this place. I just, feel safe. Let's get working then." She takes out her laptop and starts typing</p>
                    <img alt ={"Not found"} src={props.MaryImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                </SimpleDialog>

                {/* Talk to Nikki */}
                <SimpleDialog
                    openDialog={openDialog2}
                    handleDialogClose = {()=>{
                            setOpenDialog2(false);
                            props.onAddMinutes(10);                            
                        }
                    }
                >
                    
                    <p style={{color:"black"}}>Nikki is groggy. "I don't like this place much, Miss Lisa won't let me sleep till late. I Guess I'll just go get some food. I don't even need to change, everyone walks around in pajamas from time to time"</p>
                    <img alt ={"Not found"} src={props.NikkiImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                </SimpleDialog>

                
            </Col2>  
    
            <Col3 > 
                   
                <p>"Wake up girls!" The voice of the headmistress breaks your sleep. "As usual, you can leave the academy and come back when you are ready for your first lesson."</p>
                <p>Nikki and Mary also woke up.</p>
    
                <Link to={"/TheAcademyDorm"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {TalkToMary} >Talk to Mary</button>
                </Link>  

                <Link to={"/TheAcademyDorm"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {TalkToNikki} >Talk to Nikki</button>
                </Link>  

                <Link to={"/TheAcademyDorm"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {InspectTheCloset} >Inspect the closet</button>
                </Link>  
                
                <Link to={"/TheAcademyDorm"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GoToClass} >Go to class</button>
                </Link>  

                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {goToGameMap} >Game Map</button>
                </Link>  

                
            </Col3>
            </>
  
      )
    } else if(props.flags.includes("FirstClassAtAcademy")){
        let startLesson = () =>{
            alert("You are tied up. And a video starts displaying in your head.");
            alert("Sit down through the whole video. Or you won't be able to advance. Be a nice player, you'll like it ;)");
            alert("It's almost 15 minutes. Be prepared...")
            props.onAddMinutes(10);
            props.onSpliceFlag("FirstClassAtAcademy");
            props.onPushFlag("FirstClassAtAcademyStart");
        }
    
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {classroomBackground}>
                <img alt ={"Not found"} src={props.LisaImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
                   

            <p>"Hello {props.name}, you'll have a special class regiment. Since you are a bit... Different than the girls around here."</p>       
            <p>"It's actually very simple. When you are ready. We'll just tie you down to a nice chair and you'll have to watch some videos. And watch them completely. When you are ready, come tell me. You have so much potential." </p>
    
            <Link to={"/TheAcademyDorm"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {startLesson} >Start lesson</button>
            </Link>  

            <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {goToGameMap} >Game Map</button>
            </Link>  

            </Col3>
            </>
  
      )

    } else if(props.flags.includes("FirstClassAtAcademyStart")){

        let finishClass = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("FirstClassAtAcademyStart");
            props.onPushFlag("AfterFirstClass");
            if(props.gender >= 9){
                props.onSetGender(8);
                alert("You feel dizzy, your hair lengthens a bit and your frame becomes smaller. You don't feel weaker. But you look much thinner than before.");

            }
            setCanContinue(false);
        }

        if(canContinue == false){
            setTimeout(function(){ 
                alert(`"Good job"`);
                setCanContinue(true);
            }, 600000); //600000
        }
        
        
        

    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2>
                <video autoPlay>
                    <source src={StealingPantiesFeminizationGingerPOV720_cut} type="video/mp4"/>
                </video>
            </Col2>  
    
            <Col3 > 
                   

            
    
            <Link to={"/TheAcademyDorm"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {finishClass} style ={{display:(canContinue ? "" : "none")}}>Finish class</button>
            </Link>  

            </Col3>
            </>
  
      )
    } else if(props.flags.includes("AfterFirstClass")){
        let InspectTheCloset = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("InspectTheClosetInDorm");
        }
    
        let TalkToMary = () =>{
            setOpenDialog(true);
        }    

        let TalkToNikki = () =>{
            setOpenDialog2(true);
        }
    
        let goToClass = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("AfterFirstClass");
            props.onPushFlag("AcademySecondClass"); //Probably cock hero.
        }
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {DormRoom}>
            <img alt ={"Not found"} src={props.MaryImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            <img alt ={"Not found"} src={props.NikkiImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>

            {/* Talk to Mary */}
            <SimpleDialog
                    openDialog={openDialog}
                    handleDialogClose = {()=>{
                            setOpenDialog(false);
                            props.onAddMinutes(10);                            
                        }
                    }
                >
                    <img alt ={"Not found"} src={props.MaryImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                    <p style={{color:"black"}}>Mary seems furious. "That bitch! That manipulative bitch! She went snooping through my computer and copied a bunch of stuff from my private files. Now she’s threatening to tell Mom and Dad what I do for money if I don’t let her stay. Stupid, stupid, stupid! Why didn’t I have a password on my computer!? Now Nicky knows I’m into breast and belly expansion, she knows what a weirdo I am."</p>
                    <p style={{color:"black"}}>I don’t know what to do. I can’t have Mom and Dad find out that their daughter, the one who’s supposed to have it put together makes her living off of writing smut. Shiiiiiiiit! Damn it! I can’t believe she would do this to me. Nicky I can’t believe she did this. Well lesson learned at the very least. I have passwords on everything now.</p>
                    
                </SimpleDialog>

                {/* Talk to Nikki */}
                <SimpleDialog
                    openDialog={openDialog2}
                    handleDialogClose = {()=>{
                            setOpenDialog2(false);
                            props.onAddMinutes(10);     
                            if(!props.flags.includes("LacAndBEResearchBoost")){
                                if(props.researchTime.lactation > 10){
                                    props.onSetResearchTime("lactation",10);
                                }
                                if(props.researchTime.breast > 10){
                                    props.onSetResearchTime("breast",10);
                                }
                            }
                            props.onPushFlag("LacAndBEResearchBoost");                
                            alert("You recieved a bonus to lactation and breast growth reasearch");
                            alert("The next class will be availiable after your research.");
                        }
                    }
                >
                    
                    <img alt ={"Not found"} src={props.NikkiImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                    <p style={{color:"black"}}>Nikki grins and laughs. "So much good stuff in Marys files." Nikki gets closer to you. You know I wish I could find some way of making my breasts bigger. Imagine how Mary would get!</p>
                    <p style={{color:"black"}}>"{props.name}. I heard there is a company making breast growth and lactation suplements, could you research that for me? Maybe the guys in the bar have some information." Nikki giggles. "I can't wait to see Mary's reaction"</p>
                    <p style={{color:"black"}}>Nikki then looks around. And gets closer to you. "Let me give you something, it might help you." Nikki looks for something under her bed and takes out a small vial. "Don't tell Mary I have this. This liquid comes from an elven settlement, but there everyone has massive tits! It might help you"</p>
                    <p style={{color:"black"}}>Nikki takes out a picture. "Look at the girl who 'gave' it to me"</p>
                    <img alt ={"Not found"} src={bustyElf} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                </SimpleDialog>

            </Col2>  
    
            <Col3 > 
                   
                   <p>You are still processing your feelings after the class. But you hear screams coming from your dorm. You open the door and you see Mary yelling at Nikki. Nikki looks at you and grins</p>
                   <p>"Hey, {props.name}! Did you know Mary writes smut for extra money?" Nikki says "And listen to this, she loves huuuge boobs! and belly expansion! This is waay out of proporsion. Who would like that." Nikki mocks Mary and laughs.</p>
                   <p>"Shut up you manipulative bitch!" Mary shouts.</p>
    
                
                <Link to={"/TheAcademyDorm"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {TalkToMary} >Talk to Mary</button>
                </Link>  

                <Link to={"/TheAcademyDorm"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {TalkToNikki} >Talk to Nikki</button>
                </Link>  
                <Link to={"/TheAcademyDorm"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {InspectTheCloset} >Inspect the closet</button>
                </Link>  
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {goToGameMap} >Game map</button>
                </Link>  
                <Link to={"/TheAcademyDorm"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {goToClass}  style ={{
                        display: ( (props.flags.includes("ResearchBreastII") && props.flags.includes("ResearchLactationII")) ? "" : "none" )
                    }}
                    >Go to class</button>
                </Link>  
            </Col3>
            </>
  
      )

    } else if(props.flags.includes("AcademySecondClass")){
        let startLesson = () =>{
            alert("You are tied up. And a video starts displaying in your head.");
            alert("Sit down through the whole video. Or you won't be able to advance. Be a nice player, you'll like it ;)");
            alert("It's around 6 minutes and an optional 2 minute bonus round. Be prepared...");
            props.onAddMinutes(10);
            props.onSpliceFlag("AcademySecondClass");
            props.onPushFlag("AcademySecondClassStart");
        }
    
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {classroomBackground}>
                <img alt ={"Not found"} src={props.LisaImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
                   

            <p>"Hello {props.name}, I hope you are ready for your next assignment. This will be all about stamina. I need you to be able to last, like a good girl. Maybe even get multiple orgasms."</p>       
            <p>"Again, it's the class is very simple. When you are ready. We'll just tie you down to a nice chair and you'll have to watch some videos. And watch them completely. When you are ready, come tell me. You have so much potential." </p>
    
            <Link to={"/TheAcademyDorm"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {startLesson} >Start lesson</button>
            </Link>  

            <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {goToGameMap} >Game Map</button>
            </Link>  

            </Col3>
            </>
  
      )

    } else if(props.flags.includes("AcademySecondClassStart")){
        let finishClass = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("AcademySecondClassStart");
            props.onPushFlag("AfterSecondClass");
            props.onSetFullState("mind",props.mind + 1);
            setCanContinue(false);
            alert("You feel like your mind is stronger. Good!");
        }

        if(canContinue == false){
            setTimeout(function(){ 
                alert(`"Good job"`);
                setCanContinue(true);
            }, 350000); //350000
        }
        
        
        

    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2>
                <video autoPlay>
                    <source src={cock_hero_ufeel_1_cut} type="video/mp4"/>
                </video>
            </Col2>  
    
            <Col3 > 
                   

            
    
            <Link to={"/TheAcademyDorm"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {finishClass} style ={{display:(canContinue ? "" : "none")}}>Finish class</button>
            </Link>  

            </Col3>
            </>
  
      )
    } else if(props.flags.includes("AfterSecondClass")){
        let InspectTheCloset = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("InspectTheClosetInDorm");
        }
    
        let TalkToMary = () =>{
            setOpenDialog(true);
        }    

        let TalkToNikki = () =>{
            setOpenDialog2(true);
        }
    
        let goToClass = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("AcademyThirdClass"); 
        }
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {DormRoom}>
            <img alt ={"Not found"} src={props.MaryImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            <img alt ={"Not found"} src={props.NikkiImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>

            {/* Talk to Mary */}
            <SimpleDialog
                    openDialog={openDialog}
                    handleDialogClose = {()=>{
                            setOpenDialog(false);
                            props.onAddMinutes(10);
                            props.onPushFlag("GALLERY_DISCOVERED")        
                            props.onPushFlag("EVEMQEveWillBeAtGallery");
                        }
                    }
                >
                    <img alt ={"Not found"} src={props.MaryImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                    <p style={{color:"black"}}>Mary sniffles. "{props.name}, part of me would love for what Nikki's saying to be true.</p>
                    <p style={{color:"black"}}>I would actually be the first in line for that kind of pills, but that kinda stuff doesn’t happen in real life...</p>
                    <p style={{color:"black"}}>Oh well it’s a fun thought anyway. Maybe I could work this whole situation into a story somehow? I’ll mull it over</p>
                    <p style={{color:"black"}}>Oh, and by the way. There will be a small pause in classes for now. Maybe you should check out that new gallery exhibition</p>
                    
                </SimpleDialog>

                {/* Talk to Nikki */}
                <SimpleDialog
                    openDialog={openDialog2}
                    handleDialogClose = {()=>{
                            setOpenDialog2(false);
                            props.onAddMinutes(10);     
                        }
                    }
                >
                    
                    <img alt ={"Not found"} src={props.NikkiImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                    <p style={{color:"black"}}>"I feel I hurted Mary. I really hope this pills work and I can make my little sister happy "</p>
                    <p style={{color:"black"}}>"I actually was supposed to take only one pill at the time. But I need this to work, and fast."</p>
                    <p style={{color:"black"}}>"I even think I'm already feeling something. But I don't want to get my hopes up..."</p>
                </SimpleDialog>

            </Col2>  
    
            <Col3 > 
                   
                   <p>You sigh. This classes can be exhausting. You enter your dorm and see the two sisters talking</p>
                   <p>"I'm sorry" Says Nikki. "I think I took the teasing a bit too far." You can notice Mary was crying. "I'll make it up to you!" Nikki then takes a small box and opens it. Inside there is a bottle of pills. "They are lactation inducers" Nikki says. "I know breast magic is really hard to find, but I got these from a friend that works at that new company in the city."</p>
                   <p>"Like you could know people like that" Mary interrupts. "Just, stop teasing me. please" Mary clears her throat.</p>
                   <p>"I'll prove it to you!" Nikki says. And took two pills right there. Nikki touches her breasts. "Come one babies. Please work"</p>
    
                
                <Link to={"/TheAcademyDorm"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {TalkToMary} >Talk to Mary</button>
                </Link>  

                <Link to={"/TheAcademyDorm"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {TalkToNikki} >Talk to Nikki</button>
                </Link>  
                <Link to={"/TheAcademyDorm"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {InspectTheCloset} >Inspect the closet</button>
                </Link>  
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {goToGameMap} >Game map</button>
                </Link>  
                <Link to={"/TheAcademyDorm"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {goToClass}  style ={{
                        display: ( (props.flags.includes("finishedEveGalleryExhibitOne")) ? "" : "none" )
                    }}
                    >Go to class</button>
                </Link>  
            </Col3>
            </>
  
      )
    }


    else {
        let InspectTheCloset = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("InspectTheClosetInDorm");
        }
    
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {DormRoom}>
            </Col2>  
    
            <Col3 > 
                   
                   
    
            <Link to={"/TheAcademyDorm"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {InspectTheCloset} >Inspect the closet</button>
                </Link>  
            </Col3>
            </>
  
      )

    }

}

export default TheAcademyDorm;

