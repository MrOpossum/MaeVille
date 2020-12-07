import React from 'react';


//This alone creates a function that we can use as a component
//Does not work when I use props: Lets use class. I like class more... Turns out he says using function components is better.

const Col2 = ( props ) => {


    const myStyleCol = {
        backgroundImage: `url(${(props.BackImage)})`,
        backgroundSize: `${(props.backSize || "cover")}`,
        backgroundRepeat: `${(props.backRepeat || "no-repeat")}`,
        backgroundPosition: `${(props.backPosition || "center")}`,
        minWidth:"420px",
        minHeight: "420px"
        
      };
    
    let rowHeight = "440px"
    window.innerHeight *.73 > 440 ? rowHeight = "73vh" : rowHeight = "440px";
    const myStyleRow = {
        height: {rowHeight},
        minHeight: "440px",
        minWidth:"420px",
    }

    return( 
        <div className="row" id="index_row_2" style={myStyleRow}>
            <div className = "col-12" id = "index_col_2" style={myStyleCol}>
                {props.children}
            </div>    
        </div>
    );

}

export default Col2;
