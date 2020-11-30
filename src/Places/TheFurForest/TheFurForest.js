import React from "react";
import { Link } from "react-router-dom";

import Col1 from "../../components/col1";
import Col2 from "../../components/col2";
import Col3 from "../../components/col3";
import SetCol1 from "../../components/SetCol1";

//Images
import TheFurForestEntrance from "../../Images/TheFurForest/FurForestEntrance.jpg";
import ForestBifurcation from "../../Images/TheFurForest/ForestBifurcation.jpg";
import ThickForest from "../../Images/TheFurForest/ThickForest.jpg";
import TribeGoblinHut from "../../Images/TheFurForest/TribeGoblinHut.jpg";
import Lake from "../../Images/TheFurForest/Lake.jpg";
////SANTMQ
import SANTMQFurryFoxFuckingVideo from "../../Images/TheFurForest/SANTMQ/SANTMQFurryFoxFuckingVideo.mp4";
import SmallBreastsGoblinGangbangNoPregnant from "../../Images/TheFurForest/SANTMQ/SmallBreastsGoblinGangbangNoPregnant.mp4"
//characters
import BlackFox_transparent from "../../Images/TheFurForest/SANTMQ/BlackFox_transparent.png";
import Goblin_transparent from "../../Images/TheFurForest/SANTMQ/Goblin_transparent.png";


var myRoll = 0;
var sandyRoll = 0;
var goblinRolls = 0;
var rollCount = 0;

const TheFurForest = (props) => {

    function normal_distribution() {
        let u = 0, v = 0;
        while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
        while(v === 0) v = Math.random();
        let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
        num = num / 10.0 + 0.5; // Translate to 0 -> 1
        if (num > 1 || num < 0) return normal_distribution(); // resample between 0 and 1
        return num;
      }

    if(props.flags.includes("SANTMQFindPirateInFurForestSandyWillBeInForest")){
        let GoToGameMap = () =>{
            props.onAddMinutes(10);
        }
    
        let SANTMQEnterFurForest = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("SANTMQEnterFurForestToFindPirateCat");
            props.onSpliceFlag("SANTMQFindPirateInFurForestSandyWillBeInForest");
            props.onChangeRelationship("Sandy",5);
        }

        let GoToGameMapRemoveQuest = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("SANTMQFindPirateInFurForestSandyWillBeInForest");
        }
    
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {TheFurForestEntrance}>
                    <img alt = {"Not found"} src = {props.SandyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
                   
                   <p>You get to the entrance of the forest, a single pathway leads inside the thick forest.</p>
                   <p>"You know, this forest did not exist 5 years ago. Such a massive growth of nature is a sure sign of magic. And strong one. {props.name}, I don't want to force you to do this. But I need your help. Once we go in there's no going back. Are you ready?"</p>
                    
    
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GoToGameMap}>Game map</button>
                </Link>  
                <Link to={"/TheFurForest"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {SANTMQEnterFurForest}>Let's go in</button>
                </Link>  
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-secondary" onDoubleClick = {GoToGameMapRemoveQuest}>Sandy, I want nothing to do with this quest (Double click)</button>
                </Link>  
            </Col3>
            </>
  
      )
    }   else if(props.flags.includes("SANTMQEnterFurForestToFindPirateCat")){
        
    
        let SANTMQGoLeftPathFurForest = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("SANTMQGoLeftPathFurForest");
            props.onSpliceFlag("SANTMQEnterFurForestToFindPirateCat");
        }
        
        let SANTMQGoRightPathFurForest = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("SANTMQGoRightPathFurForest");
            props.onSpliceFlag("SANTMQEnterFurForestToFindPirateCat");
        }
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {ForestBifurcation}>
                    <img alt = {"Not found"} src = {props.SandyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
                   
                   <p>"Great" Sandy bounces. "Let's go".</p>

                    <p>"I hope 'pirate' didn't wonder too deep into the forest." Sandy comments.
                    As you give your first steps you feel a tingling in your spine, you feel the magic in the athmosphere. The sounds of nature are completely different now, and some even feel threathening.

                    Sandy holds you hand. "Let.. Let's not get separated." She mutters.</p>
                    <p>You go deeper into the forest. You get to a bifurcation in the road.
                    "Now is when the forest starts messing with ya" Says Sandy. "This places change, paths appear and dissapear constantly." Sandy breathes and focuses. You feel tension in her aura.
                    </p>
                    <p>"I have na idea of where to go." Sandy blurts. "Where do you want to go?"</p>
    
                <Link to={"/TheFurForest"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {SANTMQGoLeftPathFurForest}>Take the left path</button>
                </Link>  
                <Link to={"/TheFurForest"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {SANTMQGoRightPathFurForest}>Take the right path</button>
                </Link>  

            </Col3>
            </>
  
      )
    } else if(props.flags.includes("SANTMQGoRightPathFurForest")){
        
        let SANTMQFuckSandyFurry = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("SANTMQFuckSandyFurry");
            props.onSpliceFlag("SANTMQGoRightPathFurForest");
        }
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {ThickForest}>
                    <img alt = {"Not found"} src = {props.SandyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                    <img alt = {"Not found"} src = {BlackFox_transparent} style ={{width : props.characterImageWidth, height: "30vh"}}></img>
            </Col2>  
    
            <Col3 > 
                   
                   <p>The forest gets thicker as you advance. Howling is heard at the distance. Amy clutches you. "I hope those are just wolves or foxes..." Whispers Sandy. </p>
            
                    <p>Suddenly you hear the rumbling of leaves and a cute little fox appears in front of you. As you keep walking more foxes appear.</p>

                    <p>"Look" Says Sandy. Pointing at a large dark fox with deep blue eyes. "This is my skulk, my pack. And only foxes are allowed here." His eyes shine.</p>
                    <p>"Oh gosh" Sandy mumbles. </p>
                    <p>You look at your hand, in the center you see a bump, you have a padded paw. orange fur covering starts covering your body. Foxes started nibbling your clothes. You feel like a stranded ship, disoriented. Inmobile. </p>
                    <p>The sensations are now focused on your face, slowly your nose pushes further. You are growing a muzzle, your now fox-like face is so sensitivie.</p>
                    <p>Your toughts are interrupted by a throb from your cock. *Moan* You hear Sandy. A tail pushing out of her. And you start feeling the same. A fluffy tail pushes through your rear. And arousal builds up in your body.</p>
                    <p>"I know what you are looking for" Says the black fox. "I'll change you back and tell you where the cat is... If, you put on a show for us."</p>
                    <p>Sandy is already fully naked. She grabs your rock-hard cock, and tells you to fuck her.</p>
    
                <Link to={"/TheFurForest"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {SANTMQFuckSandyFurry}>Fuck sandy</button>
                </Link>  

            </Col3>
            </>
  
      )

    } else if(props.flags.includes("SANTMQFuckSandyFurry")){
        let SANTMQGetCloserToGoblins = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("SANTMQGetCloserToGoblins");
            props.onSpliceFlag("SANTMQFuckSandyFurry");
            props.onPushFlag("TFFWTheFurForestQuestStart");

        }
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {" "} rowHeight = {" "}>
            <video autoPlay loop 
            style ={{width: "100%", height: "100%"}}>
                <source src={SANTMQFurryFoxFuckingVideo} type="video/mp4"/>
            </video>
            </Col2>  
    
            <Col3 > 
                   
                <p>At this, You and Sandy rolled together into one hot ball of furr-figured copulation, screaming and shouting as you bit and pulled at each other in a dangerous and clamorous rollercoaster coil of sexually violent rotation with Sandy’s breasts pushed to your howling mouth and the pained frenzy of your bulbous salutation extenuating your excitement as it whacked and smacked its way into every muscle of Sandy’s foxy body.</p>
                <p>You lay down after the extenuating sex session, Sandy hugging you. You look around and the foxes are gone, and you slowly revert back to your human form.</p>
                <p>The rumbling of the forest directs your gaze to a small structure. To the distance you see four goblins.</p>
                <p>"The goblins have trapped your cat. Head west." You hear the Foxes voice in your head. "Don't come back... Unless you want to learn the Fox's way."</p>
    
                <Link to={"/TheFurForest"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {SANTMQGetCloserToGoblins}>Get closer to the goblins</button>
                </Link>  

            </Col3>
            </>
  
      )
    } else if(props.flags.includes("SANTMQGetCloserToGoblins")){
        let SANTMQDistractGoblinsRock = () =>{
            let myRoll = Math.round(props.physical * normal_distribution()*2,0);
            
            if(myRoll >= 10){
                props.onPushFlag("SANTMQDistractedGoblinsSucessfully");
            } else{
                props.onPushFlag("SANTMQCouldNotDistractGoblinsSucessfully");
            }
            
            
            props.onSpliceFlag("SANTMQGetCloserToGoblins");
            props.onAddMinutes(10);
        }

        let SANTMQDistractGoblinsBird = () =>{
            let myRoll = Math.round(props.mind * normal_distribution()*2,0);
            
            if(myRoll >= 10){
                props.onPushFlag("SANTMQDistractedGoblinsSucessfully");
            }else{
                props.onPushFlag("SANTMQCouldNotDistractGoblinsSucessfully");
            }
            
            props.onSpliceFlag("SANTMQGetCloserToGoblins");
            props.onAddMinutes(10);
        }
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage ={TribeGoblinHut}>
                <img alt = {"Not found"} src = {props.SandyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>

                <img alt = {"Not found"} src = {Goblin_transparent} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
                   
            <p> "{props.name}, try to distract the goblins while I get the cat. I don't wanna fight, but if we have to. Go hard, and aim for the neck." Sandy, then moves dissappears into the forest.</p>
           
            <p>How will you distract the goblins?</p>

            
            <p>You throw a single die, if it's over 10, you win. Else, you fight.</p>
            
            <Link to={"/TheFurForest"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {SANTMQDistractGoblinsRock}>Throw a rock</button>
            </Link>  
            <Link to={"/TheFurForest"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {SANTMQDistractGoblinsBird}>Mimic a bird</button>
            </Link>  

            </Col3>
            </>
  
      )
    } else if(props.flags.includes("SANTMQDistractedGoblinsSucessfully")){
        let SANTMQSandyInStoreRecoveredTheCat = () =>{
            props.onPushFlag("SANTMQSandyInStoreRecoveredTheCat");
            props.onSpliceFlag("SANTMQDistractedGoblinsSucessfully");
            props.onAddMinutes(10);
        }
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage ={TribeGoblinHut}>
                <img alt = {"Not found"} src = {props.SandyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
                   
            <p>The goblins ate the distraction. And Sandy snatches the cage like a nimble fox.  She then runs back to you.</p>
            
            <p>"That was easy..." Sandy says. "We have to leave, now, before the goblins realize the cage is gone".</p>
            <p>"When you are ready, find me in the store"</p>
            
            <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {SANTMQSandyInStoreRecoveredTheCat}>Leave the forest to game map</button>
            </Link>  

            </Col3>
            </>
  
      )

    } else if(props.flags.includes("SANTMQCouldNotDistractGoblinsSucessfully")){


        let SANTMQFightingGoblinsAfterFurryRollDie = () =>{

            myRoll = Math.round(props.physical * normal_distribution()*2,0);
            sandyRoll = Math.round(props.Sandy.physical * normal_distribution()*2,0);
            goblinRolls = Math.max(Math.round(6 * normal_distribution()*2,0),Math.round(6 * normal_distribution()*2,0),Math.round(6 * normal_distribution()*2,0),Math.round(6 * normal_distribution()*2,0));

            if(rollCount >= 4){
                rollCount = -1;
                props.onSpliceFlag("SANTMQCouldNotDistractGoblinsSucessfully");
                props.onPushFlag("SANTMQDefeatedGoblinsAfterFurry");
            } else{
                if(goblinRolls > Math.max(myRoll,sandyRoll)){
                    props.onSpliceFlag("SANTMQCouldNotDistractGoblinsSucessfully");
                    props.onPushFlag("SANTMQGoblinsDefeatedSandyAndYouAfterFurry");
                }
            }
            
            myRoll = 0;
            sandyRoll = 0;
            goblinRolls = 0;
            props.onAddMinutes(10);
            rollCount += 1;
        }

    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage ={TribeGoblinHut}>
                <img alt = {"Not found"} src = {props.SandyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                <img alt = {"Not found"} src = {Goblin_transparent} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
                   
                   <p>The goblins realize you are trying to steal from them.</p>
                   <p>You need to defeat the four goblins defeat their highest roll. You and Sandy roll.</p>
                   <p>You need to defeat four goblins.</p>

                    <p>You rolled {(myRoll ? `${myRoll} and the goblins rolled ${goblinRolls}` :"You have not rolled")}</p>
            
            <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {SANTMQFightingGoblinsAfterFurryRollDie}>Roll dice</button>
            </Link>  

            </Col3>
            </>
  
      )
    } else if(props.flags.includes("SANTMQDefeatedGoblinsAfterFurry")){
        let SANTMQSandyInStoreRecoveredTheCatAfterDefeatingGoblinsFurry = () =>{
            props.onPushFlag("SANTMQSandyInStoreRecoveredTheCat");
            props.onSpliceFlag("SANTMQDefeatedGoblinsAfterFurry");
            props.onAddMinutes(10);
        }
    
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage ={ThickForest}>
                <img alt = {"Not found"} src = {props.SandyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
                   
                   <p>Goblin after goblin falls at your hands. Sandy is strong and agile, the goblins did not stand a chance. </p>
                   <p>The goblins scatter and you take the cage with the cat.</p>
                   <p>You two go back and get out of the forest.</p>
                    <p>"I'll be at the store" Says Sandy. "Find me there when you are ready for what's next."</p>
            
            <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {SANTMQSandyInStoreRecoveredTheCatAfterDefeatingGoblinsFurry}>Leave the forest to game map</button>
            </Link>  

            </Col3>
            </>
  
      )
    } else if(props.flags.includes("SANTMQGoblinsDefeatedSandyAndYouAfterFurry")){
        let SANTMQGoblinsRapeYouAfterFurry = () =>{
            props.onPushFlag("SANTMQGoblinsRapeYouAfterFurry");
            props.onSpliceFlag("SANTMQGoblinsDefeatedSandyAndYouAfterFurry");
            props.onAddMinutes(10);
        }
        let SANTMQLostToGoblinsPassoutAfterfurry = () =>{
            props.onPushFlag("SANTMQLostToGoblinsPassoutAfterfurry");
            props.onSpliceFlag("SANTMQGoblinsDefeatedSandyAndYouAfterFurry");
            props.onAddMinutes(10);
        }
    
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage ={TribeGoblinHut}>
                <img alt = {"Not found"} src = {props.SandyImageNaked} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                <img alt = {"Not found"} src = {Goblin_transparent} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
            
            
                <p>The goblins outnumber you, and you can't go on anymore. Now that you have inflicted some damage they lust for revange. </p>

                <p>You feel a cock rubbing your legs. It's slimy and... Big.</p>

                <p>All goblins mount you, each choosing a whole to fuck... Sandy looks at you. You... like this?</p>
            
            <Link to={"/TheFurForest"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {SANTMQGoblinsRapeYouAfterFurry}>I like this</button>
            </Link>  
            <Link to={"/SandyApartment"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {SANTMQLostToGoblinsPassoutAfterfurry}>I don't like this (Pass out)</button>
            </Link>  

            </Col3>
            </>
  
      )
    } else if(props.flags.includes("SANTMQGoblinsRapeYouAfterFurry")){

        let SANTMQSandyInStoreRecoveredTheCatAfterGoblinsRapeYoufurry = () =>{
            props.onPushFlag("SANTMQSandyInStoreRecoveredTheCat");
            props.onSpliceFlag("SANTMQGoblinsRapeYouAfterFurry");
            props.onAddMinutes(10);
        }
    
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {" "} rowHeight = {" "}>
            <video autoPlay loop 
            style ={{width: "100%", height: "100%"}}>
                <source src={SmallBreastsGoblinGangbangNoPregnant} type="video/mp4"/>
            </video>
            </Col2>  
    
            <Col3 > 
            
            
            <p>You are wet, shivers through your spine. Your body feels on fire. Your anus and mouth filled with large goblin cock. Sandy moaning and screaming. She looks like a doll, taking a cock in every possible orifice.</p>
            <p>The goblins dick slide inside you easily. goosebumps all over your body. Each trust filled with pleasure. Your mind swirling, orgasming your body trembles. And the goblins keep pushing for more. </p>
            
            <p>You can't stop shaking, the goblins are now exhausted.</p>
            <p>The goblins leave you alone. And push you outside their hideout.</p>
            <p>...........</p>
            <p>...........</p>
            <p>...........</p>
            <p>*Meow*, Sandy grins. She managed to rescue 'pirate' in the middle of the fight.</p>
            <p>You both stand up. Your body sore, and bruised. Slowly you get to the entrance to the forest.</p>
            <p>"At least we got the cat." Mumbles Sandy. "Find me in the store when you are ready."</p>
            
            <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {SANTMQSandyInStoreRecoveredTheCatAfterGoblinsRapeYoufurry}>GameMap</button>
            </Link>  
            

            </Col3>
            </>
  
      )
    }
    
    
    
    
    else if(props.flags.includes("SANTMQGoLeftPathFurForest")){
        let SANTMQBodySwapAfterGettingOutOfLake = () =>{
            props.onPushFlag("SANTMQBodySwapAfterGettingOutOfLake");
            props.onSpliceFlag("SANTMQGoLeftPathFurForest");
            props.onAddMinutes(10);
        }
    
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage ={Lake}>
                <img alt = {"Not found"} src = {props.SandyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2> 
    
            <Col3 > 
            
            <p>You take the path to the left. As you get deeper into the path, the forest roof starts clearing. You hear birds chirping and you a see silver lake.</p>
            <p>"That's so pretty!" Says Sandy. An oasis of calm inside the forest. The lake stretches wide for as far you can see. </p>
            <p>"We need to cross it" Amy comments. "I'm a good swimmer".</p>
            <p>"What about magic?" You ask.</p>
            <p>"Well, I don't feel anything evil in the water, there are no creatures in there". You both get closer to the lake, you can see your reflection clearly, and you both look great. Wind blows and you feel the breeze in your hair, the fresh smell of the lake surrounds you.</p>
            <p>"Lets go" Says Sandy. She smiles. "The lake is wide, but not that long, We cross it in a few minutes".</p>
            <p>*Splash* Sandy jumps into the lake, she looks at you and signals you to go in. "It's too late go back alone" She giggles.</p>
            <p>And you plunge into the lake. The water is cold, and you feel a sense of calm. You feel energized. "I bet I can get to the other side faster!" plays Sandy, and she starts swimming to the other side.</p>
            <p>You cruise through the lake, the water flowing through your body.Your mind blank.</p>
            
            <Link to={"/TheFurForest"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {SANTMQBodySwapAfterGettingOutOfLake}>When you finally get out you see... yourself?</button>
            </Link>  
            

            </Col3>
            </>
  
      )
    } else if(props.flags.includes("SANTMQBodySwapAfterGettingOutOfLake")){
        let SANTMQFightTheGoblinsAloneInSandyBody = () =>{
            props.onPushFlag("SANTMQFightTheGoblinsAloneInSandyBody");
            props.onSpliceFlag("SANTMQBodySwapAfterGettingOutOfLake");
            props.onAddMinutes(10);
        }
    
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage ={Lake}>
                <img alt = {"Not found"} src = {props.SandyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2> 
    
            <Col3 > 
            
            <p>"Oh gosh..." You hear your own voice say. "{props.name}, you are in my body."</p>
            <p>You look down and see long hair, breasts. And you feel amazing.</p>
            <p>"Your body is really weak {props.name}" Says Sandy. "You should work out, maybe you could get as strong as me". </p>
            <p>You are intoxicated with power, your new body feels like steel, you feel agile, alert, you flex and a warm shiver goes through you spine.</p>
            <p>"I guess you are enjoying my body" Mutters Sandy. "Don't get too comfortable, I know how to swap us back. But I might have to use the rune I we are doing all this for..." Sandy sighs. "There is no time to waste. Let's find that cat."</p>
            <p>You follow Sandy. You feel fast, like a gazelle cruising through the savanah. You start walking faster, then you are running. Who knows for how long you ran until the sight of four small humanoid creatures stop you.</p>
            <p>You look around, Sandy is nowhere near. And in front of you there are four goblins. Small, ugly creatures that are looking directly at you. </p>
            <p>*Meow* You hear a cat. A single one-eyed black cat is in a goblin cage. That's pirate!</p>
            <p>One goblin lauches towards you.</p>            
            
            <Link to={"/TheFurForest"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {SANTMQFightTheGoblinsAloneInSandyBody}>Fight the goblins</button>
            </Link>  
            

            </Col3>
            </>
  
      )
    } else if(props.flags.includes("SANTMQFightTheGoblinsAloneInSandyBody")){
        let SANTMQFightGoblinsAloneRollDie = () =>{

            sandyRoll = Math.round(props.Sandy.physical * normal_distribution()*2,0);
            goblinRolls = Math.max(Math.round(6 * normal_distribution()*2,0),Math.round(6 * normal_distribution()*2,0),Math.round(6 * normal_distribution()*2,0),Math.round(6 * normal_distribution()*2,0));

            if(rollCount >= 4){
                rollCount = -1;
                props.onSpliceFlag("SANTMQFightTheGoblinsAloneInSandyBody");
                props.onPushFlag("SANTMQFightInSandyBodyYouWin");
            } else{
                if(goblinRolls > sandyRoll){
                    props.onSpliceFlag("SANTMQFightTheGoblinsAloneInSandyBody");
                    props.onPushFlag("SANTMQFightInSandyBodyGoblinWins");
                }
            }
            
            myRoll = 0;
            sandyRoll = 0;
            goblinRolls = 0;
            props.onAddMinutes(10);
            rollCount += 1;
        }
    
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage ={TribeGoblinHut}>
                <img alt = {"Not found"} src = {props.SandyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                <img alt = {"Not found"} src = {Goblin_transparent} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2> 
    
            <Col3 > 
            
            
            <p>You need to defeat the four goblins, they rolled -4 goblin rolls- defeat the highest one. You and Sandy roll.</p>
            <p>You need to defeat four goblins.</p>

            <p>You rolled {(myRoll ? `${myRoll} and the goblins rolled ${goblinRolls}` :"You have not rolled")}</p>
            
            <Link to={"/TheFurForest"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {SANTMQFightGoblinsAloneRollDie}>Roll die</button>
            </Link>  
            

            </Col3>
            </>
  
      )
    } else if(props.flags.includes("SANTMQFightInSandyBodyYouWin")){
        let SANTMQDefeatedGoblinsInSwapbodySandyWillBeInStore = () =>{
            props.onPushFlag("SANTMQSandyInStoreRecoveredTheCat");
            props.onSpliceFlag("SANTMQFightInSandyBodyYouWin");
            props.onAddMinutes(10);
        }
    
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage ={TribeGoblinHut}>
                <img alt = {"Not found"} src = {props.SandyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2> 
    
            <Col3 > 
            
            <p>Goblin after goblin falls at your hand. Sandy's body is strong and agile, the goblins did not stand a chance. </p>
            <p>The goblins scatter and you take the cage with the cat.</p>            
            <p>"{props.name}! Found you!" Sandy is wheezing. "You found pirate! Let's go back"</p>
            <p>You two go back and find the lake. "Maybe if we go in again we'll swap back" Says Sandy. You get closer to the lake. You still feel high on power. 'I hate my body... Maybe if I just kept Sandy's body...' </p>
            <p>Sandy tackles you into the water before you could finish your thoughts. The water refreshes you. Your mind goes dark.</p>
            <p>When you get to the surface and gasp for air. you see Sandy, in her own body. </p>
            <p>"Thank god that worked" Sandy says. "Sorry about the tackle, but I had to make sure nothing funky happened" Sandy starts swimming to the end of the lake with the caged cat on top of her.</p>
            <p>After you both reach the end of the lake you can see the path that got you here.</p>
            <p>"I'll be at the store" Says Sandy. </p>
                     
            
            <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {SANTMQDefeatedGoblinsInSwapbodySandyWillBeInStore}>Game map</button>
            </Link>  
            

            </Col3>
            </>
  
      )
    } else if(props.flags.includes("SANTMQFightInSandyBodyGoblinWins")){
        let SANTMQGoblinsRapeYouAfterSwap = () =>{
            props.onPushFlag("SANTMQGoblinsRapeYouAfterSwap");
            props.onSpliceFlag("SANTMQFightInSandyBodyGoblinWins");
            props.onAddMinutes(10);
        }
        let SANTMQLostToGoblinsPassoutAfterSwap = () =>{
            props.onPushFlag("SANTMQLostToGoblinsPassoutAfterSwap");
            props.onSpliceFlag("SANTMQFightInSandyBodyGoblinWins");
            props.onAddMinutes(10);
        }
    
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage ={TribeGoblinHut}>
                <img alt = {"Not found"} src = {props.SandyImageNaked} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                <img alt = {"Not found"} src = {Goblin_transparent} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
            
            
                <p>The goblins outnumber you, and you can't go on anymore. Now that you have inflicted some damage they lust for revange. </p>

                <p>You feel a cock rubbing your legs. It's slimy and... Big.</p>

                <p>All goblins mount you, each choosing a whole to fuck... Sandy looks at you. You... like this?</p>
            
            <Link to={"/TheFurForest"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {SANTMQGoblinsRapeYouAfterSwap}>I like this</button>
            </Link>  
            <Link to={"/SandyApartment"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {SANTMQLostToGoblinsPassoutAfterSwap}>I don't like this (Pass out)</button>
            </Link>  

            </Col3>
            </>
  
      )
    } else if(props.flags.includes("SANTMQGoblinsRapeYouAfterSwap")){
        let SANTMQGoblinsRapedYouInSandysBody = () =>{
            props.onPushFlag("SANTMQLostToGoblinsPassoutAfterSwap");
            props.onSpliceFlag("SANTMQGoblinsRapeYouAfterSwap");
            props.onAddMinutes(10);
        }
    
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {" "} rowHeight = {" "}>
            <video autoPlay loop 
            style ={{width: "100%", height: "100%"}}>
                <source src={SmallBreastsGoblinGangbangNoPregnant} type="video/mp4"/>
            </video>
            </Col2>  
    
            <Col3 > 
            
            <p>You are wet, shivers through your spine. Your body feels on fire. You pussy, anus and mouth filled with large goblin cock.</p>
            <p>The goblins dick slide inside you easily. goosebumps all over your body. Each trust filled with pleasure. Your mind swirling, orgasmn after orgasmn your body trembles. And the goblins keep pushing for more. </p>
            <p>You can't stop shaking, the goblins are now exhausted.</p>
            <p>And you see her. Well, you see yourself. Sandy comes in, and attacks the exhausted goblins.</p>
            <p>You can see she's disgusted by what just happened.</p>
            
            <Link to={"/SandyApartment"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {SANTMQGoblinsRapedYouInSandysBody}>Pass out</button>
            </Link>  
            

            </Col3>
            </>
  
      )
    }
    
    
    
    
    else if(props.flags.includes("GoToTheFoxesHideoutFirstTime")){
        ///////////////////////////////////////////////////////////////////////////////
        return(
            <p>Building quest...</p>
        )
    }
    
    else {
        let GoToGameMap = () =>{
            props.onAddMinutes(10);
        }

        let GoToFoxesHideout = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("GoToTheFoxesHideoutFirstTime");
        }
    
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {TheFurForestEntrance}>
                    
            </Col2>  
    
            <Col3 > 
                   
                <p>You are at the Fur forest. You should not go in right now</p>
    
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GoToGameMap}>Game map</button>
                </Link>  

                <Link to={"/TheFurForest"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GoToFoxesHideout} style = {{
                        display:(props.flags.includes("TFFWTheFurForestQuestStart") || props.flags.includes("DISCOVERED_FUR_FOX_HIDEOUT") ? "": "none")
                    }}
                    >Find the Fox's hideout</button>
                </Link>  
                
                
            </Col3>
            </>
  
      )

    }

}


export default TheFurForest;