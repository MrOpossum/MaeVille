import React from "react";
import * as actionTypes from "../redux/actions";
import {connect} from "react-redux";

function Upload(props) {
  //const [files, setFiles] = useState("");

  const handleChange = e => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
        var myCharacterFromJSON = JSON.parse(e.target.result);
        //Setting everything.
        props.onSetState(myCharacterFromJSON);

    };
  };
  return (
    <>
      <input type="file" onChange={handleChange} />
    </>
  );
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
      onSetDate: (_dateToSet) => dispatch({type:actionTypes.SET_DATE, dateToSet: _dateToSet}),
      onSetState: (_stateToSet) => dispatch({type:actionTypes.SET_STATE, stateToSet: _stateToSet}),
      onSetLink: (_linkToSet) => dispatch({type:actionTypes.SET_CURRENT_LINK, linkToSet: _linkToSet})
    
  
      
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Upload);
  
  