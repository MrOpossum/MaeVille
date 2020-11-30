import React from 'react';
import { Link } from 'react-router-dom';

import Col1 from "../../components/col1";
import Col2 from "../../components/col2";
import Col3 from "../../components/col3";
import SetCol1 from "../../components/SetCol1";


//Images

import SandyLivingRoom from "../../Images/SandyApartment/SandyLivingRoom.jpg";
import SandyLivingRoom_Sandy_Top_Grin from "../../Images/SandyApartment/SandyLivingRoom_Sandy_Top_Grin.png";
import SandySuckleLACBRAQpt1 from "../../Images/SandyApartment/Scenes/LACBRAQ_B_SUCKLE_AndMassage_cropped.mp4";
import LACBRAQ_B_SUCK_ABELLA_DANGER_LAC_SCENE_CUT_TO_ONLY_SUCK_CROPPED from "../../Images/SandyApartment/Scenes/LACBRAQ_B_SUCK_ABELLA_DANGER_LAC_SCENE_CUT_TO_ONLY_SUCK_CROPPED.mp4";
import LACBRAQ_B_SUCK_Finish_kiss_of_end from "../../Images/SandyApartment/LACBRAQ_B_SUCK_Finish_kiss_of_end.jpg";
import SandyLivingRoom_Sandy_Top_Grin_andBDSM_Bench from "../../Images/SandyApartment/SandyLivingRoom_Sandy_Top_Grin_andBDSM_Bench.png";
import LACBRAQ_B_MILKING_MILKINGFACTORY_CUT_youInBench_nologo from "../../Images/SandyApartment/Scenes/LACBRAQ_B_MILKING_MILKINGFACTORY_CUT_youInBench_nologo.mp4";
import LACBRAQ_B_MILKING_MILKINGFACTORY_Milking_no_logo from "../../Images/SandyApartment/Scenes/LACBRAQ_B_MILKING_MILKINGFACTORY_Milking_no_logo.mp4";
import LACBRAQ_B_MILKING_MILKINGFACTORY_SUCKING_cut_no_logo from "../../Images/SandyApartment/Scenes/LACBRAQ_B_MILKING_MILKINGFACTORY_SUCKING_cut_no_logo.mp4";
import SODA_TG_MTF_TRANSFORM_VID_CUT_ONLY_HAIR_GROWTH from "../../Images/SandyApartment/Scenes/SODA_TG_MTF_TRANSFORM_VID_CUT_ONLY_HAIR_GROWTH.mp4";
import LACBRAQ_AfterDate_TF_Part_2_cut_use_this_one from "../../Images/SandyApartment/LACBRAQ_AfterDate_TF_Part_2_cut_use_this_one.jpg"
import BE_SCENES_COMP_3dART_FOR_BE_AT_SANDY_APMT_CUT_WHITE_TOP from "../../Images/SandyApartment/Scenes/BE_SCENES_COMP_3dART_FOR_BE_AT_SANDY_APMT_CUT_WHITE_TOP.mp4"
import LACBRAQ_AfterDate_TWO_LESBOS_SUCKING_PT1 from "../../Images/SandyApartment/Scenes/LACBRAQ_AfterDate_TWO_LESBOS_SUCKING_PT1.webm"
import LACBRAQ_AfterDate_TWO_LESBOS_SUCKING_PT2 from "../../Images/SandyApartment/Scenes/LACBRAQ_AfterDate_TWO_LESBOS_SUCKING_PT2.webm"
import LACBRAQ_LesbianWrestling_1 from "../../Images/SandyApartment/Scenes/LACBRAQ_LesbianWrestling_1.mp4";
import LACBRAQ_LesbianWrestling_2 from "../../Images/SandyApartment/Scenes/LACBRAQ_LesbianWrestling_2.mp4";
import SandyLivingRoom_WithAmyAndSandy_RedAndWhiteTop from "../../Images/SandyApartment/SandyLivingRoom_WithAmyAndSandy_RedAndWhiteTop.png";

const SandyApartment = ( props ) => {

    if(props.flags.includes("LACBRAQSandySawYouSheHadNoIdea")){
        

        let LACBRAQSandySawYouSheHadNoIdeaClick1 = () =>{
            props.onSpliceFlag("LACBRAQSandySawYouSheHadNoIdea");
            props.onPushFlag("LACBRAQSandySawYouSheHadNoIdea_2")
            props.onChangeRelationship("Sandy",10);
            props.onAddMinutes(10);
        }
        
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {SandyLivingRoom_Sandy_Top_Grin}>
                
            </Col2>
    
            <Col3 > 
                <p>You both go into her aparment. Sandy turns to you. She pauses and admires your new body for a moment...</p>
                <p>"umm... {props.name}... How did it feel? How does it fill when your breasts fill with milk?, how does it feel when the milk comes out?..." There is a moment of silence.</p>
                <p>
                "It's amazing, isn't it? Your skin stretching, the milk flowing inside you, and building up..." Sandy is flushed now. 
                Sandy approaches you, grabs your breast and starts kneading them. Lighting goes through your spine. </p>

                <Link to={"/SandyApartment"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick={LACBRAQSandySawYouSheHadNoIdeaClick1}>You shiver and feel light headed.</button>
                </Link>
    
            </Col3>
            </>
            );
    } else if(props.flags.includes("LACBRAQSandySawYouSheHadNoIdea_2")){
        
        let LACBRAQSandySawYouSheHadNoIdeaClick_2 = () =>{
            props.onSpliceFlag("LACBRAQSandySawYouSheHadNoIdea_2");
            props.onPushFlag("LACBRAQSandySawYouSheHadNoIdea_3")
            props.onChangeRelationship("Sandy",1);
            props.onAddMinutes(10);
        }
        
        return(
            <>
            <Col1>
                <SetCol1/>
            </Col1>
            <Col2 BackImage = {" "}
                    rowHeight = {" "}
            >
            <video autoPlay muted loop 
            style ={{maxWidth: "100%"}}>
                <source src={SandySuckleLACBRAQpt1} type="video/mp4"/>
            </video>
            </Col2>     
    
            <Col3 > 
                <p>"We need to massage them so the milk comes out" Explains Sandy.</p>
                <p>"{props.name}. What happened to you is magical. That bracelet had energy inside it, and that energy made you change." Sandy says.</p>
                <p>"Now that you interacted with magic you won't be able to ignore it anymore. And that ain't good news. You now have to study and work with magic, or you will probably die." Sandy looks at you. "You ain't even listening to me. You cow. But I get it, this must feel amazing" </p>
                <p>
                You are sporting a massive boner, just like yesterday. And having someone else massage you has become the most pleasurable sensation ever. </p>

                <Link to={"/SandyApartment"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick={LACBRAQSandySawYouSheHadNoIdeaClick_2}>Waves of pleasure crash trough your body</button>
                </Link>
    
            </Col3>
            </>
            );
    } else if(props.flags.includes("LACBRAQSandySawYouSheHadNoIdea_3")){
        let LACBRAQSandySawYouSheHadNoIdeaClick_3 = () =>{
            props.onSpliceFlag("LACBRAQSandySawYouSheHadNoIdea_3");
            props.onPushFlag("LACBRAQSandySawYouSheHadNoIdea_4")
            props.onChangeRelationship("Sandy",1);
            props.onAddMinutes(10);
        }

        return(
            <>
            <Col1>
                <SetCol1/>
            </Col1>
            <Col2 BackImage = {" "}
                    rowHeight = {" "}
            >
          <video autoPlay muted loop 
          style ={{maxWidth: "100%"}}>
            <source src={LACBRAQ_B_SUCK_ABELLA_DANGER_LAC_SCENE_CUT_TO_ONLY_SUCK_CROPPED} type="video/mp4"/>
          </video>
        </Col2>     
    
            <Col3 > 
                <p>"Now let's drain you baby" Sandy whispers. And places her lips on your extended nipples. You shake, shiver, and cum. A flash of light on your brain, you are light headed and can feel pulses starting in your chest and cruising your whole body.
                You can hear the suckling of Sandy latched to your nipples. </p>
                <p>*gulp, gulp, gulp, ah....* Sandy is devouring your milk, expertly handling each of your mounds and draining them of all the sweetness inside. </p>
                <p>Sandy is also enjoying this. Her eyes closed, goosebumps in her skin.
                You both enter a state of mutual pleasure, her need for breastmilk is provided by your swollen chest. You both orgasm constantly, devoiding you or any possibility to think... Until your chest dries up.</p>

                <Link to={"/SandyApartment"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick={LACBRAQSandySawYouSheHadNoIdeaClick_3}>Recover you breath</button>
                </Link>
    
            </Col3>
            </>
            );
    } else if(props.flags.includes("LACBRAQSandySawYouSheHadNoIdea_4")){
        let LACBRAQSandySawYouSheHadNoIdeaClick_4 = () =>{
            
            if(props.flags.includes("LACBRAQSandySawYouSheHadNoIdea_4")){
                props.onSpliceFlag("LACBRAQSandySawYouSheHadNoIdea_4");
            }
            if(props.flags.includes("LACBRAQSandySawYouSheHadNoIdea_4")){
                props.onSpliceFlag("LACBRAQSandySawYouSheHadNoIdea_4");
            }
            props.onPushFlag("SandyTeachesMagicQuestInHerApartmentPart_1");
            props.onPushFlag("MagicDiscovered");
            props.onChangeRelationship("Sandy",3);
            props.onAddMinutes(10);
            props.onAddItem("LacBracelet",-1);
            props.onSpliceFlag("WearingLacBracelet");
        }

        return(
            <>
            <Col1>
                <SetCol1/>
            </Col1>
            <Col2 BackImage = {LACBRAQ_B_SUCK_Finish_kiss_of_end}>
            </Col2>     
    
            <Col3 > 
                <p>You are both exhausted. Unsure of the intense sensations you both experienced. Sandy breaks the silence.
                "We will have definetly have fun together in the future" Giggles Sandy.  </p>
                <p>
                "Come see me soon. I will teach you the basics. Also, there is another wizard here, she's called Amy. And luckly for us she's really rich, so her family placed a really strong protective spell in this building. If you are ever in truble just run back here and you'll be fine". Sandy explains.
                </p>
                <p>"Now you should go. I have some preparations to do. And also, don't worry about the bracelet anymore, It does not have any magic left in it now..." Sandy gives you a light push.</p>

                <Link to={"/Home"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick={LACBRAQSandySawYouSheHadNoIdeaClick_4}>Go home</button>
                </Link>
    
            </Col3>
            </>
            );
    } else if(props.flags.includes("LACBRAQGoToSandyApartmentAfterYouRefusedToGiveBracelet")){
        let LACBRAQGettingBoundIntoTheMilkMachineInSandyApmt = () =>{
            props.onSpliceFlag("LACBRAQGoToSandyApartmentAfterYouRefusedToGiveBracelet");
            props.onPushFlag("LACBRAQGettingBoundIntoTheMilkMachineInSandyApmt");
            props.onChangeRelationship("Sandy",2);
            props.onAddMinutes(10);
        }
        
        let LACBRAQResistedGettingIntoTheMilkMachineSandyApmt = () =>{
            props.onSpliceFlag("LACBRAQGoToSandyApartmentAfterYouRefusedToGiveBracelet");
            props.onPushFlag("LACBRAQResistedGettingIntoTheMilkMachineSandyApmt");
            props.onChangeRelationship("Sandy",-1);
            props.onAddMinutes(10);
        }

        return(
            <>
            <Col1>
                <SetCol1/>
            </Col1>
            <Col2 BackImage = {SandyLivingRoom_Sandy_Top_Grin_andBDSM_Bench}>
            </Col2>     
    
            <Col3 > 
                <p>"You will be there" Sandy commands. Pointing at a lactation station. "The door is locked, you can't leave, if you don't do this nicely I will make you do it... What's your choice?"</p>

                <Link to={"/SandyApartment"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick={LACBRAQGettingBoundIntoTheMilkMachineInSandyApmt}>Comply</button>
                </Link>
                <Link to={"/SandyApartment"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick={LACBRAQResistedGettingIntoTheMilkMachineSandyApmt}>Resist</button>
                </Link>
            </Col3>
            </>
            );
    } else if(props.flags.includes("LACBRAQResistedGettingIntoTheMilkMachineSandyApmt")){
        let LACBRAQGettingBoundIntoTheMilkMachineInSandyApmt = () =>{
            props.onSpliceFlag("LACBRAQResistedGettingIntoTheMilkMachineSandyApmt");
            props.onPushFlag("LACBRAQGettingBoundIntoTheMilkMachineInSandyApmt");
            props.onAddMinutes(10);
        }

        return(
            <>
            <Col1>
                <SetCol1/>
            </Col1>
            <Col2 BackImage = {SandyLivingRoom_Sandy_Top_Grin_andBDSM_Bench}>
            </Col2>     
    
            <Col3 > 
                <p>Sandy grabs you by the nipple and you faint for a second</p>

                <Link to={"/SandyApartment"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick={LACBRAQGettingBoundIntoTheMilkMachineInSandyApmt}>Wake up in the machine</button>
                </Link>
                
            </Col3>
            </>
            );
    }else if(props.flags.includes("LACBRAQGettingBoundIntoTheMilkMachineInSandyApmt")){
        let LACBRAQYouAreBoundAndSandyDrainsYouPt_1 = () =>{
            props.onSpliceFlag("LACBRAQGettingBoundIntoTheMilkMachineInSandyApmt");
            props.onPushFlag("LACBRAQYouAreBoundAndSandyDrainsYouPt_1");
            props.onAddMinutes(10);
        }
        let LACBRAQSandyExplainsMagicAfterDrainingYou = () =>{
            props.onSpliceFlag("LACBRAQGettingBoundIntoTheMilkMachineInSandyApmt");
            props.onPushFlag("LACBRAQSandyExplainsMagicAfterDrainingYou");
            props.onAddMinutes(10);
        }

        return(
            <>
            <Col1>
                <SetCol1/>
            </Col1>
            <Col2 BackImage = {" "}
                    rowHeight = {" "}
            >
            <video autoPlay muted loop 
            style ={{maxWidth: "100%"}}>
                <source src={LACBRAQ_B_MILKING_MILKINGFACTORY_CUT_youInBench_nologo} type="video/mp4"/>
            </video>
            </Col2>    
             
    
            <Col3 > 
                <p>Sandy starts tying you to the machine, contorting you into submission.</p>
                <p> You are bound, you feel the restriction in your wrist, your legs. You can't move. And... You like this?</p>

                <Link to={"/SandyApartment"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick={LACBRAQYouAreBoundAndSandyDrainsYouPt_1}>I do like this</button>
                </Link>
                <Link to={"/SandyApartment"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick={LACBRAQSandyExplainsMagicAfterDrainingYou}>I do not like this</button>
                </Link>
                
            </Col3>
            </>
            );
    }else if(props.flags.includes("LACBRAQYouAreBoundAndSandyDrainsYouPt_1")){
        let LACBRAQNowSandySucksBreasts = () =>{
            props.onSpliceFlag("LACBRAQYouAreBoundAndSandyDrainsYouPt_1");
            props.onPushFlag("LACBRAQYouAreBoundAndSandyDrainsYouPt_2");
            props.onAddMinutes(10);
        }

        return(
            <>
            <Col1>
                <SetCol1/>
            </Col1>  
            <Col2 BackImage = {" "}
                    rowHeight = {" "}
            >
            <video autoPlay muted loop 
            style ={{maxWidth: "100%"}}>
                <source src={LACBRAQ_B_MILKING_MILKINGFACTORY_Milking_no_logo} type="video/mp4"/>
            </video>
            </Col2> 
            <Col3 > 
                <p>Sandy tightens your restrains. She slowly moves towards your chest and massages it. The pleasure is incredible, the pain makes you flustered, but the pleasure makes you feel alive. The arousal creeps through your spine and flows through your whole body.</p>

                <p>Sandy is flustered too. You can see she is enyoing this. </p>
                <p>"I'll force out every single drop from your chest"</p>

                <Link to={"/SandyApartment"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick={LACBRAQNowSandySucksBreasts}>Wave after wave of pleasure curses through your body</button>
                </Link>
               
                
            </Col3>
            </>
            );
    }else if(props.flags.includes("LACBRAQYouAreBoundAndSandyDrainsYouPt_2")){
        let LACBRAQSandyExplainsMagicAfterDrainingYou = () =>{
            props.onSpliceFlag("LACBRAQYouAreBoundAndSandyDrainsYouPt_2");
            props.onPushFlag("LACBRAQSandyExplainsMagicAfterDrainingYou");
            props.onAddMinutes(10);
        }

        return(
            <>
            <Col1>
                <SetCol1/>
            </Col1>  
            <Col2 BackImage = {" "}
                    rowHeight = {" "}
            >
            <video autoPlay muted loop 
            style ={{maxWidth: "100%"}}>
                <source src={LACBRAQ_B_MILKING_MILKINGFACTORY_SUCKING_cut_no_logo} type="video/mp4"/>
            </video>
            </Col2>   
    
            <Col3 > 
                <p>After a burning pleasure session you fall asleep,</p>

                <Link to={"/SandyApartment"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick={LACBRAQSandyExplainsMagicAfterDrainingYou}>wake up shortly after without your breasts...</button>
                </Link>
               
                
            </Col3>
            </>
            );
                
    } else if(props.flags.includes("LACBRAQSandyExplainsMagicAfterDrainingYou")){
        let GoHomeAfterSandyForceDrainedYouEndOfLACBRAQ = () =>{
            props.onSpliceFlag("LACBRAQSandyExplainsMagicAfterDrainingYou");
            props.onPushFlag("MagicDiscovered");
            props.onPushFlag("SandyTeachesMagicQuestInHerApartmentPart_1");
            props.onAddMinutes(10);
            props.onAddItem("LacBracelet",-1);
            props.onSpliceFlag("WearingLacBracelet");
        }

        return(
            <>
            <Col1>
                <SetCol1/>
            </Col1>
            <Col2 BackImage = {SandyLivingRoom_Sandy_Top_Grin}>
            </Col2>     
    
            <Col3 > 
            <p>"{props.name}." Sandy sighs "What happened to you is magical. That bracelet had energy inside it, and that energy made you change.</p>
            <p>Now that you interacted with magic you won't be able to ignore it anymore. And that ain't good news. You now have to study and work with magic, or you will probably die."</p>
            <p>"Come see me soon. I will teach you the basics. Also, there is another wizard here, she's called Amy. And luckly for us she's really rich, so her family placed a really strong protective spell in this building. If you are ever in truble just run back here and you'll be fine". Sandy explains.</p>
            <p>"Now you should go. I have some preparations to do. And also, don't worry about the bracelet anymore, It does not have any magic left in it now..." Sandy gives you a light push.</p>
               
                <Link to={"/Home"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick={GoHomeAfterSandyForceDrainedYouEndOfLACBRAQ}> Go home</button>
                </Link>
               
                
            </Col3>
            </>
            );
    }else if(props.flags.includes("LACBRAQSandyTakesYouToHerApmtAfterGoingBackTogheterFromFarmDate")){
        let LACBRAQAfterFarmDateWithSandy_pt1 = () =>{
            props.onSpliceFlag("LACBRAQSandyTakesYouToHerApmtAfterGoingBackTogheterFromFarmDate");
            props.onPushFlag("LACBRAQAfterFarmDateWithSandy_pt1");
            props.onAddMinutes(10);
            props.onAddItem("LacBracelet",-1);
            props.onSpliceFlag("WearingLacBracelet");
        }

        return(
            <>
            <Col1>
                <SetCol1/>
            </Col1>
            
            <Col2 BackImage={" "} rowHeight={" "}>
                <video autoPlay loop style={{ maxWidth: "100%" }}>
                    <source src={SODA_TG_MTF_TRANSFORM_VID_CUT_ONLY_HAIR_GROWTH} type="video/mp4" />
                </video>
            </Col2>
            
            <Col3 > 
                <p>Sandy helps you into her apartment, at this point you can't even open your eyes. You feel your face tingle, you feel your hair growing. Your whole body feels like it's being squished by some invisible force. You open your eyes just for a second and notice the bracelet shining.</p>
               
                <Link to={"/SandyApartment"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick={LACBRAQAfterFarmDateWithSandy_pt1}> Fuuuuuuuck....</button>
                </Link>
               
                
            </Col3>
            </>
            );
    } else if(props.flags.includes("LACBRAQAfterFarmDateWithSandy_pt1")){
        let LACBRAQAfterFarmDateWithSandy_pt2 = () =>{
            props.onSpliceFlag("LACBRAQAfterFarmDateWithSandy_pt1");
            props.onPushFlag("LACBRAQAfterFarmDateWithSandy_pt2");
            props.onAddMinutes(10);
        }

        return(
            <>
            <Col1>
                <SetCol1/>
            </Col1>
            <Col2 BackImage = {LACBRAQ_AfterDate_TF_Part_2_cut_use_this_one}>
            </Col2>     
    
            <Col3 > 
                <p>"Heck. This is not what I expected" Sandy says, she sounds worried. "</p> 
                <p>{props.name}. What you are going through is your own fault, you should have just given me my bracelet. But don't worry, you'll be fine.".</p>
                <p>You feel something in your wrists, Sandy is tying you up. You can't even muster the strength to resist. </p>
                <p>"Shhh... It's fine" Sandy caresses your hair. The pain is subsiding, you feel your hair, long and silky. You are thinner and feel out of balance. You open your eyes and Sandy is there, she's smiling at you. </p>
                <p>"Baby, the best part is about to start. Just relax". Sandy whispers in your ear, almost kissing you.</p>
                <Link to={"/SandyApartment"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick={LACBRAQAfterFarmDateWithSandy_pt2}>And it starts.</button>
                </Link>
               
                
            </Col3>
            </>
            );
    } else if(props.flags.includes("LACBRAQAfterFarmDateWithSandy_pt2")){
        let LACBRAQAfterFarmDateWithSandy_pt3 = () =>{
            props.onSpliceFlag("LACBRAQAfterFarmDateWithSandy_pt2");
            props.onPushFlag("LACBRAQAfterFarmDateWithSandy_pt3");
            props.onAddMinutes(10);
        }

        return(
            <>
            <Col1>
                <SetCol1/>
            </Col1>
            <Col2 BackImage={" "} rowHeight={" "}>
            <video autoPlay loop style={{ maxWidth: "100%" }}>
                <source src={BE_SCENES_COMP_3dART_FOR_BE_AT_SANDY_APMT_CUT_WHITE_TOP} type="video/mp4" />
            </video>
            </Col2>    
    
            <Col3 > 
            <p>You first notice how hard you are, your dick hurts and throbs, you can feel it twitching.</p>
            <p>"If you think that's the best part, you have no idea" Sandy lightly hovers her hand over your chest. You feel the same pressure you felt before, but this time it's blissful. Something is coming over you, your chest radiates warmth through your body. And the pressure is getting stronger.</p>

                <Link to={"/SandyApartment"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick={LACBRAQAfterFarmDateWithSandy_pt3}>You moan, you feel your chest expanding, growing. Something is feeling your... breasts?</button>
                </Link>
               
                
            </Col3>
            </>
            );
    } else if(props.flags.includes("LACBRAQAfterFarmDateWithSandy_pt3")){
        let LACBRAQAfterFarmDateWithSandy_pt4 = () =>{
            props.onSpliceFlag("LACBRAQAfterFarmDateWithSandy_pt3");
            props.onPushFlag("LACBRAQAfterFarmDateWithSandy_pt4");
            props.onAddMinutes(10);
        }

        return(
            <>
            <Col1>
                <SetCol1/>
            </Col1>
            <Col2 BackImage={" "} rowHeight={" "}>
            <video autoPlay loop style={{ maxWidth: "100%" }}>
                <source src={LACBRAQ_AfterDate_TWO_LESBOS_SUCKING_PT1} type="video/mp4" />
            </video>
            </Col2>      
    
            <Col3 > 
            <p>"I am so excited! It feels amazing, right?" Sandy asks. "Why am I even asking, look at you, you are having the time of your life, a light breeze would be enough to push you over the edge. But we are still not done. I need you to start giving me that sweet milk.</p>

                <Link to={"/SandyApartment"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick={LACBRAQAfterFarmDateWithSandy_pt4}>This is too much pressure</button>
                </Link>
               
                
            </Col3>
            </>
            );
    } else if(props.flags.includes("LACBRAQAfterFarmDateWithSandy_pt4")){
        let LACBRAQAfterFarmDateWithSandy_pt5_amyBreaksIntoSandyApmt = () =>{
            props.onSpliceFlag("LACBRAQAfterFarmDateWithSandy_pt4");
            props.onPushFlag("LACBRAQAfterFarmDateWithSandy_pt5_amyBreaksIntoSandyApmt");
            props.onAddMinutes(10);
        }

        return(
            <>
            <Col1>
                <SetCol1/>
            </Col1>
            <Col2 BackImage={" "} rowHeight={" "}>
            <video autoPlay loop style={{ maxWidth: "100%" }}>
                <source src={LACBRAQ_AfterDate_TWO_LESBOS_SUCKING_PT2} type="video/mp4" />
            </video>
            </Col2>    
    
            <Col3 > 
                <p>You are engorged, your breasts are still filling up but your skin is barely giving way for the new mass. You try to free yourself but your efforts are worthless. Until Sandy gets closer.</p>
                <p>"It's time my sweet cow". Sandy whispers</p>
                <p>Sandy places her lips on your nipple, and you go overboard. A full body orgasm curses through your body, and you feel how Sandy voraciously gulps every drop of the delightful liquid oozing out of your boobs.</p>
                <Link to={"/SandyApartment"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick={LACBRAQAfterFarmDateWithSandy_pt5_amyBreaksIntoSandyApmt}>The door of Sandys apartment hurls open.</button>
                </Link>
               
                
            </Col3>
            </>
            );
    } else if(props.flags.includes("LACBRAQAfterFarmDateWithSandy_pt5_amyBreaksIntoSandyApmt")){
        let LACBRAQSandyAndAmyFightInSandyApartment = () =>{
            props.onSpliceFlag("LACBRAQAfterFarmDateWithSandy_pt5_amyBreaksIntoSandyApmt");
            if(Math.random() <= .75){
                props.onPushFlag("LACBRAQSandyAndAmyFightInSandyApartmentAmyWins");
            }else{
                props.onPushFlag("LACBRAQSandyAndAmyFightInSandyApartmentSandyIsWinning");
            }
            
            props.onAddMinutes(10);
        }

        if(props.flags.includes("MET_AMY")){
            return(
                <>
                <Col1>
                    <SetCol1/>
                </Col1>
                  
                <Col2 BackImage={" "} rowHeight={" "}>
            <video autoPlay loop style={{ maxWidth: "100%" }}>
                <source src={LACBRAQ_LesbianWrestling_1} type="video/mp4" />
            </video>
            </Col2>      
                
        
                <Col3 > 
                <p>"You flat farm fox!" You hear a Amy shout. </p>
                <p>You see a Amy charging towards Sandy. </p>
                <p>Sandy snaps out of her milking trance. "Damnit. AMY!" . But she can't avoid getting tackled by the woman.</p>
                <p>"There are rules!" Shouts Amy. "And you had to bring a dammned 'Zans' to this."</p>
                <p>"He took my bracelet! He would have transformed anyways!" Sandy retaliates.</p>
    
                    <Link to={"/SandyApartment"} style={{ textDecoration: "none" }}>
                        <button type="button" className="btn btn-primary" onClick={LACBRAQSandyAndAmyFightInSandyApartment}>The two woman are fighting to domminate each other. You hear moans, growls, screams.</button>
                    </Link>
                    
                </Col3>
                </>
                );
        } else {
            return(
                <>
                <Col1>
                    <SetCol1/>
                </Col1>
                <Col2 BackImage={" "} rowHeight={" "}>
            <video autoPlay loop style={{ maxWidth: "100%" }}>
                <source src={LACBRAQ_LesbianWrestling_1} type="video/mp4" />
            </video>
            </Col2>      
                
        
                <Col3 > 
                <p>"You flat farm fox!" You hear a woman shout. </p>
                <p>You see the girl charging towards Sandy. </p>
                <p>Sandy snaps out of her milking trance. "Damnit. AMY!" . But she can't avoid getting tackled by the woman.</p>
                <p>"There are rules!" Shouts Amy. "And you had to bring a dammned 'Zans' to this."</p>
                <p>"He took my bracelet! He would have transformed anyways!" Sandy retaliates.</p>
    
                    <Link to={"/SandyApartment"} style={{ textDecoration: "none" }}>
                        <button type="button" className="btn btn-primary" onClick={LACBRAQSandyAndAmyFightInSandyApartment}>The two woman are fighting to domminate each other. You hear moans, growls, screams.</button>
                    </Link>
                    
                </Col3>
                </>
                );
        }
        
    } else if(props.flags.includes("LACBRAQSandyAndAmyFightInSandyApartmentSandyIsWinning")){
        let LACBRAQSandyAndAmyFightInSandyApartmentAmyWins = () =>{
            props.onSpliceFlag("LACBRAQSandyAndAmyFightInSandyApartmentSandyIsWinning");
            props.onPushFlag("LACBRAQSandyAndAmyFightInSandyApartmentAmyWins");
            props.onAddMinutes(10);
        }
        return(
            <>
            <Col1>
                <SetCol1/>
            </Col1>
            <Col2 BackImage={" "} rowHeight={" "}>
            <video autoPlay loop style={{ Width: "100%", height:"100%" }}>
                <source src={LACBRAQ_LesbianWrestling_2} type="video/mp4" />
            </video>
            </Col2>      
    
            <Col3 > 
                <p>After an intense fight. Sandy manages to dominate Amy. Both girls panting, and you see a grin on Sandys face.</p>
                <p>"You can't do this" Amy growls. "I can and I will. Do you know how hard was it to get that bracelet?!" Sandy answers. "And to have it stolen! I had to do something". 
                "Did you even think about the consecuences, now we have some new blood WE will have to care for!". Amy says.</p>
                <p>Sandy was just about to talk when Amy smashes a bracelet she was wearing against the floor. And a flash of light fills the apartment.</p>
                <p>Sandy yells. You are blinded by the light. After a second your vision returns. And you see Amy is now firmly on top of Sandy.</p>
                <p>Sandy growls... "You had to use a rune to win...". Amy just scoffs. "I never loose Sandy". Amy says.</p>

                <Link to={"/SandyApartment"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick={LACBRAQSandyAndAmyFightInSandyApartmentAmyWins}>Amy wins the fight</button>
                </Link>
                
            </Col3>
            </>
            );
    }else if(props.flags.includes("LACBRAQSandyAndAmyFightInSandyApartmentAmyWins")){
        let LACBRAQSandyApartmentFinishNowToYourApmtAndSandyTeaches = () =>{
            props.onSpliceFlag("LACBRAQSandyAndAmyFightInSandyApartmentAmyWins");
            props.onAddMinutes(10);
            props.onSetItem("LacBracelet",0);
            props.onSpliceFlag("WearingLacBracelet");
            props.onPushFlag("MagicDiscovered");
            props.onPushFlag("SandyTeachesMagicQuestInHerApartmentPart_1")
        }
        return(
            <>
            <Col1>
                <SetCol1/>
            </Col1>
            <Col2 BackImage = {SandyLivingRoom_WithAmyAndSandy_RedAndWhiteTop}>
            </Col2>     
    
            <Col3 > 
                <p>Amy has Sandy completely pinned down. "Did you even think about the consecuences of your actions, now we have some new blood WE will have to care for!". Amy emphasizes.</p>
                <p>"Now calm down!" Amy commands. "I need to fix this dammned mess you made".
                You can see how Sandy realizes what she has done. "And if you try to fight me again I will have to be a lot less forgiving." Amy punctuates.</p>
                <p>"Now. I guess we owe you an explanation. Since you are now part of our world." Amy sighs.
                "As you have noticed, there is magic in this world. At least that's the easiest way to explain it.
                Usually you Zans never realize it. Magic happens every single day around you and you just ignore it. But now that you have had contact with the magic you will start noticing it. And that's an issue.</p>
                <p>You see, magic is not easy to understand. Sometimes it just 'happens'. And if you are not prepared, well, you could end up with breasts full of milk..."</p>
                <p>Amy looks at you and takes the bracelet. "Don't worry. The effects will completely go away after a few days. In the meantime, you should talk with Sandy. She should be able to teach you just enough so you don't end up taking anthro dick in some random alleyway for the rest of your life." After those remarks, Amy leaves.</p>
                <p>Sandy now approaches you. Well, everything Amy said is true. And she is kindof part of a "magic police". Sandy sighs. "But aaaa, I don't like her. She is all snobbish because she is part of an 'old magic' family. Of course she is stronger than me, her family taught her everything there is to know about magic, and I bet her family has some secret spells too...". </p>
                <p>Sandy unties you. "I am sorry {props.name} I did get carried away. But you did steal my bracelet after all." Sandy pauses for a moment. "umm... {props.name}... How did it feel? How does it fill when your breasts fill with milk?, how does it feel when the milk comes out?... You know, I worked so hard to get that bracelet. I really wanted to have it." - Sandys voice breaks for a second. "Fucking asshole".</p>
                <p>At this point you are completely untied. You are exhausted. Sandy calms down and says:
                "{props.name}, you should know that this city is special. The magic around here is strengthening, and it's nothing like we have ever seen before. A lot of pople will move here. Good people, bad people, everything in between. We'll have to be really careful. For now, you should just go to sleep. And remember, this building is a stronghold of magic, Amys family have casted some amazing protective magic around here, so as long as you are inside the building you should be fine."</p>

                <Link to={"/Home"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick={LACBRAQSandyApartmentFinishNowToYourApmtAndSandyTeaches}>Leave</button>
                </Link>
                
            </Col3>
            </>
            );
    } else if(props.flags.includes("SandyTeachesMagicQuestInHerApartmentPart_1")){
        let SANTMQSandyWillBeInStore = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("SANTMQSandyWillBeInStore");
            props.onSpliceFlag("SandyTeachesMagicQuestInHerApartmentPart_1");
            props.onPushFlag("STORE_DISCOVERED");
          }
      
      
          return(
              <>
              <Col1>
                  <SetCol1
                  />
              </Col1>
              <Col2 BackImage = {SandyLivingRoom}>
                    <img alt = {"Not found"} src = {props.SandyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
              </Col2>  
      
              <Col3 > 
                    <p>"Hello {props.name}! Let's teach you magic" Sandy says quickly. "We need to get you up to speed really fast but worry not, I have amazing teaching skills. My ma' allways said I was a great teacher, I could talk and explain things all day! Are you ready to learn? Of course you are!, let's start with the first lesson:"</p>
                    <p>"Magic comes from nature, space, everything around us, magic does not come from humans, we people just try to use it so it does what we want. People can't store magic, we don't have mana or anything like that... Well there are some people that can store magic, but they ain't really storing it in them, but in some part of them. I kno of a woman who stores energy in her boobs and when she's preparing to fight her boobs get giantic!" Sandy sighs and looks at her own bust.</p>

                    <p>"So how do we use magic? Well we use runes, items, ritualls and spells. To do magic you have to meet some conditions and you have to be skilled, else nothing will work or you might get bad side effects."</p>

                    <p>"You have a sense of magic now. Magic items will have an aura on them. You should take every magic item you see, they might be useful later. But be careful, there are items that can think for themselves! And they could change you against your will." </p>
                    
                    <p>"Next lesson." Sandy quickly changes the conversation "About fighting or engaging in an activity, when you fight what matters is the other persons strenght. Right now you are completely average. You are around a {props.physical}, I am around {props.Sandy.physical} and Amy is around a {props.Amy.physical}, remember that items and being prepared can turn the tide of battles.</p>
                    <p>"Another important thing, in Maeville there are magical places, I just moved here, but I know there is a bar downtown where wizards like to go, there is also the Fur Forest, I heard really strong creatures live there. Be very careful when traveling, you are weak and if you are not prepared you will be broken."</p>

                    <p>"That's it for now. To finish your training I need you to help me do a little task. I still want to grow larger breasts you know." Sandy touches her chest "I think we can gather ingredients for a ritual that will get me another cup size. I'll need a transfer rune, which we can find one in the store. And I'll need some busty girl to take give me some boobage."</p>

                    <p>"Find me in the store when you are ready". Sandy skips around her apartment and signals you to go.</p>
      
                  <Link to={"/Home"} style={{ textDecoration: "none" }}>
                      <button type="button" className="btn btn-primary" onClick = {SANTMQSandyWillBeInStore}>Go home</button>
                  </Link>  
              </Col3>
              </>
      
          )
    } else if(props.flags.includes("SANTMQLostToGoblinsPassoutAfterfurry")){
        let SANTMQSandyWillBeInStore = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("SANTMQSandyInStoreRecoveredTheCat");
            props.onSpliceFlag("SANTMQLostToGoblinsPassoutAfterfurry");
          }
      
      
          return(
              <>
              <Col1>
                  <SetCol1
                  />
              </Col1>
              <Col2 BackImage = {SandyLivingRoom}>
                    <img alt = {"Not found"} src = {props.SandyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
              </Col2>  
      
              <Col3 > 

                <p>You wake up at Sandys apartment. Your body feels heavy and sore.</p>
                <p>"You wouldn't wake up after the goblin incident" Sandy explains. "So I brought you here."</p>
                <p>*Meow* You hear a cat. Sandy grins. "I also managed to take pirate away from those goblins. {props.name} go home and recover. Then find me in the store"   </p>
      
                  <Link to={"/Home"} style={{ textDecoration: "none" }}>
                      <button type="button" className="btn btn-primary" onClick = {SANTMQSandyWillBeInStore}>Go home</button>
                  </Link>  
              </Col3>
              </>
      
          )
    } else if(props.flags.includes("SANTMQLostToGoblinsPassoutAfterSwap")){
        let SANTMQSandyWillBeInStore = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("SANTMQSandyInStoreRecoveredTheCat");
            props.onSpliceFlag("SANTMQLostToGoblinsPassoutAfterSwap");
            props.onChangeRelationship("Sandy",-10);
          }
      
      
          return(
              <>
              <Col1>
                  <SetCol1
                  />
              </Col1>
              <Col2 BackImage = {SandyLivingRoom}>
                    <img alt = {"Not found"} src = {props.SandyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
              </Col2>  
      
              <Col3 > 

                    <p>You wake up at Sandys apartment. Your body feels heavy and sore.</p>
                    <p>Sandy slaps you. Hard.</p>
                    
                    <p>"You motherfucking ass!" Sandy yells. "You low-world bitch city dry croackroach!" Sandy is furious. Drums in your head pounding. "You took my body! Ran off and got raped by some goblins!"</p>
                    <p>"YOU KNOW. I LITERALLY JUST GOT US BOTH INTO THE WATER AND WE SWAPPED BODIES AGAIN!" Sandy stomps her feet. "BUT YOU HAD TO RUN AWAY WITH MY BODY!"</p>
                    <p>Sandy cries. "I have showered and cleaned myself for hours... I still feel like shit..."</p>
                    <p>*Meow* You see pirate roaming around in Sandy's apartment.</p>
                    <p>Heavy scilence looms in the room. A roaring stomp breaks the atmosphere. "FUCK! GOSH! HECK! DAMN!" Sandy screams. "See me at the fucking store. I'll take the cat after showering again." Sandy pushes you out of her apartment.</p>

      
                  <Link to={"/Home"} style={{ textDecoration: "none" }}>
                      <button type="button" className="btn btn-primary" onClick = {SANTMQSandyWillBeInStore}>Go home</button>
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
            <Col2 BackImage = {SandyLivingRoom}>
                
            </Col2>
    
            <Col3 > 
                <p>You are in Sandys apartment</p>

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

export default SandyApartment;

