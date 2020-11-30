import React from 'react';
import { Link } from 'react-router-dom';
import Col1 from "../components/col1";
import Col2 from "../components/col2";
import Col3 from "../components/col3";
import SetCol1 from "../components/SetCol1";


//Images
import CityMap from "../Images/Map/sageort.png"



const GameMap = ( props ) => {

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
                money = {props.money}
                energy = {props.energy}
                date = {props.date}
                onAddMinutes = {props.onAddMinutes}
                onAddEnergy = {props.onAddMinutes}
                />
            </Col1>
            <Col2 BackImage = {CityMap}>
                
            </Col2>
    
            <Col3 > 
                
                <p>Where to go?</p>
                
                <Link to={"/Apartment"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {goToHomeClick}>Home</button>
                </Link>
                <Link to={"/TheBarn"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {goToFarmClick}>Farm</button>
                </Link>
                <Link to={"/TheStore"} style = {{
                        display:(props.flags.includes("STORE_DISCOVERED") ? "": "none")
                    }}
                >
                    <button type="button" className="btn btn-primary" onClick={goToHomeClick}>The store</button>
                </Link>
                <Link to={"/TheFurForest"} style = {{
                        display:(props.flags.includes("FUR_FOREST_DISCOVERED") ? "": "none")
                    }}
                >
                    <button type="button" className="btn btn-primary" onClick={goToHomeClick}>The Fur forest</button>
                </Link>
                <Link to={"/TwilightLabs"} style={{ textDecoration: "none" , display: "none"}}>
                    <button type="button" className="btn btn-primary" disabled>Twilight Labs</button>
                </Link>

                
                   
    
            </Col3>
            </>

            )
    }


export default GameMap;
