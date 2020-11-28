import mainCharacter from "../data/mainCharacter";
import * as actionTypes from "./actions";
//A reducer is a function
const reducer = (state = mainCharacter, action) =>{
    switch(action.type){
        case actionTypes.CHANGE_NAME:
            return{
                ...state,
                name : action.newName
            }
        case actionTypes.ADD_MINUTES: 
            const newDate = new Date(state.fullState.date);
            const currentMinutes = newDate.getMinutes();
            //Weird small bug. The minutes you pass get set twice. So Imma just divide by 2. If I remove strict mode, this does not happen
            newDate.setMinutes(currentMinutes + action.minutesToAdd);
            
            return{
                fullState: {
                    ...state.fullState,
                    date :  newDate,
                    energy: state.fullState.energy - Math.ceil(action.minutesToAdd * .075)
                }
                
            }

        case actionTypes.ADD_LUST:
            return{
                ...state,
                lust: state.fullState.lust + action.lustToAdd,
            }
        case actionTypes.SET_LUST:
            if(state.fullState.lust > 100){
                return{
                    ...state,
                    lust: 100
                }
            } else{
                return{
                    ...state
                }
                
            }
        
        case actionTypes.ADD_SKILLS:
            let newSkills = state.fullState.skills;
            newSkills[action.skillToAdd] += action.skillAmmountToAdd;
            return{
               ...state,
               skills : newSkills 
            }
        
        case actionTypes.PUSH_FLAG:
            let newFlags = state.fullState.flags;
            if(!newFlags.includes(action.flagToAdd)){
                newFlags.push(action.flagToAdd)    
            }
            return{
                ...state,
                flags: newFlags
            }
        
        case actionTypes.CHANGE_RELATIONSHIP:
            return{
                ...state,
                relations:{
                    ...state,
                    [action.relationPerson]: state.fullState.relations[action.relationPerson] += action.relationAmmountToAdd
                }
            }
        case actionTypes.PUSH_STATUS:
            let newStatusAdd = state.fullState.status;
            newStatusAdd.push(action.statusToAdd)
            return{
                ...state,
                status: newStatusAdd
            }

        case actionTypes.SPLICE_STATUS:
            let newStatusSplice = state.fullState.status;
            if(newStatusSplice.includes(action.statusToRemove)){
                newStatusSplice.splice(newStatusSplice.indexOf(action.statusToRemove),1); //Before i just had this. I hope it works
            }
            return{
                ...state,
                status : newStatusSplice
            }
        
        
        case actionTypes.SPLICE_FLAG:
            let newStateFlagSplice = state.fullState.flags;
            if(newStateFlagSplice.includes(action.flagToRemove)){
                newStateFlagSplice.splice(newStateFlagSplice.indexOf(action.flagToRemove),1); //Before i just had this. I hope it works
            }
            return{
                ...state,
                flags: newStateFlagSplice
            }
        
        case actionTypes.ADD_CHEST:
            return{
                ...state,
                chest: state.fullState.chest += action.chestToAdd
            }
        
        case actionTypes.ADD_HEIGHT:
            return{
                ...state,
                height: state.fullState.height += action.heightToAdd
            }         
        case actionTypes.ADD_BELLY:
            return{
                ...state,
                belly: state.fullState.belly += action.bellyToAdd
            }                
                
        case actionTypes.ADD_ITEMS:
            let newItems = state.fullState.items
            newItems[action.itemToAdd] = newItems[action.itemToAdd] += action.itemAmmountToAdd;
            return{
                ...state,
                items:newItems
            }            

        case actionTypes.SET_HOUR: 
            const newDateHour = state.fullState.date;
            newDateHour.setHours(action.hourToSet);
            return{
                ...state,
                date :  newDateHour
            }            

        case actionTypes.ADD_ENERGY:
            return{
                fullState: {
                    ...state.fullState,
                    date :  newDate,
                    energy: state.fullState.energy += action.energyToAdd
                }
            }

        case actionTypes.SET_ENERGY:
            return{
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
                date :  newDateToSet
            }
        
        case actionTypes.SET_STATE:
            const newState = action.stateToSet;
            console.log(newState)
            newState["fullState"].date = new Date(newState["fullState"].date);
            
            return newState
        
        case actionTypes.SET_CURRENT_LINK:
            return{
                ...state,
                currentLink: action.linkToSet
            }
        
            case actionTypes.ADD_ATTRACTIVENESS:
            return{
                ...state,
                attractiveness: state.fullState.attractiveness + action.attractivenessToAdd
            }
        
        case actionTypes.SET_ITEMS:
            let setItems = state.fullState.items
            setItems[action.itemToSet] = action.newItemAmmount;
            return{
                ...state,
                items:setItems
            }            
        
        case actionTypes.ADD_MONEY:
            return{
                ...state,
                money: state.fullState.money + action.moneyToAdd
            }

        default:
            return state;
    }
    
}

export default reducer