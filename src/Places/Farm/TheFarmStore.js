import React from 'react';
import { Link } from 'react-router-dom';
import Col1 from "../../components/col1";
import Col2 from "../../components/col2";
import Col3 from "../../components/col3";
import SetCol1 from "../../components/SetCol1";


//Images
import FarmStore from "../../Images/Farm/FarmStore.jpg";
import FarmStoreWithAmyAndFarmgirlOwner from "../../Images/Farm/FarmStoreWithAmyAndFarmgirlOwner.png"



const TheFarmStore = ( props ) => {

    const addMinutesFunc = () =>{
        props.onAddMinutes(10)
    }

    if(props.flags.includes("LACBRAQGoToFarmDateWithSandy")){
        let LACBRAQPickIceCreamFlavourAndEatItInSandyDate = () =>{
            props.onChangeRelationship("Sandy",2);
            props.onAddMinutes(10);
            props.onPushFlag("LACBRAQPickIceCreamFlavourAndEatItInSandyDate");
            props.onPushFlag("DrankMilkwithLacBracelet");
            props.onSpliceFlag("LACBRAQGoToFarmDateWithSandy");
        }        
        let LACBRAQIdontwanticecreamSandyShovesDownThroat = () =>{
            props.onChangeRelationship("Sandy",-1);
            props.onAddMinutes(10);
            props.onPushFlag("LACBRAQIdontwanticecreamSandyShovesDownThroat");
            props.onPushFlag("DrankMilkwithLacBracelet");
            props.onSpliceFlag("LACBRAQGoToFarmDateWithSandy");
        }        

        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {FarmStoreWithAmyAndFarmgirlOwner}>
                
            </Col2>
            
            <Col3 > 
            <p>There it is! The ice cream machine, It's made with the freshest milk. If you have never had Ice cream made with fresh milk you will absolutely love this, its creamy, it's sweet, it's delicious! Which flavour do you want?</p>

                <Link to={"/TheFarmStore"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LACBRAQPickIceCreamFlavourAndEatItInSandyDate}>Pick a flavour and eat the ice cream</button>
                </Link>  
                <Link to={"/TheFarmStore"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LACBRAQIdontwanticecreamSandyShovesDownThroat}>Actually. I would rather not eat the ice cream</button>
                </Link>                   
            </Col3>
            </>
        )
    
    } else if(props.flags.includes("LACBRAQIdontwanticecreamSandyShovesDownThroat")){
        let LACBRAQPickIceCreamFlavourAndEatItInSandyDate = () =>{
            props.onChangeRelationship("Sandy",2);
            props.onAddMinutes(10);
            props.onPushFlag("LACBRAQPickIceCreamFlavourAndEatItInSandyDate");
            props.onSpliceFlag("LACBRAQIdontwanticecreamSandyShovesDownThroat");
        }   
        let LACBRAQIdontwanticecreamSandyShovesDownThroat_2 = () =>{
            props.onChangeRelationship("Sandy",-1);
            props.onAddMinutes(10);
            props.onPushFlag("LACBRAQIdontwanticecreamSandyShovesDownThroat_2");
            props.onSpliceFlag("LACBRAQIdontwanticecreamSandyShovesDownThroat");
        }   

        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {FarmStoreWithAmyAndFarmgirlOwner}>
                
            </Col2>
            
            <Col3 > 
            <p>"Whaaaat?!, Why?!" You distinguish a bit of frustration in her voice. "But it's soo good. It's the best ice cream you will ever taste. Ain't that right miss? - she asks the clerkwoman.</p>
            <p>"Yes it is!" The clerkwoman says. "And because I really liked this lady I will give you a cone for free!" </p>
            <p>"Come on {props.name}, you can't refuse such an offer!</p>
                <Link to={"/TheFarmStore"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LACBRAQPickIceCreamFlavourAndEatItInSandyDate}>Pick a flavour and eat the ice cream</button>
                </Link>  
                <Link to={"/TheFarmStore"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LACBRAQIdontwanticecreamSandyShovesDownThroat_2}>Sorry, I don't really feel like it</button>
                </Link>                   
            </Col3>
            </>
        )
    } else if(props.flags.includes("LACBRAQIdontwanticecreamSandyShovesDownThroat_2")){
        let LACBRAQWalkAroundBarnWithSandy = () =>{
            props.onChangeRelationship("Sandy",5);
            props.onAddMinutes(10);
            props.onPushFlag("LACBRAQWalkAroundBarnWithSandy");
            props.onSpliceFlag("LACBRAQIdontwanticecreamSandyShovesDownThroat_2");
        }   
        let LACBRAQAskSandyIfSheWantsToGoBackHome = () =>{
            props.onChangeRelationship("Sandy",3);
            props.onAddMinutes(10);
            props.onPushFlag("LACBRAQAskSandyIfSheWantsToGoBackHome");
            props.onSpliceFlag("LACBRAQIdontwanticecreamSandyShovesDownThroat_2");
            props.onSpliceFlag("LACBRAQRefusedToGiveSandyBracelet");
        }    
        let LACBRAQGoHomeAloneAfterFarmDateSandy = () =>{
            props.onChangeRelationship("Sandy",1);
            props.onAddMinutes(10);
            props.onPushFlag("LACBRAQGoHomeAloneAfterFarmDateSandy");
            props.onSpliceFlag("LACBRAQIdontwanticecreamSandyShovesDownThroat_2");
        }            

        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {FarmStoreWithAmyAndFarmgirlOwner}>    
            </Col2>
            
            <Col3 > 
            <p>Sandy frowns. She looks at you in the eyes. Your heart skips. Sandy takes a large bite from her ice cream. Gets closer to you. And kisses you.</p>
            <p>Her cold soft lips press against yours. And you start choking, she pushes all of the ice cream down your thoat. You cough for a bit. But the ice cream is really good.</p>
            <p>Sandy winks. "Isn't the ice cream good" She giggles.</p>
            <p>"You know, our date is not over. Do you want to walk around the farm? I can show how everything works.."</p>
                
                <Link to={"/TheBarn"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LACBRAQWalkAroundBarnWithSandy}>Sure.</button>
                </Link>  
                <Link to={"/GoOutside"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LACBRAQAskSandyIfSheWantsToGoBackHome}>It's getting late. You ask sandy if she wants to go back home</button>
                </Link>   
                <Link to={"/Home"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LACBRAQGoHomeAloneAfterFarmDateSandy}>I can't right now, I want to go home alone</button>
                </Link>                           
            </Col3>
            </>
        )
    } else if(props.flags.includes("LACBRAQPickIceCreamFlavourAndEatItInSandyDate")){
        let LACBRAQWalkAroundBarnWithSandy = () =>{
            props.onChangeRelationship("Sandy",5);
            props.onAddMinutes(10);
            props.onPushFlag("LACBRAQWalkAroundBarnWithSandy");
            props.onSpliceFlag("LACBRAQPickIceCreamFlavourAndEatItInSandyDate");
        }   
        let LACBRAQAskSandyIfSheWantsToGoBackHome = () =>{
            props.onChangeRelationship("Sandy",3);
            props.onAddMinutes(10);
            props.onPushFlag("LACBRAQAskSandyIfSheWantsToGoBackHome");
            props.onSpliceFlag("DrankMilkwithLacBracelet");
            props.onSpliceFlag("LACBRAQPickIceCreamFlavourAndEatItInSandyDate");
            props.onSpliceFlag("LACBRAQRefusedToGiveSandyBracelet");
        }    
        let LACBRAQGoHomeAloneAfterFarmDateSandy = () =>{
            props.onChangeRelationship("Sandy",1);
            props.onAddMinutes(10);
            props.onSpliceFlag("LACBRAQPickIceCreamFlavourAndEatItInSandyDate");
        }            

        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {FarmStoreWithAmyAndFarmgirlOwner}>    
            </Col2>
            
            <Col3 > 
            <p>"Yay! You will love it" Says Sandy, and the clerkwoman also smiles.</p>
            <p>You start eating the ice cream and it is delectable. Every bite sends shivers down your spine. </p>
            <p>"You love it!" Sandy exclaims. "I told you it was awesome!" Sandy looks at the clerkwoman.</p>
            <p>"You know, I love seeing peoples reaction when they eat fresh ice cream for the first time. It's always lovely." The clerkwoman commented with a smile.</p>
            <p>After you finish your ice cream Sandy looks at you.</p>
            <p>"You know, our date is not over. Do you want to walk around the farm? I can show how everything works.."</p>
                
                <Link to={"/TheBarn"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LACBRAQWalkAroundBarnWithSandy}>Sure.</button>
                </Link>  
                <Link to={"/GoOutside"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LACBRAQAskSandyIfSheWantsToGoBackHome}>It's getting late. You ask sandy if she wants to go back home</button>
                </Link>   
                <Link to={"/Home"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LACBRAQGoHomeAloneAfterFarmDateSandy}>I can't right now, I want to go home alone</button>
                </Link>                           
            </Col3>
            </>
        )
    }
    
    /*
    LACBRAQWalkAroundBarnWithSandy
    LACBRAQAskSandyIfSheWantsToGoBackHome
    LACBRAQGoHomeAloneAfterFarmDateSandy
    */
    
    else{
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {FarmStore}>
                
            </Col2>
    
            <Col3 > 
                <p>You are at the farm store. Look at what's for sale.</p>
              
    
                <Link to={"/TheBarn"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick={addMinutesFunc}>To the barn</button>
                </Link>
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick={addMinutesFunc}>Game Map</button>
                </Link>
                <Link to={"/TheFarmStore"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick={addMinutesFunc}>Buy Milk - 5$</button>
                </Link>


    
            </Col3>
            </>
            )
    }


    



    }
export default TheFarmStore;

