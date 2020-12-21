import { Link } from "react-router-dom";
import React, {useEffect, useState} from "react";
import TextField from '@material-ui/core/TextField';

import Col2 from "../components/col2";
import Col3 from "../components/col3";
import * as actionTypes from "../redux/actions";
import {connect} from "react-redux";

const Sandy = (props) => {


    const [inputTextValue, setInputTextValue] = useState("");

  let GoToGameMap = () =>{
    props.onAddMinutes(10)
    props.onSpliceFlag("WITH_SANDY");
    props.onSpliceFlag("FLIRTED_SANDY_BAD");
    props.onSpliceFlag("SEDUCED_SANDY_BAD");
    props.onSpliceFlag("KISS_SANDY_BAD");
    props.onSpliceFlag("FUCK_SANDY_BAD");
    props.onSpliceFlag("CONVINCE_TAKE_DRUG_FAIL");
    props.onSpliceFlag("STEALTH_TAKE_DRUG_FAIL");
    
}

let GiveItems = () =>{
    props.onAddMinutes(10);
    props.onPushFlag("WITH_SANDY");
    props.onPushFlag("GIVE_ITEMS_SANDY");

}

let convinceTakeDrug = () =>{
    props.onPushFlag("WITH_SANDY");
    if( Math.random() * 100 + props.relations.Sandy > 100 ){
        props.onPushFlag("CONVINCE_TAKE_DRUG_SUCCESS");
        props.onChangeRelationship("Sandy",3);
        props.onAddMinutes(10);
    } else{
        props.onPushFlag("CONVINCE_TAKE_DRUG_FAIL");
        props.onChangeRelationship("Sandy",-2);
        props.onAddMinutes(10);
    }
    
}

let stealthTakeDrug = () =>{
    props.onPushFlag("WITH_SANDY");
    let doYouHaveDrugs = false;
    Object.keys(props.items).forEach(currItem =>{
        if(currItem.includes("drug")){
            if(props.items[currItem] > 0){
                doYouHaveDrugs = true;
            }
        }
    })

    if(doYouHaveDrugs == true){
        if( (Math.random() * 100 + props.mind + props.relations.Sandy)  * props.DrugStealthModifier  > 125  ){
            props.onPushFlag("STEALTH_TAKE_DRUG_SUCCESS"); 
        } else{
            props.onPushFlag("STEALTH_TAKE_DRUG_FAIL");
            props.onChangeRelationship("Sandy",-15);
        }
    } else{
        alert("You have no drugs");
    }
}


const SANDYItemsLike = [
    {
        name: "farmCowMilkBottle",
        nameDisplay: "Farm cow milk bottle",
        relationshipAdd: 0,
        action: () =>{
            props.onAddMinutes(10);
            props.onChangeRelationship("Sandy",0);
        },
    },
    {
        name: "moonStone",
        nameDisplay: "Moon stone",
        relationshipAdd: 6,
        action: () =>{
            props.onAddMinutes(10);
            props.onChangeRelationship("Sandy",6);
        },
    },
    {
        name: "elvenPowder",
        nameDisplay: "Elven powder",
        relationshipAdd: 3,
        action: () =>{
            props.onAddMinutes(10);
            props.onChangeRelationship("Sandy",3);
            props.onAddItem("elvenPowder",-1);
        },
    },
    {
        name: "cowgirlMilk",
        nameDisplay: "Cowgirl milk",
        relationshipAdd: 1,
        action: () =>{
            props.onAddMinutes(10);
            props.onChangeRelationship("Sandy",1);
            props.onAddItem("cowgirlMilk",-1);
        },
    },
    {
        name: "enhancedSilicone",
        nameDisplay: "Enhanced silicone",
        relationshipAdd: 1,
        action: () =>{
            props.onAddMinutes(10);
            props.onChangeRelationship("Sandy",1);
            props.onAddItem("enhancedSilicone",-1);
        },
    },
    {
        name: "enchantedIron",
        nameDisplay: "Enchaned Iron",
        relationshipAdd: 3,
        action: () =>{
            props.onAddMinutes(10);
            props.onChangeRelationship("Sandy",3);
            props.onAddItem("enchantedIron",-1);
        },
    },
    {
        name: "brazilianSpiderVenom",
        nameDisplay: "Brazilian spider venom",
        relationshipAdd: 1,
        action: () =>{
            props.onAddMinutes(10);
            props.onChangeRelationship("Sandy",1);
            props.onAddItem("brazilianSpiderVenom",-1);
        },
    }
]


if(props.flags.includes("FLIRTED_SANDY")){

    let GoBack = () =>{
        props.onAddMinutes(10);
        props.onSpliceFlag("FLIRTED_SANDY");
    }

    let GoToSeduce = () =>{
        props.onPushFlag("WITH_SANDY");
        props.onSpliceFlag("FLIRTED_SANDY");

        if((Math.random() *100 + props.relations.Sandy) > 75){
            props.onPushFlag("SEDUCED_SANDY");
            props.onChangeRelationship("Sandy",Math.round(Math.random()*8,0));
        } else {
            props.onPushFlag("SEDUCED_SANDY_BAD");
            props.onChangeRelationship("Sandy",-Math.round(Math.random()*4,0));
        }
        
    }

    return(
        <>
        <Col2 BackImage = {props.backImageChar}>
        <img alt = {"Not found"} src = {props.ImageCharS1} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
        </Col2>  

        <Col3 > 
               
            <p>Sandy smiles. "You make me feel nice"</p>

            <Link to={props.CurrentLocation} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {GoToSeduce}>Seduce</button>
            </Link>  
            
            <Link to={props.CurrentLocation} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {GoBack}>Back</button>
            </Link>  
                
        </Col3>
        </>

  )
} else if(props.flags.includes("SEDUCED_SANDY")){
    let GoBack = () =>{
        props.onAddMinutes(10);
        props.onSpliceFlag("SEDUCED_SANDY");
    }

    let GoToKiss  = () =>{
        props.onPushFlag("WITH_SANDY");
        props.onSpliceFlag("SEDUCED_SANDY");

        if((Math.random() *100 + props.relations.Sandy) > 90){
            props.onPushFlag("KISS_SANDY");
            props.onChangeRelationship("Sandy",Math.round(Math.random()*10,0));
        } else {
            props.onPushFlag("KISS_SANDY_BAD");
            props.onChangeRelationship("Sandy",-Math.round(Math.random()*7,0));
        }
        
    }

    return(
        <>
        <Col2 BackImage = {props.backImageChar}>
        <img alt = {"Not found"} src = {props.ImageCharS2} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
        </Col2>  

        <Col3 > 
               
            <p>Sandy gets closer to you. She leans her body against yours. And holds your hand. "I know I talk a lot but I just like talking to you"</p>

            <Link to={props.CurrentLocation} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {GoToKiss}>Kiss</button>
            </Link>  

            <Link to={props.CurrentLocation} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {GoBack}>Game map</button>
            </Link>  
                
        </Col3>
        </>

  )
} else if(props.flags.includes("KISS_SANDY")){

    let GoBack = () =>{
        props.onAddMinutes(10);
        props.onSpliceFlag("KISS_SANDY");
    }
    
    let GoToFuck  = () =>{
        props.onPushFlag("WITH_SANDY");
        props.onSpliceFlag("KISS_SANDY");

        if((Math.random() *100 + props.relations.Sandy) > 130){
            props.onPushFlag("FUCK_SANDY");
            props.onChangeRelationship("Sandy",Math.round(Math.random()*15,0));
        } else {
            props.onPushFlag("FUCK_SANDY_BAD");
            props.onChangeRelationship("Sandy",-Math.round(Math.random()*15,0));
        }
        
    }

    return(
        <>
        <Col2 BackImage = {props.backImageChar}>
        <img alt = {"Not found"} src = {props.ImageCharS3} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
        </Col2>  

        <Col3 > 

            <p>“‘Kiss me, {props.name},’ whispers sandy. You slips your lips against Sandys and you open her my mouth with your tongue. Sandy moans and pulls your body down tightly, skin to skin. Sandy feels you. All of you. You suck on Sandy's lower lip. And your fingers run through her hair.</p>
            

            <Link to={props.CurrentLocation} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {GoToFuck}>Fuck</button>
            </Link>  

            <Link to={props.CurrentLocation} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {GoBack}>Back</button>
            </Link>  
                
        </Col3>
        </>

  )
} else if(props.flags.includes("FUCK_SANDY")){
    
    let GoBack = () =>{
        props.onAddMinutes(10);
        props.onSpliceFlag("FUCK_SANDY");
    }
    

    return(
        <>
        <Col2 BackImage = {" "} rowHeight = {" "}>
        <video autoPlay loop 
        style ={{width: "100%", height: props.col2Height, objectFit: "cover"}}>
            <source src={props.VideoCharFuckingS4} type="video/mp4"/>
        </video>
        </Col2>   

        <Col3 > 

            <p>Sandy kisses your ear, ‘I don’t want either of us to ever forget this night.’ Sandy whispers</p>
            <p>
                “You plaster your mouth on hers and you kiss her in a way she’d never thought possible, Sandy's hips moving against your, knowing there must be more. You settle between her legs. Sandy cradles your hips with her thighs. And now you are at the portal. And now, nothing, absolutely nothing in this world, could feel as good as the sensation of you slowly sliding into Sandy.</p>
                <p></p>
                <TextField
                    value={inputTextValue}
                    onChange={(event) => setInputTextValue(event.target.value)}
                    placeholder={"Are you okay?"}
                    style = {{marginLeft: "15px", backgroundColor:"white"}}
                />
                <p></p>
            <p>“Sandy arches and stretchs beneath You. Her movements send you deeper, and Sandy likes that. ‘I’ve never been better,’ Sandy practically purrs.”</p>
        

            <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {GoBack}>Back</button>
            </Link>  
                
        </Col3>
        </>

  )
}


else if (props.flags.includes("FLIRTED_SANDY_BAD") || props.flags.includes("SEDUCED_SANDY_BAD") || props.flags.includes("KISS_SANDY_BAD") || props.flags.includes("FUCK_SANDY_BAD") || props.flags.includes("CONVINCE_TAKE_DRUG_FAIL") || props.flags.includes("STEALTH_TAKE_DRUG_FAIL") ){


    return(
        <>
        <Col2 BackImage = {props.backImageChar}>
        <img alt = {"Not found"} src = {props.ImageChar} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
        </Col2>  

        <Col3 > 

            <p>Sandy looks at you quizzically. "That's not really nice" and leaves.</p>
            
            <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {GoToGameMap}>Game map</button>
            </Link>  

            
                
        </Col3>
        </>

  )
} else if(props.flags.includes("GIVE_ITEMS_SANDY")){

    let GoBackFromItems = () =>{
        props.onAddMinutes(10);
        props.onSpliceFlag("GIVE_ITEMS_SANDY");
    }
    
    let itemsKeys = Object.keys(props.items);

    return(
        <>
        <Col2>
            {
            SANDYItemsLike.map((SANDYItem)=>{
                return(
                <>
                    <Link to={props.CurrentLocation} style={{ textDecoration: "none" }}>
                        <button type="button" className="btn btn-primary" onClick = {SANDYItemsLike.action} disabled = {itemsKeys[SANDYItem] > 0? false: true} style ={{width: "190px"}}
                        >
                            {SANDYItem.nameDisplay} </button>
                    </Link> 
                </>
                )
                
            })
            }
            

        </Col2>  

        <Col3 > 

            

            
            <Link to={props.CurrentLocation} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {GoBackFromItems}>Go back</button>
            </Link>  

            
                
        </Col3>
        </>

  )
} else if(props.flags.includes("CONVINCE_TAKE_DRUG_SUCCESS")){
    
    let itemKeys = Object.keys(props.items);

    let takeCertainDrug = (drugToTake, drugNumber) =>{
        props.onAddItem(drugToTake,-1);
        props.onAddMinutes(15);
        props.onSpliceFlag("CONVINCE_TAKE_DRUG_SUCCESS");

        let effectivenessMod = 0.1 * drugNumber;
        
        if(drugToTake.includes("breast")){
            if(effectivenessMod > Math.random()){
                props.onSetCharacterStats("Sandy","breast", props.charactersStats.Sandy.breast + 1)
            }
            props.onAddMinutes(10);
            props.onPushFlag("SANDYCommentsOnLargerBreasts");
        } else if(drugToTake.includes("height")){
            if(effectivenessMod > Math.random()){
                props.onSetCharacterStats("Sandy","height", props.charactersStats.Sandy.height + 1)
            }
            props.onAddMinutes(10);
            props.onPushFlag("SANDYCommentsOnTaller");
        } else if(drugToTake.includes("lactation")){
            if(effectivenessMod > Math.random()){
                props.onSetCharacterStats("Sandy","lactation", props.charactersStats.Sandy.lactation + 1)
            }
            props.onAddMinutes(10);
            props.onPushFlag("SANDYCommentsOnMilk");
        }else if(drugToTake.includes("mindControl")){
            if(effectivenessMod > Math.random()){
                props.onSetCharacterStats("Sandy","mindControl", props.charactersStats.Sandy.mindControl + 1)
            }
            props.onAddMinutes(10);
            props.onPushFlag("SANDYCommentsOnMindControl");
        }else if(drugToTake.includes("lust")){
            if(effectivenessMod > Math.random()){
                props.onSetCharacterStats("Sandy","lust", props.charactersStats.Sandy.lust + 1)
            }
            props.onAddMinutes(10);
            props.onPushFlag("SANDYCommentsOnLust");
        }else if(drugToTake.includes("strength")){
            if(effectivenessMod > Math.random()){
                props.onSetCharacterStats("Sandy","strength", props.charactersStats.Sandy.strength + 1)
            }
            props.onAddMinutes(10);
            props.onPushFlag("SANDYCommentsOnStrength");
        }
        props.onSpliceFlag("CONVINCE_TAKE_DRUG_SUCCESS");
    }

    let GoBackFromDrug = () =>{
        props.onAddMinutes(10);
        props.onSpliceFlag("CONVINCE_TAKE_DRUG_SUCCESS");
    }
    
    return(
        <>
        <Col2 BackImage = {props.backImageChar}>
        <img alt = {"Not found"} src = {props.ImageChar} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
        </Col2>  

        <Col3 > 

            <p>"I don't usually take medicine. I do all natural you know. But let's try it. It's the city after all."</p>

            {
            itemKeys.map((item, indexKey)=>{
                if(item.includes("drug")){
                    let drugNum = item.match(/\d+/)[0];
                        return(
                                <Link to={props.CurrentLocation} style={{ textDecoration: "none" }} key = {indexKey+"convinceTakeDrugSANDY"}>
                                    <button type="button" className="btn btn-primary" onClick = {()=> takeCertainDrug(item, drugNum)} disabled = {props.items[item] > 0? false: true} style ={{width: "190px"}}
                                    >
                                        {item.split(drugNum).join(" "," ") + " " + drugNum}</button>
                                </Link> 
                            )
                    
                }
                
            })
            }
            

            
            <Link to={props.CurrentLocation} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {GoBackFromDrug} style ={{width: "190px"}}>Nevermind</button>
            </Link>  

            
                
        </Col3>
        </>

  )

} else if(props.flags.includes("STEALTH_TAKE_DRUG_SUCCESS")){
    let itemKeys = Object.keys(props.items);

    let takeCertainDrug = (drugToTake, drugNumber) =>{
        props.onAddItem(drugToTake,-1);
        props.onAddMinutes(15);
        props.onSpliceFlag("STEALTH_TAKE_DRUG_SUCCESS");

        let effectivenessMod = 0.1 * drugNumber;
        
        if(drugToTake.includes("breast")){
            if(effectivenessMod > Math.random()){
                props.onSetCharacterStats("Sandy","breast", props.charactersStats.Sandy.breast + 1)
            }
            props.onAddMinutes(10);
            props.onPushFlag("SANDYCommentsOnLargerBreasts");
        } else if(drugToTake.includes("height")){
            if(effectivenessMod > Math.random()){
                props.onSetCharacterStats("Sandy","height", props.charactersStats.Sandy.height + 1)
            }
            props.onAddMinutes(10);
            props.onPushFlag("SANDYCommentsOnTaller");
        } else if(drugToTake.includes("lactation")){
            if(effectivenessMod > Math.random()){
                props.onSetCharacterStats("Sandy","lactation", props.charactersStats.Sandy.lactation + 1)
            }
            props.onAddMinutes(10);
            props.onPushFlag("SANDYCommentsOnMilk");
        }else if(drugToTake.includes("mindControl")){
            if(effectivenessMod > Math.random()){
                props.onSetCharacterStats("Sandy","mindControl", props.charactersStats.Sandy.mindControl + 1)
            }
            props.onAddMinutes(10);
            props.onPushFlag("SANDYCommentsOnMindControl");
        }else if(drugToTake.includes("lust")){
            if(effectivenessMod > Math.random()){
                props.onSetCharacterStats("Sandy","lust", props.charactersStats.Sandy.lust + 1)
            }
            props.onAddMinutes(10);
            props.onPushFlag("SANDYCommentsOnLust");
        }else if(drugToTake.includes("strength")){
            if(effectivenessMod > Math.random()){
                props.onSetCharacterStats("Sandy","strength", props.charactersStats.Sandy.strength + 1)
            }
            props.onAddMinutes(10);
            props.onPushFlag("SANDYCommentsOnStrength");
        }
        props.onSpliceFlag("STEALTH_TAKE_DRUG_SUCCESS");
    }

    let GoBackFromDrug = () =>{
        props.onAddMinutes(10);
        props.onSpliceFlag("STEALTH_TAKE_DRUG_SUCCESS");
    }
    
    return(
        <>
        <Col2 BackImage = {props.backImageChar}>
        <img alt = {"Not found"} src = {props.ImageChar} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
        </Col2>  

        <Col3 > 

            <p>You stealthly manage to give Sandy the drug. Which drug will you give her?</p>
            <p>Oppossum tip: Never do this in real life.  </p>

            {
            itemKeys.map((item, indexKey)=>{
                if(item.includes("drug")){
                    let drugNum = item.match(/\d+/)[0];
                        return(
                                <Link to={props.CurrentLocation} style={{ textDecoration: "none" }} key = {indexKey+"convinceTakeDrugSANDY"}>
                                    <button type="button" className="btn btn-primary" onClick = {()=> takeCertainDrug(item, drugNum)} disabled = {props.items[item] > 0? false: true} style ={{width: "190px"}}
                                    >
                                        {item.split(drugNum).join(" "," ") + " " + drugNum}</button>
                                </Link> 
                            )
                    
                }
                
            })
            }
            

            
            <Link to={props.CurrentLocation} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {GoBackFromDrug} style ={{width: "190px"}}>NSANDYrmind</button>
            </Link>  

            
                
        </Col3>
        </>

  )
}

else {
    

    let GoToFlirt = () =>{
        props.onPushFlag("WITH_SANDY");
        console.log(props.relations);
        if( (Math.random() *100 + props.relations.Sandy) > 50  ){
            props.onPushFlag("FLIRTED_SANDY");
            props.onChangeRelationship("Sandy",Math.round(Math.random(),0))
        } else {
            props.onPushFlag("FLIRTED_SANDY_BAD");
            props.onChangeRelationship("Sandy",-Math.round(Math.random()/2,0))
        }
        
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

            <Link to={props.CurrentLocation} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {GoToFlirt}>Flirt</button>
            </Link>  

            <Link to={props.CurrentLocation} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {GiveItems}>Give item</button>
            </Link>  

            <Link to={props.CurrentLocation} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {convinceTakeDrug}>Convince to take drug</button>
            </Link>  

            <Link to={props.CurrentLocation} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {stealthTakeDrug}>Give drug stealthly</button>
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
  SANDY: state.fullState.SANDY,
  Sandy: state.fullState.Sandy,
  researchTime: state.fullState.researchTime,
  lab: state.fullState.lab,
  charactersStats: state.fullState.charactersStats,
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

  
}
}  
export default connect(mapStateToProps,mapDispatchToProps)(Sandy);

