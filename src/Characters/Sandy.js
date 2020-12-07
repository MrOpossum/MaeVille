import { Link } from "react-router-dom";
import React from "react";


import Col2 from "../components/col2";
import Col3 from "../components/col3";
import * as actionTypes from "../redux/actions";
import {connect} from "react-redux";

const Sandy = (props) => {

    if(props.flags.includes("asdasdaszxclkzcjl")){

    }
    
    else {

        let GoToGameMap = () =>{
            props.onAddMinutes(10)
        }
        return(
            <>
            <Col2 BackImage = {props.backImageChar}>
            <img alt = {"Not found"} src = {props.ImageChar} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
                   
                
                {props.children}
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GoToGameMap}>Game map</button>
                </Link>  
                    
            </Col3>
            </>
  
      )

    }

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
      Amy: state.fullState.Amy,
      Sandy: state.fullState.Sandy,
      researchTime: state.fullState.researchTime,
      lab: state.fullState.lab,
    };
  }
  
  const mapDispatchToProps = dispatch =>{
    return{
      onNameChange: (nameChange) => dispatch({type: actionTypes.CHANGE_NAME, newName:nameChange}),
      onAddMinutes: (minutes) => dispatch({type: actionTypes.ADD_MINUTES, minutesToAdd:minutes}),
      onAddLust: (lust) => dispatch({type: actionTypes.ADD_LUST, lustToAdd:lust}),
      onSetLust: () => dispatch({type: actionTypes.SET_LUST}),
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
      onAddAttractiveness: (_attractivenessToAdd) => dispatch({type:actionTypes.ADD_ATTRACTIVENESS, attractivenessToAdd : _attractivenessToAdd}),
      onSetItem: (_itemToSet, _newItemAmmount) => dispatch({type: actionTypes.SET_ITEMS, itemToSet: _itemToSet, newItemAmmount: _newItemAmmount}),
      onAddMoney: (_moneyToAdd) => dispatch({type:actionTypes.ADD_MONEY, moneyToAdd: _moneyToAdd}),
      onAddSkills: (_skillToAdd, _skillAmmountToAdd) => dispatch({type:actionTypes.ADD_SKILLS, skillToAdd: _skillToAdd, skillAmmountToAdd: _skillAmmountToAdd}),
      onSetResearchTime: (_researchType, _researchTimeToSet) => dispatch({type:actionTypes.SET_RESEARCH_TIMES, researchType: _researchType, researchTimeToSet: _researchTimeToSet}),
      onSetLab: (_labItem, _setLabItem) => dispatch({type: actionTypes.SET_LAB, labItem: _labItem, setLabItem: _setLabItem})
  
  
      
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Sandy);
  
  
