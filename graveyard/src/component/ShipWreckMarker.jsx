import React from "react";
import { CircleMarker, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import iconDetermine from "../support-functions/type-selector";

function ShipWreckMarker({ shipwreck }) {
  const shipType = [
    "sailing vessel",
    "tanker",
    "gas stern wheel",
    "steamer",
    "barge",
    "lightship",
    "freighter",
    "tugboat",
    "dredge",
    "submarine",
    "liberty ship",
    "fishing vessel",
    "yacht",
    "motor vessel diesel",
    "gunboat",
    "patrol boat",
    "tank landing ship",
    "ironclad",
  ];

  if (shipType.includes(shipwreck["type"].toLowerCase())) {
    return (
      <Marker
        position={[shipwreck.latitude, shipwreck.longitude]}
        icon={iconDetermine(shipwreck["type"])}
        eventHandlers={{
          click: () => {
            console.log(`Shipwreck: ${shipwreck.shipName}`);
          },
        }}
      >
        <Popup>
          <p>{shipwreck.shipName}</p>
        </Popup>
      </Marker>
    );
  }

  return (
    <CircleMarker
      center={[shipwreck.latitude, shipwreck.longitude]}
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
        <p>{shipwreck.shipName}</p>
      </Popup>
    </CircleMarker>
  );
}

export default ShipWreckMarker;
