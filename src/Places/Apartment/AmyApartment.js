import React from "react";
import { Link } from "react-router-dom";

import Col1 from "../../components/col1";
import Col2 from "../../components/col2";
import Col3 from "../../components/col3";
import SetCol1 from "../../components/SetCol1";

//Images

import AmyLivingRoom from "../../Images/AmyApartment/AmyLivingRoom.jpg";
import AmyLivingRoom_withAmy_whiteTop from "../../Images/AmyApartment/AmyLivingRoom_withAmy_whiteTop.png";
import SandyAndAmyInAmyApartment_KitchenImageTopAndWhiteTop from "../../Images/AmyApartment/SandyAndAmyInAmyApartment_KitchenImageTopAndWhiteTop.png";
import ButtonBurstingFromShirtNippyBleakAtlanticridleyturtlemobileCROPPEDONLYTOP from "../../Images/AmyApartment/Scenes/ButtonBurstingFromShirt-NippyBleakAtlanticridleyturtle-mobile-CROPPEDONLYTOP.mp4";
import TwoLesbosSuckThirdLesboMilk_CUTSHORT from "../../Images/AmyApartment/Scenes/TwoLesbosSuckThirdLesboMilk_CUTSHORT.mp4";

const AmyApartment = (props) => {
  if (props.flags.includes("LACBRAQGoToAmyApartment")) {
    let UnbuttonShirt = () => {
      props.onSpliceFlag("LACBRAQGoToAmyApartment");
      props.onPushFlag("LACBRAQSandyComesIn");
      props.onChangeRelationship("Amy", 3);
      props.onAddMinutes(10);
    };
    let RefuseToUnbuttonShirt = () => {
      props.onSpliceFlag("LACBRAQGoToAmyApartment");
      props.onPushFlag("LACBRAQRefuseUnbuttonedShirtOnAmysCommand");
      props.onChangeRelationship("Amy", -3);
      props.onAddMinutes(10);
    };

    return (
      <>
        <Col1>
          <SetCol1 />
        </Col1>
        <Col2 BackImage={AmyLivingRoom_withAmy_whiteTop}></Col2>

        <Col3>
          <p>
            *Sigh* "{props.name}. Magic made you change. Somehow Sandy lost that
            bracelet and you took it." Amy opens her apartment and you both go
            in.
          </p>
          <p>
            "I'll make this quick. Listen carefully:
            <ul>
              <li>
                Number 1. Magic exists. And now that you interacted with it, it
                will never leave you alone.
              </li>
              <li>
                Number 2. If you are not careful, you will die. Or worse. And
                trust me, there are plenty of things worse than death.
              </li>
              <li>
                Number 3. This building is protected by strong magic, you should
                be safe if you stay inside. But, you can't just live your life
                in your room. That would be boring.
              </li>
              <li>
                Number 4. Unbutton your shirt. I need to suck all the milk from
                your breasts or you'll start growing again."
              </li>
            </ul>
          </p>

          <Link to={"/AmyApartment"} style={{ textDecoration: "none" }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={UnbuttonShirt}
            >
              Unbutton your shirt.
            </button>
          </Link>
          <Link to={"/AmyApartment"} style={{ textDecoration: "none" }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={RefuseToUnbuttonShirt}
            >
              Refuse to unbutton your shirt.
            </button>
          </Link>
        </Col3>
      </>
    );
  } else if (props.flags.includes("LACBRAQRefuseUnbuttonedShirtOnAmysCommand")) {

    let SandyComesIntoTheApartment = () => {
      props.onSpliceFlag("LACBRAQRefuseUnbuttonedShirtOnAmysCommand");
      props.onPushFlag("LACBRAQSandyComesIn");
      props.onChangeRelationship("Amy", -3);
      props.onAddMinutes(10);
    };

    return (
      <>
        <Col1>
          <SetCol1 />
        </Col1>
        <Col2 BackImage={ButtonBurstingFromShirtNippyBleakAtlanticridleyturtlemobileCROPPEDONLYTOP}></Col2>

        <Col3>
          <p> "{props.name} I do not have the time for games." Amy is losing her patience. You feel how your body moves by itself and starts exposing your breasts.</p>
          <p>"You are in my property. And you know no magic. You will do what I command" Explains Amy.</p>

          <Link to={"/AmyApartment"} style={{ textDecoration: "none" }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={SandyComesIntoTheApartment}
            >
              You hear some noise outside.
            </button>
          </Link>
        </Col3>
      </>
    );
  } else if (props.flags.includes("LACBRAQSandyComesIn")) {
    let AmyAndSandyDrainYou = () => {
        props.onSpliceFlag("LACBRAQSandyComesIn");
        props.onPushFlag("LACBRAQAmyAndSandyStartToDrainYou");
        props.onChangeRelationship("Sandy", 2);
        props.onAddMinutes(10);
      };
  
      return (
        <>
          <Col1>
            <SetCol1 />
          </Col1>
          <Col2 BackImage={ButtonBurstingFromShirtNippyBleakAtlanticridleyturtlemobileCROPPEDONLYTOP}></Col2>
  
          <Col3>
            <p>You hear a knock on the door. "Come in Sandy" Says Amy. And you see Sandy coming in. </p>
            <p>You can't even see Sandys reaction. Amy grabs your face and looks you in the eyes. "Don't enjoy this." She says.</p>
            <p>"Sandy he is YOUR responsibility after this. You'll teach him about magic. If you don't he'll probably die" Sandy nods. You see her face. She is excited, her eyes fixed on your chest. </p>
            <p>You feel a massive erection comming in. And the same feeling from the previous night starts building up on your chest.</p>
            <p>"Hurry up Sandy!" Amy yells.</p>
  
            <Link to={"/AmyApartment"} style={{ textDecoration: "none" }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={AmyAndSandyDrainYou}
              >
                You chest swells.
              </button>
            </Link>
          </Col3>
        </>
      );

  } else if(props.flags.includes("LACBRAQAmyAndSandyStartToDrainYou")){
    let YouHaveBeenDrained = () => {
        props.onSpliceFlag("LACBRAQAmyAndSandyStartToDrainYou");
        props.onPushFlag("LACBRAQAmyAndSandyDrainedYouNowYouLeave");
        props.onAddMinutes(10);
      };
  
      return (
        <>
          <Col1>
            <SetCol1 />
          </Col1>
          <Col2 BackImage={TwoLesbosSuckThirdLesboMilk_CUTSHORT}></Col2>
  
          <Col3>
          <p>Amy places her hand on your chest. Both girls start sucking on your breasts. Kneading your milky mounds. You can feel the pressure building up. And the feeling of their lips makes you shiver. An orgasmic wave flows throug you. And your nipples slowly expand to make way for the flow that's about to discharge."</p>
            <p>You close your eyes and feel whats happening to you. You shake, you are dizzy and can't sand straight. Your senses overload. You are in orgasmic blizz.</p>
  
            <Link to={"/AmyApartment"} style={{ textDecoration: "none" }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={YouHaveBeenDrained}
              >
                You are floating in pleasure.
              </button>
            </Link>
          </Col3>
        </>
      );
  } else if(props.flags.includes("LACBRAQAmyAndSandyDrainedYouNowYouLeave")){
    let GoHomeAfterAmySendsYouHome = () => {
        props.onSpliceFlag("LACBRAQAmyAndSandyDrainedYouNowYouLeave");
        props.onPushFlag("SandyTeachesMagicQuestInHerApartmentPart_1");
        props.onAddMinutes(10);
        props.onAddItem("LacBracelet",-1);
        props.onSpliceFlag("WearingLacBracelet");
      };
  
      return (
        <>
          <Col1>
            <SetCol1 />
          </Col1>
          <Col2 BackImage={SandyAndAmyInAmyApartment_KitchenImageTopAndWhiteTop}></Col2>
  
          <Col3>
          <p>"I guess that's it" Amy says. "You did enjoy it... I told you not to." Sandy also has the largest grin on her face. She's giggling.</p>
          <p>"I hope you also enjoy taking care of this guy from now on." Amy remarks. A small grin showing in her face.</p>
          <p>And you all burst laughing. The warmth you feel floods your senses. You are happy.</p>
          <p>You look at your chest. It's back to normal. Sandy looks at you. And the laughter calms down.</p>
            <p>"{props.name}, come at my apartment soon. I'll teach you the basics" Says Sandy. She then strolls out of the aparment.</p>

            <p>"You should leave too. " Amy says.</p>
  
            <Link to={"/Home"} style={{ textDecoration: "none" }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={GoHomeAfterAmySendsYouHome}
              >
                Go home
              </button>
            </Link>
          </Col3>
        </>
      );
  }
  
  
  else {
    return (
      <>
        <Col1>
          <SetCol1 />
        </Col1>
        <Col2 BackImage={AmyLivingRoom}></Col2>

        <Col3>
          <p>You are in Amys apartment</p>

          <Link to={"/Home"} style={{ textDecoration: "none" }}>
            <button type="button" className="btn btn-primary">
              Go home
            </button>
          </Link>

          <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
            <button type="button" className="btn btn-primary">
              Game map
            </button>
          </Link>
        </Col3>
      </>
    );
  }
};

export default AmyApartment;
