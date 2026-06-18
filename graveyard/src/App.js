import "./App.css";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

import React, { useEffect } from "react";
import { CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet";
import shipwrecks from "./data/shipwrecks.json";
import ships from "./data/Shipwrecks-Media.json";
//import MarkerClusterGroup from "react-leaflet-markercluster";
//import InfoContainer from "./component/InfoContainer";

function App() {
  //const [selectedShip, setSelectedShip] = useState(null);

  useEffect(() => {
    console.log("Hello World");
  }, []);

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <hr></hr>
      <div className="map-comp">
        <MapContainer center={[35.2909874203695, -75.6829703698898]} zoom={7}>
          <TileLayer
            attribution="Google Maps"
            url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}" // terrain
            maxZoom={20}
            subdomains={["mt0", "mt1", "mt2", "mt3"]}
          />
            {shipwrecks.Shipwrecks.map((ship, index) => (
              <CircleMarker
                key={index}
                center={[ship.latitude, ship.longitude]}
                radius={5}
                fillColor="blue"
                color="blue"
                fillOpacity={0.8}
                eventHandlers={{
                  click: () => {
                    console.log(`Shipwreck: ${ship.shipName}`);
                  },
                }}
              >
                <Popup>
                  <p>{ship.shipName}</p>
                </Popup>
              </CircleMarker>
            ))}
            {ships.Shipwrecks.map((ship, index) => (
              <CircleMarker
                key={index}
                center={[ship.latitude, ship.longitude]}
                radius={5}
                fillColor="blue"
                color="blue"
                fillOpacity={0.8}
                eventHandlers={{
                  click: () => {
                    console.log("Clicked");
                  },
                }}
              >
                <Popup>
                  <p>{ship.shipName}</p>
                </Popup>
              </CircleMarker>
            ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
