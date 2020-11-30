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
                    <img alt = {"Not found"} src = {props.MariaImage} style ={{width : "25vw", height: props.characterImageHeight}}></img>
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
    }   else {
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