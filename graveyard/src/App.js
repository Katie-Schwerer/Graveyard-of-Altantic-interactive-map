import "./App.css";
import "leaflet/dist/leaflet.css";

import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <hr></hr>
      <div className="map-comp">
        <MapContainer center={[35.83432, -78.62809]} zoom={7}>
          <TileLayer
            attribution="Google Maps"
            url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}" // terrain
            maxZoom={20}
            subdomains={["mt0", "mt1", "mt2", "mt3"]}
          />
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
