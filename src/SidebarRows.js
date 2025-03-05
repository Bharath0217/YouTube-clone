import React from 'react';
import './SidebarRows.css';
function SidebarRows({ selected, Icon, title }) {
    return (
        <div className={`sidebarRows ${ selected && "selected"}`}>
            <Icon className="sidebarRows-icon" />
            <h2 className='sidebarRows-title' >{title}</h2>
        </div>
    )
}

export default SidebarRows
