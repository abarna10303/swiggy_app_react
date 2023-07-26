import { Box, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import yourImage from './YOURMIND.json';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function OnYourMind()
{
    let yourMindImage=yourImage;
    const [initialImage,setInitialImage]=useState(1);
    const[lastImage,setLastImage]=useState(9);
    function carouselForward()
    {
        setInitialImage(initialImage+5);
        setLastImage(lastImage+5);
    }
    function carouselBackward()
    {
        setInitialImage(initialImage-5);
        setLastImage(lastImage-5);
    }
    yourMindImage=yourMindImage.slice(initialImage,lastImage);
    return(
        <Box className='onYourMind container'>
            <Grid container className="onYourMindContainer">
                <Grid className="row2" item xs={12}>
                    <h2>What's on your mind?</h2>
                    <Box style={{display:'flex'}}>
                        {initialImage===1 &&lastImage===9 ?<button className="arrowBtn" disabled> 
                            <ArrowBackIcon />
                            </button>:
                            <button className="arrowBtn" onClick={()=>carouselBackward()}> 
                                <ArrowBackIcon />
                            </button>}
                        {lastImage<=yourImage.length?<button className="arrowBtn" onClick={()=>carouselForward()}>
                            <ArrowForwardIcon />
                        </button>:<button className="arrowBtn" disabled>
                            <ArrowForwardIcon />
                        </button>}
                    </Box>
                </Grid>
                <Grid className="mindCardContainer" item xs={12}>
                    {yourMindImage.map((val,index)=>{
                       return(
                            <Grid key={index} item xs={2} className="mindCard">
                                <img src={val.image} alt="val"></img>
                            </Grid>
                       );
                    })}
                </Grid>
            </Grid>
        </Box>
    )
}
export default OnYourMind;