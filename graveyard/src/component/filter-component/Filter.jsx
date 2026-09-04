import React, { useEffect } from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

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
import { useShipwreckFilterContext } from "../provider/ShipwreckFilterContext";

let typeAndIcons = [
  {
    type: "Sailing Vessel",
    icon: <SailingIcon style={{ fontSize: "18px" }} />,
  },
  { type: "Tanker", icon: <WaterDropIcon style={{ fontSize: "18px" }} /> },
  {
    type: "Gas Stern Wheel",
    icon: <GasMeterIcon style={{ fontSize: "18px" }} />,
  },
  { type: "Steamer", icon: <RxColorWheel size={18} /> },
  { type: "Trawler", icon: <GiFishingBoat size={18} /> },
  { type: "Barge", icon: <DirectionsBoatIcon style={{ fontSize: "18px" }} /> },
  { type: "Lightship", icon: <FaLightbulb size={18} /> },
  { type: "Freighter", icon: <GiCargoShip size={18} /> },
  { type: "Tugboat", icon: <RiShip2Fill size={18} /> },
  { type: "Dredge", icon: <GiCargoCrane size={18} /> },
  { type: "Submarine", icon: <GiSubmarine size={18} /> },
  { type: "Fishing Vessel", icon: <GiBoatFishing size={18} /> },
  { type: "Yacht", icon: <SiMentorcruise size={18} /> },
  { type: "Motor Vessel Diesel", icon: <PiEngineBold size={18} /> },
  //{ type: "Gunboat", icon: <GiBattleship /> },
  //{ type: "Patrol Boat", icon: <GiPoliceBadge /> },
  //{ type: "Tank Landing Ship", icon: <SiCodeship /> },
  //{ type: "Ironclad", icon: <GiIronHulledWarship /> },
  { type: "Liberty Ship", icon: <FaShip size={18} /> },
  { type: "Unknown", icon: <span className="circle"></span> },
];

function Filter({ view }) {
  const {
    shipwreckEventsList,
    shipwreckCountryList,
    shipWarList,
    event,
    country,
    warDownDrop,
    typeFilter,
    minYear,
    maxYear,
    handleTypeFilter,
    setCountry,
    setEvent,
    setWarDownDrop,
  } = useShipwreckFilterContext();

  useEffect(() => {
    console.log(minYear);
    console.log(maxYear);
  })

  return (
    <section className="filter">
      <section className="filter-row">
        <div className="shipwreck-event">
          <label htmlFor="shipwreck-event">Ship Wreck Event:</label>
          <select
            id="shipwreck-event"
            value={event}
            onChange={(e) => setEvent(e.target.value)}
          >
            <option value="" disabled>
              Select From the Ship Wreck Event:
            </option>
            {shipwreckEventsList.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="country">
          <label htmlFor="country">Country: </label>
          <select
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Select From the Country List</option>
            {shipwreckCountryList.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="war">
          <label htmlFor="war">War Down Drop: </label>
          <select
            id="war"
            value={warDownDrop}
            onChange={(e) => setWarDownDrop(e.target.value)}
          >
            <option value="">Select From the Country List</option>
            {shipWarList.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="dates">
          <label htmlFor="date-range">Sunk Year Range: </label>
          <Box sx={{ width: 300, mx: 3 }}>
            <Slider
              id="date-range"
              min={minYear}
              max={maxYear}
              valueLabelDisplay="auto"
              marks={[
                { value: minYear, label: `${minYear}` },
                { value: maxYear, label: `${maxYear}` },
              ]}
            />
          </Box>
        </div>
      </section>
      {view === "Map" && (
        <section>
          <div className="map-filter">
            {typeAndIcons.map((type, index) => (
              <button
                key={index}
                className={`filter-button ${
                  typeFilter.includes(type.type) ? "non-visible" : ""
                }`}
                onClick={() => handleTypeFilter(type.type)}
              >
                {type.icon} {type.type}
              </button>
            ))}
          </div>
        </section>
      )}
    </section>
  );
}

export default Filter;
