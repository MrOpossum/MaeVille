import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from "../../redux/actions";

import Col1 from "../../components/col1";
import Col2 from "../../components/col2";
import Col3 from "../../components/col3";
import SetCol1 from "../../components/SetCol1";

//Images
import Bedroom from "../../Images/Bedroom/Apartment.jpg";
import KennedyCMainCharacterBELacBraceletAndMilkNoGif from "../../Images/Apartment/Kenedy_cresler_for_BE_male.jpg";
import KennedyCMainCharacterBELacBraceletAndMilk from "../../Images/Apartment/Kenedy_cresler_for_BE_male_milkBracelet.gif";

import MainCharBELacBraceletAndMilkEnd from "../../Images/Scenes/Lactation/720P_brunette_lactating_2.mp4";

let gateSandyOrAmyWillFindYou = 0;
const SleepAtHome = (props) => {

  
  const addMinutesFunc = () => {
    props.onAddMinutes(10);
  };

  let NoMoreEnergyClick = () => {
    props.onAddMinutes(480);
    props.onSetEnergy(75);
    if (props.flags.includes("NO_MORE_ENERGY")) {
      props.onSpliceFlag("NO_MORE_ENERGY");
    }
  };

  if (props.flags.includes("NO_MORE_ENERGY")) {
    return (
      <>
        <Col1>
          <SetCol1
            money={props.money}
            energy={props.energy}
            date={props.date}
          />
        </Col1>
        <Col2 BackImage={Bedroom}></Col2>

        <Col3>
          <p>
            You had no more energy. So you ran home and fell asleep. You will
            not sleep well.
          </p>
          <Link to={"/Home"} style={{ textDecoration: "none" }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={NoMoreEnergyClick}
            >
              Fall asleep
            </button>
          </Link>
        </Col3>
      </>
    );
  } else if (props.flags.includes("DrankMilkwithLacBracelet")) {
    props.onSpliceFlag("DrankMilkwithLacBracelet");

    let DrankMilkWithLacBraPart2 = () => {
      props.onPushFlag("DrankMilkwithLacBracelet2");
      props.onAddChest(3);
      props.onAddHeight(-10);
      props.onAddBelly(-1);
    };
    return (
      <>
        <Col1>
          <SetCol1
            money={props.money}
            energy={props.energy}
            date={props.date}
          />
        </Col1>
        <Col2
          BackImage={KennedyCMainCharacterBELacBraceletAndMilkNoGif}
          backSize={"contain"}
        ></Col2>

        <Col3>
          <p>
            You wake up in the middle of the night. Your chest and head are
            throbbing. You are having trouble breathing.
          </p>
          <p>
            You keep your eyes closed. Your body feels different. You slowly
            move your hand to your chest... *A sharp wave of pain and pleasure
            curses through your body". Your nipples are erect and your breasts
            swollen. The pressure in your chest is getting stronger
          </p>
          <p>
            You move your right hand to your face, your lips are swollen, you
            have long hair... You don't know how to feel about this.{" "}
          </p>

          <Link to={"/SleepAtHome"} style={{ textDecoration: "none" }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={DrankMilkWithLacBraPart2}
            >
              I feel excited
            </button>
          </Link>
          <Link to={"/SleepAtHome"} style={{ textDecoration: "none" }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={DrankMilkWithLacBraPart2}
            >
              I am scared
            </button>
          </Link>
          <Link to={"/SleepAtHome"} style={{ textDecoration: "none" }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={DrankMilkWithLacBraPart2}
            >
              I.. I.. Don't know
            </button>
          </Link>
        </Col3>
      </>
    );
  } else if (props.flags.includes("DrankMilkwithLacBracelet2")) {
    props.onSpliceFlag("DrankMilkwithLacBracelet2");

    let DrankMilkwithLacBraceletPart3Click = () => {
      if (!props.flags.includes("DrankMilkwithLacBracelet3")) {
        props.onPushFlag("DrankMilkwithLacBracelet3");
      }
      props.onAddMinutes(10);
    };

    return (
      <>
        <Col1>
          <SetCol1 />
        </Col1>
        <Col2
          BackImage={KennedyCMainCharacterBELacBraceletAndMilk}
          backSize={"contain"}
        ></Col2>

        <Col3>
          <p>
            The pressure is getting stronger, and stronger, your chest is
            incredibly sensitive. You can feel something filling your breasts,
            your bust inching further away every second.
          </p>

          <Link to={"/SleepAtHome"} style={{ textDecoration: "none" }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={DrankMilkwithLacBraceletPart3Click}
            >
              The pressure, it's unbearable
            </button>
          </Link>
        </Col3>
      </>
    );
  } else if (props.flags.includes("DrankMilkwithLacBracelet3")) {
    

    let DrankMilkWithLacBraPart3PassedOutClick = () => {
      
      if(props.flags.includes("LACBRAQRefusedToGiveSandyBracelet")){
        props.onPushFlag(
            "LACBRAQTransformedAndWearingLacBraceletYouRefusedToGiveSandyBracelet"
          );
      } else{
        props.onPushFlag(
            "LACBRAQTransformedAndWearingLacBraceletNoOneKnowsYouHaveBracelet"
          );
      }
      
      props.onSpliceFlag("DrankMilkwithLacBracelet3");
      NoMoreEnergyClick();
    };

    return (
      <>
        <Col1>
          <SetCol1 />
        </Col1>
        <Col2 BackImage={" "} rowHeight={" "}>
          <video autoPlay loop style ={{width: "100%", height: props.col2Height, objectFit: "cover"}} controls>
            <source src={MainCharBELacBraceletAndMilkEnd} type="video/mp4" />
          </video>
        </Col2>

        <Col3>
          <p>
            You finally feel it. Relief. Your breasts start spraying milk in
            wave after wave of pleasure. Your erect nipples throbbing. You
            notice your own cock pulsating, you are shaking, until the strongest
            orgasm you have ever felt crashes unto you. Your whole body
            trembling...
          </p>

          <Link to={"/SleepAtHome"} style={{ textDecoration: "none" }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={DrankMilkWithLacBraPart3PassedOutClick}
            >
              Pass out
            </button>
          </Link>
        </Col3>
      </>
    );
  } else if (props.flags.includes("WearingLacBracelet") && props.items["LacBracelet"] > 0 && !props.flags.includes("LACBRAQSandyWillFindYouAfterSleepingWithLacBraDidNotDrinkMilk" && !props.flags.includes("LACBRAQAmyWillFindYouAfterSleepingWithLacBraDidNotDrinkMilk")) && gateSandyOrAmyWillFindYou === 0) {
    
    let AmyOrSandyWillFindYouAfterSleepingWithLacBra = () => {
        if(Math.random() < .51){
            props.onPushFlag(
                "LACBRAQSandyWillFindYouAfterSleepingWithLacBraDidNotDrinkMilk"
              );
        } else{
            props.onPushFlag(
                "LACBRAQAmyWillFindYouAfterSleepingWithLacBraDidNotDrinkMilk"
              );
        }
        props.onAddMinutes(10);    
        gateSandyOrAmyWillFindYou = 1;
    };

    
    return (
        <>
          <Col1>
            <SetCol1 />
          </Col1>
          <Col2 BackImage={Bedroom}></Col2>
  
          <Col3>
            <p>What a nice night</p>
  
            <Link to={"/Home"} style={{ textDecoration: "none" }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={AmyOrSandyWillFindYouAfterSleepingWithLacBra}
              >
                Start day
              </button>
            </Link>
          </Col3>
        </>
      );
  } else if(props.flags.includes("TakeButNoWearBracelet")){
    let LACBRAQSandyWillFindYouTakeNoWearBracelet = () =>{
      props.onAddMinutes(10);
      props.onPushFlag("LACBRAQSandyWillFindYouTakeNoWearBracelet");
      props.onSpliceFlag("TakeButNoWearBracelet");
    }


    return(
        <>
        <Col1>
            <SetCol1
            />
        </Col1>
        <Col2 BackImage={Bedroom}></Col2>

        <Col3>
          <p>What a nice night</p>

          <Link to={"/Home"} style={{ textDecoration: "none" }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={LACBRAQSandyWillFindYouTakeNoWearBracelet}
            >
              Start day
            </button>
          </Link>
        </Col3>
        </>
    )
  }
  
  else {
    return (
      <>
        <Col1>
          <SetCol1 />
        </Col1>
        <Col2 BackImage={Bedroom}></Col2>

        <Col3>
          <p>What a nice night</p>

          <Link to={"/Home"} style={{ textDecoration: "none" }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={addMinutesFunc}
            >
              Start day
            </button>
          </Link>
        </Col3>
      </>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    myName: state.fullState.name,
    date: state.fullState.date,
    lust: state.fullState.lust,
    skills: state.fullState.skills,
    physical: state.fullState.physical,
    mind: state.fullState.mind,
    attractiveness: state.fullState.attractiveness,
    pronoun: state.fullState.pronoun,
    energy: state.fullState.energy,
    chest: state.fullState.chest,
    belly: state.fullState.belly,
    height: state.fullState.height,
    status: state.fullState.status,
    environmentStatus: state.fullState.environmentStatus,
    items: state.fullState.items,
    money: state.fullState.money,
    flags: state.fullState.flags,
    relations: state.fullState.relations,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onNameChange: (nameChange) =>
      dispatch({ type: actionTypes.CHANGE_NAME, newName: nameChange }),
    onAddMinutes: (minutes) =>
      dispatch({ type: actionTypes.ADD_MINUTES, minutesToAdd: minutes }),
    onAddLust: (lust) =>
      dispatch({ type: actionTypes.ADD_LUST, lustToAdd: lust }),
    onSetLust: () => dispatch({ type: actionTypes.SET_LUST }),
    onAddSkills: (_skillToAdd, _skillAmmountToAdd) =>
      dispatch({
        type: actionTypes.ADD_SKILLS,
        skillToAdd: _skillToAdd,
        skillAmmountToAdd: _skillAmmountToAdd,
      }),
    onPushFlag: (_flagToPush) =>
      dispatch({ type: actionTypes.PUSH_FLAG, flagToAdd: _flagToPush }),
    onChangeRelationship: (_relationPerson, _relationAmmountToAdd) =>
      dispatch({
        type: actionTypes.CHANGE_RELATIONSHIP,
        relationPerson: _relationPerson,
        relationAmmountToAdd: _relationAmmountToAdd,
      }),
    onPushStatus: (_statusToPush) =>
      dispatch({ type: actionTypes.PUSH_STATUS, statusToAdd: _statusToPush }),
    onSpliceStatus: (_statusToSplice) =>
      dispatch({
        type: actionTypes.SPLICE_STATUS,
        statusToRemove: _statusToSplice,
      }),
    onSpliceFlag: (_flagToRemove) =>
      dispatch({ type: actionTypes.SPLICE_FLAG, flagToRemove: _flagToRemove }),
    onAddChest: (_chestToAdd) =>
      dispatch({ type: actionTypes.ADD_CHEST, chestToAdd: _chestToAdd }),
    onAddHeight: (_heightToAdd) =>
      dispatch({ type: actionTypes.ADD_HEIGHT, heightToAdd: _heightToAdd }),
    onAddBelly: (_bellyToAdd) =>
      dispatch({ type: actionTypes.ADD_BELLY, bellyToAdd: _bellyToAdd }),
    onAddItem: (_itemToAdd, _itemAmmountToAdd) =>
      dispatch({
        type: actionTypes.ADD_ITEMS,
        itemToAdd: _itemToAdd,
        itemAmmountToAdd: _itemAmmountToAdd,
      }),
    onSetHour: (_hourToSet) =>
      dispatch({ type: actionTypes.SET_HOUR, hourToSet: _hourToSet }),
    onAddEnergy: (_EnergyToAdd) =>
      dispatch({ type: actionTypes.ADD_ENERGY, energyToAdd: _EnergyToAdd }),
    onSetEnergy: (_EnergyToSet) =>
      dispatch({ type: actionTypes.SET_ENERGY, energyToSet: _EnergyToSet }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SleepAtHome);
