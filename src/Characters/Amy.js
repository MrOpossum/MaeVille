import { Link } from "react-router-dom";
import React from "react";


import Col2 from "../components/col2";
import Col3 from "../components/col3";
import * as actionTypes from "../redux/actions";
import {connect} from "react-redux";

const Amy = (props) => {

    let GoToGameMap = () =>{
        props.onAddMinutes(10)
        props.onSpliceFlag("WITH_AMY");
        props.onSpliceFlag("FLIRTED_AMY_BAD");
        props.onSpliceFlag("SEDUCED_AMY_BAD");
        props.onSpliceFlag("KISS_AMY_BAD");
        props.onSpliceFlag("FUCK_AMY_BAD");
        props.onSpliceFlag("CONVINCE_TAKE_DRUG_FAIL");
        props.onSpliceFlag("STEALTH_TAKE_DRUG_FAIL");
        
    }

    let GiveItems = () =>{
        props.onAddMinutes(10);
        props.onPushFlag("WITH_AMY");
        props.onPushFlag("GIVE_ITEMS_AMY");

    }

    let convinceTakeDrug = () =>{
        props.onPushFlag("WITH_AMY");
        if( Math.random() * 100 + props.relations.Amy > 100 ){
            props.onPushFlag("CONVINCE_TAKE_DRUG_SUCCESS");
            props.onChangeRelationship("Amy",3);
            props.onAddMinutes(10);
        } else{
            props.onPushFlag("CONVINCE_TAKE_DRUG_FAIL");
            props.onChangeRelationship("Amy",-2);
            props.onAddMinutes(10);
        }
        
    }

    let stealthTakeDrug = () =>{
        props.onPushFlag("WITH_AMY");
        if( (Math.random() * 100 + props.mind + props.relations.Amy)  * props.DrugStealthModifier  > 125  ){
            props.onPushFlag("STEALTH_TAKE_DRUG_SUCCESS"); 
        } else{
            props.onPushFlag("STEALTH_TAKE_DRUG_FAIL");
            props.onChangeRelationship("Amy",-15);
        }

    }


    const AMYItemsLike = [
        {
            name: "farmCowMilkBottle",
            nameDisplay: "Farm cow milk bottle",
            relationshipAdd: 0,
            action: () =>{
                props.onAddMinutes(10);
                props.onChangeRelationship("Amy",0);
            },
        },
        {
            name: "moonStone",
            nameDisplay: "Moon stone",
            relationshipAdd: 6,
            action: () =>{
                props.onAddMinutes(10);
                props.onChangeRelationship("Amy",6);
            },
        },
        {
            name: "elvenPowder",
            nameDisplay: "Elven powder",
            relationshipAdd: 3,
            action: () =>{
                props.onAddMinutes(10);
                props.onChangeRelationship("Amy",3);
                props.onAddItem("elvenPowder",-1);
            },
        },
        {
            name: "cowgirlMilk",
            nameDisplay: "Cowgirl milk",
            relationshipAdd: 1,
            action: () =>{
                props.onAddMinutes(10);
                props.onChangeRelationship("Amy",1);
                props.onAddItem("cowgirlMilk",-1);
            },
        },
        {
            name: "enhancedSilicone",
            nameDisplay: "Enhanced silicone",
            relationshipAdd: 1,
            action: () =>{
                props.onAddMinutes(10);
                props.onChangeRelationship("Amy",1);
                props.onAddItem("enhancedSilicone",-1);
            },
        },
        {
            name: "enchantedIron",
            nameDisplay: "Enchaned Iron",
            relationshipAdd: 3,
            action: () =>{
                props.onAddMinutes(10);
                props.onChangeRelationship("Amy",3);
                props.onAddItem("enchantedIron",-1);
            },
        },
        {
            name: "brazilianSpiderVenom",
            nameDisplay: "Brazilian spider venom",
            relationshipAdd: 1,
            action: () =>{
                props.onAddMinutes(10);
                props.onChangeRelationship("Amy",1);
                props.onAddItem("brazilianSpiderVenom",-1);
            },
        }
    ]


    if(props.flags.includes("FLIRTED_AMY")){

        let GoToSeduce = () =>{
            props.onPushFlag("WITH_AMY");
            props.onSpliceFlag("FLIRTED_AMY");

            if((Math.random() *100 + props.relations.Amy) > 75){
                props.onPushFlag("SEDUCED_AMY");
                props.onChangeRelationship("Amy",Math.round(Math.random()*8,0));
            } else {
                props.onPushFlag("SEDUCED_AMY_BAD");
                props.onChangeRelationship("Amy",-Math.round(Math.random()*4,0));
            }
            
        }

        return(
            <>
            <Col2 BackImage = {props.backImageChar}>
            <img alt = {"Not found"} src = {props.ImageCharS1} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
                   
                <p>Amy giggles. "You ARE smart", I like you {props.name}</p>

                <Link to={props.CurrentLocation} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GoToSeduce}>Seduce</button>
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
                
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GoToGameMap}>Game map</button>
                </Link>  
                    
            </Col3>
            </>
  
      )
    } else if(props.flags.includes("SEDUCED_AMY")){
        
        let GoToKiss  = () =>{
            props.onPushFlag("WITH_AMY");
            props.flags.onSpliceFlag("SEDUCED_AMY");

            if((Math.random() *100 + props.relations.Amy) > 90){
                props.onPushFlag("KISS_AMY");
                props.onChangeRelationship("Amy",Math.round(Math.random()*10,0));
            } else {
                props.onPushFlag("KISS_AMY_BAD");
                props.onChangeRelationship("Amy",-Math.round(Math.random()*7,0));
            }
            
        }

        return(
            <>
            <Col2 BackImage = {props.backImageChar}>
            <img alt = {"Not found"} src = {props.ImageCharS2} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
                   
                <p>AMY look at your eyes. "You know, you are a star" She says. AMY gets closer to you and fixes her hair.</p>

                <Link to={props.CurrentLocation} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GoToKiss}>Kiss</button>
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

                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GoToGameMap}>Game map</button>
                </Link>  
                    
            </Col3>
            </>
  
      )
    } else if(props.flags.includes("KISS_AMY")){
        let GoToFuck  = () =>{
            props.onPushFlag("WITH_AMY");
            props.flags.onSpliceFlag("KISS_AMY");

            if((Math.random() *100 + props.relations.Amy) > 130){
                props.onPushFlag("FUCK_AMY");
                props.onChangeRelationship("Amy",Math.round(Math.random()*15,0));
            } else {
                props.onPushFlag("FUCK_AMY_BAD");
                props.onChangeRelationship("Amy",-Math.round(Math.random()*15,0));
            }
            
        }

        return(
            <>
            <Col2 BackImage = {props.backImageChar}>
            <img alt = {"Not found"} src = {props.ImageCharS3} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 

                <p>AMY kisses you gently, then with increasing pressure. Her tounge moving as if she had wanted this for so long.</p>
                <p>AMY pushes herself towards you, arms around your head.</p>
                

                <Link to={props.CurrentLocation} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GoToFuck}>Fuck</button>
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

                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GoToGameMap}>Game map</button>
                </Link>  
                    
            </Col3>
            </>
  
      )
    } else if(props.flags.includes("FUCK_AMY")){
        
            
        

        return(
            <>
            <Col2 BackImage = {" "} rowHeight = {" "}>
            <video autoPlay loop 
            style ={{width: "100%", height: "100%"}}>
                <source src={props.VideoCharFuckingS4} type="video/mp4"/>
            </video>
            </Col2>   
    
            <Col3 > 

            <p>Passion pushes you togheter, AMY can't get enough of you. AMY is tired but does not care, she does not want rest. AMY craved the ache, AMYlyn wants you inside her. All. The. Time. You put your weight on top of her, she squeezes you in further and further. You see AMY's face, and your sweat dropping on her body. AMY then mounts you, she holds you in and gets you inside her.</p>
                <p>You two go mad. Your cock splitting AMY in two. AMY holds you down, her breasts to your face, your hands exploring her body.</p>
                <p>You heave and pant, there is no end to the pleasure. And you two copy each others movements, lick, kiss, fuck each other. It all culminates in AMYlyn cumming and collapsing over your stomach.</p>
                
                

                <Link to={props.CurrentLocation} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GiveItems}>Give item</button>
                </Link>  

                <Link to={props.CurrentLocation} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {convinceTakeDrug}>Convince to take drug</button>
                </Link>  

                <Link to={props.CurrentLocation} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {stealthTakeDrug}>Give drug stealthly</button>
                </Link>  

                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GoToGameMap}>Game map</button>
                </Link>  
                    
            </Col3>
            </>
  
      )
    }
    
    
    else if (props.flags.includes("FLIRTED_AMY_BAD") || props.flags.includes("SEDUCED_AMY_BAD") || props.flags.includes("KISS_AMY_BAD") || props.flags.includes("FUCK_AMY_BAD") || props.flags.includes("CONVINCE_TAKE_DRUG_FAIL") || props.flags.includes("STEALTH_TAKE_DRUG_FAIL") ){


        return(
            <>
            <Col2 BackImage = {props.backImageChar}>
            <img alt = {"Not found"} src = {props.ImageChar} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 

                <p>Amy looks at you quizzically. "I have to go" and leaves.</p>
                
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GoToGameMap}>Game map</button>
                </Link>  

                
                    
            </Col3>
            </>
  
      )
    } else if(props.flags.includes("GIVE_ITEMS_AMY")){

        let GoBackFromItems = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("GIVE_ITEMS_AMY");
        }
        
        let itemsKeys = Object.keys(props.items);

        return(
            <>
            <Col2>
                {
                AMYItemsLike.map((AMYItem)=>{
                    return(
                    <>
                        <Link to={props.CurrentLocation} style={{ textDecoration: "none" }}>
                            <button type="button" className="btn btn-primary" onClick = {AMYItemsLike.action} disabled = {itemsKeys[AMYItem] > 0? false: true} style ={{width: "190px"}}
                            >
                                {AMYItem.nameDisplay} </button>
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
                    props.onSetCharacterStats("Amy","breast", props.charactersStats.AMY.breast + 1)
                }
                props.onAddMinutes(10);
                props.onPushFlag("AMYCommentsOnLargerBreasts6");
            } else if(drugToTake.includes("height")){
                if(effectivenessMod > Math.random()){
                    props.onSetCharacterStats("Amy","height", props.charactersStats.AMY.height + 1)
                }
                props.onAddMinutes(10);
                props.onPushFlag("AMYCommentsOnTaller4");
            } else if(drugToTake.includes("lactation")){
                if(effectivenessMod > Math.random()){
                    props.onSetCharacterStats("Amy","lactation", props.charactersStats.AMY.lactation + 1)
                }
                props.onAddMinutes(10);
                props.onPushFlag("AMYCommentsOnMilk1");
            }else if(drugToTake.includes("mindControl")){
                if(effectivenessMod > Math.random()){
                    props.onSetCharacterStats("Amy","mindControl", props.charactersStats.AMY.mindControl + 1)
                }
                props.onAddMinutes(10);
                props.onPushFlag("AMYCommentsOnMindControl1");
            }else if(drugToTake.includes("lust")){
                if(effectivenessMod > Math.random()){
                    props.onSetCharacterStats("Amy","lust", props.charactersStats.AMY.lust + 1)
                }
                props.onAddMinutes(10);
                props.onPushFlag("AMYCommentsOnLust1");
            }else if(drugToTake.includes("strength")){
                if(effectivenessMod > Math.random()){
                    props.onSetCharacterStats("Amy","strength", props.charactersStats.AMY.strength + 1)
                }
                props.onAddMinutes(10);
                props.onPushFlag("AMYCommentsOnStrength11");
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

                <p>I do like having new experiences. Hit me, what do you want me to take?</p>

                {
                itemKeys.map((item, indexKey)=>{
                    if(item.includes("drug")){
                        let drugNum = item.match(/\d+/)[0];
                            return(
                                    <Link to={props.CurrentLocation} style={{ textDecoration: "none" }} key = {indexKey+"convinceTakeDrugAMY"}>
                                        <button type="button" className="btn btn-primary" onClick = {()=> takeCertainDrug(item, drugNum)} disabled = {props.items[item] > 0? false: true} style ={{width: "190px"}}
                                        >
                                            {item.split(drugNum).join(" "," ") + " " + drugNum}</button>
                                    </Link> 
                                )
                        
                    }
                    
                })
                }
                

                
                <Link to={props.CurrentLocation} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GoBackFromDrug} style ={{width: "190px"}}>NAMYrmind</button>
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
                    props.onSetCharacterStats("Amy","breast", props.charactersStats.AMY.breast + 1)
                }
                props.onAddMinutes(10);
                props.onPushFlag("AMYCommentsOnLargerBreasts6");
            } else if(drugToTake.includes("height")){
                if(effectivenessMod > Math.random()){
                    props.onSetCharacterStats("Amy","height", props.charactersStats.AMY.height + 1)
                }
                props.onAddMinutes(10);
                props.onPushFlag("AMYCommentsOnTaller4");
            } else if(drugToTake.includes("lactation")){
                if(effectivenessMod > Math.random()){
                    props.onSetCharacterStats("Amy","lactation", props.charactersStats.AMY.lactation + 1)
                }
                props.onAddMinutes(10);
                props.onPushFlag("AMYCommentsOnMilk1");
            }else if(drugToTake.includes("mindControl")){
                if(effectivenessMod > Math.random()){
                    props.onSetCharacterStats("Amy","mindControl", props.charactersStats.AMY.mindControl + 1)
                }
                props.onAddMinutes(10);
                props.onPushFlag("AMYCommentsOnMindControl1");
            }else if(drugToTake.includes("lust")){
                if(effectivenessMod > Math.random()){
                    props.onSetCharacterStats("Amy","lust", props.charactersStats.AMY.lust + 1)
                }
                props.onAddMinutes(10);
                props.onPushFlag("AMYCommentsOnLust1");
            }else if(drugToTake.includes("strength")){
                if(effectivenessMod > Math.random()){
                    props.onSetCharacterStats("Amy","strength", props.charactersStats.AMY.strength + 1)
                }
                props.onAddMinutes(10);
                props.onPushFlag("AMYCommentsOnStrength11");
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

                <p>You stealthly manage to give AMYlyn the drug. Which drug will you give her?</p>
                <p>Oppossum tip: NAMYr do this in real life. ;) </p>

                {
                itemKeys.map((item, indexKey)=>{
                    if(item.includes("drug")){
                        let drugNum = item.match(/\d+/)[0];
                            return(
                                    <Link to={props.CurrentLocation} style={{ textDecoration: "none" }} key = {indexKey+"convinceTakeDrugAMY"}>
                                        <button type="button" className="btn btn-primary" onClick = {()=> takeCertainDrug(item, drugNum)} disabled = {props.items[item] > 0? false: true} style ={{width: "190px"}}
                                        >
                                            {item.split(drugNum).join(" "," ") + " " + drugNum}</button>
                                    </Link> 
                                )
                        
                    }
                    
                })
                }
                

                
                <Link to={props.CurrentLocation} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GoBackFromDrug} style ={{width: "190px"}}>NAMYrmind</button>
                </Link>  

                
                    
            </Col3>
            </>
  
      )
    } else if(props.flags.includes("STEALTH_TAKE_DRUG_FAIL")){

    }
    
    else {
        

        let GoToFlirt = () =>{
            props.onPushFlag("WITH_AMY");
            console.log(props.relations);
            if( (Math.random() *100 + props.relations.Amy) > 50  ){
                props.onPushFlag("FLIRTED_AMY");
                props.onChangeRelationship("Amy",Math.round(Math.random(),0))
            } else {
                props.onPushFlag("FLIRTED_AMY_BAD");
                props.onChangeRelationship("Amy",-Math.round(Math.random()/2,0))
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
      Amy: state.fullState.Amy,
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
  export default connect(mapStateToProps,mapDispatchToProps)(Amy);
  
  
