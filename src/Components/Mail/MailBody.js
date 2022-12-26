import { Typography } from '@mui/material'
import React,{useState} from 'react'
// import Typography from "@material-ui/core/Typography"

function MailBody(props) {
    return (
        <div>
            <Typography variant="h5">{props.email}</Typography>
            <Typography variant="h6"><small>{props.subject}</small></Typography>
            <Typography variant="h5">{props.content}</Typography>
        </div>
    )
}

export default MailBody
