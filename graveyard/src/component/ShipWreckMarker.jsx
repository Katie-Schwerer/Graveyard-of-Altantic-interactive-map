import React, { useEffect, useRef } from "react";
import { Marker } from "react-leaflet";
import ReactDOMServer from "react-dom/server";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import iconDetermine from "../support-functions/type-selector";
import NormalPopUp from "./popup-component/NormalPopUp";

import CircleIcon from "@mui/icons-material/Circle";

function ShipWreckMarker({ shipwreck }) {
  const markerRef = useRef();
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
    "converted trawler",
    "trawler",
    "converted yacht",
  ];

  let iconHTML = ReactDOMServer.renderToString(
    <CircleIcon style={{ color: "blue", fontSize: 14 }} />
  );
  let divIcon = L.divIcon({
    html: iconHTML,
    className: "custom-water-icon",
    iconSize: [10, 10],
    iconAnchor: [12, 12],
    popupAnchor: [0, 0],
  });

  useEffect(() => {
    if (markerRef.current) {
      const element = markerRef.current._element;
      if (element) {
        element.setAttribute("tabindex", "0");
        element.setAttribute("role", "button");
        element.setAttribute(
          "aria-label",
          `Shipwreck of ${shipwreck.shipName}`
        );
      }
    }
  }, [shipwreck.shipName]);

  if (shipType.includes(shipwreck["type"].toLowerCase())) {
    return (
      <Marker
        ref={markerRef}
        position={[shipwreck.latitude, shipwreck.longitude]}
        icon={iconDetermine(shipwreck["type"])}
        eventHandlers={{
          click: () => {
            console.log(`Shipwreck: ${shipwreck.shipName}`);
          },
        }}
        keyboard={true}
      >
        <NormalPopUp shipInfo={shipwreck} />
      </Marker>
    );
  }

  return (
    <Marker
      ref={markerRef}
      position={[shipwreck.latitude, shipwreck.longitude]}
      icon={divIcon}
      eventHandlers={{
        click: () => {
          console.log(`Shipwreck: ${shipwreck.shipName}`);
        },
      }}
      keyboard={true}
    >
      <NormalPopUp shipInfo={shipwreck} />
    </Marker>
  );
}

export default ShipWreckMarker;
