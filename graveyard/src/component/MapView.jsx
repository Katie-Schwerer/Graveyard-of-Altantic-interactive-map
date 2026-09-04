import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "../App.css";
import ShipWreckMarker from "./ShipWreckMarker";

//import shipwrecks from "../data/shipwrecks.json";
//import ships from "../data/Shipwrecks-Media.json";

import { useShipwreckFilterContext } from "./provider/ShipwreckFilterContext";

function InvalidateSize() {
  const map = useMap();
  useEffect(() => {
    map.invalidateSize();
  }, [map]);
  return null;
}

function MapView() {
  const { shipwreckView } = useShipwreckFilterContext();

  return (
    <div className="map-comp">
      <MapContainer
        center={[35.2909874203695, -75.6829703698898]}
        zoom={7}
        style={{ height: "93vh", width: "100%" }}
      >
        <InvalidateSize />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {shipwreckView.map((ship, index) => (
          <ShipWreckMarker shipwreck={ship} key={index} />
        ))}
      </MapContainer>
    </div>
  );
}

export default MapView;
