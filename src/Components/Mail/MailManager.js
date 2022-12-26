import React, { Component } from 'react'
import Inbox from '../data/inbox'
import Mails from "./Mails"
import MailBody from "./MailBody"
import { Button } from '@mui/material'
//import Button from "@material-ui/core/Button"

class MailManager extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             mail: Inbox,
             isFilterOpen: false,
             filterBy: null,
             activeMail:{
                 id: ''
             }
        }
    }
    handleMailClick(event){
        console.log(event)
        this.setState({
           ...this.state,
            activeMail:{
                id: event-1
            }
        })
    }
    render() {
        const Display =null

        const MailList =  this.props.mail.filter((items)=> items.unread === this.state.filterBy).map((item)=> <div onClick={()=> this.handleMailClick(item.Id)} ><Mails 
            id={item.Id} 
            unread={item.unread} 
            email={item.email} subject={item.subject} /></div>)

        const MailList2 =  this.props.mail.map((item)=> <div onClick={()=> this.handleMailClick(item.Id)} ><Mails content={item.content.slice(0,30)}
            id={item.Id} 
            unread={item.unread} 
            email={item.email} subject={item.subject} /></div>)
        const AllMain = this.state.filterBy != null ? MailList : MailList2
          
        const MailBod = this.props.mail.map((item)=> <MailBody 
            id={item.Id} email={item.email}
            subject={item.subject} 
            content={item.content}/>)
        const FilterOpen = this.state.isFilterOpen ? {display:"block"} :{display:"none"}


        return (
            <div style={Display}>
                <button onClick={()=> this.setState({...this.state,isFilterOpen: !this.state.isFilterOpen})}>Filter</button>
                    <div style={FilterOpen}>
                        <Button onClick={()=> this.setState({...this.state,filterBy : true})}>Unread</Button>
                        <Button onClick={()=> this.setState({...this.state,filterBy : false})}>Read</Button>
                        <Button onClick={()=> this.setState({...this.state,filterBy: null})}>All</Button>
                    </div>
                <div style={{display:"flex"}}>
                    <div style={{width:"30vw"}}>
                        {AllMain}
                    </div>
                    <div style={{width:"40vw"}}>
                        {MailBod[this.state.activeMail.id]}
                    </div>
                </div>
            </div>
        )
    }
}

export default MailManager
