import React from "react"
import "./ToggleSwitch.css"

function ToggleSwitch({ view, handleNavigate }) {
    return (
        <div className="toggle-view" >
            <button className={`${view === "Map" ? "current" : "non-visible"}`} onClick={() => handleNavigate('Table')}>Map View</button>
            <button className={`${view === "Table" ? "current" : "non-visible"}`} onClick={() => handleNavigate('Map')}>Table View</button>
        </div>
    )
}

export default ToggleSwitch;