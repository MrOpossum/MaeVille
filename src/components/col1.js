import React from 'react';

//This alone creates a function that we can use as a component
//Does not work when I use props: Lets use class. I like class more... Turns out he says using function components is better.

const Col1 = ( props ) => {

    let myStyleCol = {
        backgroundImage: `url(${props.BackImage})`,
        backgroundSize: `${props.backSize}`,
      };
    let myStyleRow = {
        minHeight:`120px`,
    }


    return( 
        <div className="row" id="index_row_1" style={myStyleRow}>
            <div className = "col-12" id = "index_col_1" style={myStyleCol}>
                {props.children}
            </div>    
        </div>
    );

}

/*
<p id = "col_1_stats"> Energy: ${main_character.energy} &nbsp &nbsp &nbsp Lust: ${main_character.lust} &nbsp &nbsp &nbsp &nbsp &nbsp ${game_date.toString().slice(0,21)} &nbsp &nbsp &nbsp cash: $${main_character.money}</p>
*/

export default Col1;
