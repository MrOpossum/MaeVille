import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import React, {useEffect, useState} from "react";


import Col1 from "../../components/col1";
import Col2 from "../../components/col2";
import Col3 from "../../components/col3";
import SetCol1 from "../../components/SetCol1";
import SimpleDialog from "../../components/SimpleDialog";

//Images
import TheLabInside from "../../Images/TheLab/TheLabInside.jpg";

import FMG_gif from "../../Images/TheLab/MADYAQ/FMG_gif.mp4"
import RippedAbsWomanFuckedInCouch from "../../Images/TheLab/MADYAQ/RippedAbsWomanFuckedInCouch.mp4"

import engorgedGame_1 from "../../Images/TheLab/BovineDrugEngorgedBreast/engorgedGame (1).jpg";
import engorgedGame_2 from "../../Images/TheLab/BovineDrugEngorgedBreast/engorgedGame (2).jpg";
import engorgedGame_3 from "../../Images/TheLab/BovineDrugEngorgedBreast/engorgedGame (3).jpg";
import engorgedGame_4 from "../../Images/TheLab/BovineDrugEngorgedBreast/engorgedGame (4).jpg";
import engorgedGame_5 from "../../Images/TheLab/BovineDrugEngorgedBreast/engorgedGame (5).jpg";

let currentYear = 2020;
let correctAnswerCount = 0;
let imageIdentifiercount = 0;
const TheLab = (props) => {

    let GoToGameMap = () =>{
        props.onAddMinutes(10);
    }

    const [openDialog, setOpenDialog] = useState(false);
    const [openDialog2, setOpenDialog2] = useState(false);
    const [openDialog3, setOpenDialog3] = useState(false);
    const [canContinue, setCanContinue] = useState(false);

    const ingredientList = [
        {
            name:"elven Powder",
            price: 60,
            itemName: "elvenPowder",
            action: () =>{
                props.onAddItem("elvenPowder",1);
                props.onAddMoney(-60)
            }
        },
        {
            name:"cowgirl milk",
            itemName: "cowgirlMilk",
            price: 35,
            action: () =>{
                props.onAddItem("cowgirlMilk",1);
                props.onAddMoney(-35)
            }
        },
        {
            name:"enhanced silicone",
            price: 80,
            itemName: "enhancedSilicone",
            action: () =>{
                props.onAddItem("enhancedSilicone",1);
                props.onAddMoney(-80)
            }
        },
        {
            name:"enchanted Iron",
            price: 120,
            itemName: "enchantedIron",
            action: () =>{
                props.onAddItem("enchantedIron",1);
                props.onAddMoney(-120)
            }
        },
        {
            name:"brazilian spider Venom",
            price: 50,
            itemName: "brazilianSpiderVenom",
            action: () =>{
                props.onAddItem("brazilianSpiderVenom",1);
                props.onAddMoney(-50)
            }
        },
    ]

    const equipmentList = [
        {
            name:"centrifuge",
            itemName: "centrifuge",
            price: 1200,
            action: () =>{
                props.onAddItem("centrifuge",1);
                props.onAddMoney(-600)
            }
        },
        {
            name:"oven",
            itemName: "oven",
            price: 800,
            action: () =>{
                props.onAddItem("oven",1);
                props.onAddMoney(-800)
            }
        },
        {
            name:"microscope",
            itemName: "microscope",
            price: 600,
            action: () =>{
                props.onAddItem("microscope",1);
                props.onAddMoney(-600)
            }
        },
        {
            name:"mana Infuser",
            itemName: "manaInfuser",
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
            flag: "ResearchHeightI",
            action: () =>{
                props.onAddItem("height1drug",1);
                props.onAddMoney(-300);
                props.onAddItem("elvenPowder",-2);
                props.onAddItem("enhancedSilicone",-1);
                props.onAddMinutes(480);
            },
            description: "Has a chance of making the recipient taller." ,
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
            flag: "ResearchBreastI",
            action: () =>{
                props.onAddItem("breast1drug",1);
                props.onAddMoney(-200);
                props.onAddItem("elvenPowder",-2);
                props.onAddItem("enhancedSilicone",-1);
                props.onAddMinutes(480);
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
            flag: "ResearchLactationI",
            description: "Has a chance of making the recipient lactate. (Not implemented)" ,
            action: () =>{
                props.onAddItem("lactation1drug",1);
                props.onAddMoney(-200);
                props.onAddItem("cowgirlMilk",-2);
                props.onAddMinutes(480);
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
            flag: "ResearchStrengthI",
            action: () =>{
                props.onAddItem("strength1drug",1);
                props.onAddMoney(-500);
                props.onAddItem("enchantedIron",-2);
                props.onAddItem("elvenPowder",-2);
                props.onAddMinutes(480);
                
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
            flag: "ResearchMindControlI",
            price: 600,
            description: "Has a chance of making the recipient more receptive to you. (Not implemented)" ,
            action: () =>{
                props.onAddItem("mindControl1drug",1);
                props.onAddMoney(-600);
                props.onAddItem("enchantedIron",-1);
                props.onAddItem("elvenPowder",-1);
                props.onAddItem("brazilianSpiderVenom",-1);
                props.onAddMinutes(480);
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
            flag: "ResearchLustI",
            description: "Has a chance of making the recipient hornier. (Not implemented)" ,
            action: () =>{
                props.onAddItem("lust1drug",1);
                props.onAddMoney(-150);
                props.onAddMinutes(480);
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
        {
            name:"Base serum",
            itemName: "baseSerum1drug",
            flag: "BaseSerum1drug",
            price: 50,
            description: "A base serum the company will buy" ,
            action: () =>{
                props.onAddItem("baseSerum1drug",1);
                props.onAddMoney(-50);
                props.onAddItem("enhancedSilicone",-2);
                props.onAddMinutes(480);
            },
            ingredients: [
                {
                    nameDisplay: "Enahnced Silicone",
                    name: "enhancedSilicone",
                    quantity: 2
                },
            ]
        },
        {////////////////////Second tier
            name:"Height II",
            itemName: "height2drug",
            price: 300,
            flag: "ResearchHeightII",
            action: () =>{
                props.onAddItem("height2drug",1);
                props.onAddMoney(-300);
                props.onAddItem("elvenPowder",-2);
                props.onAddItem("enhancedSilicone",-1);
                props.onAddMinutes(480);
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
            name:"Breast II",
            itemName: "breast2drug",
            price: 200,
            description: "Has a chance of making the recipient bustier" ,
            flag: "ResearchBreastII",
            action: () =>{
                props.onAddItem("breast2drug",1);
                props.onAddMoney(-200);
                props.onAddItem("elvenPowder",-2);
                props.onAddItem("enhancedSilicone",-1);
                props.onAddMinutes(480);
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
            name:"Lactation II",
            itemName: "lactation2drug",
            price: 200,
            flag: "ResearchLactationII",
            description: "Has a chance of making the recipient lactate. (Not implemented)" ,
            action: () =>{
                props.onAddItem("lactation2drug",1);
                props.onAddMoney(-200);
                props.onAddItem("cowgirlMilk",-2);
                props.onAddMinutes(480);
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
            name:"Strength II",
            itemName: "strenght2drug",
            price: 500,
            description: "Has a chance of making the recipient grow muscle. (Not implemented)" ,
            flag: "ResearchStrengthII",
            action: () =>{
                props.onAddItem("strength2drug",1);
                props.onAddMoney(-500);
                props.onAddItem("enchantedIron",-2);
                props.onAddItem("elvenPowder",-2);
                props.onAddMinutes(480);
                
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
            name:"Mind Control II",
            itemName: "mindControl2drug",
            flag: "ResearchMindControlII",
            price: 600,
            description: "Has a chance of making the recipient more receptive to you. (Not implemented)" ,
            action: () =>{
                props.onAddItem("mindControl2drug",1);
                props.onAddMoney(-600);
                props.onAddItem("enchantedIron",-1);
                props.onAddItem("elvenPowder",-1);
                props.onAddItem("brazilianSpiderVenom",-1);
                props.onAddMinutes(480);
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
            name:"Lust II",
            itemName: "lust2drug",
            price: 150,
            flag: "ResearchLustII",
            description: "Has a chance of making the recipient hornier. (Not implemented)" ,
            action: () =>{
                props.onAddItem("lust2drug",1);
                props.onAddMoney(-150);
                props.onAddMinutes(480);
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
                    props.onPushFlag("MADYAQYouResearchedHeightII");
                    props.onSpliceFlag("ResearchHeightI");
                    props.onSetResearchTime("height",64);
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
                if(props.researchTime.breast < 0){
                    props.onPushFlag("ResearchBreastII");
                    props.onSpliceFlag("ResearchBreastI");
                    props.onSetResearchTime("breast",64);
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
                if(props.researchTime.lactation < 0){
                    props.onPushFlag("ResearchLactationII");
                    props.onSpliceFlag("ResearchLactationI");
                    props.onSetResearchTime("lactation",64);
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
                if(props.researchTime.strenght < 0){
                    props.onPushFlag("ResearchStrengthII");
                    props.onPushFlag("MADYAQYouResearchedStrengthII");
                    props.onSpliceFlag("ResearchStrengthI");
                    props.onSetResearchTime("strenght",70);
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
                if(props.researchTime.mindControl < 0){
                    props.onPushFlag("ResearchMindControlII");
                    props.onSpliceFlag("ResearchMindControlI");
                    props.onSetResearchTime("mindControl",80);
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
                    props.onSetResearchTime("lust",35);
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
                if(props.researchTime.application < 0){
                    props.onPushFlag("ResearchApplicationII");
                    props.onSpliceFlag("ResearchApplicationI");
                    props.onSetResearchTime("application",100);
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
                    props.onSetResearchTime("height",64);
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
                if(props.researchTime.breast < 0){
                    props.onPushFlag("ResearchBreastIII");
                    props.onSpliceFlag("ResearchBreastII");
                    props.onSetResearchTime("breast",64);
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
                if(props.researchTime.lactation < 0){
                    props.onPushFlag("ResearchLactationIII");
                    props.onSpliceFlag("ResearchLactationII");
                    props.onSetResearchTime("lactation",64);
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
                if(props.researchTime.strenght < 0){
                    props.onPushFlag("ResearchStrengthIII");
                    props.onSpliceFlag("ResearchStrengthII");
                    props.onSetResearchTime("strenght",80);
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
                if(props.researchTime.mindControl < 0){
                    props.onPushFlag("ResearchMindControlIII");
                    props.onSpliceFlag("ResearchMindControlII");
                    props.onSetResearchTime("mindControl",100);
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
                    props.onSetResearchTime("lust",40);
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
                if(props.researchTime.application < 0){
                    props.onPushFlag("ResearchApplicationIII");
                    props.onSpliceFlag("ResearchApplicationII");
                    props.onSetResearchTime("application",100);
                }
            },
            name: " Application II",
            cost: 10,
            time: props.researchTime.application
        },,////NEXTONE - 3///////////////////////////////////////////////////////////
        {
            flag: "ResearchHeightIII",
            action: () =>{
                props.onAddMinutes(240);
                props.onSetResearchTime("height",props.researchTime.height - 4);
                props.onAddMoney(-10);
                if(props.researchTime.height < 0){
                    props.onPushFlag("ResearchHeightIV");
                    props.onSpliceFlag("ResearchHeightIII");
                    props.onSetResearchTime("height",64);
                }
            },
            name: "Height III",
            cost: 10,
            time: props.researchTime.height
        },
        {
            flag: "ResearchBreastIII",
            action: () =>{
                props.onAddMinutes(240);
                props.onSetResearchTime("breast",props.researchTime.breast - 4);
                props.onAddMoney(-10);
                if(props.researchTime.breast < 0){
                    props.onPushFlag("ResearchBreastIV");
                    props.onSpliceFlag("ResearchBreastIII");
                    props.onSetResearchTime("breast",64);
                }
            },
            name: " Breast III",
            cost: 12,
            time: props.researchTime.breast
        },
        {
            flag: "ResearchLactationIII",
            action: () =>{
                props.onAddMinutes(240);
                props.onSetResearchTime("lactation",props.researchTime.lactation - 4);
                props.onAddMoney(-10);
                if(props.researchTime.lactation < 0){
                    props.onPushFlag("ResearchLactationIV");
                    props.onSpliceFlag("ResearchLactationIII");
                    props.onSetResearchTime("lactation",64);
                }
            },
            name: " Lactation II",
            cost: 10,
            time: props.researchTime.lactation
        },
        {
            flag: "ResearchStrengthIII",
            action: () =>{
                props.onAddMinutes(240);
                props.onSetResearchTime("strenght",props.researchTime.strenght - 4);
                props.onAddMoney(-10);
                if(props.researchTime.strenght < 0){
                    props.onPushFlag("ResearchStrengthIV");
                    props.onSpliceFlag("ResearchStrengthIII");
                    props.onSetResearchTime("strenght",80);
                }
            },
            name: " Strength III",
            cost: 20,
            time: props.researchTime.strenght
        },
        {
            flag: "ResearchMindControlIII",
            action: () =>{
                props.onAddMinutes(240);
                props.onSetResearchTime("mindControl",props.researchTime.mindControl - 4);
                props.onAddMoney(-10);
                if(props.researchTime.mindControl < 0){
                    props.onPushFlag("ResearchMindControlIV");
                    props.onSpliceFlag("ResearchMindControlIII");
                    props.onSetResearchTime("mindControl",80);
                }
            },
            name: "Mind control III",
            cost: 22,
            time: props.researchTime.mindControl
        },
        {
            flag: "ResearchLustIII",
            action: () =>{
                props.onAddMinutes(240);
                props.onSetResearchTime("lust",props.researchTime.lust - 4);
                props.onAddMoney(-10);
                if(props.researchTime.lust < 0){
                    props.onPushFlag("ResearchLustIV");
                    props.onSpliceFlag("ResearchLustIII");
                    props.onSetResearchTime("lust",30);
                }
            },
            name: "Lust III",
            cost: 8,
            time: props.researchTime.lust
        },
        {
            flag: "ResearchApplicationIII",
            action: () =>{
                props.onAddMinutes(240);
                props.onSetResearchTime("application",props.researchTime.application - 4);
                props.onAddMoney(-10);
                if(props.researchTime.application < 0){
                    props.onPushFlag("ResearchApplicationIV");
                    props.onSpliceFlag("ResearchApplicationIII");
                    props.onSetResearchTime("application",100);
                }
            },
            name: "Application III",
            cost: 10,
            time: props.researchTime.application
        },           
        
        
    ]


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
    } else if(props.flags.includes("TLQStartGoToLab")){
        
        let TLQStartWorkingOnTheLab = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("TLQStartGoToLab");
            props.onPushFlag("ResearchHeightI");
            props.onPushFlag("ResearchBreastI");
            props.onPushFlag("ResearchLactationI");
            props.onPushFlag("ResearchStrengthI");
            props.onPushFlag("ResearchMindControlI");
            props.onPushFlag("ResearchLustI");
            props.onPushFlag("ResearchApplicationI");
            props.onPushFlag("BaseSerum1drug");
            props.onPushFlag("MADYAQHasNotFukedYouAfterSecondResearch");
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
                    return (
                        <div>
                    <button type="button" className="btn btn-primary" style={{width:"250px"}} 
                        onClick = {ingredient.action} disabled ={props.money > ingredient.price ? false:true}>
                            {ingredient.name} - ${ingredient.price}
                    </button>

                    <button type="button" className="btn btn-primary" style={{width:"50px"}} >
                        {props.items[ingredient.itemName]}
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
    }else if(props.flags.includes("TLQGoToEquipment")){
        let TLQGoBack = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("TLQGoToEquipment");
        }

        let firstColumnWidth = "250px";
        return(
            <>
            <Col1><SetCol1/></Col1>
            
            <Col2>
                <div>
                    <button type="button" className="btn btn-secondary" style={{width: firstColumnWidth}}>Name</button>
                    <button type="button" className="btn btn-secondary" style={{width: "100px"}}>Inventory</button>
                </div>
                {equipmentList.map((equipment, index  )=>{
                    return (
                        <div>
                        <button type="button" className="btn btn-primary" style={{width:"250px"}} key = {index + "equipmentListMap"}
                            onClick = {equipment.action} disabled ={ (props.money > equipment.price ) || (props.items[equipment.name] > 0) ? false:true}>{equipment.name} - ${equipment.price}
                        </button>

                        <button type="button" className="btn btn-primary" style={{width:"100px"}} key = {index + "equipmentListMapName"}>
                            {props.items[equipment.itemName]}
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

        return(
            <>
            <Col1><SetCol1/></Col1>
            
            <Col2>
                <div>
                <button type="button" className="btn btn-secondary" style={{width: firstColumnWidth}}>Name</button>
                <button type="button" className="btn btn-secondary" style={{width: "100px"}}>Inventory</button>
                </div>
                {prepareList.map((drug, index)=>{
                    console.log(drug.flag)
                    return (
                        <div>
                            <button type="button" className="btn btn-primary" key = {index + "durgtoprepare"}
                                onClick = {drug.action} disabled ={ ((props.money > drug.price ) && (areIngredientsAvailiable(drug)) && props.energy > 40) ? false:true}  style = {{ width: firstColumnWidth, display: props.flags.includes(drug.flag) ? " ": "none"  }}>{drug.name} - ${drug.price}
                            </button>

                            <button type="button" className="btn btn-primary" style={{ width: "100px", display: props.flags.includes(drug.flag) ? " ": "none"  }}  key = {index + "durgtoprepareRequirements"}> 
                                {props.items[drug.itemName]}
                            </button>
                        </div>
                    )   
                })}
                
            </Col2>  
    
            <Col3> 
            
            {props.energy < 40 ? <p>You need at least 40 energy to prepare a drug</p> : ""}
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
                displayName: "Height 1",
                sellPrice: 900,
                action: () =>{
                    props.onAddItem("height1drug",-1)
                    props.onAddMoney(900)
                }
            },
            {
                name: "lactation1drug",
                displayName: "Lactation 1",
                sellPrice: 700,
                action: () =>{
                    props.onAddItem("lactation1drug",-1)
                    props.onAddMoney(700)
                }
            },
            {
                name: "breast1drug",
                displayName: "Breast 1",
                sellPrice: 800,
                action: () =>{
                    props.onAddItem("breast1drug",-1)
                    props.onAddMoney(800)
                }
            },
            {
                name: "strenght1drug",
                displayName: "Strength 1",
                sellPrice: 1500,
                action: () =>{
                    props.onAddItem("strenght1drug",-1)
                    props.onAddMoney(1500)
                }
            },
            {
                name: "mindControl1drug",
                displayName: "Mind control 1",
                sellPrice: 2000,
                action: () =>{
                    props.onAddItem("mindControl1drug",-1)
                    props.onAddMoney(2000)
                }
            },
            {
                name: "lust1drug",
                displayName: "Lust 1",
                sellPrice: 600,
                action: () =>{
                    props.onAddItem("lust1drug",-1)
                    props.onAddMoney(600)
                }
            },
            {
                name: "baseSerum1drug",
                displayName: "Base serum 1",
                sellPrice: 250,
                action: () =>{
                    props.onAddItem("baseSerum1drug",-1)
                    props.onAddMoney(250)
                }
            },
        ];

        return(
            <>
            <Col1><SetCol1/></Col1>
            
            <Col2>
                <p>Here will show up any drug you can sell to the company. If you have any.</p>
                {possibleDrugsList.map((drug, index)=>{
                    return (<button type="button" className="btn btn-primary" style={{width:"250px", display : ((props.items[drug.name] > 0 )) ? " ":"none"}} 
                        onClick = {drug.action} display ={ ((props.items[drug.name] > 0 )) ? " ":"none"}>{drug.displayName} - ${drug.sellPrice}
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
    } else if(props.flags.includes("TLQGoToDescriptions")){
        let TLQGoBack = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("TLQGoToDescriptions");
        }

        let AlertItemDescription = (desc,ingredients) =>{

            let fullDescription = `${desc}. You need: `
            ingredients.forEach((ingredient)=>{
                fullDescription += "\n" + ingredient.quantity + " " + ingredient.nameDisplay + ". "
            })
            alert(fullDescription);
        }


        return(
            <>
            <Col1><SetCol1/></Col1>
            
            <Col2>
                
                {prepareList.map((drug, index)=>{
                return (
                        <button type="button" className="btn btn-primary" key = {index + "durgDescRequirements"} 
                       style={{display: props.flags.includes(drug.flag) ? " ": "none"}} onClick= {() => AlertItemDescription(drug.description,drug.ingredients)}> 
                            {drug.name}
                        </button>
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
    } else if(props.flags.includes("ResearchHeightII") && props.flags.includes("ResearchStrengthII") && props.flags.includes("MADYAQHasNotFukedYouAfterSecondResearch")){
        let MADYAQPrepareHeightAndMuscleII = () =>{
            props.onSpliceFlag("MADYAQYouResearchedHeightII");
            props.onSpliceFlag("MADYAQYouResearchedStrengthII");
            props.onSpliceFlag("MADYAQHasNotFukedYouAfterSecondResearch");
            props.onAddMinutes(10);
            props.onPushFlag("MADYAQPrepareHeightAndMuscleII");
        }
        if(props.gender === "M"){
            return(
                <>
                <Col1><SetCol1/></Col1>
                
                <Col2 BackImage = {TheLabInside}>
                        <img alt = {"Not found"} src = {props.MaddyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                </Col2>   
        
                <Col3> 
    
                    <p>You see Maddy entering you office. She sees you, clears her throat and says: "{props.name}, your research has been successful in the height and muscle increase area"</p>
                    <p>Maddy gets closer to you and whispers "I need you to prepare one dose of each right now. That's an order intern"</p>
                    
            
                    <Link to={"/TheLab"} style={{ textDecoration: "none" }}>
                            <button type="button" className="btn btn-primary" onClick = {MADYAQPrepareHeightAndMuscleII}>Prepare the drugs</button>
                    </Link> 
                </Col3>
                </>
      
          )
        } else if(props.gender === "F"){

        }
        
    }
    
    else if(props.flags.includes("MADYAQYouResearchedHeightII")){
        
        let MADYAQGoBack = () =>{
            props.onSpliceFlag("MADYAQYouResearchedHeightII");
            props.onAddMinutes(10);
            props.onAddMoney(500);
        }


        return(
            <>
            <Col1><SetCol1/></Col1>
            
            <Col2 BackImage = {TheLabInside}>
                    <img alt = {"Not found"} src = {props.MaddyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>   
    
            <Col3> 

            <p>You see maddy approaching you "Hello intern. It seems that you have completed some research in the area of height increase" </p>
            <p>"I must tell you that I am really interested in this area. And I think that you should research about strength next." She says, a mixture of professionalism and excitement in her voice</p>
            <p>"I'll give you $500 extra funding so you can start researching ASAP." Maddy suggests. And leaves.</p>
    
            <Link to={"/TheLab"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {MADYAQGoBack}>Go back</button>
                </Link> 
            </Col3>
            </>
  
      )
    }else if(props.flags.includes("MADYAQYouResearchedStrengthII")){
        
        let MADYAQGoBack = () =>{
            props.onSpliceFlag("MADYAQYouResearchedStrengthII");
            props.onAddMinutes(10);
            props.onAddMoney(500);
        }


        return(
            <>
            <Col1><SetCol1/></Col1>
            
            <Col2 BackImage = {TheLabInside}>
                    <img alt = {"Not found"} src = {props.MaddyImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>   
    
            <Col3> 

            <p>You see maddy approaching you "Hello intern. It seems that you have completed some research in the area of strength increase" </p>
            <p>"I must tell you that I am really interested in this area. And I think that you should research about height next." She says, a mixture of professionalism and excitement in her voice</p>
            <p>"I'll give you $500 extra funding so you can start researching ASAP." Maddy suggests. And leaves.</p>
    
            <Link to={"/TheLab"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {MADYAQGoBack}>Go back</button>
                </Link> 
            </Col3>
            </>
  
      )
    } else if(props.flags.includes("MADYAQPrepareHeightAndMuscleII")){
        let MADYAQGoBack = () =>{
            props.onSpliceFlag("MADYAQPrepareHeightAndMuscleII");
            props.onAddMinutes(10);
            props.onSetCharacterStats("Maddy","muscle", props.charactersStats.Maddy.height + 2)
            props.onSetCharacterStats("Maddy","height", props.charactersStats.Maddy.muscle + 2)
            props.onPushFlag("MADYAQMaddyGrabsYouAndFucksYouAfterResearchII")
        }


        
        return(
            <>
            <Col1><SetCol1/></Col1>
            
            <Col2 BackImage = {""}>
            <video autoPlay loop style ={{width:"100vw"}}>
                <source src={FMG_gif} type="video/mp4"/> 
            </video>
            </Col2>   
    
            <Col3> 

            <p>Maddy takes the drugs as soon as you finish preparing them.</p>
            <p>"{props.name}" Maddy looks at you. "Did you know I'm scared of walking from the building to my car at night?" Maddys tone of voice is cold and serious. "Some nights I want to go to the hill and I don't because I don't have anyone to go with, and I worry that some asshole or "nice guy" will perv on me."
            </p>
            <p>"Did you know I took a loan to buy a car. Because in this city the subway is filled with men who can't keep their hands yo themselves. DID YOU KNOW THAT I'M TIRED OF BEING WEAK?!" Maddy shouts, her voice distorting.</p>
            <p>"I feel it" Maddy gnarls. "It's warm under my skin. My M...Muscleess are twitching. FLEXING!" Maddy is struggling to keep her composture. "I feel so strong!!" Maddy roars.</p>
           <p>GOD I AM HORNY!</p>
    
            <Link to={"/TheLab"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {MADYAQGoBack}>Maddy grabs your arm</button>
                </Link> 
            </Col3>
            </>
  
      )
    } else if(props.flags.includes("MADYAQMaddyGrabsYouAndFucksYouAfterResearchII")){
        let MADYAQGoBack = () =>{
            props.onSpliceFlag("MADYAQMaddyGrabsYouAndFucksYouAfterResearchII");
            props.onAddMinutes(10);
            props.onChangeRelationship("Maddy",10);
        }


        
        return(
            <>
            <Col1><SetCol1/></Col1>
            
            <Col2 BackImage = {""}>
            <video autoPlay loop controls>
                <source src={RippedAbsWomanFuckedInCouch} type="video/mp4"/> 
            </video>
            </Col2>   
    
            <Col3> 

            <p>Maddy takes you to a small private room in the company. Well, she drags you there.</p>
            <p>Maddys head thudded against the couch, heat pulsing through her blood from the point where your dick is driving Maddy mad. Maddys legs are fixated on you. Her strong thigs flexing you further into her. Your sweat filling the room with sensual aromas.</p>
    
            <Link to={"/TheLab"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {MADYAQGoBack}>Fuck...</button>
                </Link> 
            </Col3>
            </>
  
      )
    } else if(props.flags.includes("CanDoBovineDrugOnceAtLabMinigame_game")){
        
        let StartGame = () =>{
            setOpenDialog(true)
        }

        let engorgedCorrect = () =>{
            correctAnswerCount += 1;
            imageIdentifiercount += 1;
            if(imageIdentifiercount == 5){
                if(correctAnswerCount >= 4){
                    alert("You did it! You now have a bovine drug for Copper!")
                    props.onSpliceFlag("CanDoBovineDrugOnceAtLabMinigame_game");
                    props.onSpliceFlag("CanDoBovineDrugOnceAtLabMinigame");
                    props.onPushFlag("BovineDrugForCopperSucesfullyBuilt");
                }else{
                    props.onSpliceFlag("CanDoBovineDrugOnceAtLabMinigame_game");
                    alert("You did not manage to research the drug correctly.")
                }
                imageIdentifiercount = 0;
                correctAnswerCount = 0;
            }
        }

        let nonEngorged = () =>{
            props.onAddMinutes(10);
            imageIdentifiercount += 1;
            if(imageIdentifiercount == 5){
                if(correctAnswerCount >= 4){
                    alert("You did it! You now have a bovine drug for Copper!")
                    props.onSpliceFlag("CanDoBovineDrugOnceAtLabMinigame_game");
                    props.onSpliceFlag("CanDoBovineDrugOnceAtLabMinigame");
                    props.onPushFlag("BovineDrugForCopperSucesfullyBuilt");
                } else{
                    props.onSpliceFlag("CanDoBovineDrugOnceAtLabMinigame_game");
                    alert("You did not manage to research the drug correctly.")
                }

                imageIdentifiercount = 0;
                correctAnswerCount = 0;
            }
        }

        var currentMinigameImage;
        switch(imageIdentifiercount) {
            case 0:
              currentMinigameImage = engorgedGame_1;
              break;
            case 1:
                currentMinigameImage = engorgedGame_2;
              break;
            case 2:
                currentMinigameImage = engorgedGame_3;
                break;
            case 3:
                currentMinigameImage = engorgedGame_4;
                break;
            case 4:
                currentMinigameImage = engorgedGame_5;
              break;
            default:
                currentMinigameImage = engorgedGame_3;
          } 
        
        return(
            <>
            <Col1><SetCol1/></Col1>
            
            <Col2 BackImage = {TheLabInside}>
                {/* Spot engorged minigame */}
                <SimpleDialog
                    openDialog={openDialog}
                    handleDialogClose = {()=>{
                            setOpenDialog(false);
                            props.onAddMinutes(10);
                            props.onAddMoney(-10);
                        }
                    }
                >
                    <img alt ={"Not found"} src={currentMinigameImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                    <Link to={"/TheLab"} style={{ textDecoration: "none" }}>
                        <button type="button" className="btn btn-primary" onClick = {engorgedCorrect}>Milk</button>
                    </Link> 
                    <Link to={"/TheLab"} style={{ textDecoration: "none" }}>
                        <button type="button" className="btn btn-primary" onClick = {nonEngorged}>No milk</button>
                    </Link> 
                </SimpleDialog>
            </Col2>   
    
            <Col3> 

            <p>To make this drug you have to have a keen eye spotting engorged breasts. Identify at least 4 of 5 to research the drug sucessfully</p>
            <p>Each attempt costs you 10$</p>
    
            <Link to={"/TheLab"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {StartGame}>Play {correctAnswerCount+1}/5</button>
            </Link> 
            <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                <button type="button" className="btn btn-primary" onClick = {GoToGameMap}>Game map</button>
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
            if(props.energy < 21 ){
                alert("You don't have enough enery to research right now.")
            }
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

        let TLQGoToDescriptions = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("TLQGoToDescriptions");
        }

        let WorkOnBovineDrug = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("CanDoBovineDrugOnceAtLabMinigame_game");
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

        console.log("includeBovie, ", props.flags.includes("CanDoBovineDrugOnceAtLabMinigame"))
    
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
                    <button type="button" className="btn btn-primary" onClick = {TLQGoToDescriptions}>Drug descriptions</button>
                </Link> 
                <Link to={"/TheLab"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {TLQClaimSalary} style = {{display: (props.lab.lastPaidWeek !== props.date.getWeek() ? " " : "none")}}>Claim funding</button>
                </Link>  

                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GoToGameMap}>Game map</button>
                </Link> 

                <Link to={"/TheLab"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {WorkOnBovineDrug} style = {{display: (props.flags.includes("CanDoBovineDrugOnceAtLabMinigame") ? " " : "none") }}>Work on the bovine drug.</button>
                </Link>  
                
            </Col3>
            </>
  
      )

    }

}


export default TheLab;

