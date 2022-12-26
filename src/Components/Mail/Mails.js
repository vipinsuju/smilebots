import { DeleteOutline } from '@mui/icons-material'
import { Typography } from '@mui/material'
import React,{useState} from 'react'
// import Typography from "@material-ui/core/Typography"
// import DeleteIcon from "@material-ui/icons/Delete"

function Mails(props) {
    const [Delete , setDelete] = useState(false)
    const [Tool, setTool] = useState(false)
    const DeletE = Delete ? {display:"none"} :{ display:"block"}
    const Read = props.unread ? {background:"lightblue",margin:"10px auto 10px 0em",paddingLeft:"1em", fontWeight:"bold"} : {background:"white",margin:"10px auto 10px 1em"}
    return (
        <div style={DeletE}>
            
        <div style={Read} onMouseEnter={()=> setTool(true)} onMouseLeave={()=> setTool(false)}>
            <div style={{display:"flex",alignItems:"center", justifyContent:"space-between"}}>
                <div>
                        <Typography>{props.email}</Typography>
                    <Typography>{props.subject}</Typography>
                    <div style={Tool ? {display:"block", background:"rgba(0,0,0,1)", color:"white", poadding:"0.5em", paddingLeft:"0.8em", borderRadius:"3px", position:"absolute" ,width:"10em", height:"auto"}: {display:"none"}}>
                        <Typography variant="h6"><small>{props.content}</small></Typography>
                    </div>
                </div>
                <div>
                    <button onClick={()=> setDelete(true)}><DeleteOutline /></button>
                </div>
            </div>
        </div>
        
        </div>
    )
}

export default Mails
