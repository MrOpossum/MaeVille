import React from 'react';
import { Link } from 'react-router-dom';

import Col1 from "../../components/col1";
import Col2 from "../../components/col2";
import Col3 from "../../components/col3";
import SetCol1 from "../../components/SetCol1";


//Images
import BegginingSandyOutside from "../../Images/Apartment_outside/Sandy-A_outside-Anri_Emily.png";
import BegginingAmyOutside from "../../Images/Apartment_outside/Amy-A_outside-BP_Gotti.png";
import OutsideApartment from "../../Images/Apartment_outside/outside_apartment.jpg"
import outside_apartment_amy_PalinGottiSwapWhiteTop from "../../Images/Apartment_outside/outside_apartment_amy-PalinGottiSwapWhiteTop.png";
import AnriRhoadesBlueCowgirlBikini_transparent from "../../Images/Bedroom/AnriRhoadesBlueCowgirlBikini_transparent.png";
import anri_emily_white_dress_transparent from "../../Images/Characters/Anri-Flat-EM/anri_emily_white_dress_transparent.png";
import P_g_whiteTop_frontView_Transparent from "../../Images/Characters/Palin-gotti-Mid_amy/P_g_whiteTop_frontView_Transparent.png";
import P_g_red_tank_top_transparent from "../../Images/Characters/Palin-gotti-Mid_amy/P_g_red_tank_top_transparent.png"


const GoOutside = ( props ) => {
    
    console.log(props.flags);

    let characterImageHeight = "400px";
    let AmyCharacterImageHeight = "500px";

    if(props.flags.includes("SandyMidBreasts_1")){
        var SandyImage = AnriRhoadesBlueCowgirlBikini_transparent;
    } else{
        var SandyImage = anri_emily_white_dress_transparent;
    }

    if(props.flags.includes("AmyLargeBreasts_1")){
        var AmyImage = ""
    } else{
        var AmyImage = P_g_whiteTop_frontView_Transparent
    }
  


    if(props.flags.includes("WillMeetSandyOutsideApartment")){
        props.onSpliceFlag("WillMeetSandyOutsideApartment");
        props.onPushFlag("LacBraQSandyInFarm");

        let handleLacBraQHelpSandyOpenDoor = () =>{
            props.onChangeRelationship("Sandy",10);
            props.onAddMinutes(10);
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
            <Col2 BackImage = {BegginingSandyOutside}>
                
            </Col2>
    
            <Col3 > 
                <p>While leaving the building you see a girl you had never seen before struggling to open the main door.</p>
                <Link to={"/LacBraQHelpSandyOpenDoor"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick={handleLacBraQHelpSandyOpenDoor}>Help her open the door and present yourself</button>
                </Link>

                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary">Head out and ignore her</button>
                </Link>
    
            </Col3>
            </>
            );
    } else if(props.flags.includes("WillMeetAmyOutsideApartment")){
        props.onSpliceFlag("WillMeetAmyOutsideApartment");
        props.onPushFlag("LacBraQSandyInFarm");
        return(
            <>
            <Col1>
                <SetCol1
                money = {props.money}
                energy = {props.energy}
                date = {props.date}
                />
            </Col1>
            <Col2 BackImage = {BegginingAmyOutside}>
                
            </Col2>
    
            <Col3 > 
            <p>You see a girl you had never seen before. She is carrying some boxes inside your building.</p>

                <Link to={"/LacBraQAmyMovingIn"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary">Approach her and present yourself</button>
                </Link>

                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary">Head out and ignore her</button>
                </Link>
    
            </Col3>
            </>
            ) 
    } else if(props.flags.includes("LACBRAQTransformedAndWearingLacBraceletNoOneKnowsYouHaveBracelet")){
    
    

        if(Math.random() < .6){ //Sandy sees you
            
            const LACBRAQGoToSandyApartment = () =>{
                props.onSpliceFlag("LACBRAQTransformedAndWearingLacBraceletNoOneKnowsYouHaveBracelet");
                props.onPushFlag("LACBRAQSandySawYouSheHadNoIdea");
                props.onAddMinutes(10);
            }

            return(
                <>
                <Col1>
                    <SetCol1
                    />
                </Col1>
                <Col2 BackImage = {BegginingSandyOutside}>
                    
                </Col2>
        
                <Col3 > 
                    <p>"{props.name}!" You hear Sandy yell. "Damn,Gosh,Heck!" Sandy says. "You had my bracelet! And worse, you drank milk! 
                    I need to to take you to my apartment now. I need to suck all the milk that's still inside you. Or you might start growing again!" Sandy takes your hand and quickly heads to her apartment. She is really strong. Probably stronger than you...</p>
    
                    <Link to={"/SandyApartment"} style={{ textDecoration: "none" }}>
                        <button type="button" className="btn btn-primary" onClick = {LACBRAQGoToSandyApartment}>Head to Sandys apartment</button>
                    </Link>
        
                </Col3>
                </>
            )
        } else{ //Amy sees you
            
            const LACBRAQAmySawYouSheHadNoIdea_outside_part_2_bracelet_truth = () =>{
                props.onSpliceFlag("LACBRAQTransformedAndWearingLacBraceletNoOneKnowsYouHaveBracelet");
                props.onPushFlag("LACBRAQAmySawYouSheHadNoIdea_outside_part_2_truth");
                props.onAddMinutes(10);
            }
            const LACBRAQAmySawYouSheHadNoIdea_outside_part_2_bracelet_lie = () =>{
                props.onSpliceFlag("LACBRAQTransformedAndWearingLacBraceletNoOneKnowsYouHaveBracelet");
                props.onPushFlag("LACBRAQAmySawYouSheHadNoIdea_outside_part_2_lie");
                props.onAddMinutes(10);
            }

            if(props.flags.includes("MET_AMY")){
                return(
                    <>
                    <Col1>
                        <SetCol1
                        />
                    </Col1>
                    <Col2 BackImage = {outside_apartment_amy_PalinGottiSwapWhiteTop}>
                        
                    </Col2>
            
                    <Col3 > 
                        <p>"Hey! {props.name} " You hear Amys voice. "Damn it!" She exclaims "Where the hell did you get that bracelet?" Amy asks</p>
        
                        <Link to={"/GoOutside"} style={{ textDecoration: "none" }}>
                            <button type="button" className="btn btn-primary" onClick = {LACBRAQAmySawYouSheHadNoIdea_outside_part_2_bracelet_truth}>Tell her the truth</button>
                        </Link>

                        <Link to={"/GoOutside"} style={{ textDecoration: "none" }}>
                            <button type="button" className="btn btn-primary" onClick = {LACBRAQAmySawYouSheHadNoIdea_outside_part_2_bracelet_lie}>Lie</button>
                        </Link>
        
                    </Col3>
                    </>
                )
            } else{ //You have not met amy
                return(
                    <>
                    <Col1>
                        <SetCol1
                        />
                    </Col1>
                    <Col2 BackImage = {outside_apartment_amy_PalinGottiSwapWhiteTop}>
                        
                    </Col2>
            
                    <Col3 > 
                        <p>"Hey!" You hear a voice. You turn around and see a beautiful woman. She is inspecting you. "I am Amy, what's your name?" She asks...</p>
                       <p> You hesitate, you look like a woman now. Should you use a new name? You still have your penis. Should you stick with your old name?... While you were pondering this questions Amy interrupts.</p>
                        <p>"I knew it..." Amy snarls. "You are a man, aren't you?" Amy inquires. "Where the hell did you get that bracelet?"</p>
        
                        <Link to={"/GoOutside"} style={{ textDecoration: "none" }}>
                            <button type="button" className="btn btn-primary" onClick = {LACBRAQAmySawYouSheHadNoIdea_outside_part_2_bracelet_truth}> tell her the truth</button>
                        </Link>
                        <Link to={"/GoOutside"} style={{ textDecoration: "none" }}>
                            <button type="button" className="btn btn-primary" onClick = {LACBRAQAmySawYouSheHadNoIdea_outside_part_2_bracelet_lie}> Lie</button>
                        </Link>                        
        
            
                    </Col3>
                    </>
                )
            }
            
        }
        
        
    } else if(props.flags.includes("LACBRAQAmySawYouSheHadNoIdea_outside_part_2_truth")){
        
        let goToAmysApartmentAfterTruth = () =>{
            props.onChangeRelationship("Amy",3);
            props.onAddMinutes(10);
            props.onPushFlag("LACBRAQGoToAmyApartment");
            props.onSpliceFlag("LACBRAQAmySawYouSheHadNoIdea_outside_part_2_truth");
            props.onSpliceFlag("LACBRAQAmySawYouSheHadNoIdea_outside_part_2_lie");
        }
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {outside_apartment_amy_PalinGottiSwapWhiteTop}>
                
            </Col2>
    
            <Col3 > 
                <p>"Fuck. I knew it." Amy says. "Magic won't leave your world anyways. Come with me."</p>
                <p>Amy walks towards her apartment. Before going in you see she takes her phone out and sends a text message.</p>

                <Link to={"/AmyApartment"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {goToAmysApartmentAfterTruth}>Go to amys apartment</button>
                </Link>

            </Col3>
            </>
        )
    } else if(props.flags.includes("LACBRAQAmySawYouSheHadNoIdea_outside_part_2_lie")){
        let goToAmysApartmentAfterLie = () =>{
            props.onChangeRelationship("Amy",-3);
            props.onAddMinutes(10);
            props.onPushFlag("LACBRAQGoToAmyApartment");
            props.onSpliceFlag("LACBRAQAmySawYouSheHadNoIdea_outside_part_2_lie");
            props.onSpliceFlag("LACBRAQAmySawYouSheHadNoIdea_outside_part_2_truth");
        }
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {outside_apartment_amy_PalinGottiSwapWhiteTop}>
                
            </Col2>
    
            <Col3 > 
                <p>"Don't lie to me" Amy says. "Magic won't leave your world anyways. Come with me. And I think I know where that bracelet came from anyways"</p>
                <p>Amy walks towards her apartment. Before going in you see she takes her phone out and sends a text message.</p>

                <Link to={"/AmyApartment"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {goToAmysApartmentAfterLie}>Go to amys apartment</button>
                </Link>

            </Col3>
            </>
        )

    }else if(props.flags.includes("LACBRAQSandyWillFindYouAfterSleepingWithLacBraDidNotDrinkMilk")){
        let LACBRAQGiveBraceletToSandyOutsideWearing = () =>{
            props.onChangeRelationship("Sandy",3);
            props.onAddMinutes(10);
            props.onPushFlag("LACBRAQGiveBraceletToSandyOutsideWearing");
            props.onSpliceFlag("LACBRAQSandyWillFindYouAfterSleepingWithLacBraDidNotDrinkMilk")
        }
        let LACBRAQDontGiveBraceletToSandyOutsideWearing = () =>{
            props.onChangeRelationship("Sandy",-3);
            props.onAddMinutes(10);
            props.onPushFlag("LACBRAQDontGiveBraceletToSandyOutsideWearing");
            props.onPushFlag("LACBRAQRefusedToGiveSandyBracelet");
            props.onSpliceFlag("LACBRAQSandyWillFindYouAfterSleepingWithLacBraDidNotDrinkMilk")
        }

        
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {BegginingSandyOutside}>
                
            </Col2>
    
            <Col3 > 
                <p>While you are leaving apartment Sandy sees you and rushes to talk to you.</p>
                <p>"OMG. You have my braclet! I literally did not sleep at all looking for it. I searched in the farm, in my apartment, in the balcony, I looked everywhere. BUT YOU HAD IT."</p>
                <p>"I am so relieved. But also annoyed, why would you take my bracelet!?"</p>
                <p>You try to explain yourself but she interrupts you.</p>
                <p>"Well... Are you going to give it back?"</p>

                <Link to={"/GoOutside"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LACBRAQGiveBraceletToSandyOutsideWearing}>Give bracelet to Sandy</button>
                </Link>
                <Link to={"/GoOutside"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LACBRAQDontGiveBraceletToSandyOutsideWearing}>Don't give bracelet to Sandy</button>
                </Link>                

            </Col3>
            </>
        )


    }else if(props.flags.includes("LACBRAQGiveBraceletToSandyOutsideWearing")){
        let LACBRAQGaveBraceletToSandySheWillBeInFarmAtNight = () =>{
            props.onChangeRelationship("Sandy",3);
            props.onAddMinutes(10);
            props.onPushFlag("LACBRAQGaveBraceletToSandySheWillBeInFarmAtNight"); //This flag is taken when you go to the farm. At any hour fuk it.
            props.onSpliceFlag("LACBRAQGiveBraceletToSandyOutsideWearing");
            props.onSetItem("LacBracelet",0);
            props.onSpliceFlag("WearingLacBracelet");
        }
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {BegginingSandyOutside}>
                
            </Col2>
    
            <Col3 > 
            <p>"Yay! Thank you" - Sandy hugs you and puts the bracelet on. "By the way, do you know at what time the farm closes?" I might need to go.</p>
            <p>You have no idea. But sandy does not seem to mind.</p>
            <p>"I think I'll just go there tonight..." Sandy mutters to herself. She quickly leaves.</p> 
            <p>Before getting much further she turns around and yells "Thank you {props.name}!". Then she continues happily skipping through the street.</p>

                
                <Link to={"/GoOutside"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LACBRAQGaveBraceletToSandySheWillBeInFarmAtNight}>Hmm... She'll probably be in the farm at night</button>
                </Link>                

            </Col3>
            </>
        )


    } else if(props.flags.includes("LACBRAQDontGiveBraceletToSandyOutsideWearing")){
        let LACBRAQGoToFarmDateWithSandy = () =>{
            props.onChangeRelationship("Sandy",1);
            props.onAddMinutes(10);
            props.onPushFlag("LACBRAQGoToFarmDateWithSandy"); 
            props.onSpliceFlag("LACBRAQDontGiveBraceletToSandyOutsideWearing");
            props.onPushFlag("LACBRAQRefusedToGiveSandyBracelet");
        }
        let LACBRAQDontGoToFarmDateWithSandy = () =>{
            props.onChangeRelationship("Sandy",-2);
            props.onAddMinutes(10);
            props.onPushFlag("LACBRAQRefusedToGiveSandyBracelet"); //This happens if you get lac and drink milk. Sandy finds you here outside.
            props.onSpliceFlag("LACBRAQDontGiveBraceletToSandyOutsideWearing");
        }        

        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {BegginingSandyOutside}>
                
            </Col2>
    
            <Col3 > 
            <p>"What! I told you it's mine, you are stealing from me!" - Sandy accuses you.</p>
            <p>"Hey, I found it, so im keeping it" You state.</p>
            <p>"You... Arggg.... Fine, it aint worth much anyways" Her expression   changes, she still seems annoyed but, she is almost smiling.</p>
            <p>"You know what, at least buy me some Ice cream, I am starving". Sandy sighs. "I heard the farm has some amaizng Ice cream"</p>

                
                <Link to={"/TheFarmStore"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LACBRAQGoToFarmDateWithSandy}>Agree on a date</button>
                </Link>                

                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LACBRAQDontGoToFarmDateWithSandy}>No, I won't go on a date</button>
                </Link>                
            </Col3>
            </>
        )
    } else if(props.flags.includes("LACBRAQTransformedAndWearingLacBraceletYouRefusedToGiveSandyBracelet")){
        let LACBRAQGoToSandyApartmentAfterYouRefusedToGiveBracelet = () =>{
            props.onChangeRelationship("Sandy",1);
            props.onAddMinutes(10);
            props.onPushFlag("LACBRAQGoToSandyApartmentAfterYouRefusedToGiveBracelet");
            props.onSpliceFlag("LACBRAQTransformedAndWearingLacBraceletYouRefusedToGiveSandyBracelet");
        }        

        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {BegginingSandyOutside}>
                
            </Col2>
            <p>"Hello {props.name}! Nice breasts." Sandy says. A mischevious grin in her face.</p> 
            <p>"I asked you to give me the bracelet nicely." Sandy grabs you and walks towards her apartment. She is really strong. 
            </p>
            <p>"Don't try to resist baby. I'm way stronger than you. Just come with me, we need to drain your boobs so you won't end up a pile of boobflesh" Sandy pinches your nipple, hard. </p>
            <p>You squeal, pain and pleasure mixing in your spine. You almost faint.</p>
            <Col3 > 
                <Link to={"/SandyApartment"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LACBRAQGoToSandyApartmentAfterYouRefusedToGiveBracelet}>Enter Sandys apartment</button>
                </Link>                
            </Col3>
            </>
        )
    } else if(props.flags.includes("LACBRAQGoToFarmDateWithSandy")){
        let LACBRAQArriveToTheBarnDateWithSandy = () =>{
            props.onChangeRelationship("Sandy",2);
            props.onAddMinutes(10);
            props.onPushFlag("DrankMilkwithLacBracelet"); //Because you will have to drink milk after this.
            props.onPushFlag("LACBRAQArriveToTheBarnDateWithSandy");
            props.onSpliceFlag("LACBRAQGoToFarmDateWithSandy");
            
        }        

        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {BegginingSandyOutside}>
                
            </Col2>
            <p>"You see, we don't have to hate each other... Even tough you are a thief!" - Sandy says. You are not completely sure if she is teasing you or if there really is some murderous intent in her words.</p>
            <p>"But I do love Ice cream!" She cheers. "In my farm my ma and I used to make Ice cream all the time. We made so many flavors, we had chocolate, vainilla, cinnamon, lemon, banana, strawberry, we had just plain milk, we had cream, we had oreo! We made so much Ice cream we would...</p>
            <Col3 > 
                <Link to={"/TheBarn"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LACBRAQArriveToTheBarnDateWithSandy}>You arrive at the farm with your date, Sandy</button>
                </Link>                
            </Col3>
            </>
        )
    }else if(props.flags.includes("LACBRAQAskSandyIfSheWantsToGoBackHome")){
        let LACBRAQSandyTakesYouToHerApmtAfterGoingBackTogheterFromFarmDate = () =>{
            props.onChangeRelationship("Sandy",2);
            props.onAddMinutes(10);
            props.onPushFlag("LACBRAQSandyTakesYouToHerApmtAfterGoingBackTogheterFromFarmDate"); //Because you will have to drink milk after this.
            props.onSpliceFlag("LACBRAQAskSandyIfSheWantsToGoBackHome");
            
        }        

        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {BegginingSandyOutside}>
                
            </Col2>
        <p>"Yes, I would love to".And you go back to your building. </p>
        <p>Upon arrival you start feeling a strange pressure on your chest. You start feeling dizzy.</p>
        <p>"Are you feeling well?" Asks Sandy. She can see by your expression that you are not feeling well. "Let's get you to my apartment, my ma' gave me a whole bunch of medicine we can use".</p>
            <Col3 > 
                <Link to={"/SandyApartment"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LACBRAQSandyTakesYouToHerApmtAfterGoingBackTogheterFromFarmDate}>Sandy takes you into her apartment</button>
                </Link>                
            </Col3>
            </>
        )
    } else if(props.flags.includes("LACBRAQAmyWillFindYouAfterSleepingWithLacBraDidNotDrinkMilk")){
        
        if(props.flags.includes("MET_AMY")){
            let LACBRAQLieToAmyWhereYouGotBracelet = () =>{
                props.onChangeRelationship("Amy",-3);
                props.onAddMinutes(10);
                props.onPushFlag("LACBRAQAmyWantsToBuyBracelet"); 
                props.onSpliceFlag("LACBRAQAmyWillFindYouAfterSleepingWithLacBraDidNotDrinkMilk");
                
            }       
            
            let LACBRAQTruthToAmyWhereYouGotBracelet = () =>{
                props.onChangeRelationship("Amy",1);
                props.onAddMinutes(10);
                props.onPushFlag("LACBRAQAmyWantsToBuyBracelet"); 
                props.onSpliceFlag("LACBRAQAmyWillFindYouAfterSleepingWithLacBraDidNotDrinkMilk");
            }
    
            return(
                <>
                <Col1>
                    <SetCol1
                    />
                </Col1>
                <Col2 BackImage = {OutsideApartment}>
                    <img src={AmyImage} height={AmyCharacterImageHeight}></img>
                </Col2>
    
                <Col3 > 
                    <p>You see Amy approaching you. Hey {props.name}. Nice bracelet where did you get it?</p>
                    <Link to={"/GoOutside"} style={{ textDecoration: "none" }}>
                        <button type="button" className="btn btn-primary" onClick = {LACBRAQLieToAmyWhereYouGotBracelet}>Lie</button>
                        <button type="button" className="btn btn-primary" onClick = {LACBRAQTruthToAmyWhereYouGotBracelet}>Tell her the truth</button>
                    </Link>                
                </Col3>
                </>
            )
        } else{
            let LACBRAQLieToAmyWhereYouGotBracelet = () =>{
                props.onChangeRelationship("Amy",-3);
                props.onAddMinutes(10);
                props.onPushFlag("LACBRAQAmyWantsToBuyBracelet"); 
                props.onSpliceFlag("LACBRAQAmyWillFindYouAfterSleepingWithLacBraDidNotDrinkMilk");

                props.onPushFlag("MET_AMY");
                
            }       
            
            let LACBRAQTruthToAmyWhereYouGotBracelet = () =>{
                props.onChangeRelationship("Amy",1);
                props.onAddMinutes(10);
                props.onPushFlag("LACBRAQAmyWantsToBuyBracelet"); 
                props.onSpliceFlag("LACBRAQAmyWillFindYouAfterSleepingWithLacBraDidNotDrinkMilk");

                props.onPushFlag("MET_AMY");
            }
    
            return(
                <>
                <Col1>
                    <SetCol1
                    />
                </Col1>
                <Col2 BackImage = {OutsideApartment}>
                    <img src={AmyImage} height={AmyCharacterImageHeight}></img>
                </Col2>
    
                <Col3 > 
                    <p>A girl approaches you. You had never seen her before. "Hello, I am Amy, I am sorry to interrupt in such an inappropiate manner, but. Where did you get that bracelet?" Amy queries.</p>

                    <Link to={"/GoOutside"} style={{ textDecoration: "none" }}>
                        <button type="button" className="btn btn-primary" onClick = {LACBRAQLieToAmyWhereYouGotBracelet}>Lie</button>
                        <button type="button" className="btn btn-primary" onClick = {LACBRAQTruthToAmyWhereYouGotBracelet}>Tell her the truth</button>
                    </Link>                
                </Col3>
                </>
            )
        }
    } else if(props.flags.includes("LACBRAQAmyWantsToBuyBracelet")){
        let LACBRAQSellAmyTheBracelet = () =>{
            props.onChangeRelationship("Amy",2);
            props.onAddMoney(300);
            props.onAddMinutes(10);
            props.onPushFlag("LACBRAQsoldAmyTheBracelet"); //Converges here
            props.onSpliceFlag("LACBRAQAmyWantsToBuyBracelet");
        }
        let LACBRAQDontSellAmyTheBracelet = () =>{
            props.onChangeRelationship("Amy",-1);
            props.onAddMinutes(10);
            props.onPushFlag("LACBRAQDidNotsellAmyTheBracelet"); 
            props.onSpliceFlag("LACBRAQAmyWantsToBuyBracelet");
        }

        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {OutsideApartment}>
                <img src={AmyImage} height={AmyCharacterImageHeight}></img>
            </Col2>

            <Col3 > 
                <p>Amy seems to be a bit puzzled. "It's just that I love it so much. Could you sell it to me? I'll give you 300$"</p>

                <Link to={"/GoOutside"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LACBRAQSellAmyTheBracelet}>Sell her the bracelet</button>
                    <button type="button" className="btn btn-primary" onClick = {LACBRAQDontSellAmyTheBracelet}>Don't sell her the bracelet</button>
                </Link>                
            </Col3>
            </>
        )
    } else if(props.flags.includes("LACBRAQsoldAmyTheBracelet")){
        let LACBRAQAmyTookTheBracelet = () =>{
            props.onChangeRelationship("Amy",1);
            props.onAddMinutes(10);
            props.onPushFlag("LACBRAQAmyTookTheBracelet"); 
            props.onSpliceFlag("LACBRAQsoldAmyTheBracelet");
            props.onSetItem("LacBracelet",0)
        }

        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {OutsideApartment}>
                <img src={AmyImage} height={AmyCharacterImageHeight}></img>
            </Col2>

            <Col3 > 
                <p>"Thank you." Amy says politely. "I just love this kind of things. And I never have the time to go buy them". Amy pauses for a moment. "Have a nice day {props.name}. We might see each other soon". Amy takes the bracelet and goes back to her apartment. </p>

                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LACBRAQAmyTookTheBracelet}>Continue the day</button>
                </Link>                
            </Col3>
            </>
        )
    } else if (props.flags.includes("LACBRAQDidNotsellAmyTheBracelet")){
        let LACBRAQAmyOffersMoreMoneyForBracelet = () =>{
            props.onAddMoney(300);
            props.onChangeRelationship("Amy",1);
            props.onAddMinutes(10);
            props.onPushFlag("LACBRAQAmyTookTheBracelet"); 
            props.onSpliceFlag("LACBRAQDidNotsellAmyTheBracelet");
            props.onSetItem("LacBracelet",0)
        }
        
        let LACBRAQAmyWillTakeTheBracelet_force = () =>{
            props.onChangeRelationship("Amy",-2);
            props.onAddMinutes(10);
            props.onPushFlag("LACBRAQAmyWillTakeTheBracelet_force"); 
            props.onSpliceFlag("LACBRAQDidNotsellAmyTheBracelet");
            props.onSetItem("LacBracelet",0)
        }

        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {OutsideApartment}>
                <img src={AmyImage} height={AmyCharacterImageHeight}></img>
            </Col2>

            <Col3 > 
                
                <p>"What! I know it's not expensive. 300$ is a lot for that bracelet." Amy pauses. "You know. I'll give you 500$, trust me. Take it." Those last words sounded rather like an order.</p>

                <Link to={"/GoOutside"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LACBRAQAmyOffersMoreMoneyForBracelet}>Deal</button>
                </Link>     
                <Link to={"/GoOutside"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LACBRAQAmyWillTakeTheBracelet_force}>No. Means. No.</button>
                </Link>     
                           
            </Col3>
            </>
        )
    } else if(props.flags.includes("LACBRAQAmyWillTakeTheBracelet_force")){
        let LACBRAQAmyTookTheBracelet_by_force = () =>{
            props.onChangeRelationship("Amy",-3);
            props.onAddMinutes(10);
            props.onPushFlag("LACBRAQAmyTookTheBracelet"); 
            props.onSpliceFlag("LACBRAQAmyWillTakeTheBracelet_force");
            props.onSetItem("LacBracelet",0);
        }

        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {OutsideApartment}>
                <img src={AmyImage} height={AmyCharacterImageHeight}></img>
            </Col2>

            <Col3 > 
                
                <p>"Fuck..." You hear Amy say. Then everything goes black for you. And after a second your vision comes back. Amy is not there. You look at your wrist and the bracelet is not there either.</p>

                <Link to={"/GoOutside"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LACBRAQAmyTookTheBracelet_by_force}>Continue your day</button>
                </Link>                
            </Col3>
            </>
        )
    }else if(props.flags.includes("LACBRAQAmyTookTheBracelet")){ //Converges here.
        if(props.flags.includes("MET_SANDY")){
            let LACBRAQHelpSandyTakeBraceletBack = () =>{
                props.onChangeRelationship("Sandy",1);
                props.onAddMinutes(10);
                props.onPushFlag("LACBRAQHelpSandyTakeBraceletBack"); 
                props.onSpliceFlag("LACBRAQAmyTookTheBracelet");
            }
            let DontHelpSandyTakeBraceletBack = () =>{ //End of quest. I need to 
                props.onChangeRelationship("Sandy",-5);
                props.onAddMinutes(10);
                props.onPushFlag("LACBRAQDidNotHelpSandyTakeBraceletBack"); 
                props.onSpliceFlag("LACBRAQAmyTookTheBracelet");
            }
    
            return(
                <>
                <Col1>
                    <SetCol1
                    />
                </Col1>
                <Col2 BackImage = {OutsideApartment}>
                    <img src={SandyImage} height={characterImageHeight}></img>
                </Col2>
    
                <Col3 > 
                    
                    <p>Hey {props.name}. I saw that. Did that girl just take your bracelet? That was MY bracelet! I don't know why you had it. But we need to take it back, that bracelet is really important to me.</p>
                
    
                    <Link to={"/GoOutside"} style={{ textDecoration: "none" }}>
                        <button type="button" className="btn btn-primary" onClick = {LACBRAQHelpSandyTakeBraceletBack}>Let's take that bracelet back</button>
                        <button type="button" className="btn btn-primary" onClick = {DontHelpSandyTakeBraceletBack}>I don't want to get involved</button>
                    </Link>    
                </Col3>
                </>
            )
        } else{
            let LACBRAQHelpSandyTakeBraceletBack = () =>{
                props.onChangeRelationship("Sandy",1);
                props.onAddMinutes(10);
                props.onPushFlag("LACBRAQHelpSandyTakeBraceletBack"); 
                props.onSpliceFlag("LACBRAQAmyTookTheBracelet");
                props.onPushFlag("MET_SANDY");
            }
            let DontHelpSandyTakeBraceletBack = () =>{ //End of quest. I need to 
                props.onChangeRelationship("Sandy",-5);
                props.onAddMinutes(10);
                props.onPushFlag("LACBRAQDidNotHelpSandyTakeBraceletBack"); 
                props.onSpliceFlag("LACBRAQAmyTookTheBracelet");
                props.onPushFlag("MET_SANDY");
            }
    
            return(
                <>
                <Col1>
                    <SetCol1
                    />
                </Col1>
                <Col2 BackImage = {OutsideApartment}>
                    <img src={SandyImage} height={characterImageHeight}></img>
                </Col2>
    
                <Col3 > 
                    
                    <p>Hey I saw that. Did that girl just take your bracelet? That was MY bracelet! I don't know why you had it. But we need to take it back, that bracelet is really important to me.</p>
                    <p>I am Sandy, by the way. Nice to meet you</p>
                
    
                    <Link to={"/GoOutside"} style={{ textDecoration: "none" }}>
                        <button type="button" className="btn btn-primary" onClick = {LACBRAQHelpSandyTakeBraceletBack}>Let's take that bracelet back</button>
                        <button type="button" className="btn btn-primary" onClick = {DontHelpSandyTakeBraceletBack}>Continue your day</button>
                    </Link>    
                </Col3>
                </>
            )

        }
    } else if(props.flags.includes("LACBRAQHelpSandyTakeBraceletBack")){
        let LACBRAQHelpSandyTakeBraceletBackGoToAmyApmt = () =>{ //End of quest. I need to 
            props.onChangeRelationship("Sandy",3);
            props.onAddMinutes(10);
            props.onPushFlag("LACBRAQHelpSandyTakeBraceletBackGoToAmyApmt"); 
            props.onSpliceFlag("LACBRAQHelpSandyTakeBraceletBack");
        }
        let DontHelpSandyTakeBraceletBack = () =>{ //End of quest. I need to 
            props.onChangeRelationship("Sandy",-5);
            props.onAddMinutes(10);
            props.onPushFlag("LACBRAQDidNotHelpSandyTakeBraceletBack"); 
            props.onSpliceFlag("LACBRAQHelpSandyTakeBraceletBack");
        }


        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {OutsideApartment}>
                <img src={SandyImage} height={characterImageHeight}></img>
            </Col2>

            <Col3 > 

                <p>Okay {props.name}. That girl who just took the bracelet from you is a stuck up bitch. She thinks she can police over me and control what I do. We will show her that she can't just take my stuff.</p>

                <p>But I can't fight her alone. She's too strong for me. So I need your help. The plan is simple, we knock her door, get inside her apartment, steal the bracelet and leave. You distract her and I take her stuff!</p>

                <p>We don't really have time. So put on your best neighbor face and lets go!</p>
                
                <Link to={"/GoOutside"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {DontHelpSandyTakeBraceletBack}>I don't want this</button>
                </Link>    
                <Link to={"/AmyApartment"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LACBRAQHelpSandyTakeBraceletBackGoToAmyApmt}>Let's take that bracelet back</button>
                </Link>  
            </Col3>
            </>
        )
    } 
    
    else if(props.flags.includes("LACBRAQDidNotHelpSandyTakeBraceletBack")){
        console.log("Pending: LACBRAQDidNotHelpSandyTakeBraceletBack");
        props.onSpliceFlag("LACBRAQDidNotHelpSandyTakeBraceletBack");
    }
    
    
    else{
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {OutsideApartment}>
                
            </Col2>
    
            <Col3 > 
                <p>It's a nice day</p>

                <Link to={"/Home"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary">Go home</button>
                </Link>

                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary">Game map</button>
                </Link>
    
            </Col3>
            </>
            ) 
    }
        
}

export default GoOutside;

