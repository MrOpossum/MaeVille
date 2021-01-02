import Button from '@material-ui/core/Button';
import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';



import Col1 from "../components/col1";
import Col2 from "../components/col2";
import Col3 from "../components/col3";

import Upload from "../components/Upload";


//Images
import madrid from '../Images/Banners/madrid.png'
import anri_emily_lying_down_transparent from '../Images/Characters/Anri-Flat-EM/anri-emily-lying_down_transparent.png';


const { EJSON } = require('bson');

const Beginning = ( props ) => {

    const [currentMongoUser, setCurrentMongoUser] = useState(props.mongoUser);

    const changeMongoUser = () =>{
        props.onSetMongoUser(currentMongoUser);
        if(currentMongoUser == ""){
            alert("Can't create empty user")
        } else{
            // now I have to check if exists, actually, call it, findone if you find it, set the state. And continue from save file?
            //TODO This is a patch, I need a server. I will get the data of all users, and the  pick the good one... 
            var url = 'https://webhooks.mongodb-realm.com/api/client/v2.0/app/maevilleusersstate-kwmuc/service/UserGet/incoming_webhook/getUser';
            let found_user = 0;
            fetch(url, {
            method: 'GET',
            }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                console.log('Success:', response)
                response.forEach((res)=>{
                    console.log(res)
                    let parsedJSON = EJSON.parse(JSON.stringify(res));
                    if(res.mongoUser.toLowerCase() == currentMongoUser.toLowerCase()){
                        console.log("MATCH", currentMongoUser);
                        let stateToSetFromMongo = {
                            mongoUser: parsedJSON.mongoUser,
                            fullState:{
                                ...parsedJSON.fullState,
                            }
                            
                        }
                        props.onSetState(stateToSetFromMongo);

                        found_user = 1;
                    }
                })

                if(found_user == 1){
                    alert("Login succesfull")
                } else{
                    alert("No user found. Creating user...");
                    // In your JS
                    let url = 'https://webhooks.mongodb-realm.com/api/client/v2.0/app/maevilleusersstate-kwmuc/service/userPost/incoming_webhook/postUser';
                    let data = {
                        mongoUser: currentMongoUser,
                        fullState: {
                            ...props.fullState
                        }
                    };

                    fetch(url, {
                    method: 'POST', // or 'PUT'
                    body: JSON.stringify(data), // data can be `string` or {object}!
                    headers:{
                        'Content-Type': 'application/json'
                    }
                    }).then(res => res.json())
                    .catch(error => {
                        console.error('Error:', error)
                        alert("Could not create user. The user might already be taken, or the server is down.");
                    })
                    .then( response => {
                            console.log('Success:', response)
                            let createdUserSuccessMessage = `Sucesfully created user: ` + currentMongoUser
                            alert(createdUserSuccessMessage)
                        }
                    );
                }
            });
        }
        

    }

    let disabledContinueButton = true

    if(props.date - new Date(2020,0,1,0,0) === 0){
    }else{
        disabledContinueButton = false;
    }

    let logTheFlags = () =>{
        console.log("Your flags are: ", props.flags);
        console.log(props.currentLink);
    }

    

    return(
            <>
            <Col1 BackImage = {madrid}>
                <h1 id="col_1_title"> MaeVille </h1>
            </Col1>
            <Col2 BackImage = {anri_emily_lying_down_transparent}>
                
            </Col2>

            <Col3> 
            <h2>Welcome, I hope you enjoy the game.</h2>
                <p>I plan to build an amazing open-world game for all transformation lovers.</p>
                <p>This game contains graphic adult content. Only play this if you are 18 or older</p>
                <Link to={"/_0_Start"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary">I can play the game</button>
                </Link>
                    <p>If you have a save file, upload it here</p>
                <Button>
                    <Upload/>    
                </Button>
                

                <Link to={props.currentLink} style={{ textDecoration: "none" }} >
                    <button type="button" className="btn btn-primary" disabled = {disabledContinueButton}
                    onClick = {logTheFlags}>Continue from save file</button>
                </Link>

                <p>If you like the game, feel free to check my <a href ="https://www.patreon.com/user?u=45785741&fan_landing=true">Patreon</a> The games latest updates, cheats and plans are there!</p>

                <p>If you already have a user, write it here and press the button</p>
                <TextField
                    value={currentMongoUser}
                    onChange={(event) => setCurrentMongoUser(event.target.value)}
                    placeholder={props.name}
                    style = {{marginLeft: "15px", backgroundColor:"white"}}
                />
                <p></p>
                <button type="button" className="btn btn-primary" onClick = {changeMongoUser}>Login with user or create user</button>
                

            </Col3>
            </>
        )



    }
export default Beginning;

