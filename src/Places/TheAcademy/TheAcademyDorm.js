import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

import Col1 from "../../components/col1";
import Col2 from "../../components/col2";
import Col3 from "../../components/col3";
import SetCol1 from "../../components/SetCol1";

//Images
import DormRoom from "../../Images/TheAcademy/DormRoom.png";

const TheAcademyDorm = (props) => {

    const [inputTextValue, setInputTextValue] = useState("");

    if(props.flags.includes("GoToDormAtAcademyAfterIntroduction")){
        let InspectTheCloset = () =>{
            props.onAddMinutes(10);
            props.onPushFlags("InspectTheClosetInDorm");
            props.onSpliceFlag("GoToDormAtAcademyAfterIntroduction");
        }

        let LeaveTheDormShowerAlert = () =>{
            props.onAddMinutes(10);
            props.onPushFlags("FirstShowerInDorm");
            props.onSpliceFlag("GoToDormAtAcademyAfterIntroduction");
            alert("Just as you tried to leave, an anouncement blared on the air: 'All girls to the shower. I repeat, it's time to shower'. \n You see no speakers, the sound seems to be directly in your head. You see a trove of girls moving through the hall.");
            alert("Mary bumps with you. 'Let's go. Lisa does not like anyone to be tardy.' Mary then joins the wave of girls and you follow.");
        }

        let TalkToMaryInDormSheIsUnpacking = () =>{
            props.onAddMinutes(10);
            alert("Mary looks at you. 'I wish I could talk, but I need to finish unpacking before the shower call'. Mary then continues unpacking");
        }
    
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {DormRoom}>
                
            </Col2>  
            
            <Col3 > 

               <p>You enter a large room with three beds. You see a girl furiously unpacking two suitcases. "Damn it Nikky. Why do my parents let you do this, I allways end up picking up after you, and if I don't I allways get the blame." Mutters the girl, at enough volume for you to hear her.</p>
               <p>The door closes and the girl realizes you have been listening to her. She squeaks. "You scared me!" Her voice cracking a bit. "I was just organizing my" She pauses. "And my sisters stuff. We just arrived and she fled. Now I have to organize everything." The girl goes back to unpacking. "And would you look at that. NO TOOTHBRUSH!" She complains.</p>
               <p>"I am Mary" The woman says.</p>
               <p>"I am {props.name}" You answer.</p>
               <p>You realize there is a bed labeled with your name. You have a personal closet and a drawer.</p>

                
                   
                <Link to={"/TheAcademyDorm"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {InspectTheCloset} >Inspect the closet</button>
                </Link>  
                <Link to={"/TheAcademyDorm"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LeaveTheDormShowerAlert} >Leave the dorm</button>
                </Link>  
                <Link to={"/TheAcademyDorm"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {TalkToMaryInDormSheIsUnpacking} >Talk to Mary</button>
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
            <Col2 BackImage = {DormRoom}>
                    
            </Col2>  
    
            <Col3 > 
                   
                   
    
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GoToGameMap}>Game map</button>
                </Link>  
            </Col3>
            </>
  
      )

    }

}


export default TheAcademyDorm;