import mainCharacter from "../data/mainCharacter";
import * as actionTypes from "./actions";
//A reducer is a function
const reducer = (state = mainCharacter, action) =>{
    switch(action.type){
        case actionTypes.CHANGE_NAME:
            return{
                ...state,
                fullState: {
                    ...state.fullState,
                    name : action.newName
                }
            }
        case actionTypes.ADD_MINUTES: 
            const newDate = new Date(state.fullState.date);
            const currentMinutes = newDate.getMinutes();
            //Weird small bug. The minutes you pass get set twice. So Imma just divide by 2. If I remove strict mode, this does not happen
            newDate.setMinutes(currentMinutes + action.minutesToAdd);
            
            return{
                ...state,
                fullState: {
                    ...state.fullState,
                    date :  newDate,
                    energy: state.fullState.energy - Math.ceil(action.minutesToAdd * .075)
                }
                
            }

        case actionTypes.ADD_LUST:
            return{
                ...state,
                fullState: {
                    ...state.fullState,
                    lust: state.fullState.lust + action.lustToAdd,
                }
                
            }
        case actionTypes.SET_LUST:
            if(state.fullState.lust > 100){
                return{
                    ...state,
                    fullState: {
                        ...state.fullState,
                        lust: 100
                    }
                }
            } else{
                return{
                    ...state,
                    fullState: {
                        ...state.fullState,
                        lust: action.lustToSet,
                    }
                    
                }
                
            }
        
        case actionTypes.ADD_SKILLS:
            let newSkills = state.fullState.skills;
            newSkills[action.skillToAdd] += action.skillAmmountToAdd;
            return{
                ...state,
                fullState: {
                    ...state.fullState,
                    skills : newSkills 
                }
               
            }
        
        case actionTypes.PUSH_FLAG:
            let newFlags = state.fullState.flags;
            if(!newFlags.includes(action.flagToAdd)){
                newFlags.push(action.flagToAdd)    
            }
            return{
                ...state,
                fullState: {
                    ...state.fullState,
                    flags: newFlags
                }
                
            }
        
        case actionTypes.CHANGE_RELATIONSHIP:
            return{
                ...state,
                fullState:{
                    ...state.fullState,
                    relations:{
                        ...state.fullState.relations,
                        [action.relationPerson]: state.fullState.relations[action.relationPerson] += action.relationAmmountToAdd
                    }
                }
            }
        case actionTypes.PUSH_STATUS:
            let newStatusAdd = state.fullState.status;
            newStatusAdd.push(action.statusToAdd)
            return{
                ...state,
                fullState: {
                    ...state.fullState,
                    status: newStatusAdd
                }
            }

        case actionTypes.SPLICE_STATUS:
            let newStatusSplice = state.fullState.status;
            if(newStatusSplice.includes(action.statusToRemove)){
                newStatusSplice.splice(newStatusSplice.indexOf(action.statusToRemove),1); //Before i just had this. I hope it works
            }
            return{
                ...state,
                fullState: {
                    ...state.fullState,
                    status : newStatusSplice
                }
            }
        
        
        case actionTypes.SPLICE_FLAG:
            let newStateFlagSplice = state.fullState.flags;
            if(newStateFlagSplice.includes(action.flagToRemove)){
                newStateFlagSplice.splice(newStateFlagSplice.indexOf(action.flagToRemove),1); //Before i just had this. I hope it works
            }
            return{
                ...state,
                fullState: {
                    ...state.fullState,
                    flags: newStateFlagSplice
                }
            }
        
        case actionTypes.ADD_CHEST:
            return{
                ...state,
                fullState: {
                    ...state.fullState,
                    chest: state.fullState.chest += action.chestToAdd
                }
            }
        
        case actionTypes.ADD_HEIGHT:
            return{
                ...state,
                height: state.fullState.height += action.heightToAdd
            }         
        case actionTypes.ADD_BELLY:
            return{
                ...state,
                fullState: {
                    ...state.fullState,
                    belly: state.fullState.belly += action.bellyToAdd
                }
            }                
                
        case actionTypes.ADD_ITEMS:
            let newItems = state.fullState.items
            newItems[action.itemToAdd] = newItems[action.itemToAdd] += action.itemAmmountToAdd;
            return{
                ...state,
                fullState: {
                    ...state.fullState,
                    items:newItems
                }
            }            

        case actionTypes.SET_HOUR: 
            const newDateHour = state.fullState.date;
            newDateHour.setHours(action.hourToSet);
            return{
                ...state,
                fullState: {
                    ...state.fullState,
                    date :  newDateHour
                }
            }            

        case actionTypes.ADD_ENERGY:
            return{
                ...state,
                fullState: {
                    ...state.fullState,
                    energy: state.fullState.energy += action.energyToAdd
                }
            }

        case actionTypes.SET_ENERGY:
            return{
                ...state,
                fullState: {
                    ...state.fullState,
                    energy: action.energyToSet
                }
            }            

        case actionTypes.SET_DATE:
            const newDateToSet = action.dateToSet;
            //Weird small bug. The minutes you pass get set twice. So Imma just divide by 2. If I remove strict mode, this does not happen
            
            return{
                ...state,
                fullState: {
                    ...state.fullState,
                    date :  newDateToSet
                }
            }
        
        case actionTypes.SET_STATE:
            const newState = action.stateToSet;
            console.log(newState)
            newState["fullState"].date = new Date(newState["fullState"].date);
            
            return newState
        
        case actionTypes.SET_CURRENT_LINK:
            return{
                ...state,
                fullState: {
                    ...state.fullState,
                    currentLink: action.linkToSet
                }
            }
        
            case actionTypes.ADD_ATTRACTIVENESS:
            return{
                ...state,
                fullState: {
                    ...state.fullState,
                    attractiveness: state.fullState.attractiveness + action.attractivenessToAdd
                }
            }
        
        case actionTypes.SET_ITEMS:
            let setItems = state.fullState.items
            setItems[action.itemToSet] = action.newItemAmmount;
            return{
                ...state,
                fullState: {
                    ...state.fullState,
                    items:setItems
                }
            }            
        
        case actionTypes.ADD_MONEY:
            return{
                ...state,
                fullState: {
                    ...state.fullState,
                    money: state.fullState.money + action.moneyToAdd
                }
            }
        
        case actionTypes.PUSH_STATE_HISTORY:
            let newHistory = state.fullState.stateHistory;
            newHistory.push(action.historyToPush);    
            if(newHistory.length > 5){
                newHistory.shift();
            }
            return{
                ...state,
                fullState:{
                    ...state.fullState,
                    stateHistory: newHistory

                }
            }

        case actionTypes.SET_RESEARCH_TIMES:{
            return{
                ...state,
                fullState: {
                    ...state.fullState,
                    researchTime:{
                        ...state.fullState.researchTime,
                        [action.researchType]: action.researchTimeToSet
                    }
                }
            }
        }

        case actionTypes.SET_LAB:{
            return{
                ...state,
                fullState: {
                    ...state.fullState,
                    lab:{
                        ...state.fullState.lab,
                        [action.labItem]: action.setLabItem
                    }
                }
            }
        }

        case actionTypes.SET_CHARACTER_STATS:{
            return{
                ...state,
                fullState: {
                    ...state.fullState,
                    charactersStats:{
                        ...state.fullState.charactersStats,
                        [action.character]:{
                            ...state.fullState.charactersStats.currentChar,
                            [action.characterStatToChange]:  action.NewStat
                        }
                    }
                }
            }
        }

        case actionTypes.SET_GENDER:{
            return{
                ...state,
                fullState: {
                    ...state.fullState,
                    gender: action.genderToSet
                }
            }
        }

        case actionTypes.SET_PENIS:{
            return{
                ...state,
                fullState: {
                    ...state.fullState,
                    penis: action.penisToSet
                }
            }
        }
         
        case actionTypes.SET_ANYTHING_FULLSTATE:{
            return{
                ...state,
                fullState: {
                    ...state.fullState,
                    [action.toSetFullstate]: action.valueToSetFullState
                }
            }
        }

        case actionTypes.SET_MONGO_USER:{
            return{
                mongoUser: action.updatedMongoUser,
                fullState:{
                    ...state.fullState
                }
            }
        }
        


        default:
            return state;
    }
    
}

export default reducer