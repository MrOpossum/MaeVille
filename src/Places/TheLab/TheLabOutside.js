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
        
        let InCarlyBodyKompera_2 = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("InCarlyBodyKompera_1");
            props.onPushFlag("InCarlyBodyKompera_2");
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
                   
                <p>A few days pass, and whenever you and Carly get some privacy, you notice, just like Carly notices, that just like the wraps around her waist, the wraps around her bossom are getting a little tighter. you are developing cleavage, cleavage Carly never had, cleavage that had never been allotted to any of the women when their breast wrap had first been fitted. Carly figured it is from all the cream she’d been gorging on. The fat had gone only to vulnerable places like her breasts, and perhaps her stomach.</p>
                <p>The next moring you notice that one of the girls around you is gone. You can feel how Carly is frightened. Worried about what will happen to her next.</p>

                
                <Link to={"/TheLabOutside"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {InCarlyBodyKompera_2}>Stay inside Carlys body</button>
                </Link>  
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {leaveCarlyBody}>Focus all your might on going back to your body</button>
                </Link>  
                
            </Col3>
            </>
  
      ) 
    }else if(props.flags.includes("InCarlyBodyKompera_2") && enterKomperaAliensStory > 0){
        let InCarlyBodyKompera_3 = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("InCarlyBodyKompera_2");
            props.onPushFlag("InCarlyBodyKompera_3");
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
                   
                <p>Through the days Carly’s personal problems grew slightly more drastic. Though her bandages were practically suffocating her, she refused to remove them, in fear of punishment from her captors. The bandages hid some of her growth, but the other girls surely must have noticed her weight gain, especially with a good portion of her breasts bulging over the wrap.</p>
                <p>Carly's breasts had been smaller than most of the other woman's, They were still significantly larger than what they’d originally been. What had been hopeless AAs were now Bs. Plump Bs.</p>
                <p>And then Carly realized something, this was the day when your personal problems became more than personal problems. You felt something – something strange – on Carly's breasts. She knew something was there. Attached to her nipples, subtly shaped, beneath her wrap – and it was moving!</p>
                <p>Carly was terrified, but curiosity got the best of her. In an early morning, before the others had awoken, but the thing had woken her. Slowly, Carly pealed the wrap away from her right breast, and stared in shock at what she found.</p>
                <p>You saw a small silver device, shaped like a large insect, and was latched to Carly's nipple, its six legs spread over her areola, opening and contracting, gently massaging her breast.</p>
                <p>You notice that the device is identical to the suckling spider you got Maddy. Maddy... That name resonates in your consciousness, how long have you been here? Experiencing what this woman is experiencing, her fears, her worries... "What’s happening to me?" Carly wondered, closing her eyes. "What are they doing to me?"</p>

                
                <Link to={"/TheLabOutside"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {InCarlyBodyKompera_3}>Stay inside Carlys body</button>
                </Link>  
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {leaveCarlyBody}>Focus all your might on going back to your body</button>
                </Link>  
                
            </Col3>
            </>
  
      ) 
    }else if(props.flags.includes("InCarlyBodyKompera_3") && enterKomperaAliensStory > 0){
        let InCarlyBodyKompera_4 = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("InCarlyBodyKompera_3");
            props.onPushFlag("InCarlyBodyKompera_4");
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
                   
                
                <p>After discovering the devices on her chest, over the next few hours, Carly could barely function. Having her breasts continually massaged, squeezed – whatever was happening – it was rather distracting. You could feel it as well, the constant tingling, like a tinnitus you could not ignore.</p>
                <p>"Did the others notice the way her busom trembled? Did they know what was happening to her? Were they simply not telling her?" Carlys toughts resonated in your own.</p>
                <p>Carlys bandages, your bandages grew yet tighter as they days rolled by, and your busom, bigger. She could see the others whispering by then, sometimes pointing at her.</p>
                <p>And then, one day, the bandages encircling her stomach broke. It started with a simple rupture in a tendril until it broke in half, and immediately, the bandages unraveled, and her stomach pushed outward, and she could take in her first full breath in over a week. The others stared, and suddenly, you were surrounded by those thin beings, your 'associates' as Maddy would call them, with balled fingers, clammy gray skin, and elongated heads.</p> 
                <p>"Was this what happened to the others? Was she about to be taken away?" Carlys toughts interrupt your own.</p>
                <p>Then everything went black</p>


                
                <Link to={"/TheLabOutside"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {InCarlyBodyKompera_4}>Stay inside Carlys body</button>
                </Link>  
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {leaveCarlyBody}>Focus all your might on going back to your body</button>
                </Link>  
                
            </Col3>
            </>
  
      ) 
    }else if(props.flags.includes("InCarlyBodyKompera_4") && enterKomperaAliensStory > 0){
        let MaddyTakesYouOutOfCarlyBody = () =>{
            enterKomperaAliensStory = 0;
            props.onSpliceFlag("InCarlyBodyKompera_4");
            props.onPushFlag("GetBeatlesForMaddyToContinueCompera");
        }
        
    
        return(
            <>
            <Col1>
                <SetCol1/>
            </Col1>
            <Col2 BackImage = {TheMarblelRoomForKomperaAliens}>
            </Col2>  
    
            <Col3 > 
                   

                <p>You wake up in a private location, four 'associates' lowered Carly to a metal table, whisking away her tattered bandages before cutting her breast wrap apart. Her busom pushed outwards, electronic spiders keeping a firm hold.</p>
                <p>For a moment, the beings stared down at you, one of them running its finger along Carlys swollen stomach. “It worked,” it said, in a rough, slithery, language. “Finally, it worked.”</p>
                <p>The others too began to prod her stomach. “Alas, our race might be preserved.”</p>
                <p>“This human is special.”</p>
                <p>They continued to chatter and bicker in their odd tongue.</p>
                <p>“And the specimen is responding well to the treatments. She’s becoming engorged,” another mentioned, glancing at the unconscious girl’s bosom. The bug-bots continued the stimulation process, massaging her mammarys and helping them swell.</p>
                <p>The girl’s slacks had stopped buttoning, but had spread apart to make room for her belly. The first 'associate' continued to rub it. “Perhaps it’s time to increase the dosage. Our young are avid eaters.” Said one being. You are not sure why you can hear them so clearly, while Carly is completely unconscious.</p>
                <p>When Carly awoke, on the cold marble floor, the other girls were crowded around her, staring at her...not her face...her body.</p>
                <p>Carly’s clothes had been changed. She wore a long, flowing, purple gown, loose around her body, that zipped up the front, reaching only midway up her busom to reveal her plump – jiggling – cleavage. The electronic insects seemed more avid than before. It felt good to be free of the bandages, but at the same time...Carly stared at her abdomen, as did the others. She wasn’t fat, but bloated. Too bloated. Her belly was firm and stuck out, almost like...like...</p>
                <p>She couldn’t be pregnant! She was only eighteen! No, no, not possible! You feel Carly think, anxious and scared.</p>
                <p>Carly was left sitting on the cold marble floor, continuing to stare in panic at her burgeoning physique. She tentatively touched her stomach. She looked as though she could be five months pregnant!</p>
                <p>Carly quickly dropped her hand. "No...it is just a little weight gain. A little gas." She reassured herself repetitively, her eyes drifting up the IV line to notice that the bag had doubled in size, the green gunk rolling freely into her veins.</p>
                <p>You hear a voice inside your head. But it's not Carly's, It's Maddy! "I see you have been taking care of our special volunteer" Says Maddy. "But I need you to get something for me again..." Your conciousness is then janked away from Carly's</p>
                
                
                <Link to={"/TheLabOutside"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {MaddyTakesYouOutOfCarlyBody}>Open your eyes</button>
                </Link>  
                
            </Col3>
            </>
  
      ) 
    }else if(props.flags.includes("GetBeatlesForMaddyToContinueCompera")){
        //TODO Maddy gives you beatle quest. This one is done. Do the rest of the quest.
        let GoToGameMap = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("GetBeatlesForMaddyToContinueCompera");
            props.onPushFlag("KomperaAliensInLabGetBeatles");
        }

        
    
        return(
            <>
            <Col1>
                <SetCol1/>
            </Col1>
            <Col2 BackImage = {outsideLab}>
                    <img alt = {"Not found"} src = {props.MaddyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                    <img alt = {"Not found"} src = {props.YourselfImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
                   
                   <p>You look at Maddy, "I hope you were having fun." She says. "Now, you have to go and find a new creature. A sucking beatle. They are not that common, so you might have to do some digging to get them. I trust you can do it." Maddy then looks at you. She makes something that could be descrived as a curious but a bit disgusted gesture. "Pull yourself toghether. Being inside that woman has messed you up a bit."</p>
                   <p>The fog in your mind slowly lifts. And you are left outside the lab, with something new to do.</p>
  
                
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GoToGameMap}>Game map</button>
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