import { DragIndicator } from '@mui/icons-material';
import { Typography } from '@mui/material';
import React from 'react';
// import Typography from "@material-ui/core/Typography"
// import DragIndicatorIcon from "@material-ui/icons/DragIndicator"

const nav = () => {
    return (
        <div>
            <div style={{background:"black",padding:"0.6em 0.5em", height:"2em", color:"white", display:"flex"}}>
                <span><DragIndicator  fonstSize="medium" style={{backgroundColor:"#1581db"}}/> &nbsp;</span><Typography variant="h5">Outlook Mail</Typography>
            </div>
        </div>
    );
}

export default nav;
