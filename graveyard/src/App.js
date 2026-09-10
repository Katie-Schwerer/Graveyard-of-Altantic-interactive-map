import React, { useEffect, useState } from "react";
import "./App.css";
import ToggleSwitch from "./component/ToggleSwitch";
import MapView from "./component/MapView";
import TableView from "./component/TableView";
import Filter from "./component/filter-component/Filter";
import { ShipwreckFilterProvider } from "./component/provider/ShipwreckFilterContext";

function App() {
  const [view, setView] = useState("Map");

  useEffect(() => {}, []);

  const handleChangeView = (viewName) => {
    if (viewName === "Map") {
      setView("Table");
    } else {
      setView("Map");
    }
  };

  return (
    <ShipwreckFilterProvider>
      <div className="App">
        <header>
          <h1>Graveyard of Altantic</h1>
          <ToggleSwitch view={view} handleNavigate={handleChangeView} />
        </header>
        <div className="view">
          <Filter view={view} />
          {view === "Map" ? <MapView /> : <TableView />}
        </div>
      </div>
    </ShipwreckFilterProvider>
  );
}

export default App;
