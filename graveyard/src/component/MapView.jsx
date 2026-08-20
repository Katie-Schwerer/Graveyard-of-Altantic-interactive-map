import React, { useEffect, useState, useMemo } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

import shipwrecks from "../data/shipwrecks.json";
//import ships from "../data/Shipwrecks-Media.json";

import "leaflet/dist/leaflet.css";
import "../App.css";
import ShipWreckMarker from "./ShipWreckMarker";

import SailingIcon from "@mui/icons-material/Sailing";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import GasMeterIcon from "@mui/icons-material/GasMeter";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import { RxColorWheel } from "react-icons/rx";
import {
  GiBattleship,
  GiBoatFishing,
  GiCargoCrane,
  GiCargoShip,
  GiFishingBoat,
  GiIronHulledWarship,
  GiPoliceBadge,
  GiSubmarine,
} from "react-icons/gi";
import { FaLightbulb, FaShip } from "react-icons/fa";
import { RiShip2Fill } from "react-icons/ri";
import { SiCodeship, SiMentorcruise } from "react-icons/si";
import { PiEngineBold } from "react-icons/pi";

function InvalidateSize() {
  const map = useMap();
  useEffect(() => {
    map.invalidateSize();
  }, [map]);
  return null;
}

let typeAndIcons = [
  { type: "Sailing Vessel", icon: <SailingIcon /> },
  { type: "Tanker", icon: <WaterDropIcon /> },
  { type: "Gas Stern Wheel", icon: <GasMeterIcon /> },
  { type: "Steamer", icon: <RxColorWheel /> },
  { type: "Trawler", icon: <GiFishingBoat /> },
  { type: "Barge", icon: <DirectionsBoatIcon /> },
  { type: "Lightship", icon: <FaLightbulb /> },
  { type: "Freighter", icon: <GiCargoShip /> },
  { type: "Tugboat", icon: <RiShip2Fill /> },
  { type: "Dredge", icon: <GiCargoCrane /> },
  { type: "Submarine", icon: <GiSubmarine /> },
  { type: "Fishing Vessel", icon: <GiBoatFishing /> },
  { type: "Yacht", icon: <SiMentorcruise /> },
  { type: "Motor Vessel Diesel", icon: <PiEngineBold /> },
  { type: "Gunboat", icon: <GiBattleship /> },
  { type: "Patrol Boat", icon: <GiPoliceBadge /> },
  { type: "Tank Landing Ship", icon: <SiCodeship /> },
  { type: "Ironclad", icon: <GiIronHulledWarship /> },
  { type: "Liberty Ship", icon: <FaShip /> },
  { type: "Unknown", icon: <span className="circle"></span> }
];

function MapView() {
  const shipwrecksArray = shipwrecks.Shipwrecks
  let [typeFilter, setTypeFilter] = useState([]);

  let shipwreckView = useMemo(() => {
    return shipwrecksArray.filter((ship) => !typeFilter.includes(ship.type));
  }, [typeFilter, shipwrecksArray]);

  const handleTypeFilter = (type) => {
    if (typeFilter.includes(type)) {
      let oldFilter = typeFilter.filter((t) => t !== type);
      setTypeFilter(oldFilter);
    } else {
      setTypeFilter([...typeFilter, type]);
    }
    console.log(typeFilter)
  };

  return (
    <div className="map-comp">
      <div className="map-filter">
        {typeAndIcons.map((type, index) => (
          <button key={index} className={`filter-button ${typeFilter.includes(type.type) ? 'non-visible' : ''}`} onClick={() => handleTypeFilter(type.type)}>
            {type.icon} {type.type}
          </button>
        ))}
      </div>
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
