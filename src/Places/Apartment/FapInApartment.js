import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Col1 from "../../components/col1";
import Col2 from "../../components/col2";
import Col3 from "../../components/col3";
import SetCol1 from "../../components/SetCol1";


//Images
import Bedroom from "../../Images/Bedroom/Apartment.jpg";


const FapInApartment = ( props ) => {

    const addMinutesFunc = () =>{
        props.onAddMinutes(10);
    }

    return(
        <>
        <Col1>
            <SetCol1
                money = {props.money}
                energy = {props.energy}
                date = {props.date}
            />
        </Col1>
        <Col2 BackImage = {Bedroom}>            
        </Col2>

        <Col3 > 
            <p>*Fap* *Fap* *Fap*</p>

            <Link to={"/Home"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick={addMinutesFunc}>You spend a few minutes relieving youself.</button>
            </Link>

        </Col3>
        </>
        )
}


    

export default FapInApartment;

