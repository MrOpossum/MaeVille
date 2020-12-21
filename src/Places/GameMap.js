import React from 'react';
import { Link } from 'react-router-dom';
import Col1 from "../components/col1";
import Col2 from "../components/col2";
import Col3 from "../components/col3";
import SetCol1 from "../components/SetCol1";


//Images
import CityMap from "../Images/Map/sageort.png"



const GameMap = ( props ) => {


    if(props.flags.includes("NO_MORE_ENERGY")){
        return(
            <>
            <Col1>
                <SetCol1/>
            </Col1>
            <Col2 BackImage = {""}>            
            </Col2>
    
            <Col3 > 
                    <Link to={"/SleepAtHome"} style={{ textDecoration: "none" }}>
                        <button type="button" className="btn btn-primary" style = {{width: props.standardButtonWidth}}>You have no more energy, lets go home</button>
                    </Link>
            
            </Col3>
            </>
            )
        }
    else{

    
    
    const goToFarmClick = () =>{
        props.onAddMinutes(30);
    }

    const goToHomeClick = () =>{
        props.onAddMinutes(20);
    }
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {CityMap}>
                
            </Col2>
    
            <Col3 > 
                <p>Where to go?</p>

                
                
                <Link to={"/Apartment"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {goToHomeClick} style = {{width: props.standardButtonWidth}}>Home</button>
                </Link>
                <Link to={"/TheBarn"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {goToFarmClick} style = {{width: props.standardButtonWidth}}>Farm</button>
                </Link>
                <Link to={"/TheStore"} style = {{
                        display:(props.flags.includes("STORE_DISCOVERED") ? "": "none")
                    }}
                >
                    <button type="button" className="btn btn-primary" onClick={goToHomeClick} style = {{width: props.standardButtonWidth}}>The store</button>
                </Link>
                <Link to={"/TheFurForest"} style = {{
                        display:(props.flags.includes("FUR_FOREST_DISCOVERED") ? "": "none")
                    }}
                >
                    <button type="button" className="btn btn-primary" onClick={goToHomeClick} style = {{width: props.standardButtonWidth}}>The Fur forest</button>
                </Link>
                <Link to={"/TheBarOutside"} style = {{
                        display:(props.flags.includes("BAR_DISCOVERED") ? "": "none")
                    }}
                >
                    <button type="button" className="btn btn-primary" onClick={goToHomeClick} style = {{width: props.standardButtonWidth}}>The Bar</button>
                </Link>

                <Link to={"/TheHill"} style = {{
                        display:(props.flags.includes("HILL_DISCOVERED") ? "": "none")
                    }}
                >
                    <button type="button" className="btn btn-primary" onClick={goToHomeClick} style = {{width: props.standardButtonWidth}}>The Hill</button>
                </Link>


                <Link to={"/TheLabOutside"} style = {{
                        display:(props.flags.includes("LAB_DISCOVERED") ? "": "none")
                    }}
                >
                    <button type="button" className="btn btn-primary" onClick={goToHomeClick} style = {{width: props.standardButtonWidth}}>The Lab</button>
                </Link>

                <Link to={"/TheGalleryOutside"} style = {{
                        display:(props.flags.includes("GALLERY_DISCOVERED") ? "": "none")
                    }}
                >
                    <button type="button" className="btn btn-primary" onClick={goToHomeClick} style = {{width: props.standardButtonWidth}}>The gallery</button>
                </Link>

                <Link to={"/TheAcademyOutside"} style = {{
                        display:(props.flags.includes("ACADEMY_DISCOVERED") ? "": "none")
                    }}
                >
                    <button type="button" className="btn btn-primary" onClick={goToHomeClick} style = {{width: props.standardButtonWidth}}>The Academy</button>
                </Link>                
                
                   
    
            </Col3>
            </>

            )
    }
}


export default GameMap;

