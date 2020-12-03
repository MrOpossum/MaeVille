const mainCharacter = {
    fullState : {
        date: new Date(2020,0,1,0,0),
        name : "Max",
        pronoun : "he",
    
        physical : 10,
        mind : 10,
        attractiveness : 10,
        energy : 100,
        lust : 0,
    
        chest : 0,
        belly : 3,
        height : 1.8,
        
        skills : {
            Milking:0,
            Job: 0
    
        },
    
        status : [],
    
        environmentStatus : [],
        items : {
            farmCowMilkBottle: 0,
            LacBracelet: 0
        },
        money : 0,
    
        flags : ["FARM_UNVISITED"],
        relations : {
            Amy: 0,
            Sandy: 0,
            Eve: 0,
            
        },
        currentLink:"/Apartment",
        Amy:{
            mind: 14,
            physical: 12
        },
        Sandy:{
            mind: 11,
            physical: 13
        },

        stateHistory: []

    }
}

export default mainCharacter;
    