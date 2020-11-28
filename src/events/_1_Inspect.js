import React from 'react';
import { Link } from 'react-router-dom';

import Col1 from "../components/col1";
import Col2 from "../components/col2";
import Col3 from "../components/col3";


//Images
import madrid from '../Images/Banners/madrid.png'
import Window_black_pink_flash from "../Images/Bedroom/Window_black_pink_flash.png"


const _1_Inspect = ( props ) => {

    const setHour = () =>{
        props.onSetHour(8);
        props.onPushFlag("FirstMorningFap");
    }

    return(
        <>
        <Col1 BackImage = {madrid}>
          <h1 id="col_1_title"> MayVille </h1>
        </Col1>
        <Col2 BackImage = {Window_black_pink_flash}>
        <p>
                You get closer to the window, and you distinguish two silhouettes, it seems like two woman are...
                
            </p>
            <p>A purple flash blinds you. and everything goes dark.</p>
        </Col2>

        <Col3 > 
        <Link to={"/Apartment"} style={{ textDecoration: "none" }}>
            <button type="button" className="btn btn-primary"onClick={setHour}>The next morining</button>
        </Link>
        </Col3>
        </>
        )



    }
export default _1_Inspect;
