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
            LacBracelet: 0,
            moonStone: 0,
            elvenPowder: 0,
            cowgirlMilk: 0,
            enhancedSilicone: 0,
            enchantedIron: 0,
            brazilianSpiderVenom: 0,
            centrifuge: 0,
            oven: 0,
            microscope: 0,
            manaInfuser: 0,
            height1drug: 0,
            strenght1drug:0,
            breast1drug:0,
            lactation1drug:0,
            mindControl1drug:0,
            lust1drug:0
        },
        money : 0,
    
        flags : ["FARM_UNVISITED"],
        relations : {
            Amy: 0,
            Sandy: 0,
            Eve: 0,
            Cholos: 0,
            Maddy: 0
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
        
        charactersStats:{
            Amy:{
                breast : 4,
                height : 2,
                Fat : 1,
                muscle : 2,
                lactation : 0,
                mindControl : 0,
                lust : 0,
                strength : 10,
            },
            Sandy:{
                breast : 1,
                height : 2,
                Fat : 1,
                muscle : 2,
                lactation : 0,
                mindControl : 0,
                lust : 0,
                strength : 10,
            },
            Eve:{
                breast : 7,
                height : 2,
                Fat : 1,
                muscle : 2,
                lactation : 0,
                mindControl : 0,
                lust : 0,
                strength : 10,
            },
            Maddy:{
                breast : 1,
                height : 2,
                Fat : 1,
                muscle : 2,
                lactation : 0,
                mindControl : 0,
                lust : 0,
                strength : 8,
            }
        },
        researchTime:{
            height: 96,
            breast: 72,
            lactation: 72,
            strenght: 120,
            mindControl: 144,
            lust: 48,
            application: 144,
        },

        stateHistory: [],

        lab: {
            lastPaidWeek: 0,
            profits: 0,
            losses: 0,
        }

    }
}

export default mainCharacter;
    