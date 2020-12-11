import React from 'react';
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

import * as actionTypes from "../redux/actions";

var fileDownload = require('js-file-download');

var currentFlags = [];

const SetCol1 = (props) => {

    const [randomNumber, setRandomNumber] = React.useState(Math.random())


    //Checking energy
    if(props.energy < 0 && !props.flags.includes("NO_MORE_ENERGY")){
      if(!props.flags.includes("NO_MORE_ENERGY")){
        props.onPushFlag("NO_MORE_ENERGY");  
      } 
    }

      let quickSave = () =>{
        let newCurrentLink = window.location.pathname;
        props.onSetLink(newCurrentLink);
        let currentFlagObject = {...props.currentFullState.flags};
        let currentFlags = Object.values(currentFlagObject);
        let myFullState = {
          fullState: {
            ...props.currentFullState,
            stateHistory: []
          }
        }  
        myFullState.fullState.flags = currentFlags;
        props.onPushHistory(myFullState);

        console.log(props.stateHistory);
      }

      let quickLoad = ()=>{
        console.log("loaded state: ", props.stateHistory);
        props.onSetState(props.stateHistory[props.stateHistory.length - 1]);
        setRandomNumber(Math.random());
      }
        
      


      let downloadCharacterdata = () =>{
        //Change link here
        let newCurrentLink = window.location.pathname;
        props.onSetLink(newCurrentLink);
        console.log(newCurrentLink);
        let myFullState = {
          fullState: props.currentFullState
        }
        var myCharacterJSON = JSON.stringify(myFullState);
        var myCharacterFromJSON = JSON.parse(myCharacterJSON);
        console.log(myCharacterFromJSON);
        fileDownload(myCharacterJSON, 'myCharacter.json');
      }

      return(
        <>
        <p> Energy: {props.energy.toFixed(1)}  &nbsp;   {props.date.toString().slice(0,21)} &nbsp;  Cash: ${props.money} &nbsp; 
          <Button color="secondary" style = {{marginLeft:"-10px", width:"100px"}} onClick = {downloadCharacterdata}>Save</Button>&nbsp; 
          <Button color="primary" style = {{marginLeft:"-10px", width:"130px"}} onClick = {quickSave}>quick save</Button>&nbsp;
          
          <Link to={props.currentLink} style={{ textDecoration: "none" }}>
            <Button color="secondary" style = {{marginLeft:"-10px", width:"130px"}} onClick = {quickLoad} disabled = {props.stateHistory.length === 0} >Quick load</Button>
          </Link>
        
        </p>
        </>
      )

    
  }

const mapStateToProps = state =>{
  return{
    myName: state.fullState.name,
    date: state.fullState.date,
    lust: state.fullState.lust,
    skills: state.fullState.skills,
    physical: state.fullState.physical,
    mind: state.fullState.mind,
    attractiveness: state.fullState.attractiveness,
    pronoun : state.fullState.pronoun,
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
    currentLink: state.fullState.currentLink,
    currentFullState : state.fullState,
    stateHistory : state.fullState.stateHistory
  };
}

const mapDispatchToProps = dispatch =>{
  return{
    onNameChange: (nameChange) => dispatch({type: actionTypes.CHANGE_NAME, newName:nameChange}),
    onAddMinutes: (minutes) => dispatch({type: actionTypes.ADD_MINUTES, minutesToAdd:minutes}),
    onAddLust: (lust) => dispatch({type: actionTypes.ADD_LUST, lustToAdd:lust}),
    onSetLust: () => dispatch({type: actionTypes.SET_LUST}),
    onAddSkills: (_skillToAdd, _skillAmmountToAdd) => dispatch({type: actionTypes.ADD_SKILLS, skillToAdd: _skillToAdd, skillAmmountToAdd: _skillAmmountToAdd}),
    onPushFlag: (_flagToPush) => dispatch({type: actionTypes.PUSH_FLAG,flagToAdd: _flagToPush }),
    onChangeRelationship: (_relationPerson, _relationAmmountToAdd) => dispatch ({type: actionTypes.CHANGE_RELATIONSHIP, relationPerson: _relationPerson, relationAmmountToAdd: _relationAmmountToAdd}),
    onPushStatus : (_statusToPush) => dispatch({type: actionTypes.PUSH_STATUS, statusToAdd: _statusToPush}),
    onSpliceStatus : (_statusToSplice) => dispatch({type: actionTypes.SPLICE_STATUS, statusToRemove: _statusToSplice}),
    onSpliceFlag: (_flagToRemove) => dispatch({type: actionTypes.SPLICE_FLAG, flagToRemove: _flagToRemove}),
    onAddChest: (_chestToAdd) => dispatch({type: actionTypes.ADD_CHEST,
    chestToAdd: _chestToAdd}),
    onAddHeight: (_heightToAdd) => dispatch({type: actionTypes.ADD_HEIGHT, heightToAdd:_heightToAdd}),
    onAddBelly: (_bellyToAdd) => dispatch({type: actionTypes.ADD_BELLY, bellyToAdd:_bellyToAdd}),
    onAddItem: (_itemToAdd, _itemAmmountToAdd) => dispatch({type: actionTypes.ADD_ITEMS, itemToAdd: _itemToAdd, itemAmmountToAdd: _itemAmmountToAdd}),
    onSetHour: (_hourToSet) => dispatch({type:actionTypes.SET_HOUR,hourToSet: _hourToSet}),
    onAddEnergy: (_EnergyToAdd) => dispatch({type:actionTypes.ADD_ENERGY, energyToAdd: _EnergyToAdd}),
    onSetEnergy: (_EnergyToSet) => dispatch({type:actionTypes.SET_ENERGY, energyToSet: _EnergyToSet}),
    onSetLink: (_linkToSet) => dispatch({type:actionTypes.SET_CURRENT_LINK, linkToSet: _linkToSet}),
    onPushHistory: (_historyToPush) => dispatch({type:actionTypes.PUSH_STATE_HISTORY, historyToPush: _historyToPush}),
    onSetState: (_stateToSet) => dispatch({type:actionTypes.SET_STATE, stateToSet: _stateToSet}),


    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SetCol1);

