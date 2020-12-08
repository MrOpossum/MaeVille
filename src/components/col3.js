import React from 'react';


//This alone creates a function that we can use as a component
//Does not work when I use props: Lets use class. I like class more... Turns out he says using function components is better.

const Col3 = ( props ) => {

    const myStyleCol = {
        backgroundImage: `url(${props.BackImage})`,
        backgroundSize: `${props.backSize}`,
        backgroundRepeat: `${props.backRepeat}`,
        backgroundPosition: `${props.backPosition}`,
      };

    const myStyleRow = {
        backgroundColor: `rgba(44, 41, 41, 0.26)`,
        paddingBottom: `10px`,
    }
    return( 
        <div className="row" id="index_row_2" style={myStyleRow}>
            <div className = "col-12" id = "index_col_2" style={myStyleCol}>
                {props.children}
            </div>    
        </div>
    );

}

export default Col3;
