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
const GoOutside = ( props ) => {

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
            props.onSpliceFlag("LACBRAQAmySawYouSheHadNoIdea_outside_part_2_lie")
        }
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {OutsideApartment}>
                
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

                
                <Link to={"/Farm"} style={{ textDecoration: "none" }}>
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

