import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "../App.css";
import ShipWreckMarker from "./ShipWreckMarker";

import { useShipwreckFilterContext } from "./provider/ShipwreckFilterContext";

function InvalidateSize() {
  const map = useMap();
  useEffect(() => {
    map.invalidateSize();
  }, [map]);
  return null;
}

function MapView() {
  const { shipwreckView, shipwreckViewDescription } = useShipwreckFilterContext();

  return (
    <div className="map-comp">
      <MapContainer
        center={[35.193515, -75.494042]}
        zoom={8}
      >
        <InvalidateSize />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {shipwreckView.map((ship, index) => (
          <ShipWreckMarker shipwreck={ship} key={index} />
        ))}
        {shipwreckViewDescription.map((ship, index) => (
          <ShipWreckMarker shipwreck={ship} key={index} description={true}/>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapView;
