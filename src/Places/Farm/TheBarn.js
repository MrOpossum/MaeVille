import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import Col1 from "../../components/col1";
import Col2 from "../../components/col2";
import Col3 from "../../components/col3";
import SetCol1 from "../../components/SetCol1";
import SimpleDialog from "../../components/SimpleDialog";

//Images
import FarmgirlOwner from "../../Images/Farm/farmgirl_owner.jpg";
import FarmBarn from "../../Images/Farm/farm_barn.jpg";
import GirlDrinkingFromCowUdder from "../../Images/Farm/GirlDrinkingFromCowUdder.PNG";
import AnriRhoadesBlueCowgirlBikini_transparent from "../../Images/Bedroom/AnriRhoadesBlueCowgirlBikini_transparent.png";
import anri_emily_white_dress_transparent from "../../Images/Characters/Anri-Flat-EM/anri_emily_white_dress_transparent.png";
import LACBRAQMilkFarmGrowComicsPage9_comp from "../../Images/Farm/Barn/LACBRAQMilkFarmGrowComicsPage9_comp.mp4";
import LACBRAQStraight_big_breast_kissing_BarnBackground from "../../Images/Farm/Barn/LACBRAQStraight_big_breast_kissing_BarnBackground.png";
import LACBRAQMilkFarmGrowComics_suckSandyInBarnComp from "../../Images/Farm/Barn/LACBRAQMilkFarmGrowComics_suckSandyInBarnComp.mp4";
import Copper_tf2_ShowsBreasts from "../../Images/Characters/Copper/Copper_tf-2-ShowsBreasts.png";


const TheBarn = ( props ) => {


    const [openDialog, setOpenDialog] = useState(false);
    const [openDialog2, setOpenDialog2] = useState(false);

    let goToGameMap = () =>{
        props.onAddMinutes(10);
    }

    if(props.flags.includes("SandyMidBreasts_1")){
        var SandyImage = AnriRhoadesBlueCowgirlBikini_transparent;
    } else if(!SandyImage){
        var SandyImage = anri_emily_white_dress_transparent;
    }

    const addMinutesFunc = () =>{
        props.onAddMinutes(10)
    }

    if(props.flags.includes("FARM_UNVISITED")){
        const HowDoesFarmWorkFunc = () =>{
            props.onAddMinutes(20);
            props.onPushFlag("HOW_DOES_FARM_WORK");
            props.onSpliceFlag("FARM_UNVISITED");
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
                
            </Col3>
            </>
            )
    
    } else if(props.flags.includes("HOW_DOES_FARM_WORK")){
        props.onSpliceFlag("HOW_DOES_FARM_WORK");
        return(
<>
            <Col1>
                <SetCol1
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
    } else if(props.flags.includes("LACBRAQWalkAroundBarnWithSandy")){
        let LACBRAQGoHomeAloneAfterFarmDateSandy = () =>{
            props.onChangeRelationship("Sandy",-1);
            props.onAddMinutes(10);
            props.onSpliceFlag("LACBRAQWalkAroundBarnWithSandy");
            props.onAddAttractiveness(1);
        }            

        let LACBRAQAskSandyIfSheWantsToGoBackHome = () =>{
            props.onChangeRelationship("Sandy",2);
            props.onAddMinutes(10);
            props.onPushFlag("LACBRAQAskSandyIfSheWantsToGoBackHome");
            props.onSpliceFlag("LACBRAQWalkAroundBarnWithSandy");
            props.onSpliceFlag("DrankMilkwithLacBracelet");
            props.onSpliceFlag("LACBRAQRefusedToGiveSandyBracelet");
            props.onAddAttractiveness(1);
        }

        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {FarmBarn}>    
            </Col2>
            
            <Col3 > 
            <p>You two talk and walk and walk around the fact, Sandy has a lot to talk about, altough most of it are just trivial facts. "I love how wood smells", "did you know that cows can't go down stairs?". She is endearing, and you are really having fun.</p>
            <p>Soon dawn comes...</p>
                
                <Link to={"/Home"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LACBRAQGoHomeAloneAfterFarmDateSandy}>I am tired I want to go home alone</button>
                </Link>  
                <Link to={"/GoOutside"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LACBRAQAskSandyIfSheWantsToGoBackHome}>It's getting late. You ask sandy if she wants to go back home</button>
                </Link>   
                
            </Col3>
            </>
        )
    } else if(props.flags.includes("LACBRAQGaveBraceletToSandySheWillBeInFarmAtNight")){
        let LACBRAQGetCloserToSeeSandySuckingMilk = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("LACBRAQInspectSandyDrinkingFromUdder");
            props.onSpliceFlag("LACBRAQGaveBraceletToSandySheWillBeInFarmAtNight");
        }
        let LACBRAQGetSandySuckingMilkLeave = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("LACBRAQGaveBraceletToSandySheWillBeInFarmAtNight");
            //End of LACBRAQ
            props.onPushFlag("LACBRAQFinsihed");
            if(props.charactersStats.Sandy < 6){
                props.onSetCharacterStats("Sandy","breast",8);    
            } 
             else{
                props.onSetCharacterStats("Sandy","breast",10);
            }
            
            props.onPushFlag("SCIENCELABQSStart");
            props.onSpliceFlag("WearingLacBracelet");
            props.onSetItem("LacBracelet",0);
        }

        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {GirlDrinkingFromCowUdder}>    
            </Col2>
            
            <Col3 > 
                <p> The farm seems closed. But you can see a shilouette sucking milk directly from a cows udder.
                You get closer and you realize that the shilouette is Sandy.</p>
           
                
                <Link to={"/TheBarn"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LACBRAQGetCloserToSeeSandySuckingMilk}>Get closer to Sandy</button>
                </Link>   
                <Link to={"/TheBarn"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LACBRAQGetSandySuckingMilkLeave}>Leave Sandy alone</button>
                </Link>                
                
            </Col3>
            </>
        )
    } else if(props.flags.includes("LACBRAQInspectSandyDrinkingFromUdder")){
        let LACBRAQHelpSandyIntoBarn = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("LACBRAQInspectSandyDrinkingFromUdder");
            props.onPushFlag("LACBRAQHelpSandyIntoBarn");
            if(props.charactersStats.Sandy < 6){
                props.onSetCharacterStats("Sandy","breast",8);    
            } 
             else{
                props.onSetCharacterStats("Sandy","breast",10);
            }
        }
        let LACBRAQGetSandySuckingMilkLeave = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("LACBRAQGaveBraceletToSandySheWillBeInFarmAtNight");
            //End of LACBRAQ
            props.onPushFlag("LACBRAQFinsihed");
            if(props.charactersStats.Sandy < 6){
                props.onSetCharacterStats("Sandy","breast",8);    
            } 
             else{
                props.onSetCharacterStats("Sandy","breast",10);
            }
            props.onPushFlag("SCIENCELABQSStart");
            props.onSpliceFlag("WearingLacBracelet");
            props.onSetItem("LacBracelet",0);
        }

        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {FarmBarn}>    
                <img src={SandyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>
            
            <Col3 > 
                <p>"Gosh!" Sandy exclaims. She shakes and hits her head. "What the heck are you doing here! The farm is already closed!"  Sandy is visibly upset.</p>
                <p>Suddenly the bracelet Sandy is wearing starts to shine.</p>
                <p>"Damn it!" Sandy looks at your feet. You notice you are standing over some sort of white powder. 
                "You broke it! Oh no..." You see how Sandys voice starts becoming more anxious.
                Sandy stands up and runs towards the nearby barn. But you can see she is having trouble keeping her balance. "{props.name} help me into the barn!"</p>           
                
                <Link to={"/TheBarn"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LACBRAQHelpSandyIntoBarn} style={{width: props.standardButtonWidth}}>Help Sandy into the barn</button>
                </Link>
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LACBRAQGetSandySuckingMilkLeave} style={{width: props.standardButtonWidth}}>Leave</button>
                </Link>                                  
                
            </Col3>
            </>
        )
    } else if(props.flags.includes("LACBRAQHelpSandyIntoBarn")){
        let LACBRAQSandySuckHerNipplesInBarn = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("LACBRAQHelpSandyIntoBarn");
            props.onPushFlag("LACBRAQSandySuckHerNipplesInBarn");
            props.onChangeRelationship("Sandy",2);
        }
        let LACBRAQHelpSandyUpInBarn = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("LACBRAQHelpSandyIntoBarn");
            props.onPushFlag("LACBRAQHelpSandyUpInBarn");
            props.onChangeRelationship("Sandy",6);
        }



        return(
            <>
            <Col1>
                <SetCol1/>
            </Col1>
            <Col2 BackImage={" "}>
                <video autoPlay loop style ={{width: "100%", height: props.col2Height, objectFit: "cover"}} controls>
                    <source src={LACBRAQMilkFarmGrowComicsPage9_comp} type="video/mp4" />
                </video>
            </Col2>
            
            
            <Col3> 
                <p>"F..FFuuuuckkkkk" Sandy shouts. She's sweating. "It's startinngggg..." Sandy is flustered. She is shaking. "{props.name}, my breaasttss..." And you see it. Her shirt slowly rising. Her chest growing. Her whole body trembling.</p>        
                <p>"This feels sooo.... gooood...." Sandy moans. "GOD!" Sandy moves her hand to her chest. "I can feel them stretchinnngggg..." Sandy is panting. Her shirt stretching to it's limits.</p>
                <p>"I feel like bursting!" .... "riiiipppp...." her shirt giving out to the pressure. Massive breasts overflowing. Her nipples erected like thumbs.</p>
                <p>"{props.name}" she gasps. "Milk..." She can't even finish a sentence "Do..Do.. not... " "AAAhh!"</p>
                <p> "YESSSS!" Sandy shouts, her whole body tembling and orgasming. She is milking herself. And the flow of milk is subsiding. You get closer...</p>

                <Link to={"/TheBarn"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LACBRAQSandySuckHerNipplesInBarn} style={{width: props.standardButtonWidth}}>Suck her nipples</button>
                </Link>
                <Link to={"/TheBarn"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LACBRAQHelpSandyUpInBarn} style={{width: props.standardButtonWidth}}>Help her up</button>
                </Link>
                                          
                
            </Col3>
            </>
        );
    } else if(props.flags.includes("LACBRAQHelpSandyUpInBarn")){
        let LACBRAQGoHomeWithSandyFinished = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("LACBRAQHelpSandyUpInBarn");
            props.onChangeRelationship("Sandy",3);
            props.onPushFlag("LACBRAQGoHomeWithSandyNoMilkDrink");
        }



        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {LACBRAQStraight_big_breast_kissing_BarnBackground}>    
            </Col2>
            
            <Col3 > 
                <p>Sandy can barely stand up, her new breasts are a challenge for her. She looks at you. Smiling. She is still trembling. You see her eyes. Exhausted and twinkling, she gets closer, and kisses you.
                "Thank you {props.name}. Please take me to my flat"</p>
            

                <Link to={"/Home"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LACBRAQGoHomeWithSandyFinished} style={{width: props.standardButtonWidth}}>Go back home and fall asleep</button>
                </Link>
                                          
                
            </Col3>
            </>
        );
    } else if(props.flags.includes("LACBRAQSandySuckHerNipplesInBarn")){
        let LACBRAQWakeUpInApartment = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("LACBRAQSandySuckHerNipplesInBarn");
            props.onChangeRelationship("Sandy",1);
            props.onPushFlag("LACBRAQGoHomeWithSandyMilkDrink");
            props.onPushFlag("LACBRAQDrankSandyMilk");
        }



        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <video autoPlay loop 
            style ={{width: "100%", height: props.col2Height, objectFit: "cover"}}>
                <source src={LACBRAQMilkFarmGrowComics_suckSandyInBarnComp} type="video/mp4"/>
            </video>
            
            <Col3 > 
            <p>You go in and drink from her delightful milk. It's thick, sweet, it's the greatest thing you have ever tasted. 
            Her soft breasts feel like a fluffy pillow, squishy, you can feel the milk inside them.</p>
            <p>"FUCK YEEESSSS!!!" Sandy yells. You can see she is still orgasming. It seems like she has been orgasming this whole time. Her pants soaked with a mixture of sweat, milk, and moisture. She can't stop. And you can't either.
            You lose track of time. Everything goes dark...</p>
            
                <Link to={"/Home"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LACBRAQWakeUpInApartment}>"Wake up, wake up"</button>
                </Link>
                                          
                
            </Col3>
            </>
        );
    } 
    else if(props.flags.includes("KomperaAliensInLabPart1FARM")){
        let TalkWithTheWoman = () =>{
            setOpenDialog(true);
        }
    
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {FarmBarn}>
                {/* Talk with the woman */}
                <SimpleDialog
                    openDialog={openDialog}
                    handleDialogClose = {()=>{
                            setOpenDialog(false);
                            props.onAddMinutes(10);
                            props.onSpliceFlag("KomperaAliensInLabPart1FARM");
                            props.onPushFlag("CanDoBovineDrugOnceAtLabMinigame");
                            alert("You can now create a bovine drug for Copper");
                            props.onSetCharacterStats("Copper","cowTf",props.charactersStats.Copper.cowTf + 1);
                        }
                    }
                >
                    <p style={{color:"black"}}>The woman jumps a bit when she sees you. "Are you here to make fun of me?" Her soft squeaky voice surprises you a bit. "Oh, I've never seen you before. I'm Copper" The girl sighs and looks at you. "I know this might be awkward but, could you listen for a moment?" You nod. The girl grins. "It's kind of personal. I go to an academy near this place, and that academy focuses on milk magic. But, as you can see, I have no breasts, and therefore, no place to store milk.</p>
                    <p style={{color:"black"}}>"Some of my classmates are already starting to transform, I can't even produce heavy cream..." Those words strike you for a moment, you need heavy cream for your job at the lab. "*sniff*" You come back from your flashback.</p>
                    <p style={{color:"black"}}>"I even tought about getting some supplements, but they are expensive, and the only place that makes them is that new lab." The woman pauses. "I'm not comfortable asking for this, and don't do it if you don't want to. But, could you get me some? I don't care anymore, I don't want to be the only one that can't go through the bovine transformation..." Her big green eyes fixated in you. "Please..."</p>
                    <img alt ={"Not found"} src={props.CopperImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>

                </SimpleDialog>
            </Col2>  
    
            <Col3 > 
                   

            <p>When you get to the barn you see a woman sniffling. She seems upset, she's looking at the cows and sporadically touches her chest.</p>
    
            <Link to={"/TheBarn"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {TalkWithTheWoman} >Talk with the woman.</button>
            </Link>  

            <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {goToGameMap} >Game Map</button>
            </Link>  

            </Col3>
            </>
  
      )
    } else if(props.flags.includes("BovineDrugForCopperSucesfullyBuilt")){
        let leaveBarnAfterGivingCopperTheDrug = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("BovineDrugForCopperSucesfullyBuilt");
            props.onPushFlag("CopperWillExperienceFirstEffects");
            props.onSetCharacterStats("Copper","cowTf",props.charactersStats.Copper.cowTf + 1);
        }
    
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {FarmBarn}>
                <img alt ={"Not found"} src={props.CopperImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
                   

            <p>You see Copper playing with the cows. She looks at you and smiles. "{props.name} she yells." Copper runs at you and grabs your shirt. "Did you get it? Could you get me the supplements?" She gets closer to you and wraps her arms around you. And *zing* She takes your bag and rummages through it. "It's this one!" Copper takes out a small syringe filled with red liquid from the bag. It is indeed the supplement. "I knew it! You did it! Copper jumps and kisses you." She then injects herself with the supplement.</p>
            <p>"Copper, wait" You say "The side effects might be cramping and pain around your body, use cream and take some pain medicine for that."</p>
            <p>"I will!" Copper answers, she's excited. "When will it start? How long does the effect takes?" She asks. You mumble a bit, you don't really know. "Whatever" Copper jumps and interrupts you. "I'm starving. I'll go eat." Copper hugs and kisses you in the cheek. "Thank you" She says.</p>
            <p>"I'll be around" And she leaves.</p>
    

            <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {leaveBarnAfterGivingCopperTheDrug} >Game Map</button>
            </Link>  

            </Col3>
            </>
  
      )
    } else if(props.flags.includes("CopperWillExperienceFirstEffects") && Math.random() < .35){
        let seduceCopper = () =>{
            setOpenDialog(true);
        }
    
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {FarmBarn}>
                <img alt ={"Not found"} src={props.CopperImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                <SimpleDialog
                    openDialog={openDialog}
                    handleDialogClose = {()=>{
                            setOpenDialog(false);
                            props.onAddMinutes(10);
                            props.onSpliceFlag("CopperWillExperienceFirstEffects");
                            props.onSetCharacterStats("Copper","cowTf",props.charactersStats.Copper.cowTf + 1);
                            props.onAddItem("heavyCream",1);
                            props.onPushFlag("GotCreamFromCopper");
                        }
                    }
                >
                    <p style={{color:"black"}}></p>
                    <img alt ={"Not found"} src={Copper_tf2_ShowsBreasts} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                    
                    <p>Copper leans in and kisses you. At first you slowly respond, then you pull up her blouse, pushing into her new large and swollen breasts. The excitement of her new body drives Copper crazy, she can't even remember how she felt before the mounds on her chest gave her constant stimulation. </p>
                    <p>There was an awakening in Copper, the parts of her body that had allways been numb are now filled with fire.</p>
                    <p>You see it, droplets of white cream coming out of Coppers nipples. "Oh YES!" Copper shouts, she squeezes her chest and a small stream of milk comes out. "That's heavy cream!" She shakes excitedly, the emotion enough to push her over the edge.</p>
                    <p>Copper slows down. "{props.name}, I got this because of you. Heavy Cream, it's the first sign that I'm becoming a true cowgirl." Copper hugs and kisses you.</p>
                    <p>"I'll be around. I have to go back to the academy I have so much to learn now." Copper kisses you again, and leaves.</p>

                </SimpleDialog>
            </Col2>  
    
            <Col3 > 
                   
            <p>"{props.name} Thank godness, these last few days have been weird. Some people even suspect I took the supplements." Copper takes a carrot out of her bag. "I've not been able to stomach anything but veggies latetly, I think that's normal for someone who's advanced on her cowgirl transformation." She looks at you "How strong are the supplements you gave me? I've been having cramps all day and I keep swelling." She gets closer to you, and whispers "I'm also really horny, all the time..."</p>
            
    

            <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {seduceCopper} >Seduce copper</button>
            </Link>  
            <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {goToGameMap} >Game Map</button>
            </Link>  

            </Col3>
            </>
  
      )
    }
    
    
    else{
        return(
            <>
            <Col1>
                <SetCol1/>
            </Col1>
            <Col2 BackImage = {FarmBarn}>
                
            </Col2>
    
            <Col3 > 
                <p>You are at the farm. A nice oasis of nature outside the city.</p>
              
    
                <Link to={"/MilkCowsAtFarm"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick={addMinutesFunc}>Milk the cows</button>
                </Link>
                <Link to={"/TheFarmStore"} style={{ textDecoration: "none" }}>
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

