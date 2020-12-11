import React from "react";
import { Link } from "react-router-dom";

import Col1 from "../../components/col1";
import Col2 from "../../components/col2";
import Col3 from "../../components/col3";
import SetCol1 from "../../components/SetCol1";

//Images


////SANTMQ




const TheGalleryOutside = (props) => {

    if(props.flags.includes("asdasdads")){

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
            <Col2 BackImage = {TheGallery}>
                    
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


export default TheGalleryOutside;