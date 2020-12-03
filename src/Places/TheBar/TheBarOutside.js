import React from "react";
import { Link } from "react-router-dom";

import Col1 from "../../components/col1";
import Col2 from "../../components/col2";
import Col3 from "../../components/col3";
import SetCol1 from "../../components/SetCol1";

//Images

import outsideBar from "../../Images/TheBar/outsideBar.jpg"

////SANTMQ




const TheBarOutside = (props) => {

    if(props.flags.includes("SANTMQSandyWillBeInBar")){
        let GoToGameMap = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("EVEMQMeetEveAtTheBar");
            props.onSpliceFlag("SANTMQSandyWillBeInBar");
            props.onPushFlag("BAR_DISCOVERED");
        }
        let GoToTheBar = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("EVEMQMeetEveAtTheBar");
            props.onSpliceFlag("SANTMQSandyWillBeInBar");
            props.onPushFlag("BAR_DISCOVERED");
        }

        
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {outsideBar}>
                    <img alt = {"Not found"} src = {props.SandyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
                   
                   <p>"Heyyoo" Hollers Sandy. "Welcome to the bar. This place is an absolute goldmine of information and hot gals. But you have to be careful. You don't want to go around angering people." </p>
                   <p>"You need to pay to enter the bar, and you can pay to access different sections of the bar. The richest wizards have the juiciest gossip."</p>
                   <p>"In the bar you can ask for news, gossip and most importantly, find girls" Sandy winks at you.</p>
                   <p>"Everyone you meet has something to offer, but if you piss them off, you might get cursed. Also be very careful if someone gives you anything. A ring, a weird drink, a shiny stone. If you ever get something like that, go to the store, Maria will tell you what it is."</p>
                   <p>"As I said, I have some things to do, but you should mingle around in the bar." Sandy takes some cash from her bag. "I'll pay for you this time"</p>

                    
    
                <Link to={"/TheBar"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GoToTheBar}>Enter the bar</button>
                </Link>  
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GoToGameMap}>Game map</button>
                </Link>  
            </Col3>
            </>
  
      )
    } 
    
    
    
    else {
        let GoToGameMap = () =>{
            props.onAddMinutes(10);
        }

        let EnterTheBar = () =>{
            props.onAddMinutes(10);
            props.onAddMoney(-100);
        }
    
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {outsideBar}>
            </Col2>  
    
            <Col3 > 
                   
                   <p></p>
    
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GoToGameMap}>Game map</button>
                </Link>  
                <Link to={"/TheBar"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {EnterTheBar} disabled = {(props.money > 100 ? false:true)}>Pay $100 to enter the bar</button>
                </Link>  
            </Col3>
            </>
  
      )

    }

}


export default TheBarOutside;