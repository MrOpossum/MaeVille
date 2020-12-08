import React from "react";
import { Link } from "react-router-dom";

import Col1 from "../../components/col1";
import Col2 from "../../components/col2";
import Col3 from "../../components/col3";
import SetCol1 from "../../components/SetCol1";

//Images
import TheStoreFront from "../../Images/TheStore/TheStoreFront.jpg";


////SANTMQ




const TheStore = (props) => {

    if(props.flags.includes("SANTMQSandyWillBeInStore")){
        let GoToGameMap = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("SANTMQFindPirateInFurForestSandyWillBeInForest");
            props.onSpliceFlag("SANTMQSandyWillBeInStore");
            props.onPushFlag("FUR_FOREST_DISCOVERED");
        }
    
        let GoToTheFurForest = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("SANTMQFindPirateInFurForestSandyWillBeInForest");
            props.onSpliceFlag("SANTMQSandyWillBeInStore");
            props.onPushFlag("FUR_FOREST_DISCOVERED");
        }
    
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {TheStoreFront}>
                    <img alt = {"Not found"} src = {props.SandyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                    <img alt = {"Not found"} src = {props.MariaImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
                   
                    
                    <p>You enter the store, and feel the magic, every item in the shelves exhudes energy. You feel tight, you feel heavy, it's diffcult to move. </p>

                    <p>You see Sandy and the store clerk talking.</p>            
                    
                    <p>"Hey! You are here" Sandy says. "Turns out the rune is pretty expensive, so this lovely woman is willing to trade". You look at the beautiful clerk, she's a middle aged bustly latina. </p>

                    <p>"I want you to find my cat, 'pirate' he can usually take care of himself but I have not seen him in two days and I'm getting worried." Her silky voice requests.</p>

                    <p>"Of course we will, Maria!" Answers Sandy. Not giving you a chance to talk.</p>

                    <p>"Delightful" Answers Maria, the store clerk. "Last time I saw him he was around the Fur forest, You should look around there."</p>
                    
                    <p>You notice how Sandy flinches a bit. "Can you do it?" Asks Maria. "Of course we can!" Responds Sandy. "Let's go {props.name}, We need to find 'pirate'". Sandy grabs your hand and drags outside.</p>
    
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GoToGameMap}>Game map</button>
                </Link>  
                <Link to={"/TheFurForest"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GoToTheFurForest}>Lets go to the forest</button>
                </Link>  
            </Col3>
            </>
  
      )
    } else if(props.flags.includes("SANTMQSandyInStoreRecoveredTheCat")){
        let GoToGameMap = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("SANTMQSandyInStoreRecoveredTheCat");
            props.onPushFlag("BAR_DISCOVERED");
            props.onPushFlag("SANTMQSandyWillBeInBar");
        }

        let GoToTheBar = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("SANTMQSandyWillBeInBar");
            props.onSpliceFlag("SANTMQSandyInStoreRecoveredTheCat");
            props.onPushFlag("BAR_DISCOVERED");
        }
    
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {TheStoreFront}>
                    <img alt = {"Not found"} src = {props.SandyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                    <img alt = {"Not found"} src = {props.MariaImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
                   
                   <p>When you enter the store you see Sandy talking to Maria. Pirate is mingling around the store, nimbly moving in between trinkets and stones.</p>
                    <p>"Thank you" Says maria. "That cat loves getting into trouble".</p>
                    <p>"You are welcome!" Says Sandy. "We had to go through so much to get him. First we got to the forest and the entrance was so..."</p>                    
                    <p>"Here is your rune" Maria interrupts.</p>
                    <p>Sandy smiles, looks at you and points to the run like a kid with a new toy.</p>
                    <p>"{props.name}, We got this toghether, and I don't think it's fair for me to run out with the rune. Here, have $150, It's as much money as I can give you."</p>
                    <p>"I will take care of the next steps to get myself some larger titties with this baby. Even if it's just a cup size. But first, let me take to the bar, it's a place where mages hang out, you could even pick up someone there." Sandy winks.</p>
    
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GoToGameMap}>Game map</button>
                </Link>  
                <Link to={"/TheBarOutside"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GoToTheBar}>Lets go to the bar</button>
                </Link>  
            </Col3>
            </>
  
      )
    }
    
    
    
    else {
        let GoToGameMap = () =>{
            props.onAddMinutes(10);
        }
    
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {TheStoreFront}>
                    <img alt = {"Not found"} src = {props.MariaImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
                   
                   <p>Welcome darling. What do you want to buy?</p>
    
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GoToGameMap}>Game map</button>
                </Link>  
            </Col3>
            </>
  
      )

    }

}


export default TheStore;