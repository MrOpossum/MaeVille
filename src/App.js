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
import GameMap from "./Places/GameMap";

const App = ( props ) => {
  var standardButtonWidth = "300px";

  
  let BeginningSwitch = () => {
    return (
      <Beginning
      flags = {props.flags}
      onSetFullState = {props.onSetFullState}
      date = {props.date}
      onSetLink = {props.onSetLink}
      currentLink = {props.currentLink}
      onSetMongoUser = {props.onSetMongoUser}
      mongoUser = {props.mongoUser}
      onSetState = {props.onSetState}
      fullState = {props.fullState}
      ></Beginning>
    );
  };

  let _0_StartSwitch= () => {
    return(
      <_0_Start
            changeName = {props.onNameChange}
            name = {props.myName}
            onSpliceFlag = {props.onSpliceFlag}
            onPushFlag = {props.onPushFlag}
            onAddMoney = {props.onAddMoney}
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
      gender = {props.gender}
      onSetGender = {props.onSetGender}
      energy = {props.energy}
      date = {props.date}
      onAddMinutes = {props.onAddMinutes}
      onSpliceFlag = {props.onSpliceFlag}
      onPushFlag = {props.onPushFlag}
      onSetHour = {props.onSetHour}
      flags = {props.flags}
      onSetFullState = {props.onSetFullState}
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
      skills = {props.skills}
      onAddSkills = {props.onAddSkills}
      onSetCharacterStats = {props.onSetCharacterStats}
      charactersStats = {props.charactersStats}
      onSetPenis = {props.onSetPenis}
      penis = {props.penis}
      attractiveness = {props.attractiveness}
      relations = {props.relations}
      onSetResearchTime = {props.onSetResearchTime}
      researchTime = {props.researchTime}
      lab = {props.lab}
      onSetLab = {props.onSetLab}
      ></Apartment>
    )
  }
  let GameMapSwitch = () => {
    return (
      <>
      <GameMap
      money = {props.money}
      gender = {props.gender}
      onSetGender = {props.onSetGender}
      standardButtonWidth = {standardButtonWidth}
      energy = {props.energy}
      date = {props.date}
      onAddMinutes = {props.onAddMinutes}
      onSpliceFlag = {props.onSpliceFlag}
      onPushFlag = {props.onPushFlag}
      onSetHour = {props.onSetHour}
      flags = {props.flags}
      onSetFullState = {props.onSetFullState}
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
      skills = {props.skills}
      onAddSkills = {props.onAddSkills}
      onSetCharacterStats = {props.onSetCharacterStats}
      charactersStats = {props.charactersStats}
      onSetPenis = {props.onSetPenis}
      penis = {props.penis}
      ></GameMap>
      </>
    );
  };    

  return( 
    <Router>
      <div>
      <Switch>
          <Route exact path="/Maeville" component={BeginningSwitch} />
          <Route exact path="/_0_Start" component={_0_StartSwitch} />
          <Route exact path="/_1_Inspect" component={_1_InspectSwitch} />
          <Route exact path="/_1_Ignore" component={_1_IgnoreSwitch} />


          <Route exact path="/Apartment" component={ApartmentSwitch} />
          <Route exact path="/Home" component={ApartmentSwitch} />
          <Route exact path="/GameMap" component={GameMapSwitch} />
          

            <Route exact path="/GoOutside" component={ApartmentSwitch} />
            <Route exact path="/FapInApartment" component={ApartmentSwitch} />
            <Route exact path="/SleepAtHome" component={ApartmentSwitch} />
            <Route exact path="/LacBraQHelpSandyOpenDoor" component={ApartmentSwitch} />
            <Route exact path="/LacBraQAmyMovingIn" component={ApartmentSwitch} />
            <Route exact path="/TheBarn" component={ApartmentSwitch} />
            <Route exact path="/TheFarmStore" component={ApartmentSwitch} />
            <Route exact path="/MilkCowsAtFarm" component={ApartmentSwitch} />
            <Route exact path="/SleepAtHome" component={ApartmentSwitch} />
            <Route exact path="/SandyApartment" component={ApartmentSwitch} />
            <Route exact path="/AmyApartment" component={ApartmentSwitch} />
            <Route exact path="/TransformationHistory" component={ApartmentSwitch} />
            <Route exact path="/TheStore" component={ApartmentSwitch} />
            <Route exact path="/TheFurForest" component={ApartmentSwitch} />
            <Route exact path="/TheBar" component={ApartmentSwitch} />
            <Route exact path="/TheBarOutside" component={ApartmentSwitch} />
            <Route exact path="/TheHill" component={ApartmentSwitch} />
            <Route exact path="/TheLab" component={ApartmentSwitch} />
            <Route exact path="/TheLabOutside" component={ApartmentSwitch} />
            <Route exact path="/TheGalleryOutside" component={ApartmentSwitch} />
            <Route exact path="/TheGallery" component={ApartmentSwitch} />

            <Route exact path="/TheAcademyOutside" component={ApartmentSwitch} />
            <Route exact path="/TheAcademyOffice" component={ApartmentSwitch} />
            <Route exact path="/TheAcademyDorm" component={ApartmentSwitch} />

          {/*I messed the routing so hard. that everything is mixed up. I think I should only route from one place?
          Thing is, that I am indeed writing the function separate. Get good with this routing stuff.
          */}
          
              
          
          <Redirect to="/Maeville" />
        </Switch>
      </div>
    </Router>
  );
  

} //End of App.

const mapStateToProps = state =>{
  // console.log("TheState:", state)
  return{
    myName: state.fullState.name,
    date: state.fullState.date,
    lust: state.fullState.lust,
    skills: state.fullState.skills,
    physical: state.fullState.physical,
    mind: state.fullState.mind,
    attractiveness: state.fullState.attractiveness,
    gender : state.fullState.gender,
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
    onSetState: (_stateToSet) => dispatch({type:actionTypes.SET_STATE, stateToSet: _stateToSet}),
    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

