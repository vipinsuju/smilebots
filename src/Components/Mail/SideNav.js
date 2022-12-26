import React from 'react'

function SideNav(props) {
    const Active = props.active === props.id ? { margin: "5px auto 5px 0", paddingLeft: "3em", background: "lightblue", fontWeight: "bold" } : { margin: "5px auto 5px 3em" }
    return (
        <div>
            <div style={Active}>
                <span>{props.name}</span>
            </div>
        </div>
    )
}

export default SideNav
