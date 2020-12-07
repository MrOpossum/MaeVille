import React from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from "react-router-dom";

import Col1 from "../../components/col1";
import Col2 from "../../components/col2";
import Col3 from "../../components/col3";
import SetCol1 from "../../components/SetCol1";

//Images
import StarryNight from "../../Images/TheHill/TheHillStarryNight.png"
import TheHillImage from "../../Images/TheHill/TheHill.jpg"

////EVEMQ
import Band_of_cholos from "../../Images/Characters/Cholos/Band_of_cholos_transparent.png"



const TheHill = (props) => {

    const [dialogCholoOpenPickedUpMoonstone, setdialogCholoOpenPickedUpMoonstone] = React.useState(false);

    function normal_distribution() {
        let u = 0, v = 0;
        while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
        while(v === 0) v = Math.random();
        let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
        num = num / 10.0 + 0.5; // Translate to 0 -> 1
        if (num > 1 || num < 0) return normal_distribution(); // resample between 0 and 1
        return num;
      } 



    if( ( (props.date.getHours() > 18 || props.date.getHours() < 5) && props.flags.includes("EVEMQEveWillBeAtTheHill"))  ) {
        if(props.flags.includes("EVEMQEveWillBeAtTheHill")){
            
            let EVEMQApproachEveAtHillGood = () =>{
                props.onAddMinutes(10);
                props.onPushFlag("EVEMQApproachEveAtHillGood");
                props.onSpliceFlag("EVEMQEveWillBeAtTheHill");
                props.onPushFlag("HILL_DISCOVERED");
            }

            let EVEMQLookAtTheStarsAtHillGood = () =>{
                props.onAddMinutes(10);
                props.onPushFlag("EVEMQLookAtTheStarsAtHill");
                props.onSpliceFlag("EVEMQEveWillBeAtTheHill");
                props.onPushFlag("HILL_DISCOVERED");
            }
            let EVEMQApproachEveAtHillBad = () =>{
                props.onAddMinutes(10);
                props.onPushFlag("EVEMQApproachEveAtHillBad");
                props.onSpliceFlag("EVEMQEveWillBeAtTheHill");
                props.onPushFlag("HILL_DISCOVERED");
            }

            let EVEMQLookAtTheStarsAtHillBad = () =>{
                props.onAddMinutes(10);
                props.onPushFlag("EVEMQLookAtTheStarsAtHill");
                props.onSpliceFlag("EVEMQEveWillBeAtTheHill");
                props.onPushFlag("HILL_DISCOVERED");
            }

            
        
            
            if(props.relations.Eve > 1){
                return(
                    <>
                    <Col1>
                        <SetCol1
                        />
                    </Col1>
                    <Col2 BackImage = {StarryNight}>
                            <img alt = {"Not found"} src = {props.EveImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                    </Col2>  
            
                    <Col3 > 
                           
                            
                                <p>The stars twinkle brightly in the dark sky, the moon is huge and it shines so bright you don't need any other light source.</p>

                                <p>There are humans, anthros, and who knows what other kind of magical creatures roaming around. </p>
                                
                                <p>At the distance you see Evelyn. She's preparing some kind of ritual. There are large quartz-like stones placed in a circle and she's inside. Eve is looking intently at the stars, and she's using her hand as a telescope.</p>
    
            
                        <Link to={"/TheHill"} style={{ textDecoration: "none" }}>
                            <button type="button" className="btn btn-primary" onClick = {EVEMQApproachEveAtHillGood}>Approach Eve</button>
                        </Link>  
                        <Link to={"/TheHill"} style={{ textDecoration: "none" }}>
                            <button type="button" className="btn btn-primary" onClick = {EVEMQLookAtTheStarsAtHillGood}>Look at the stars</button>
                        </Link>  

                    </Col3>
                    </>
          
              )
            } else{
                return(
                    <>
                    <Col1>
                        <SetCol1
                        />
                    </Col1>
                    <Col2 BackImage = {StarryNight}>
                            <img alt = {"Not found"} src = {props.EveImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                    </Col2>  
            
                    <Col3 > 
                           
                            
                                <p>The stars twinkle brightly in the dark sky, the moon is huge and it shines so bright you don't need any other light source.</p>

                                <p>There are humans, anthros, and who knows what other kind of magical creatures roaming around. </p>
                                
                                <p>At the distance you see Evelyn. She's preparing some kind of ritual. There are large quartz-like stones placed in a circle and she's inside. Eve is looking intently at the stars, and she's using her hand as a telescope.</p>
    
            
                        <Link to={"/TheHill"} style={{ textDecoration: "none" }}>
                            <button type="button" className="btn btn-primary" onClick = {EVEMQApproachEveAtHillBad}>Approach Eve</button>
                        </Link>  
                        <Link to={"/TheHill"} style={{ textDecoration: "none" }}>
                            <button type="button" className="btn btn-primary" onClick = {EVEMQLookAtTheStarsAtHillBad}>Look at the stars</button>
                        </Link>  

                    </Col3>
                    </>
          
              )
            }
    } 
    }  //At night end

    else if(props.flags.includes("EVEMQApproachEveAtHillGood")){
        let EVEMQEveWillBeAtGallery = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("EVEMQEveWillBeAtGallery");
            props.onSpliceFlag("EVEMQApproachEveAtHillGood");
            props.onPushFlag("GALLERY_DISCOVERED");
        }

        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {StarryNight}>
                    <img alt = {"Not found"} src = {props.EveImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
                   
                    

                    <p>Evelyn looks at you and smiles. "Hey! I saw you at the bar" Says Eve. "Waaiitttt..." She places her hand on your shoulder. You notice you were about to kick a large quarz Evelyn placed. </p>
                    <p>"Those runes should attract moonstones" Evelyn explains </p>
                    <p>Before she started to talk again a roar came from the skies. Bright lights of purple hues dot the night and the earth starts shaking.</p>
                    <p>Stones of all sizes start crashing into the earth. Some wizards have protective shields, others built spells to attract the stones to them, some others are just lying down, with no regards for the turmoil around them.</p>
                    <p>A small stone crashes at your side. And there are more stones comming for you.</p>
                    <p>Eve grabs you and pulls you towards her. She has an small magic umbrella that protects her from the meteorites. </p>
                    <p>"Why don't you have any protection? Are you crazy!? You are lucky I'm here"
                    Evelyn looks at the sky. The falling stars crash towards the earth, the athmosphere filled with a sound that almost feels orchestrated and a smell of cut grass floats in the air.</p>
                    <p>Evelyn points towards the sky. "Look! It's a Moonstone" A brigth metorite with a silver tail is coming directly at you. Evelyn takes a step back and you follow. The moonstone falls directly at your feet.</p>
                    <p>Eve picks up the stone. "You know, this will actually finish my current project!" She cheers.</p>
                    <p>Eve clutches the stone. "I have been working on this for over a month now. I can't believe they'll actually display my work at the gallery!"</p>
                    <p>"You should go see it!" she comments</p>
                    <p>Eve looks at the sky.Then she starts collecting the rocks she had placed before you arrived. When she touched the stones they shrunk to the size of tiny pebbles. </p>
                    <p>The cold breeze blows and with it the stars stop twinkling. The crowd starts dispersing, and the creatures in the hills go home.</p>

    
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {EVEMQEveWillBeAtGallery}>Game map</button>
                </Link>  
                

            </Col3>
            </>
  
      )

    } else if(props.flags.includes("EVEMQLookAtTheStarsAtHill")){
        let EVEMQGiveMoonstoneToEveAthill = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("EVEMQGiveMoonstoneToEveAthill");
            props.onSpliceFlag("EVEMQLookAtTheStarsAtHill");
            props.onChangeRelationship("Eve",5);
        }

        let EVEMQKeepMoonstoneAtHill = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("EVEMQKeepMoonstoneAtHill");
            props.onSpliceFlag("EVEMQLookAtTheStarsAtHill");
            props.onChangeRelationship("Eve",-2);
            props.onAddItem("moonStone",1);
        }

        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {StarryNight}>
                    <img alt = {"Not found"} src = {props.EveImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
                   

                   <p>You see bright lights of purple hues dot the night and the earth starts shaking. metorites are falling all over the place, and weirdly, not a single one hits you. The stars keep falling and you see everyone is enjoying themselves.</p>
                   <p>When the skies clear you see a meteorite with a silver tail heading directly to you. </p>
                   <p>You take a step back and the stone falls right at your feet.</p>
                   <p>You pick up the stone and see Evelyn apporaching you</p>
                   <p>"Hey, I saw you at the bar" She comments "That's a Moonstone, you know, I came here looking for one, I even built a moonstone catcher over there." Eve pauses. "I need one for one of my art projects."</p>
                  
    
                <Link to={"/TheHill"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {EVEMQGiveMoonstoneToEveAthill}>Give Eve the moonstone</button>
                </Link>  
                <Link to={"/TheHill"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {EVEMQKeepMoonstoneAtHill}>Keep the moonstone</button>
                </Link>  
                

            </Col3>
            </>
  
      )

    }else if(props.flags.includes("EVEMQApproachEveAtHillBad")){
        let EVEMQRollDieToDodgeStones = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("EVEMQApproachEveAtHillBad");
            let dodgeRoll = Math.round(props.strength * normal_distribution()*2,0);
            if(dodgeRoll < 8){
                props.onPushFlag("EVEMQCouldNotDodgeMeteoritesAtHill");
            } else if(dodgeRoll < 13){
                props.onPushFlag("EVEMQDodgedMeteoritesAtHill");
            } else{
                props.onPushFlag("EVEMQDodgedMeteoritesExcellentAtHill");
            }
        }

        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {StarryNight}>
                    <img alt = {"Not found"} src = {props.EveImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
                   

                            <p>You approach Eve and she looks at you. Eve scoffs. </p>
                            <p>"I'm bussy" She says. "Please don't..."</p>
                            <p>Before she finished the sentence a roar came from the skies. Bright lights of purple hues dot the night and the earth starts shaking.</p>
                            <p>You loose your balance and push one of the quartz-like stones Eve placed on the floor.</p>
                            <p>"Boiled snails..." Mutters Eve.</p> 
                            <p>Stones of all sizes start crashing into the earth. Some wizards have protective shields, others built spells to attract the stones to them, some others are just lying down, with no regards for the turmoil around them.</p>
                            <p>A small stone crashes at your side. And there are more stones comming for you.</p>
                  
    
                <Link to={"/TheHill"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {EVEMQRollDieToDodgeStones}>Roll the die to dodge the stones</button>
                </Link>  
                
                

            </Col3>
            </>
  
      )
    }else if(props.flags.includes("EVEMQGiveMoonstoneToEveAthill")){
        let EVEMQEveWillBeAtGallery = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("EVEMQEveWillBeAtGallery");
            props.onSpliceFlag("EVEMQGiveMoonstoneToEveAthill");
            props.onPushFlag("GALLERY_DISCOVERED");
        }

        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {StarryNight}>
                    <img alt = {"Not found"} src = {props.EveImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
                   

                   <p>"Thank you". Eve says "This will actually finish my current project!" She cheers.</p>
                    <p>Eve clutches the stone. "I have been working on this for over a month now. I can't believe they'll actually display my work at the gallery!"</p>
                    <p>"You should go see it!"</p>
                    <p>Eve looks at the sky.Then she starts collecting the rocks she had placed before you arrived. When she touched the stones they shrunk to the size of tiny pebbles. </p>
                    <p>The cold breeze blows and with it the stars stop twinkling. The crowd starts dispersing, and the creatures in the hills go home.</p>
                  
    
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {EVEMQEveWillBeAtGallery}>Game Map</button>
                </Link>  
                
                

            </Col3>
            </>
  
      )
    } else if(props.flags.includes("EVEMQKeepMoonstoneAtHill")){
        let EVEMQEveWillBeAtGallery = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("EVEMQGiveMoonstoneToEveAthill");
        }

        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {StarryNight}>
                    <img alt = {"Not found"} src = {props.EveImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
                   

                    <p>You clutch the moonstone. </p>
                    <p>"Oh" Eve takes a step back. She sighs. Eve starts picking up every stone that made the circle, and the moment she touched them, the stones shrunk to pebble size.</p>
                    <p>"Excuse me" Eve says, and leaves.</p>
                  
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {EVEMQEveWillBeAtGallery}>Game Map</button>
                </Link>  
                
                

            </Col3>
            </>
  
      )
    } else if(props.flags.includes("EVEMQCouldNotDodgeMeteoritesAtHill")){
        let EVEMQFailedDodgesWakeUpHome = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("EVEMQCouldNotDodgeMeteoritesAtHill");
        }

        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {StarryNight}>
                    <img alt = {"Not found"} src = {props.EveImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
                   

                    <p>You get hit by a stone, then another one, then another one. You see Eve has a small umbrella as a shield, and she's getting closer to shield you.</p>
                    <p>You see a bright yellow flash. A stone is just in front of you... And you faint.</p>
                  
                <Link to={"/Home"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {EVEMQFailedDodgesWakeUpHome}>Wake up home</button>
                </Link>  
                
                

            </Col3>
            </>
  
      )
    }else if(props.flags.includes("EVEMQDodgedMeteoritesAtHill")){
        
        const handleClickOpen = () => {
            setdialogCholoOpenPickedUpMoonstone(true);
          };
        
          const handleClose = () => {
            setdialogCholoOpenPickedUpMoonstone(false);
          };

        let EVEMQGameMapAfterMetCholos = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("EVEMQDodgedMeteoritesAtHill");
            props.onPushFlag("MET_CHOLOS");
            props.onChangeRelationship("Cholos",5);

            if(Math.random() > .5){
                props.onAddItem("moonStone",1);
                setdialogCholoOpenPickedUpMoonstone(true);
            }
            
        }

        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {StarryNight}>
                    <img alt = {"Not found"} src = {Band_of_cholos} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
                   

                   <p>You dodge the stones skillfuly, most wizards are looking at you. Some are concerned, a few more are just laughing.</p>
                    <p>A band of cholos approach you. "Yoo. I like this guy's style." One says. "Culo si no!" Another one yells.</p>
                    <p>Every one in the band dropped their shields and started dodging meteorites. "Fuck. Ouch. Carajo!" You hear them say while you keep dodging the falling stars.</p>
                    <p>One of them gets hit in the head and faints. Everyone in the groups laughs. "Hey, someone get a shield over Carlito!" One of men says. You see the guys move like a group of bees. Perfect coordination. One men took a shield rune and tossed it while dodging a metorite. Another men jumped in the air, took it, and tossed it over again. A third member of the group dashed just over the fainted men and dropped the stone right in his chest. A grey spiritual tiger popped from the stone, and diverted every projectile over Carlito.</p>
                    <p>The group cheered.</p>
                    <p>"Hey" One of the men adresses you. "You got some balls ese. We might need someone like you around"</p>
                    <p>The group high-fives you.</p>
                    <p>You look around and Eve is gone. </p>
                    
                  
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {EVEMQGameMapAfterMetCholos}>Game Map</button>
                </Link>  

                <Dialog
                    open={dialogCholoOpenPickedUpMoonstone}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Before leaving you found a small round stone in the floor. It looks just like a tiny moon! You found a moonstone!
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cool!
                    </Button>
                    </DialogActions>
                </Dialog>
                
                

            </Col3>
            </>
  
      )
    }else if(props.flags.includes("EVEMQDodgedMeteoritesExcellentAtHill")){
        let EVEMQGiveMoonstoneToEveAthill = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("EVEMQGiveMoonstoneToEveAthill");
            props.onSpliceFlag("EVEMQLookAtTheStarsAtHill");
            props.onChangeRelationship("Eve",5);
        }

        let EVEMQKeepMoonstoneAtHill = () =>{
            props.onAddMinutes(10);
            props.onPushFlag("EVEMQKeepMoonstoneAtHill");
            props.onSpliceFlag("EVEMQLookAtTheStarsAtHill");
            props.onChangeRelationship("Eve",-2);
            props.onAddItem("moonStone",1);
        }

        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {StarryNight}>
                    <img alt = {"Not found"} src = {props.EveImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
                   

                    <p>You dodge meteorite after meteorite, it almost seem efortless. You notice a falling star with a distinct silver tail, and it's comming right at you. You move just a coulple inches and stone falls right at your feet. It's shiny, round and it looks just like a tiny moon.</p>
                    <p>You pick up the stone. </p>
                    <p>"That's a Moonstone!" Cheers Eve. "You are not back luck after all"</p>
                  
    
                <Link to={"/TheHill"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {EVEMQGiveMoonstoneToEveAthill}>Give Eve the moonstone</button>
                </Link>  
                <Link to={"/TheHill"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {EVEMQKeepMoonstoneAtHill}>Keep the moonstone</button>
                </Link>  
                

            </Col3>
            </>
  
      )
    }
    
    
    
    else {
        let GoToGameMap = () =>{
            props.onAddMinutes(10);
        }
    
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {TheHillImage}>
            </Col2>  
    
            <Col3 > 
                   
                   <p>What a lovely view</p>
    
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GoToGameMap}>Game map</button>
                </Link>  
            </Col3>
            </>
  
      )

    }

}


export default TheHill;

