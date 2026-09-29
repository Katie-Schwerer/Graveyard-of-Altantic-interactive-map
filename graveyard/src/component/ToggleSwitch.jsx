import React from "react";
import "./ToggleSwitch.css";

function ToggleSwitch({ view, handleNavigate }) {
  return (
    <div className="toggle-view">
      <button
        type="button"
        className={`${view === "Map" ? "current" : "non-visible"}`}
        onClick={() => handleNavigate("Table")}
        aria-pressed={view === "Map"}
      >
        Map View
      </button>
      <button
        type="button"
        className={`${view === "Table" ? "current" : "non-visible"}`}
        onClick={() => handleNavigate("Map")}
        aria-pressed={view === "Table"}
      >
        Table View
      </button>
    </div>
  );
}

export default ToggleSwitch;
