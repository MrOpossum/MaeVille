import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

import Col1 from "../../components/col1";
import Col2 from "../../components/col2";
import Col3 from "../../components/col3";
import SetCol1 from "../../components/SetCol1";

import FindingTheGirls from "../../components/FindingTheGirls";

//Images
import outsideLab from "../../Images/TheLab/TheLabOutside.jpg"
import TheMarblelRoomForKomperaAliens from "../../Images/TheLab/TheMarblelRoomForKomperaAliens.png";
////SANTMQ


var enterKomperaAliensStory = 0;

const TheLabOutside = (props) => {

    let GoToGameMap = () =>{
        props.onAddMinutes(10)
    }

    if(props.flags.includes("SCIENCELABQSStartInLab")){
        
        let TLQStartMaddyTalksToYouFirst = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("TLQStartMaddyTalksToYouFirst");
            props.onSpliceFlag("SCIENCELABQSStartInLab");
            props.onPushFlag("MET_MADDY");
        }

        
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {outsideLab}>
                    <img alt = {"Not found"} src = {props.MaddyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
                   
            <p>The buiding is large and intimidating. With the logo of the lab at the very top. You see two woman in lab coats. One sees you peeping, smiles at you and heads towards you.</p>
                    
    
                <Link to={"/TheLabOutside"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {TLQStartMaddyTalksToYouFirst}>A young blonde approaches you</button>
                </Link>  
            </Col3>
            </>
  
      )
    } else if(props.flags.includes("TLQStartMaddyTalksToYouFirst")){
        let TLQStartYesToInternship = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("TLQStartYesToInternship");
            props.onSpliceFlag("TLQStartMaddyTalksToYouFirst");
        }

        
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {outsideLab}>
                    <img alt = {"Not found"} src = {props.MaddyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
                   
                <p>"Hello" The woman says kindly. Are you here because of the internship?</p>
                    
    
                <Link to={"/TheLabOutside"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {TLQStartYesToInternship}>Yes</button>
                </Link>  
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary">Game map</button>
                </Link>  
            </Col3>
            </>
  
      )
    } else if(props.flags.includes("TLQStartYesToInternship")){
        let TLQStartSignContract = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("TLQStartYesToInternship");
            props.onPushFlag("TLQStartSignContract");
            props.onAddMoney(400);
        }

        
    
        return(
            <>
            <Col1>
                <SetCol1/>
            </Col1>
            <Col2 BackImage = {outsideLab}>
                    <img alt = {"Not found"} src = {props.MaddyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
                   
                   <p>"Perfect!" The woman says. "We are growing really fast and we need the help"</p>
                    <p>"The job is really simple. You get a weekly budget, and with that you buy equipment, chemicals, runes and whatever you need." She pauses. And straightens herself.</p>
                    <p>"You will report your advances to me every week. And depending on your successes you will be rewared... Or punished." </p>
                    <p>The girl hands you a contract.</p>

                    <p>"It says that we are not responsible for any..." Madeline pauses "Mishap that might happen to you. It also includes your starting bonus of 200$ and your starting budget of 200$ a week."</p>
    
                <Link to={"/TheLabOutside"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {TLQStartSignContract}>Sign the contract</button>
                </Link>  
                
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary">Game map</button>
                </Link>  
            </Col3>
            </>
  
      ) 
    }  else if(props.flags.includes("TLQStartSignContract")){
        let TLQStartGoToLab = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("TLQStartSignContract");
            props.onPushFlag("TLQStartGoToLab");
            props.onPushFlag("CanAccessLab");
        }

        
    
        return(
            <>
            <Col1>
                <SetCol1/>
            </Col1>
            <Col2 BackImage = {outsideLab}>
                    <img alt = {"Not found"} src = {props.MaddyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
                   
                   <p>"Splendid" The woman says. She extends her hand "I am Madeline. Welcome to twilight labs"
                    "Your schedule is up to you. But make sure you allocate enough time for your experiments to complete. Things don't get done instantly."</p>
                    <p>You can go inside at any time. I'll help you get aquainted with the job.</p>


    
                <Link to={"/TheLab"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {TLQStartGoToLab}>go to the lab</button>
                </Link>  
                
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {TLQStartGoToLab}>Game map</button>
                </Link>  
            </Col3>
            </>
  
      ) 
    } else if(props.flags.includes("KomperaAliensInLabPart0")){
        let GoToGameMap = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("KomperaAliensInLabPart0");
            props.onPushFlag("KomperaAliensInLabPart1FARM");
            props.onPushFlag("KomperaAliensInLabPart1FURFOREST");
        }

        
    
        return(
            <>
            <Col1>
                <SetCol1/>
            </Col1>
            <Col2 BackImage = {outsideLab}>
                    <img alt = {"Not found"} src = {props.MaddyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
                   
                   <p>When you approach the lab Maddeline stops you before going in.</p>
                   <p>You, intern. I need you to help me with something... And by the way, you can't say no, it's in your contract.</p>
                   <p>Maddy gets inside the lab and you follow. She goes around many hallyways you had never seen before, and stops. There is only a wall in front on you. Maddy takes some kind of card out and waves it. A flash of light blinds you. And the wall opens exactly in the middle, and you go in.</p>
                   <p>"Look intern. This is not rocket science, I'll need you to supervise some girls we have gathered...</p>
                   <p>"We were contacted by some..." Maddy pauses. "Associates. and we needed a few..." Maddy pauses again. "Volunteers"</p>
                   <p>You get to a room with a two way mirror, you can see room full of young woman, no female older than 30. The room is all white, white marbel floors,the walls and cealing are the same, no doors, no windows.</p>
                   <p>The woman have an IV bag attached to them. A thick, green gunk flowing to their veins.</p>
                   <p>"They are fine" Says Maddy. But you see a woman scratching herself and looking for the IV. When she found the IV, a small grey being materialized and the girl fainted.</p>
                   <p>"They are our clients" Maddy comments. "And they pay amazing money, so don't mess this up."</p>
                   <p>You look inside the room again, the woman who just fainted has no breasts, and no hips, or ass. But you can notice she's muscular, she was probably an athlete</p>
                   <p>"Notice the bands they are wearing in their abdomens, and the bandages on their chests. Also notice the empty juggs beside their beds. Thats where you come in." Maddy looks at you. "I need you to find two things, first, you need to find a suckling spider. We need them to stimulate the girls. I also need you to find more heavy cream, It's a special kind that can only be found in the farm" </p>
                   <p>"I'm sure you can manage to find those two things. So go to the farm, and to the fur forest, get me the spiders and the cream. And you'll be rewarded." Maddy scribbles some things on her tablet. And points at you to leave.</p>
  
                
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GoToGameMap}>Game map</button>
                </Link>  
            </Col3>
            </>
  
      ) 
    }else if(props.flags.includes("GotCreamFromCopper") && props.items["heavyCream"] > 0 && props.items["sucklingSpider"] > 0 && props.flags.includes("gotSucklingSpiderForKomperaQuestLabAliens")){
        let IDoHaveTheIngredients = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("GotCreamFromCopper");
            props.onSpliceFlag("gotSucklingSpiderForKomperaQuestLabAliens");
            props.onAddItem("heavyCream",-1);
            props.onAddItem("sucklingSpider",-1);
            props.onPushFlag("IDoHaveTheIngredientsKomperaAliens2");
            alert("Perfect! Says maddy, follow me.");
        }

        
    
        return(
            <>
            <Col1>
                <SetCol1/>
            </Col1>
            <Col2 BackImage = {outsideLab}>
                    <img alt = {"Not found"} src = {props.MaddyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
                   
                <p>When you get to the lab Maddy touches your shoulder. "Intern, do you have the ingredients?"</p>
                
                <Link to={"/TheLabOutside"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {IDoHaveTheIngredients}>I do have the ingredients</button>
                </Link>  
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GoToGameMap}>Go to game map</button>
                </Link>  
            </Col3>
            </>
  
      ) 

    } else if(props.flags.includes("IDoHaveTheIngredientsKomperaAliens2")){
        let leaveNowYouHaveAccessToAliensStory = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("IDoHaveTheIngredientsKomperaAliens2");
            props.onPushFlag("KomperaAliensStoryButton");
            props.onPushFlag("KomperaAliensStory3");
        }

        
    
        return(
            <>
            <Col1>
                <SetCol1/>
            </Col1>
            <Col2 BackImage = {outsideLab}>
                    <img alt = {"Not found"} src = {props.MaddyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
                   
                <p>You follow Maddy into the same labirinth of walls you went through before. Finally the large door opens and you see a white room filled with woman, you notice the athletic woman from last time is still there.</p>
                <p>Maddy raises her voice. "It seems that you noticed Carly as well. She has become the most promising subject in here. We doubled her doses. and now that you got us a large supply of heavy cream, we can increase it even further.</p>
                <p>The woman has indeed changed, her arms and legs are thinner, but the bandages around her waist are becoming stretched. Her abdomen just a little bloated. It would be unnoticeable if she was wearing proper clothing.</p>
                <p>Maddy breaks the scilence again. "It seems that you are interested in this experiment. I like that. You know, I'll teach you how to get here and give you credentials, come back whenever you want, there might be some progress with the girls" With that maddy gives you a card, the card has a map in it. It also says `Experiment 001` "That's also your ID" Maddy says, the giantic door opens and Maddy leaves.</p>
                <p>You stare at the woman for a while. You see Carly dragging the metal pole with the IV around with her, she's desperately attempting not to lose her mind. The other subjets loafed about. The woman were growing weak, and their hope was in the trash.</p>
                
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {leaveNowYouHaveAccessToAliensStory}>Game map</button>
                </Link>  
                
            </Col3>
            </>
  
      ) 

    } else if(props.flags.includes("KomperaAliensStory3") && enterKomperaAliensStory > 0){
        
        let ChangeBodiesWithCarlyForKomperaAliens = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("KomperaAliensStory3");
            props.onPushFlag("ChangeBodiesWithCarlyForKomperaAliens");
        }

        
    
        return(
            <>
            <Col1>
                <SetCol1/>
            </Col1>
            <Col2 BackImage = {TheMarblelRoomForKomperaAliens}>
            </Col2>  
    
            <Col3 > 
                   
                <p>The large door opens and you see the subjects again. You stare at them for what seems hours, you are fixated on Carly. Her aura traps you. You approach the two side mirror, you touch it, you want to get closer. Carly moves her gaze towards you, she should not know where you are, but your eyes are locked. Suddelny Carly faints.</p>
                
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {ChangeBodiesWithCarlyForKomperaAliens}>A flash of light blinds you</button>
                </Link>  
                
            </Col3>
            </>
  
      ) 
    } else if(props.flags.includes("ChangeBodiesWithCarlyForKomperaAliens") && enterKomperaAliensStory > 0){
        let InCarlyBodyKompera_1 = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("ChangeBodiesWithCarlyForKomperaAliens");
            props.onPushFlag("InCarlyBodyKompera_1");
        }

        let leaveCarlyBody = () =>{
            props.onAddMinutes(240);
            props.onAddMoney(-50);
            enterKomperaAliensStory = 0;
            alert("You manage to leave her body. You are now outside the lab. Your body feels weak, you had to buy a 50$ antidote to go back to normal.");
        }
        
    
        return(
            <>
            <Col1>
                <SetCol1/>
            </Col1>
            <Col2 BackImage = {TheMarblelRoomForKomperaAliens}>
            </Col2>  
    
            <Col3 > 
                   
                <p>Your body feels heavy, weak, your mind feelz dizzy, you open your eyes and all you see is white walls, there is a metal pole with a bag filled with green slime, and it's being injected directly into your bloodsteam... The realization hits you, you are Carly, you are in her body. You try to move... But you can't. You can feel what Carly feels, you can see what she sees. You are trapped inside her body.</p>

                
                <Link to={"/TheLabOutside"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {InCarlyBodyKompera_1}>It's late, and Carly is about to fall alsleep</button>
                </Link>  
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {leaveCarlyBody}>Focus all your might on going back to your body</button>
                </Link>  
                
            </Col3>
            </>
  
      ) 
    }else if(props.flags.includes("InCarlyBodyKompera_1") && enterKomperaAliensStory > 0){
        //TODO Continue compera alien story
        let asd = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("InCarlyBodyKompera_1");
            props.onPushFlag("");
        }

        let leaveCarlyBody = () =>{
            props.onAddMinutes(240);
            props.onAddMoney(-50);
            enterKomperaAliensStory = 0;
            alert("You manage to leave her body. You are now outside the lab. Your body feels weak, you had to buy a 50$ antidote to go back to normal.");
        }
        
    
        return(
            <>
            <Col1>
                <SetCol1/>
            </Col1>
            <Col2 BackImage = {TheMarblelRoomForKomperaAliens}>
            </Col2>  
    
            <Col3 > 
                   
                <p></p>

                
                <Link to={"/TheLabOutside"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {asd}></button>
                </Link>  
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {leaveCarlyBody}>Focus all your might on going back to your body</button>
                </Link>  
                
            </Col3>
            </>
  
      ) 
    }
    
    
    
    else {
        
        let GoToGameMap = () =>{
            props.onAddMinutes(10);
        }

        let EnterTheLab = () =>{
            props.onAddMinutes(10);
        }

        let goToKomperaAliensStory = () =>{
            props.onAddMinutes(10);
            if(Math.random() < .3){
                alert("Wait a little more before checking on the experiment");
            } else{
                enterKomperaAliensStory += 1;
            }
        }

        let theLinks = () =>{
            return(
                <Link to={"/TheLab"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {EnterTheLab} disabled = {(props.flags.includes("CanAccessLab") ? false:true)}>Go to the lab</button>
                </Link>  
            )  
        }
        
        var randomNumFindGirls = Math.random();
        if(randomNumFindGirls < .15){
            return(
                <FindingTheGirls
                    backImageChar = {outsideLab}
                    characterImageWidth = {props.characterImageWidth}
                    characterImageHeight = {props.characterImageHeight}
                    CurrentLocation = {"/TheLabOutside"}
                    DrugStealthModifier = {props.DrugStealthModifier}
                    theLinks = {theLinks}
                    flags = {props.flags}
                    randomNumFindGirls = {randomNumFindGirls}
                    
                    //Sandy
                    SandyImage = {props.SandyImage}
                    SandyImageS1 = {props.SandyImageS1}
                    SandyImageS2 = {props.SandyImageS2}
                    SandyImageS3 = {props.SandyImageS3}
                    fuckingSandyVideo_s4 = {props.fuckingSandyVideo_s4}
                    SandyTalks = {<p>Hey {props.name} This place is huuuuge. In my farm there was no building taller than two floor. And that was an important building</p>}
                    
                    //Amy
                    AmyImage = {props.AmyImage}
                    AmyImageS1 = {props.AmyImageS1}
                    AmyImageS2 = {props.AmyImageS2} 
                    AmyImageS3 = {props.AmyImageS3}
                    fuckingAmyVideo_s4 = {props.fuckingAmyVideo_s4}
                    AmyTalks = {<p>Hello {props.name} I heard this place is into some fishy research. I'm looking for some information.</p>}
        
                    //Evelyn
                    EveImage = {props.EveImage}
                    EveImageS1 = {props.EveImageS1}
                    EveImageS1 = {props.EveImageS1}
                    EveImageS3 = {props.EveImageS3}
                    fuckingEveVideo_s4 = {props.fuckingEveVideo_s4}
                    EveTalks = {<p>Hey {props.name} Even tough I hate coorporations. I have to admit the design of the building is kindof nice</p>}
                />
                )
        }
        

        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {outsideLab}>
            </Col2>  
    
            <Col3 > 
    
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GoToGameMap}>Game map</button>
                </Link>  
                <Link to={"/TheLab"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {EnterTheLab} disabled = {(props.flags.includes("CanAccessLab") ? false:true)}>Go to the lab</button>
                </Link>  

                <Link to={"/TheLabOutside"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {goToKomperaAliensStory} style ={{display:(props.flags.includes("KomperaAliensStoryButton") ? "" : "none")}}>Go see the experiment 001 subjects</button>
                </Link>  
            </Col3>
            </>
  
      )

        

    }

}


export default TheLabOutside;