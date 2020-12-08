import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import React from "react";


import Col1 from "../../components/col1";
import Col2 from "../../components/col2";
import Col3 from "../../components/col3";
import SetCol1 from "../../components/SetCol1";

//Images
import TheLabInside from "../../Images/TheLab/TheLabInside.jpg";




let currentYear = 2020;
const TheLab = (props) => {

    const ingredientList = [
        {
            name:"elven Powder",
            price: 60,
            action: () =>{
                props.onAddItem("elvenPowder",1);
                props.onAddMoney(-60)
            }
        },
        {
            name:"cowgirl milk",
            price: 35,
            action: () =>{
                props.onAddItem("cowgirlMilk",1);
                props.onAddMoney(-35)
            }
        },
        {
            name:"enhanced silicone",
            price: 80,
            action: () =>{
                props.onAddItem("enhancedSilicone",1);
                props.onAddMoney(-80)
            }
        },
        {
            name:"enchanted Iron",
            price: 120,
            action: () =>{
                props.onAddItem("enchantedIron",1);
                props.onAddMoney(-120)
            }
        },
        {
            name:"brazilian spider Venom",
            price: 50,
            action: () =>{
                props.onAddItem("brazilianSpiderVenom",1);
                props.onAddMoney(-50)
            }
        },
    ]

    const equipmentList = [
        {
            name:"centrifuge",
            price: 1200,
            action: () =>{
                props.onAddItem("centrifuge",1);
                props.onAddMoney(-600)
            }
        },
        {
            name:"oven",
            price: 800,
            action: () =>{
                props.onAddItem("oven",1);
                props.onAddMoney(-800)
            }
        },
        {
            name:"microscope",
            price: 600,
            action: () =>{
                props.onAddItem("microscope",1);
                props.onAddMoney(-600)
            }
        },
        {
            name:"mana Infuser",
            price: 3000,
            action: () =>{
                props.onAddItem("manaInfuser",1);
                props.onAddMoney(-3000)
            }
        },
    ]

    const prepareList = [
        {
            name:"Height I",
            itemName: "height1drug",
            price: 300,
            action: () =>{
                props.onAddItem("height1drug",1);
                props.onAddMoney(-300);
                props.onAddItem("elvenPowder",-2);
                props.onAddItem("enhancedSilicone",-1);
            },
            description: "Has a chance of making the recipient taller. (Not implemented)" ,
            ingredients: [
                {
                    nameDisplay: "Elven powder",
                    name: "elvenPowder",
                    quantity: 2
                },
                {
                    nameDisplay: "Enhanced silicone",
                    name: "enhancedSilicone",
                    quantity: 1
                },
                {
                    nameDisplay: "Centrifuge",
                    name: "centrifuge",
                    quantity: 1
                },
            ]
        },
        {
            name:"Breast I",
            itemName: "breast1drug",
            price: 200,
            description: "Has a chance of making the recipient bustier" ,
            action: () =>{
                props.onAddItem("breast1drug",1);
                props.onAddMoney(-200);
                props.onAddItem("elvenPowder",-2);
                props.onAddItem("enhancedSilicone",-1);
            },
            ingredients: [
                {
                    nameDisplay: "Elven powder",
                    name: "elvenPowder",
                    quantity: 1
                },
                {
                    nameDisplay: "Enhanced silicone",
                    name: "enhancedSilicone",
                    quantity: 2
                },
                {
                    nameDisplay: "Oven",
                    name: "oven",
                    quantity: 1
                },
            ]
        },
        {
            name:"Lactation I",
            itemName: "lactation1drug",
            price: 200,
            description: "Has a chance of making the recipient lactate. (Not implemented)" ,
            action: () =>{
                props.onAddItem("lactation1drug",1);
                props.onAddMoney(-200);
                props.onAddItem("cowgirlMilk",-2);
            },
            ingredients: [
                {
                    nameDisplay: "Cowgirl Milk",
                    name: "cowgirlMilk",
                    quantity: 2
                },
                {
                    nameDisplay: "microscope",
                    name: "microscope",
                    quantity: 1
                },
            ]
        },
        {
            name:"Strength I",
            itemName: "strenght1drug",
            price: 500,
            description: "Has a chance of making the recipient grow muscle. (Not implemented)" ,
            action: () =>{
                props.onAddItem("strength1drug",1);
                props.onAddMoney(-500);
                props.onAddItem("enchantedIron",-2);
                props.onAddItem("elvenPowder",-2);
                
            },
            ingredients: [
                {
                    nameDisplay: "Enchanted iron",
                    name: "enchantedIron",
                    quantity: 2
                },
                {
                    nameDisplay: "Elven powder",
                    name: "elvenPowder",
                    quantity: 2
                },
                {
                    nameDisplay: "Centrifuge",
                    name: "centrifuge",
                    quantity: 1
                },
            ]
        },
        {
            name:"Mind Control I",
            itemName: "mindControl1drug",
            price: 600,
            description: "Has a chance of making the recipient more receptive to you. (Not implemented)" ,
            action: () =>{
                props.onAddItem("mindControl1drug",1);
                props.onAddMoney(-600);
                props.onAddItem("enchantedIron",-1);
                props.onAddItem("elvenPowder",-1);
                props.onAddItem("brazilianSpiderVenom",-1);
            },
            ingredients: [
                {
                    nameDisplay: "Enchanted iron",
                    name: "enchantedIron",
                    quantity: 1
                },
                {
                    nameDisplay: "Elven powder",
                    name: "elvenPowder",
                    quantity: 1
                },
                {
                    nameDisplay: "Brazilian spider venom",
                    name: "brazilianSpiderVenom",
                    quantity: 1
                },
                {
                    nameDisplay: "Centrifuge",
                    name: "centrifuge",
                    quantity: 1
                },
            ]
        },
        {
            name:"Lust I",
            itemName: "lust1drug",
            price: 150,
            description: "Has a chance of making the recipient hornier. (Not implemented)" ,
            action: () =>{
                props.onAddItem("lust1drug",1);
                props.onAddMoney(-150);
                props.onAddItem("brazilianSpiderVenom",-2);
            },
            ingredients: [
                {
                    nameDisplay: "Brazilian spider venom",
                    name: "brazilianSpiderVenom",
                    quantity: 2
                },
                {
                    nameDisplay: "Oven",
                    name: "oven",
                    quantity: 1
                },
            ]
        },
    ]

    const researchList = [
        {
            flag: "ResearchHeightI",
            action: () =>{
                props.onAddMinutes(240);
                props.onSetResearchTime("height",props.researchTime.height - 4);
                props.onAddMoney(-10);
                if(props.researchTime.height < 0){
                    props.onPushFlag("ResearchHeightII");
                    props.onSpliceFlag("ResearchHeightI");
                    props.onSetResearchTime("height",128);
                }
            },
            name: " Height I",
            cost: 10,
            time: props.researchTime.height
        },
        {
            flag: "ResearchBreastI",
            action: () =>{
                props.onAddMinutes(240);
                props.onSetResearchTime("breast",props.researchTime.breast - 4);
                props.onAddMoney(-10);
                if(props.researchTime.height < 0){
                    props.onPushFlag("ResearchBreastII");
                    props.onSpliceFlag("ResearchBreastI");
                    props.onSetResearchTime("breast",128);
                }
            },
            name: " Breast I",
            cost: 12,
            time: props.researchTime.breast
        },
        {
            flag: "ResearchLactationI",
            action: () =>{
                props.onAddMinutes(240);
                props.onSetResearchTime("lactation",props.researchTime.lactation - 4);
                props.onAddMoney(-10);
                if(props.researchTime.height < 0){
                    props.onPushFlag("ResearchLactationII");
                    props.onSpliceFlag("ResearchLactationI");
                    props.onSetResearchTime("lactation",128);
                }
            },
            name: " Lactation I",
            cost: 10,
            time: props.researchTime.lactation
        },
        {
            flag: "ResearchStrengthI",
            action: () =>{
                props.onAddMinutes(240);
                props.onSetResearchTime("strenght",props.researchTime.strenght - 4);
                props.onAddMoney(-10);
                if(props.researchTime.height < 0){
                    props.onPushFlag("ResearchStrengthII");
                    props.onSpliceFlag("ResearchStrengthI");
                    props.onSetResearchTime("strenght",172);
                }
            },
            name: " Strength I",
            cost: 20,
            time: props.researchTime.strenght
        },
        {
            flag: "ResearchMindControlI",
            action: () =>{
                props.onAddMinutes(240);
                props.onSetResearchTime("mindControl",props.researchTime.mindControl - 4);
                props.onAddMoney(-10);
                if(props.researchTime.height < 0){
                    props.onPushFlag("ResearchMindControlII");
                    props.onSpliceFlag("ResearchMindControlI");
                    props.onSetResearchTime("mindControl",200);
                }
            },
            name: "Mind control I",
            cost: 22,
            time: props.researchTime.mindControl
        },
        {
            flag: "ResearchLustI",
            action: () =>{
                props.onAddMinutes(240);
                props.onSetResearchTime("lust",props.researchTime.lust - 4);
                props.onAddMoney(-10);
                if(props.researchTime.lust <= 0){
                    props.onPushFlag("ResearchLustII");
                    props.onSpliceFlag("ResearchLustI");
                    props.onSetResearchTime("lust",72);
                }
            },
            name: "Lust I",
            cost: 8,
            time: props.researchTime.lust
        },
        {
            flag: "ResearchApplicationI",
            action: () =>{
                props.onAddMinutes(240);
                props.onSetResearchTime("application",props.researchTime.application - 4);
                props.onAddMoney(-10);
                if(props.researchTime.height < 0){
                    props.onPushFlag("ResearchApplicationII");
                    props.onSpliceFlag("ResearchApplicationI");
                    props.onSetResearchTime("application",224);
                }
            },
            name: " Application I",
            cost: 10,
            time: props.researchTime.application
        },////NEXTONE///////////////////////////////////////////////////////////
        {
            flag: "ResearchHeightII",
            action: () =>{
                props.onAddMinutes(240);
                props.onSetResearchTime("height",props.researchTime.height - 4);
                props.onAddMoney(-10);
                if(props.researchTime.height < 0){
                    props.onPushFlag("ResearchHeightIII");
                    props.onSpliceFlag("ResearchHeightII");
                    props.onSetResearchTime("height",128);
                }
            },
            name: " Height II",
            cost: 10,
            time: props.researchTime.height
        },
        {
            flag: "ResearchBreastII",
            action: () =>{
                props.onAddMinutes(240);
                props.onSetResearchTime("breast",props.researchTime.breast - 4);
                props.onAddMoney(-10);
                if(props.researchTime.height < 0){
                    props.onPushFlag("ResearchBreastIII");
                    props.onSpliceFlag("ResearchBreastII");
                    props.onSetResearchTime("breast",128);
                }
            },
            name: " Breast II",
            cost: 12,
            time: props.researchTime.breast
        },
        {
            flag: "ResearchLactationII",
            action: () =>{
                props.onAddMinutes(240);
                props.onSetResearchTime("lactation",props.researchTime.lactation - 4);
                props.onAddMoney(-10);
                if(props.researchTime.height < 0){
                    props.onPushFlag("ResearchLactationIII");
                    props.onSpliceFlag("ResearchLactationII");
                    props.onSetResearchTime("lactation",128);
                }
            },
            name: " Lactation II",
            cost: 10,
            time: props.researchTime.lactation
        },
        {
            flag: "ResearchStrengthII",
            action: () =>{
                props.onAddMinutes(240);
                props.onSetResearchTime("strenght",props.researchTime.strenght - 4);
                props.onAddMoney(-10);
                if(props.researchTime.height < 0){
                    props.onPushFlag("ResearchStrengthIII");
                    props.onSpliceFlag("ResearchStrengthII");
                    props.onSetResearchTime("strenght",172);
                }
            },
            name: " Strength II",
            cost: 20,
            time: props.researchTime.strenght
        },
        {
            flag: "ResearchMindControlII",
            action: () =>{
                props.onAddMinutes(240);
                props.onSetResearchTime("mindControl",props.researchTime.mindControl - 4);
                props.onAddMoney(-10);
                if(props.researchTime.height < 0){
                    props.onPushFlag("ResearchMindControlIII");
                    props.onSpliceFlag("ResearchMindControlII");
                    props.onSetResearchTime("mindControl",200);
                }
            },
            name: "Mind control II",
            cost: 22,
            time: props.researchTime.mindControl
        },
        {
            flag: "ResearchLustII",
            action: () =>{
                props.onAddMinutes(240);
                props.onSetResearchTime("lust",props.researchTime.lust - 4);
                props.onAddMoney(-10);
                if(props.researchTime.lust < 0){
                    props.onPushFlag("ResearchLustIII");
                    props.onSpliceFlag("ResearchLustII");
                    props.onSetResearchTime("lust",72);
                }
            },
            name: "Lust II",
            cost: 8,
            time: props.researchTime.lust
        },
        {
            flag: "ResearchApplicationII",
            action: () =>{
                props.onAddMinutes(240);
                props.onSetResearchTime("application",props.researchTime.application - 4);
                props.onAddMoney(-10);
                if(props.researchTime.height < 0){
                    props.onPushFlag("ResearchApplicationIII");
                    props.onSpliceFlag("ResearchApplicationII");
                    props.onSetResearchTime("application",224);
                }
            },
            name: " Application II",
            cost: 10,
            time: props.researchTime.application
        },        
        
    ]

    if(props.flags.includes("TLQStartGoToLab")){
        
        let TLQStartWorkingOnTheLab = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("TLQStartGoToLab");
            props.onPushFlag("ResearchHeightI")
            props.onPushFlag("ResearchBreastI")
            props.onPushFlag("ResearchLactationI")
            props.onPushFlag("ResearchStrengthI")
            props.onPushFlag("ResearchMindControlI")
            props.onPushFlag("ResearchLustI")
            props.onPushFlag("ResearchApplicationI")
        }

        
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {TheLabInside}>
                    <img alt = {"Not found"} src = {props.MaddyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
                   

                   <p>"Welcome to the lab" Maddy says.</p>
                   <p>"Your work should start with research. Fund applying methods, potency enhancers, price reductions and more!" "Research will take you at least a 4 hour session, so make sure you have enough energy"</p>            
                   <p>"You can buy ingredients, and each ingredient has different price and potency." </p>
                   <p>"You can also buy equipment. You will need it to porcess the ingredients" </p>
                   <p>"If you have the necessary ingredients, and the necessary equipment, you should prepare the doses."</p>
                   <p>"And finally, after you prepare the doses, you can sell them to us in the Company tab. Remember, the more money you make us, the more you'll be rewarded."</p>
                   <p>Maddy moves around the lab straightening equipment. </p>
                   <p>"You start right now. Please don't make me fire you." She remarks. </p>
                   <p>Maddy glances at you, then looks at the lab. She jots down some notes, and leaves.</p>

                    
    
                <Link to={"/TheLab"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {TLQStartWorkingOnTheLab}>Start working on the lab</button>
                </Link>  
            </Col3>
            </>
  
      )
    } else if(props.flags.includes("TLQGoToResearch")){
        let TLQGoBack = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("TLQGoToResearch");
        }
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 >
                <Grid container>
                    <Grid item >
                        <p>Research type</p>
                    </Grid>
                    <Grid item>
                        <p style={{marginLeft:"55px"}}>Cost</p>
                    </Grid>
                    <Grid item>
                        <p>Research time</p>
                    </Grid>
                </Grid>
                {researchList.map((research, index  )=>{
                    return (
                    <Grid container key ={index + "researchIndex"} style = {{display: (props.flags.includes(research.flag) ? " " : "none")}}>
                        <Grid item >
                            <button type="button" className="btn btn-primary" style={{width:"160px"}} onClick = {research.action} disabled ={props.energy > 20 ? false:true}>{research.name}</button>
                        </Grid>
                        <Grid item>
                            <p>{research.cost}</p>
                        </Grid>
                        <Grid item>
                            <p>{research.time} hours</p>
                        </Grid>
                    </Grid>
                    )   
                })}
            </Col2>  
                
            <Col3 > 
            
                <Link to={"/TheLab"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {TLQGoBack}>Go back</button>
                </Link>  
            </Col3>
            </>
  
      )
    }else if(props.flags.includes("TLQGoToIngredients")){
        let TLQGoBack = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("TLQGoToIngredients");
        }

        
    
        return(
            <>
            <Col1><SetCol1/></Col1>
            
            <Col2>
                {ingredientList.map((ingredient, index  )=>{
                    return (<button type="button" className="btn btn-primary" style={{width:"250px"}} 
                        onClick = {ingredient.action} disabled ={props.money > ingredient.price ? false:true}>{ingredient.name} - ${ingredient.price}
                    </button>)   
                })}
            </Col2>  
    
            <Col3> 
    
            <Link to={"/TheLab"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {TLQGoBack}>Go back</button>
                </Link> 
            </Col3>
            </>
  
      )
    }else if(props.flags.includes("TLQGoToEquipment")){
        let TLQGoBack = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("TLQGoToEquipment");
        }

        
    
        return(
            <>
            <Col1><SetCol1/></Col1>
            
            <Col2>
                {equipmentList.map((equipment, index  )=>{
                    return (<button type="button" className="btn btn-primary" style={{width:"250px"}} 
                        onClick = {equipment.action} disabled ={ (props.money > equipment.price ) || (props.items[equipment.name] > 0) ? false:true}>{equipment.name} - ${equipment.price}
                    </button>)   
                })}
            </Col2>  
    
            <Col3> 
    
            <Link to={"/TheLab"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {TLQGoBack}>Go back</button>
                </Link> 
            </Col3>
            </>
  
      )
        
    }else if(props.flags.includes("TLQGoToPrepare")){
        let TLQGoBack = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("TLQGoToPrepare");
        }

        function areIngredientsAvailiable(currentDrug) { //You need to check for every ingredient
            var requirementCount = 0
            var ingredientCount = 0
            currentDrug.ingredients.forEach( (ingredientRequired) =>{
                ingredientCount += 1
                if( (ingredientRequired.quantity <= props.items[ingredientRequired.name]) ){
                    requirementCount += 1;
                }
            });

            if(requirementCount === ingredientCount){
                return true
            } else{
                return false
            }
        }

        let firstColumnWidth = "250px";
        let secondColumnWidth = "750px";

        return(
            <>
            <Col1><SetCol1/></Col1>
            
            <Col2>
                <div>
                <button type="button" className="btn btn-secondary" style={{width: firstColumnWidth}}>Name</button>
                <button type="button" className="btn btn-secondary" style={{width: secondColumnWidth}}>Description</button>
                <button type="button" className="btn btn-secondary" style={{width: "100px"}}>Inventory</button>
                </div>
                {prepareList.map((drug, index)=>{
                    return (
                        <div>
                            <button type="button" className="btn btn-primary" style={{width: firstColumnWidth}}  key = {index + "durgtoprepare"}
                                onClick = {drug.action} disabled ={ ((props.money > drug.price ) && (areIngredientsAvailiable(drug))) ? false:true}>{drug.name} - ${drug.price}
                            </button>

                            <button type="button" className="btn btn-primary" style={{ width: secondColumnWidth}}  key = {index + "durgtoprepareRequirements"}> 
                                {drug.description}
                            </button>

                            <button type="button" className="btn btn-primary" style={{ width: "100px"}}  key = {index + "durgtoprepareRequirements"}> 
                                {props.items[drug.itemName]}
                            </button>
                        </div>
                    )   
                })}
                
            </Col2>  
    
            <Col3> 
    
            <Link to={"/TheLab"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {TLQGoBack}>Go back</button>
                </Link> 
            </Col3>
            </>
  
      )
        
    }else if(props.flags.includes("TLQGoToCompany")){
        let TLQGoBack = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("TLQGoToCompany");
        }
        
        const possibleDrugsList = [
            {
                name: "height1drug",
                sellPrice: 900,
                action: () =>{
                    props.onAddItem("height1drug",-1)
                    props.onAddMoney(900)
                }
            },
            {
                name: "lactation1drug",
                sellPrice: 700,
                action: () =>{
                    props.onAddItem("lactation1drug",-1)
                    props.onAddMoney(700)
                }
            },
            {
                name: "breast1drug",
                sellPrice: 800,
                action: () =>{
                    props.onAddItem("breast1drug",-1)
                    props.onAddMoney(800)
                }
            },
            {
                name: "strenght1drug",
                sellPrice: 1500,
                action: () =>{
                    props.onAddItem("strenght1drug",-1)
                    props.onAddMoney(1500)
                }
            },
            {
                name: "mindControl1drug",
                sellPrice: 2000,
                action: () =>{
                    props.onAddItem("mindControl1drug",-1)
                    props.onAddMoney(2000)
                }
            },
            {
                name: "lust1drug",
                sellPrice: 600,
                action: () =>{
                    props.onAddItem("lust1drug",-1)
                    props.onAddMoney(600)
                }
            },
        ];

        return(
            <>
            <Col1><SetCol1/></Col1>
            
            <Col2>
                <p>Here will show up any drug you can sell to the company.</p>
                {possibleDrugsList.map((drug, index)=>{
                    return (<button type="button" className="btn btn-primary" style={{width:"250px", display : ((props.items[drug.name] > 0 )) ? " ":"none"}} 
                        onClick = {drug.action} display ={ ((props.items[drug.name] > 0 )) ? " ":"none"}>{drug.name} - ${drug.sellPrice}
                    </button>)   
                })}
            </Col2>  
    
            <Col3> 
    
            <Link to={"/TheLab"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {TLQGoBack}>Go back</button>
                </Link> 
            </Col3>
            </>
  
      )
    }
    
    
    
    else {

        Date.prototype.getWeek = function() {
            var onejan = new Date(this.getFullYear(),0,1);
            var today = new Date(this.getFullYear(),this.getMonth(),this.getDate());
            var dayOfYear = ((today - onejan + 86400000)/86400000);
            return Math.ceil(dayOfYear/7)
          };

        let GoToGameMap = () =>{
            props.onAddMinutes(10);
        }

        let TLQGoToResearch = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("TLQGoToResearch");
        }
        let TLQGoToIngredients = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("TLQGoToIngredients");
        }
        let TLQGoToEquipment = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("TLQGoToEquipment");
        }
        let TLQGoToPrepare = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("TLQGoToPrepare");
        }
        let TLQGoToCompany = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("TLQGoToCompany");
        }


        console.log()
        let TLQClaimSalary = () =>{
            if(props.lab.lastPaidWeek <= props.date.getWeek() || props.date.getFullYear() > currentYear){
                props.onSetLab("lastPaidWeek", props.date.getWeek());
                props.onAddMoney(200);
                props.onAddMinutes(10);
            }
            if(props.date.getFullYear() > currentYear){
                currentYear += 1;
            }
        }
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {TheLabInside}>
            </Col2>  
    
            <Col3 > 
                   
                
    
                
                <Link to={"/TheLab"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {TLQGoToResearch}>Research</button>
                </Link>  
                <Link to={"/TheLab"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {TLQGoToIngredients}>Ingredients</button>
                </Link>  
                <Link to={"/TheLab"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {TLQGoToEquipment}>Equipment</button>
                </Link>  
                <Link to={"/TheLab"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {TLQGoToPrepare}>Prepare</button>
                </Link>  
                <Link to={"/TheLab"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {TLQGoToCompany}>Company</button>
                </Link>  
                <Link to={"/TheLab"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {TLQClaimSalary} style = {{display: (props.lab.lastPaidWeek !== props.date.getWeek() ? " " : "none")}}>Claim funding</button>
                </Link>  

                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GoToGameMap}>Game map</button>
                </Link>  
            </Col3>
            </>
  
      )

    }

}


export default TheLab;

