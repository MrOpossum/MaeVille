import mainCharacter from "../data/mainCharacter"
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
            const newDate = state.date;
            const currentMinutes = newDate.getMinutes();
            //Weird small bug. The minutes you pass get set twice. So Imma just divide by 2. If I remove strict mode, this does not happen
            newDate.setMinutes(currentMinutes + action.minutesToAdd);
            
            return{
                ...state,
                date :  newDate,
                energy: state.energy - Math.ceil(action.minutesToAdd * .075)
            }

        case actionTypes.ADD_LUST:
            return{
                ...state,
                lust: state.lust + action.lustToAdd,
            }
        case actionTypes.SET_LUST:
            if(state.lust > 100){
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
            let newSkills = state.skills;
            newSkills[action.skillToAdd] += action.skillAmmountToAdd;
            return{
               ...state,
               skills : newSkills 
            }
        
        case actionTypes.PUSH_FLAG:
            let newFlags = state.flags;
            newFlags.push(action.flagToAdd)
            return{
                ...state,
                flags: newFlags
            }
        
        case actionTypes.CHANGE_RELATIONSHIP:
            return{
                ...state,
                relations:{
                    ...state,
                    [action.relationPerson]: state.relations[action.relationPerson] += action.relationAmmountToAdd
                }
            }
        case actionTypes.PUSH_STATUS:
            let newStatusAdd = state.status;
            newStatusAdd.push(action.statusToAdd)
            return{
                ...state,
                status: newStatusAdd
            }

        case actionTypes.SPLICE_STATUS:
            let newStatusSplice = state.status;
            newStatusSplice.splice(newStatusSplice.indexOf(action.statusToRemove),1);
            return{
                ...state,
                status : newStatusSplice
            }
        
        
        case actionTypes.SPLICE_FLAG:
            let newStateFlagSplice = state.flags;
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
                chest: state.chest += action.chestToAdd
            }
        
        case actionTypes.ADD_HEIGHT:
            return{
                ...state,
                height: state.height += action.heightToAdd
            }         
        case actionTypes.ADD_BELLY:
            return{
                ...state,
                belly: state.belly += action.bellyToAdd
            }                
                
        case actionTypes.ADD_ITEMS:
            let newItems = state.items
            newItems[action.itemToAdd] = newItems[action.itemToAdd] += action.itemAmmountToAdd;
            return{
                ...state,
                items:newItems
            }            

        case actionTypes.SET_HOUR: 
            const newDateHour = state.date;
            newDateHour.setHours(action.hourToSet);
            return{
                ...state,
                date :  newDateHour
            }            

        case actionTypes.ADD_ENERGY:
            return{
                ...state,
                energy: state.energy += action.energyToAdd
            }

        case actionTypes.SET_ENERGY:
            return{
                ...state,
                energy: action.energyToSet
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
            newState["date"] = new Date(newState["date"]);
            
            return newState;
        
        case actionTypes.SET_CURRENT_LINK:
            return{
                ...state,
                currentLink: action.linkToSet
            }

        default:
            return state;
    }
    
}

export default reducer