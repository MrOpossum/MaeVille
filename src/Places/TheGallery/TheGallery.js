import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';

import Col1 from "../../components/col1";
import Col2 from "../../components/col2";
import Col3 from "../../components/col3";
import SetCol1 from "../../components/SetCol1";
import SimpleDialog from "../../components/SimpleDialog";
//Images
import GalleryInside from "../../Images/TheGallery/GalleryInside.jpg";

import HuCow_Farms_104 from "../../Images/TheGallery/art/BDSM/HuCow_Farms_104.png";
import HuCow_Farms_114 from "../../Images/TheGallery/art/BDSM/HuCow_Farms_114.png";

import EveAnaBellePeaksBoundHitachiShow from "../../Images/TheGallery/art/BDSM/EveAnaBellePeaksBoundHitachiShow.mp4";

const TheGallery = (props) => {
    let GoToGameMap = () =>{
        props.onAddMinutes(10);
    }
    const [inputTextValue, setInputTextValue] = useState("");
    const [canContinue, setCanContinue] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [openDialog2, setOpenDialog2] = useState(false);
    const [openDialog3, setOpenDialog3] = useState(false);

    if(props.flags.includes("EVEMQEveWillBeAtGallery")){

        let BrowsePaintings = () =>{
            setOpenDialog(true);
        }
        let MeetEve = () =>{
            setOpenDialog2(true);
        }

        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {GalleryInside}>
                <img alt = {"Not found"} src = {props.EveImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                {/* Browse art */}
                {
                    Math.random() < 0.5 ?  
                    <SimpleDialog
                    openDialog={openDialog}
                    handleDialogClose = {()=>{
                            setOpenDialog(false);
                            props.onAddMinutes(10);     
                        }
                    }
                    >
                    
                    <img alt ={"Not found"} src={HuCow_Farms_104} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                    
                    </SimpleDialog>
                 :
                    <SimpleDialog
                    openDialog={openDialog}
                    handleDialogClose = {()=>{
                            setOpenDialog(false);
                            props.onAddMinutes(10);     
                        }
                    }
                    >
                    
                    <img alt ={"Not found"} src={HuCow_Farms_114} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                    
                    </SimpleDialog>
                }
                {/* Meet Eve */}
                {
                    props.flags.includes("MET_EVE") && props.relations.Eve > 0 ?  
                    <SimpleDialog
                    openDialog={openDialog2}
                    handleDialogClose = {()=>{
                            setOpenDialog2(false);
                            props.onAddMinutes(10);     
                            props.onChangeRelationship("Eve",5);
                            props.onSpliceFlag("EVEMQEveWillBeAtGallery");
                            props.onPushFlag("EVEMQExhibitionArtWithEveOne");
                            alert("You can leave the exhibition at any time you want. But Eve will appreciate if you watch it completely");
                        }
                    }
                    >
                    
                    <img alt ={"Not found"} src={props.EveImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                    <p style={{color:"black"}}>"Hello! {props.name} It's so great that you came! Do you like my art? I know It's rough, but I wanted to let out all my feelings..."</p>
                    <p style={{color:"black"}}>"I still feel it's not good enough." Eve sighs</p>
                    <p style={{color:"black"}}>"Hey" eve grabs your hand. "One of the interactive exhibitions is about to start!. Let's go!"</p>
                    
                    </SimpleDialog>
                 :
                    <SimpleDialog
                    openDialog={openDialog2}
                    handleDialogClose = {()=>{
                            setOpenDialog2(false);
                            props.onAddMinutes(10);     
                            props.onChangeRelationship("Eve",5);
                            props.onSpliceFlag("EVEMQEveWillBeAtGallery");
                            props.onPushFlag("EVEMQExhibitionArtWithEveOne");
                            alert("You can leave the exhibition at any time you want. But Eve will appreciate if you watch it completely");
                        }
                    }
                    >
                    
                    <img alt ={"Not found"} src={props.EveImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                    <p style={{color:"black"}}>"Hello" The woman says politely. "I am Eve and this is my exhibition, I hope you are having a great time"</p>
                    <p style={{color:"black"}}>You hear an alarm of some sort. Eve grabs your arm. "The interactive exhibition is about to start. You don't want to miss it."</p>

                    
                    </SimpleDialog>
                }
            </Col2>  
    
            <Col3 > 
                   
                   <p>The moment you get inside you realize why you need to be mentally strong to be here. The athmosphere is heavy, you can even feel some paintings and sculptures dragging you. Around you are all kinds of people, some seem to be strenghtened by this place, some others seem to be about to faint.</p>

                   <p>There is a sign floating around the gallery. "Meet Eve! The most recent artist in the gallery"</p>
    
                
                <Link to={"/TheGallery"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {BrowsePaintings}>Browse paintings</button>
                </Link>  
                <Link to={"/TheGallery"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {MeetEve}>Go meet Eve.</button>
                </Link>  
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GoToGameMap}>Game map</button>
                </Link>  
                
            </Col3>
            </>
  
      )
    } else if(props.flags.includes("EVEMQExhibitionArtWithEveOne")){

        setTimeout(function(){ 
            alert(`"Good job"`);
            setCanContinue(true);
        }, 1.2e+6);

        let CompleteTheExhibition = () =>{
            setOpenDialog(true);
        }

        let LeaveTheExhibition = () =>{
            props.onAddMinutes(10);
            props.onSpliceFlag("EVEMQExhibitionArtWithEveOne");
            props.onPushFlag("finishedEveGalleryExhibitOne");
            props.onPushFlag("finishedEveGalleryExhibitOneGalleryFlag");
        }

        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 >
                <video autoPlay controls>
                    <source src={EveAnaBellePeaksBoundHitachiShow} type="video/mp4"/>
                </video> 

                <SimpleDialog
                    openDialog={openDialog}
                    handleDialogClose = {()=>{
                            setOpenDialog(false);
                            props.onAddMinutes(10);
                            props.onChangeRelationship("Eve",20);
                            props.onSpliceFlag("EVEMQExhibitionArtWithEveOne");
                            props.onPushFlag("finishedEveGalleryExhibitOne");
                            props.onPushFlag("finishedEveGalleryExhibitOneGalleryFlag");
                        }
                    }
                    >
                    
                    <img alt ={"Not found"} src={props.EveImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
                    <p style={{color:"black"}}>"You saw it all!" Eve jumps happily. And hugs you. "Did you like it? What do you think of it?"</p>
                    <TextField
                    value={inputTextValue}
                    onChange={(event) => setInputTextValue(event.target.value)}
                    style = {{marginLeft: "15px", backgroundColor:"white"}}
                    />

                    
                    </SimpleDialog>
            </Col2>  
    
            <Col3 > 
                   
                   <p></p>

                <Link to={"/TheGallery"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {CompleteTheExhibition} style = {{display: canContinue ? "": "none"}}>Complete the exhibition</button>
                </Link>  

                <Link to={"/TheGallery"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {LeaveTheExhibition} >Leave the exhibition unfinished</button>
                </Link>  
    
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GoToGameMap}>Game map</button>
                </Link>  
            </Col3>
            </>
  
      )
    } 
    else if(props.flags.includes("finishedEveGalleryExhibitOneGalleryFlag")){
        
        let leaveGallery = () =>{
            setOpenDialog(true);
            props.onAddMinutes(10);
            props.onSpliceFlag("finishedEveGalleryExhibitOneGalleryFlag");  //finishedEveGalleryExhibitOne is necessary to open class at academy. Keep it and break it when you go to class.
            props.onPushFlag("KomperaAliensInLabPart0");
            alert("Maybe I should check out what's going on at the lab...");
        }

        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {GalleryInside}>
            <img alt ={"Not found"} src={props.EveImage} style ={{width : props.characterImageWidth, height: props.characterImageHeight}}></img>
            </Col2>  
    
            <Col3 > 
                   
                <p>"I hope you enjoyed the exhibition" Says a womans voice.</p>
                <p>You see Eve talking to some smug looking people. You distinguish what they say "I heard the guys at the company are working with some..." They pause and look around. You manage to disimulate and keep listening. "Some creatures" the voice whispers.</p>

                
    
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {leaveGallery}>Game map</button>
                </Link>  
            </Col3>
            </>
  
      )
    }
    
    
    
    else {
    
    
        return(
            <>
            <Col1>
                <SetCol1
                />
            </Col1>
            <Col2 BackImage = {GalleryInside}>
                    
            </Col2>  
    
            <Col3 > 
                   
                   <p>The gallery, full of exhibitions</p>
    
                <Link to={"/GameMap"} style={{ textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary" onClick = {GoToGameMap}>Game map</button>
                </Link>  
            </Col3>
            </>
  
      )

    }

}


export default TheGallery;