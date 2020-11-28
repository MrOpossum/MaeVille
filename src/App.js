import './App.css';
import {connect} from "react-redux";
import * as actionTypes from "./redux/actions";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

//Events
import Beginning from "./events/Beginning";
import _0_Start from "./events/_0_Start";
import _1_Ignore from "./events/_1_Ignore";
import _1_Inspect from "./events/_1_Inspect";
import Apartment from "./Places/Apartment";
import Farm from "./Places/Farm";
import GameMap from "./Places/GameMap";
import { act } from 'react-dom/test-utils';

const App = ( props ) => {

  
  let BeginningSwitch = () => {
    return (
      <Beginning
      flags = {props.flags}
      date = {props.date}
      onSetLink = {props.onSetLink}
      currentLink = {props.currentLink}
      ></Beginning>
    );
  };

  let _0_StartSwitch= () => {
    return(
      <_0_Start
            changeName = {props.onNameChange}
            name = {props.myName}
      ></_0_Start>
    )
  }


  let _1_InspectSwitch= () => {
    return(
      <_1_Inspect
            onSetHour = {props.onSetHour}
            onPushFlag = {props.onPushFlag}
      ></_1_Inspect>
    )
  }

  let _1_IgnoreSwitch= () => {
    return(
      <_1_Ignore
      onSetHour = {props.onSetHour}
      onPushFlag = {props.onPushFlag}
      ></_1_Ignore>
    )
  }

  let ApartmentSwitch = () => {
    return(
      <Apartment
      money = {props.money}
      energy = {props.energy}
      date = {props.date}
      onAddMinutes = {props.onAddMinutes}
      onSpliceFlag = {props.onSpliceFlag}
      onPushFlag = {props.onPushFlag}
      onSetHour = {props.onSetHour}
      flags = {props.flags}
      onChangeRelationship = {props.onChangeRelationship}
      onAddEnergy = {props.onAddEnergy}
      onSetEnergy = {props.onSetEnergy}
      onAddItem = {props.onAddItem}
      items = {props.items}
      name = {props.myName}
      items = {props.items}
      onSetItem = {props.onSetItem}
      onAddMoney = {props.onAddMoney}
      Amy = {props.Amy}
      mind = {props.mind}
      Sandy = {props.Sandy}
      physical = {props.physical}
      ></Apartment>
    )
  }
  let GameMapSwitch = () => {
    return (
      <>
      <GameMap
      money = {props.money}
      energy = {props.energy}
      date = {props.date}
      onAddMinutes = {props.onAddMinutes}
      onSpliceFlag = {props.onSpliceFlag}
      onPushFlag = {props.onPushFlag}
      onSetHour = {props.onSetHour}
      ></GameMap>
      </>
    );
  };    

  let FarmSwitch = () => {
    return(
      <Farm
      money = {props.money}
      energy = {props.energy}
      date = {props.date}
      onAddMinutes = {props.onAddMinutes}
      onSpliceFlag = {props.onSpliceFlag}
      onPushFlag = {props.onPushFlag}
      onSetHour = {props.onSetHour}
      flags = {props.flags}
      onChangeRelationship = {props.onChangeRelationship}
      name = {props.myName}
      onAddItem = {props.onAddItem}
      onAddSkills = {props.onAddSkills}
      skills = {props.skills}
      onAddEnergy = {props.onAddEnergy}
      onSetEnergy = {props.onSetEnergy}
      onAddAttractiveness = {props.onAddAttractiveness}
      attractiveness = {props.attractiveness}
      ></Farm>
    )
  }  

  
  return( 
    <Router>
      <div>
      <Switch>
          <Route exact path="/Beginning" component={BeginningSwitch} />
          <Route exact path="/_0_Start" component={_0_StartSwitch} />
          <Route exact path="/_1_Inspect" component={_1_InspectSwitch} />
          <Route exact path="/_1_Ignore" component={_1_IgnoreSwitch} />


          <Route exact path="/Apartment" component={ApartmentSwitch} />
          {/*I messed the routing so hard. that everything is mixed up. I think I should only route from one place?
          Thing is, that I am indeed writing the function separate. Get good with this routing stuff.
          */}
          <Route exact path="/GameMap" component={GameMapSwitch} />
          
          <Route exact path="/Farm" component={FarmSwitch} />
          <Route exact path="/TheBarn" component={FarmSwitch} />
          <Route exact path="/TheFarmStore" component={FarmSwitch} />
          <Route exact path="/MilkCowsAtFarm" component={FarmSwitch} />
              
          
          <Redirect to="/Beginning" />
        </Switch>
      </div>
    </Router>
  );

} //End of App.

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
    onAddAttractiveness: (_attractivenessToAdd) => dispatch({type:actionTypes.ADD_ATTRACTIVENESS, attractivenessToAdd : _attractivenessToAdd}),
    onSetItem: (_itemToSet, _newItemAmmount) => dispatch({type: actionTypes.SET_ITEMS, itemToSet: _itemToSet, newItemAmmount: _newItemAmmount}),
    onAddMoney: (_moneyToAdd) => dispatch({type:actionTypes.ADD_MONEY, moneyToAdd: _moneyToAdd}),

    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

