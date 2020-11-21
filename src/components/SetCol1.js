import React from 'react';
import {connect} from "react-redux";
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import currentState from '../data/mainCharacter';

import * as actionTypes from "../redux/actions";

var fileDownload = require('js-file-download');

const SetCol1 = (props) => {

    const [open, setOpen] = React.useState(true);
    //Checking energy
    if(props.energy < 0 && !props.flags.includes("NO_MORE_ENERGY")){
      console.log("noEnergy");
      console.log(!props.flags.includes("NO_MORE_ENERGY"));
      if(!props.flags.includes("NO_MORE_ENERGY")){
        props.onPushFlag("NO_MORE_ENERGY");  
      } 

      

      const handleClose = () => {
        setOpen(false);
      };
      return(
        <Link to={"/SleepAtHome"} style={{ textDecoration: "none" }}>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           You are out of energy
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        
          <button type="button" className="btn btn-primary" onClick = {handleClose}>Go home to sleep</button>
          
        </DialogActions>
      </Dialog>
      </Link>
      ) 
    } 
    
    else{

      let downloadCharacterdata = () =>{
        //Change link here
        let newCurrentLink = window.location.pathname;
        props.onSetLink(newCurrentLink);
        console.log(newCurrentLink);
        var myCharacterJSON = JSON.stringify(currentState);
        var myCharacterFromJSON = JSON.parse(myCharacterJSON);
        console.log(myCharacterFromJSON)
        fileDownload(myCharacterJSON, 'myCharacter.json');
      }
      return(
        <>
        <p> Energy: {props.energy.toFixed(1)}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   {props.date.toString().slice(0,21)} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Cash: ${props.money}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
          <Button color="secondary" style = {{marginLeft:"-10px"}} onClick = {downloadCharacterdata}>Save</Button>
        
        </p>
        </>
      )
    }

    
  }

const mapStateToProps = state =>{
  return{
    myName: state.name,
    date: state.date,
    lust: state.lust,
    skills: state.skills,
    physical: state.physical,
    mind: state.mind,
    attractiveness: state.attractiveness,
    pronoun : state.pronoun,
    energy: state.energy,
    chest: state.chest,
    belly: state.belly,
    height: state.height,
    status: state.status,
    environmentStatus: state.environmentStatus,
    items: state.items,
    money: state.money,
    flags: state.flags,
    relations: state.relations,
    currentLink: state.currentLink
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
    onSetLink: (_linkToSet) => dispatch({type:actionTypes.SET_CURRENT_LINK, linkToSet: _linkToSet})


    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SetCol1);

