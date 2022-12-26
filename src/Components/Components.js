import React, { Component } from 'react'
import Nav from "./Nav/nav"
// import MailBody from "./Mail/MailBody"
import SideNav from "./Mail/SideNav"
import MailManager from "./Mail/MailManager"
import Folders from "./data/Folders"
import Inbox from "./data/inbox"
import Spams from './data/spam'

class Components extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            folders: Folders,
            mail:Inbox,
            spam:Spams,
             activeFolder:{
                 id:1,
                 name:"Inbox"
             }
        }
        this.handleFolderClick = this.handleFolderClick.bind(this)
    }
    handleFolderClick(event1, event2){
        this.setState({
            ...this.state,
            activeFolder:{
                id: event1,
                name: event2
            }
        })
    }
    
    render() {
        const myS = this.state
        const FolderList = this.state.folders.map((item)=> <div onClick={()=> this.handleFolderClick(item.id, item.name)}>
            <SideNav name={item.name} active={myS.activeFolder.id} id={item.id} />
            </div>)
        return (
            <div>
                <Nav />
                <div style={{display:"flex", width:"100vw"}}>
                    <div style={{background:"#cae2f7",width:"20vw", maxWidth:"500px", height:"90vh"}}>
                        {/* <Search /> */}
                        {FolderList}
                    </div>
                    <div>
                        <div style={this.state.activeFolder.id=== 1 ? {display:"block"}: {display:"none"}}>
                            <MailManager active={this.state.activeFolder.id} mail={this.state.mail} />
                        </div>

                        <div style={this.state.activeFolder.id=== 2 ? {display:"block"}: {display:"none"}}>
                            <MailManager active={this.state.activeFolder.id} mail={this.state.spam} />
                        </div>
                    </div>
                </div>   
            </div>
        )
    }
}

export default Components
