import React from 'react';
import { Link } from 'react-router-dom';
import Col1 from "../../components/col1";
import Col2 from "../../components/col2";
import Col3 from "../../components/col3";
import SetCol1 from "../../components/SetCol1";


//Images
import FarmgirlOwner from "../../Images/Farm/farmgirl_owner.jpg";
import FarmBarn from "../../Images/Farm/farm_barn.jpg";
import GirlDrinkingFromCowUdder from "../../Images/Farm/GirlDrinkingFromCowUdder.PNG";
import AnriRhoadesBlueCowgirlBikini_transparent from "../../Images/Bedroom/AnriRhoadesBlueCowgirlBikini_transparent.png";
import anri_emily_white_dress_transparent from "../../Images/Characters/Anri-Flat-EM/anri_emily_white_dress_transparent.png";
import LACBRAQMilkFarmGrowComicsPage9_comp from "../../Images/Farm/Barn/LACBRAQMilkFarmGrowComicsPage9_comp.mp4";
import LACBRAQStraight_big_breast_kissing_BarnBackground from "../../Images/Farm/Barn/LACBRAQStraight_big_breast_kissing_BarnBackground.png";
import LACBRAQMilkFarmGrowComics_suckSandyInBarnComp from "../../Images/Farm/Barn/LACBRAQMilkFarmGrowComics_suckSandyInBarnComp.mp4";

const TheBarn = ( props ) => {


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
                <img src={SandyImage} height={"400px"} style={{}}></img>
            </Col2>
            
            <Col3 > 
                <p>"Gosh!" Sandy exclaims. She shakes and hits her head. "What the heck are you doing here! The farm is already closed!"  Sandy is visibly upset.</p>
                <p>Suddenly the bracelet Sandy is wearing starts to shine.</p>
                <p>"Damn it!" Sandy looks at your feet. You notice you are standing over some sort of white powder. 
                "You broke it! Oh no..." You see how Sandys voice starts becoming more anxious.
                Sandy stands up and runs towards the nearby barn. But you can see she is having trouble keeping her balance. "{props.name} help me into the barn!"</p>           
                
                <Link to={"/TheBarn"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LACBRAQHelpSandyIntoBarn}>Help Sandy into the barn</button>
                </Link>
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LACBRAQGetSandySuckingMilkLeave}>Leave</button>
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
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {" "}
                    rowHeight = {" "}
            >
            <video autoPlay loop 
            style ={{width: "100%", height: "100%"}} controls>
                <source src={LACBRAQMilkFarmGrowComicsPage9_comp} type="video/mp4"/>
            </video>
            </Col2>
            
            
            <Col3 > 
                <p>"F..FFuuuuckkkkk" Sandy shouts. She's sweating. "It's startinngggg..." Sandy is flustered. She is shaking. "{props.name}, my breaasttss..." And you see it. Her shirt slowly rising. Her chest growing. Her whole body trembling.</p>        
                <p>"This feels sooo.... gooood...." Sandy moans. "GOD!" Sandy moves her hand to her chest. "I can feel them stretchinnngggg..." Sandy is panting. Her shirt stretching to it's limits.</p>
                <p>"I feel like bursting!" .... "riiiipppp...." her shirt giving out to the pressure. Massive breasts overflowing. Her nipples erected like thumbs.</p>
                <p>"{props.name}" she gasps. "Milk..." She can't even finish a sentence "Do..Do.. not... " "AAAhh!"</p>
                <p> "YESSSS!" Sandy shouts, her whole body tembling and orgasming. She is milking herself. And the flow of milk is subsiding. You get closer...</p>

                <Link to={"/TheBarn"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LACBRAQSandySuckHerNipplesInBarn}>Suck her nipples</button>
                </Link>
                <Link to={"/TheBarn"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LACBRAQHelpSandyUpInBarn}>Help her up</button>
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
                    <button type="button" className="btn btn-primary" onClick = {LACBRAQGoHomeWithSandyFinished}>Go back home and fall asleep</button>
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
            style ={{maxWidth: "100%", margin:"auto"}}>
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

