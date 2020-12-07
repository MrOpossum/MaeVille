import React from "react";
import { Link } from "react-router-dom";

import Col1 from "../../components/col1";
import Col2 from "../../components/col2";
import Col3 from "../../components/col3";
import SetCol1 from "../../components/SetCol1";

//Images
import outsideLab from "../../Images/TheLab/TheLabOutside.jpg"

////SANTMQ




const TheLabOutside = (props) => {

    if(props.flags.includes("SCIENCELABQSStartInLab")){
        
        let TLQStartMaddyTalksToYouFirst = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("TLQStartMaddyTalksToYouFirst");
            props.onSpliceFlag("SCIENCELABQSStartInLab");
            props.onPushFlag("MET_MADDY");
        }

        
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {outsideLab}>
                    <img alt = {"Not found"} src = {props.MaddyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
                   
            <p>The buiding is large and intimidating. With the logo of the lab at the very top. You see two woman in lab coats. One sees you peeping, smiles at you and heads towards you.</p>
                    
    
                <Link to={"/TheLabOutside"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {TLQStartMaddyTalksToYouFirst}>A young blonde approaches you</button>
                </Link>  
            </Col3>
            </>
  
      )
    } else if(props.flags.includes("TLQStartMaddyTalksToYouFirst")){
        let TLQStartYesToInternship = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("TLQStartYesToInternship");
            props.onSpliceFlag("TLQStartMaddyTalksToYouFirst");
        }

        
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {outsideLab}>
                    <img alt = {"Not found"} src = {props.MaddyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
                   
                <p>"Hello" The woman says kindly. Are you here because of the internship?</p>
                    
    
                <Link to={"/TheLabOutside"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {TLQStartYesToInternship}>Yes</button>
                </Link>  
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary">Game map</button>
                </Link>  
            </Col3>
            </>
  
      )
    } else if(props.flags.includes("TLQStartYesToInternship")){
        let TLQStartSignContract = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("TLQStartYesToInternship");
            props.onPushFlag("TLQStartSignContract");
            props.onAddMoney(400);
        }

        
    
        return(
            <>
            <Col1>
                <SetCol1/>
            </Col1>
            <Col2 BackImage = {outsideLab}>
                    <img alt = {"Not found"} src = {props.MaddyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
                   
                   <p>"Perfect!" The woman says. "We are growing really fast and we need the help"</p>
                    <p>"The job is really simple. You get a weekly budget, and with that you buy equipment, chemicals, runes and whatever you need." She pauses. And straightens herself.</p>
                    <p>"You will report your advances to me every week. And depending on your successes you will be rewared... Or punished." </p>
                    <p>The girl hands you a contract.</p>

                    <p>"It says that we are not responsible for any..." Madeline pauses "Mishap that might happen to you. It also includes your starting bonus of 200$ and your starting budget of 200$ a week."</p>
    
                <Link to={"/TheLabOutside"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {TLQStartSignContract}>Sign the contract</button>
                </Link>  
                
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary">Game map</button>
                </Link>  
            </Col3>
            </>
  
      ) 
    }  else if(props.flags.includes("TLQStartSignContract")){
        let TLQStartGoToLab = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("TLQStartSignContract");
            props.onPushFlag("TLQStartGoToLab");
            props.onPushFlag("CanAccessLab");
        }

        
    
        return(
            <>
            <Col1>
                <SetCol1/>
            </Col1>
            <Col2 BackImage = {outsideLab}>
                    <img alt = {"Not found"} src = {props.MaddyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
                   
                   <p>"Splendid" The woman says. She extends her hand "I am Madeline. Welcome to twilight labs"
                    "Your schedule is up to you. But make sure you allocate enough time for your experiments to complete. Things don't get done instantly."</p>
                    <p>You can go inside at any time. I'll help you get aquainted with the job.</p>


    
                <Link to={"/TheLab"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {TLQStartGoToLab}>go to the lab</button>
                </Link>  
                
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {TLQStartGoToLab}>Game map</button>
                </Link>  
            </Col3>
            </>
  
      ) 
    }
    
    
    
    else {
        let GoToGameMap = () =>{
            props.onAddMinutes(10);
        }

        let EnterTheLab = () =>{
            props.onAddMinutes(10);
        }
    
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {outsideLab}>
            </Col2>  
    
            <Col3 > 
                   
                   <p></p>
    
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GoToGameMap}>Game map</button>
                </Link>  
                <Link to={"/TheLab"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {EnterTheLab} disabled = {(props.flags.includes("CanAccessLab") ? false:true)}>Go to the lab</button>
                </Link>  
            </Col3>
            </>
  
      )

    }

}


export default TheLabOutside;