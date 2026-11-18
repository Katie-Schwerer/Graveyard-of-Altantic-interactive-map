import React, { useEffect, useRef } from "react";
import { Marker } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import iconDetermine from "../support-functions/type-selector";
import NormalPopUp from "./popup-component/NormalPopUp";

//import DescriptionPopUp from "./popup-component/DescriptionPopUp";

function ShipWreckMarker({ shipwreck }) {
  const markerRef = useRef();
  /*const shipType = [
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
    "converted tugboat"
  ];*/

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

export default ShipWreckMarker;
