import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

import * as actionTypes from "../redux/actions";

import TextField from '@material-ui/core/TextField';

var fileDownload = require('js-file-download');

var sessionHistory = []


var proxyUrl;
var url;
  
var data;
const SetCol1 = (props) => {
    const [randomNumber, setRandomNumber] = useState(Math.random())

    //Checking energy
    if(props.energy < 0 && !props.flags.includes("NO_MORE_ENERGY")){
      if(!props.flags.includes("NO_MORE_ENERGY")){
        props.onPushFlag("NO_MORE_ENERGY");  
      } 
    }
        
    let saveState = () =>{
      let newCurrentLink = window.location.pathname;
      let currentFlagObject = {...props.currentFullState.flags};
      let currentFlags = Object.values(currentFlagObject);
        
      let currentFullState = {
        ...props.state,
        fullState: {
          ...props.currentFullState,
          currentLink: newCurrentLink,
          stateHistory: [],
          flags: currentFlags
        }
      }
      sessionHistory.push(currentFullState);
      if(sessionHistory.length > 5){
        sessionHistory.shift();
      }

      //! Remember that if you change to node server this will probably have to go as well.
      //Update to database 
      if(Math.random() < .3){
        if(!(props.mongoUser == "")){
          let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
          let url = 'https://webhooks.mongodb-realm.com/api/client/v2.0/app/maevilleusersstate-kwmuc/service/userPatch/incoming_webhook/patchUser';
          // console.log("ENTER UPDATE");
          let data = {mongoUser:props.mongoUser,fullState:props.fullState}
          // console.log("Data to pass", JSON.stringify(data));
          fetch(proxyUrl + url, {
            method: 'PATCH', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
          }).then(res => res.json())
          .catch(error => console.error('Updating error:', error))
          .then(response => console.log('Updating success', response));
        }
      }
        
      
    }
    

    saveState();

    let back = () =>{
      props.onSetState(sessionHistory[sessionHistory.length - 2]);
      setRandomNumber();
    }


    let downloadCharacterdata = () =>{
      let myFullState = {
        mongoUser: props.mongoUser,
        fullState: props.currentFullState,
      }
      var myCharacterJSON = JSON.stringify(myFullState);
      var myCharacterFromJSON = JSON.parse(myCharacterJSON);
      console.log(myCharacterFromJSON);
      fileDownload(myCharacterJSON, 'myCharacter.json');

      let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      let url = 'https://webhooks.mongodb-realm.com/api/client/v2.0/app/maevilleusersstate-kwmuc/service/userPatch/incoming_webhook/patchUser';
      // console.log("ENTER UPDATE");
      let data = {mongoUser:props.mongoUser,fullState:props.fullState}
      // console.log("Data to pass", JSON.stringify(data));
      fetch(proxyUrl + url, {
        method: 'PATCH', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
      }).then(res => res.json())
      .catch(error => console.error('Updating error:', error))
      .then(response => {
        console.log('Updating success', response);
        if(!(response == "undefined") ){
          alert("Your data was saved in the cloud!");
        }
        
      });
    }

    if(sessionHistory.length > 1){
      var backLink = sessionHistory[sessionHistory.length - 2].fullState.currentLink;
    } else{
      var backLink = "/Home"
    }

      return(
        <>
        <p> Energy: {props.energy.toFixed(1)}  &nbsp;   {props.date.toString().slice(0,21)} &nbsp;  Cash: ${props.money} &nbsp; 
          <Button color="secondary" style = {{marginLeft:"-10px", width:"100px"}} onClick = {downloadCharacterdata}>Save</Button>&nbsp; 
          {/* <Button color="primary" style = {{marginLeft:"-10px", width:"130px"}} onClick = {quickSave}>quick save</Button>&nbsp; */}
          
          <Link to={backLink} style={{ textDecoration: "none" }}>
            <Button color="primary" style = {{marginLeft:"-10px", width:"130px"}} onClick = {back} disabled = {sessionHistory.length === 0} >Back</Button>
          </Link>          

          <p style={{display: ((props.mongoUser == "") ? "None" : "")}}>Logged in as {props.mongoUser}</p>
        
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
    stateHistory : state.fullState.stateHistory,
    Amy: state.fullState.Amy,
    Sandy: state.fullState.Sandy,
    researchTime: state.fullState.researchTime,
    lab: state.fullState.lab,
    charactersStats: state.fullState.charactersStats,
    penis : state.fullState.penis,
    mongoUser : state.mongoUser,
    fullState : state.fullState,
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
    onAddAttractiveness: (_attractivenessToAdd) => dispatch({type:actionTypes.ADD_ATTRACTIVENESS, attractivenessToAdd : _attractivenessToAdd}),
    onSetItem: (_itemToSet, _newItemAmmount) => dispatch({type: actionTypes.SET_ITEMS, itemToSet: _itemToSet, newItemAmmount: _newItemAmmount}),
    onAddMoney: (_moneyToAdd) => dispatch({type:actionTypes.ADD_MONEY, moneyToAdd: _moneyToAdd}),
    onAddSkills: (_skillToAdd, _skillAmmountToAdd) => dispatch({type:actionTypes.ADD_SKILLS, skillToAdd: _skillToAdd, skillAmmountToAdd: _skillAmmountToAdd}),
    onSetResearchTime: (_researchType, _researchTimeToSet) => dispatch({type:actionTypes.SET_RESEARCH_TIMES, researchType: _researchType, researchTimeToSet: _researchTimeToSet}),
    onSetLab: (_labItem, _setLabItem) => dispatch({type: actionTypes.SET_LAB, labItem: _labItem, setLabItem: _setLabItem}),
    onSetCharacterStats: (_character, _characterStatToChange, _NewStat) => dispatch({type: actionTypes.SET_CHARACTER_STATS, character: _character, characterStatToChange: _characterStatToChange, NewStat: _NewStat}),
    onSetGender: (_genderToSet) => dispatch({type: actionTypes.SET_GENDER, genderToSet: _genderToSet}),
    onSetPenis: (_penisToSet) => dispatch({type: actionTypes.SET_PENIS, penisToSet: _penisToSet}),
    onSetFullState: (_toSetFullstate, _valueToSetFullState) => dispatch({type: actionTypes.SET_ANYTHING_FULLSTATE, toSetFullstate: _toSetFullstate, valueToSetFullState: _valueToSetFullState}),
    onSetMongoUser: (_updatedMongoUser) => dispatch({type: actionTypes.SET_MONGO_USER, updatedMongoUser: _updatedMongoUser}),
    

    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SetCol1);

