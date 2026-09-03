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
import MapFilter from "./filter-component/MapFilter";

function InvalidateSize() {
  const map = useMap();
  useEffect(() => {
    map.invalidateSize();
  }, [map]);
  return null;
}

let typeAndIcons = [
  { type: "Sailing Vessel", icon: <SailingIcon style={{ fontSize: "18px" }}/> },
  { type: "Tanker", icon: <WaterDropIcon style={{ fontSize: "18px" }}/> },
  { type: "Gas Stern Wheel", icon: <GasMeterIcon style={{ fontSize: "18px" }}/> },
  { type: "Steamer", icon: <RxColorWheel size={18}/> },
  { type: "Trawler", icon: <GiFishingBoat size={18}/> },
  { type: "Barge", icon: <DirectionsBoatIcon style={{ fontSize: "18px" }}/> },
  { type: "Lightship", icon: <FaLightbulb size={18}/> },
  { type: "Freighter", icon: <GiCargoShip size={18}/> },
  { type: "Tugboat", icon: <RiShip2Fill size={18}/> },
  { type: "Dredge", icon: <GiCargoCrane size={18}/> },
  { type: "Submarine", icon: <GiSubmarine size={18}/> },
  { type: "Fishing Vessel", icon: <GiBoatFishing size={18}/> },
  { type: "Yacht", icon: <SiMentorcruise size={18}/> },
  { type: "Motor Vessel Diesel", icon: <PiEngineBold size={18}/> },
  //{ type: "Gunboat", icon: <GiBattleship /> },
  //{ type: "Patrol Boat", icon: <GiPoliceBadge /> },
  //{ type: "Tank Landing Ship", icon: <SiCodeship /> },
  //{ type: "Ironclad", icon: <GiIronHulledWarship /> },
  { type: "Liberty Ship", icon: <FaShip size={18}/> },
  { type: "Unknown", icon: <span className="circle"></span> }
];

const shipwrecksArray = shipwrecks.Shipwrecks

function MapView() {
  let [typeFilter, setTypeFilter] = useState([]);
  let [shipwreckEventsList, setShipwreckEventsList] = useState([])
  let [shipwreckCountryList, setShipwreckCountryList] = useState([])

  let [event, setEvent] = useState("");
  let [country, setCountry] = useState("");

  let shipwreckView = useMemo(() => {
    return shipwrecksArray.filter((ship) => {
      const typeMatch =  !typeFilter.includes(ship.type)
      const eventMatch = event === "" | ship.shipwreckEvent === event;
      const countryMatch = country === "" | ship.country === country;
      return typeMatch && eventMatch && countryMatch;
    })
  }, [typeFilter, event, country]);

  useEffect(() => {
    const events = [];
    for (let i = 0 ; i < shipwrecksArray.length; i++) {
      if (!events.includes(shipwrecksArray[i].shipwreckEvent)) {
        events.push(shipwrecksArray[i].shipwreckEvent)
      }
    }
    setShipwreckEventsList(events);
  }, []);

  useEffect(() => {
    const countries = [];
    for (let i = 0; i < shipwrecksArray.length; i++) {
      if (!countries.includes(shipwrecksArray[i].country)) {
        countries.push(shipwrecksArray[i].country)
      }
    }
    setShipwreckCountryList(countries);
  }, []);

  const handleEventFilter = (event) => {
    setEvent(event)
  }

  const handlerCountryFilter = (count) => {
    setCountry(count);
  }

  const handleTypeFilter = (type) => {
    if (typeFilter.includes(type)) {
      let oldFilter = typeFilter;
      if (type === "Trawler") {
        oldFilter = oldFilter.filter((t) => t !== "Converted Trawler")
      } else if (type === "Yacht") {
        oldFilter = oldFilter.filter((t) => t !== "Converted Yacht")
      }
      oldFilter = oldFilter.filter((t) => t !== type);
      setTypeFilter(oldFilter);
    } else {
      if (type === "Trawler") {
        setTypeFilter([...typeFilter, "Converted Trawler", type])
      } else if (type === "Yacht") {
        setTypeFilter([...typeFilter, "Converted Yacht", type])
      } else {
        setTypeFilter([...typeFilter, type]);
      }
    }
  };

  return (
    <div className="map-comp">
      <MapFilter listOfEvents={shipwreckEventsList} shipwreckEvent={event} handleEvent={handleEventFilter} listOfCountries={shipwreckCountryList} shipwreckCountry={country} handleCountry={handlerCountryFilter} />
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
