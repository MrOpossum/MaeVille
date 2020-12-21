import Col1 from "../components/col1";
import Col2 from "../components/col2";
import Col3 from "../components/col3";
import SetCol1 from "../components/SetCol1";

import Evelyn from "../Characters/Evelyn";
import Amy from "../Characters/Amy";
import Sandy from "../Characters/Sandy";

const FindingTheGirls = (props) =>{
    if(props.flags.includes("WITH_EVE")){
        return(
            <>
            <Col1>
                <SetCol1></SetCol1>
            </Col1>
            <Evelyn
                backImageChar = {props.backImageChar}
                ImageChar = {props.EveImage}
                ImageCharS1 = {props.EveImageS1}
                ImageCharS2 = {props.EveImageS2}
                ImageCharS3 = {props.EveImageS3}
                VideoCharFuckingS4 = {props.fuckingEveVideo_s4}
                characterImageWidth = {props.characterImageWidth}
                characterImageHeight = {props.characterImageHeight}
                CurrentLocation = {props.CurrentLocation}
                DrugStealthModifier = {props.DrugStealthModifier}
            > 
                
            </Evelyn>
            </>
        )
    }
    
    if(props.flags.includes("WITH_SANDY")){
    return(
        <>
        <Col1>
            <SetCol1></SetCol1>
        </Col1>
        <Sandy
            backImageChar = {props.backImageChar}
            ImageChar = {props.SandyImage}
            ImageCharS1 = {props.SandyImageS1}
            ImageCharS2 = {props.SandyImageS2}
            ImageCharS3 = {props.SandyImageS3}
            VideoCharFuckingS4 = {props.fuckingSandyVideo_s4}
            characterImageWidth = {props.characterImageWidth}
            characterImageHeight = {props.characterImageHeight}
            CurrentLocation = {props.CurrentLocation}
            DrugStealthModifier = {props.DrugStealthModifier}
        > 
            
        </Sandy>
        </>
    )
    }
    
    if(props.flags.includes("WITH_AMY")){
    return(
        <>
        <Col1>
            <SetCol1></SetCol1>
        </Col1>
        <Amy
            backImageChar = {props.backImageChar}
            ImageChar = {props.AmyImage}
            ImageCharS1 = {props.AmyImageS1}
            ImageCharS2 = {props.AmyImageS2}
            ImageCharS3 = {props.AmyImageS3}
            VideoCharFuckingS4 = {props.fuckingAmyVideo_s4}
            characterImageWidth = {props.characterImageWidth}
            characterImageHeight = {props.characterImageHeight}
            CurrentLocation = {props.CurrentLocation}
            DrugStealthModifier = {props.DrugStealthModifier}
        > 
            
        </Amy>
        </>
    )
    }
    
    
    if(props.randomNumFindGirls < 0.05 && props.flags.includes("MET_EVE")){
    return(
        <>
        <Col1>
            <SetCol1></SetCol1>
        </Col1>
        <Evelyn
            backImageChar = {props.backImageChar}
            ImageChar = {props.EveImage}
            ImageCharS1 = {props.EveImageS1}
            ImageCharS2 = {props.EveImageS2}
            ImageCharS3 = {props.EveImageS3}
            VideoCharFuckingS4 = {props.fuckingEveVideo_s4}
            characterImageWidth = {props.characterImageWidth}
            characterImageHeight = {props.characterImageHeight}
            CurrentLocation = {props.CurrentLocation}
            DrugStealthModifier = {props.DrugStealthModifier}
        > 
            {props.EveTalks}
            {props.theLinks()}
        </Evelyn>
        </>
    )
    } else if(props.randomNumFindGirls < 0.10 && props.flags.includes("MET_AMY")){
    
    return(
        <>
        <Col1>
            <SetCol1></SetCol1>
        </Col1>
        <Amy
            backImageChar = {props.backImageChar}
            ImageChar = {props.AmyImage}
            ImageCharS1 = {props.AmyImageS1}
            ImageCharS2 = {props.AmyImageS2} 
            ImageCharS3 = {props.AmyImageS3}
            VideoCharFuckingS4 = {props.fuckingAmyVideo_s4}
            characterImageWidth = {props.characterImageWidth}
            characterImageHeight = {props.characterImageHeight}
            CurrentLocation = {props.CurrentLocation}
            DrugStealthModifier = {props.DrugStealthModifier}
        > 
            {props.AmyTalks}
            {props.theLinks()}
        </Amy>
        </>
    )
    } else if(props.randomNumFindGirls < 0.15 && props.flags.includes("MET_SANDY")){
    
    return(
        <>
        <Col1>
            <SetCol1></SetCol1>
        </Col1>
        <Sandy
            backImageChar = {props.backImageChar}
            ImageChar = {props.SandyImage}
            ImageCharS1 = {props.SandyImageS1}
            ImageCharS2 = {props.SandyImageS2}
            ImageCharS3 = {props.SandyImageS3}
            VideoCharFuckingS4 = {props.fuckingSandyVideo_s4}
            characterImageWidth = {props.characterImageWidth}
            characterImageHeight = {props.characterImageHeight}
            CurrentLocation = {props.CurrentLocation}
            DrugStealthModifier = {props.DrugStealthModifier}
        > 
            {props.SandyTalks}
            {props.theLinks()}
        </Sandy>
        </>
    )
    }
}


export default FindingTheGirls;