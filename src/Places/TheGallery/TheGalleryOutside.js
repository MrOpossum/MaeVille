import React from "react";
import { Link } from "react-router-dom";

import Col1 from "../../components/col1";
import Col2 from "../../components/col2";
import Col3 from "../../components/col3";
import SetCol1 from "../../components/SetCol1";

//Images
import TheGalleryOutsideImage from "../../Images/TheGallery/GalleryOutside.png";
import Troll_1_manni from "../../Images/TheGallery/troll_1_manni.png";
import Troll_2_meat from "../../Images/TheGallery/troll_2_meat.png";

const TheGalleryOutside = (props) => {


     if(props.mind < 11){
        let GoToGameMap = () =>{
            props.onAddMinutes(10);
            if(!props.flags.includes("ACADEMY_DISCOVERED")){
                props.onPushFlag("AMYwillShowYouAcademy");
            }
        }
    
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {TheGalleryOutsideImage}>
            <img alt ={"Not found"} src={Troll_1_manni} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                <img alt ={"Not found"} src={Troll_2_meat} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
            
            <Col3 > 

                <p>You see two burly men blocking the entrance. They look at you.</p>
                <p>"Look at this tiny piece, Meat" Says one of the men. The other men chuckles. "I kno' Manni. I could crush he tiny head."</p>
                <p>"There is an art inside. And you can't go in. You not smart enough." The two large humanoid creatures laugh.</p>
                <p>A third person comes out. He's slender and tall. "This... Gentlemen are right." He composes himself. "I can't let you in. If you go inside with your current... `smarts`. You would go mad, or in the best case, you'd die." The men goes back in. </p>
                <p>Meat then whispers to Manni. "That guy is scary" His voice shaky. And they ignore you</p>
                   
                   
    
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GoToGameMap} >Game map</button>
                </Link>  
            </Col3>
            </>
  
      )
    }
    
    
    
    else {
        let goToGameMap = () =>{
            props.onAddMinutes(10);
        }

        let EnterGallery = () =>{
            props.onAddMinutes(10);
        }
        
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {TheGalleryOutsideImage}>
                    
            </Col2>  
    
            <Col3 > 

    
                <Link to={"/TheGallery"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {EnterGallery}>Enter gallery</button>
                </Link>  
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {goToGameMap}>Game map</button>
                </Link>  
            </Col3>
            </>
  
      )

    }

}


export default TheGalleryOutside;