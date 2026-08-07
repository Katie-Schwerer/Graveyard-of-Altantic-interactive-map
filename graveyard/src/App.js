import React, { useEffect, useState } from "react";
import './App.css'
import ToggleSwitch from "./component/ToggleSwitch";
import MapView from "./component/MapView";
import TableView from "./component/TableView";

function App() {
  const [view, setView] = useState("Map")

  useEffect(() => {
  }, []);

  const handleChangeView = (viewName) => {
    if (viewName === "Map") {
      setView("Table")
    } else {
      setView("Map")
    }
  }

  return (
    <div className="App">
      <h1>Graveyard of Altantic</h1>
      <ToggleSwitch view={view} handleNavigate={handleChangeView} />
      <div className="view">
        {view === "Map" ? (
          <MapView />
        ) : (
          <TableView />
        )}
      </div>
    </div>
  );
}

export default App;
