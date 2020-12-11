export default researchList = [
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
