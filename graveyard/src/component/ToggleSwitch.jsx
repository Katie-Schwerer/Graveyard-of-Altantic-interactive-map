import React from "react";
import "./ToggleSwitch.css";
import { FaRegMap } from "react-icons/fa6";
import { CiViewTable } from "react-icons/ci";


function ToggleSwitch({ view, handleNavigate }) {
  return (
    <div className="toggle-view">
      <button
        type="button"
        className={`${view === "Map" ? "current" : "non-visible"}`}
        onClick={() => handleNavigate("Table")}
        aria-pressed={view === "Map"}
      >
        <FaRegMap size={18}/>
        Map View
      </button>
      <button
        type="button"
        className={`${view === "Table" ? "current" : "non-visible"}`}
        onClick={() => handleNavigate("Map")}
        aria-pressed={view === "Table"}
      >
        <CiViewTable size={18}/>
        Table View
      </button>
    </div>
  );
}

export default ToggleSwitch;
