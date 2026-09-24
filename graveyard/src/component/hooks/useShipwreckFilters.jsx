import { useState, useMemo } from "react";
import shipwrecks from "../../data/Shipwrecks.json";
import shipwreck from "../../data/Shipwrecks-Featured.json";
import {
  getMaxYear,
  getMinYear,
  getShipWreckYear,
} from "../../support-functions/date-function";

const shipwrecksArray = shipwrecks.Shipwrecks;
const shipwrecksDescription = shipwreck.Shipwrecks;

let minYear = getMinYear(shipwrecksArray, shipwrecksDescription);
let maxYear = getMaxYear(shipwrecksArray, shipwrecksDescription);

export function useShipwreckFilters() {
  const [typeFilter, setTypeFilter] = useState([]);
  const [event, setEvent] = useState("");
  const [country, setCountry] = useState("");
  const [warDownDrop, setWarDownDrop] = useState("");
  const [selectedYear, setSelectedYear] = useState(0);

  const shipwreckEventsList = useMemo(() => {
    return [
      ...new Set([
        ...shipwrecksArray.map((ship) => ship.shipwreckEvent),
        ...shipwrecksDescription.map((ship) => ship.shipwreckEvent),
      ]),
    ];
  }, []);

  const shipwreckCountryList = useMemo(() => {
    return [
      ...new Set([
        ...shipwrecksArray.map((ship) => ship.country),
        ...shipwrecksDescription.map((ship) => ship.country),
      ]),
    ];
  }, []);

  const shipWarList = useMemo(() => {
    return [
      ...new Set([
        ...shipwrecksArray.map((ship) => ship.wardropdown),
        ...shipwrecksDescription.map((ship) => ship.war),
      ]),
    ].filter(Boolean);
  }, []);

  const handleTypeFilter = (type) => {
    if (typeFilter.includes(type)) {
      let oldFilter = typeFilter;
      if (type === "Trawler") {
        oldFilter = oldFilter.filter((t) => t !== "Converted Trawler");
      } else if (type === "Yacht") {
        oldFilter = oldFilter.filter((t) => t !== "Converted Yacht");
      } else if (type === "Tugboat") {
        oldFilter = oldFilter.filter((t) => t !== "Converted Tugboat")
      }
      oldFilter = oldFilter.filter((t) => t !== type);
      setTypeFilter(oldFilter);
    } else {
      if (type === "Trawler") {
        setTypeFilter([...typeFilter, "Converted Trawler", type]);
      } else if (type === "Yacht") {
        setTypeFilter([...typeFilter, "Converted Yacht", type]);
      } else if (type === "Tugboat") {
        setTypeFilter([...typeFilter, "Converted Tugboat", type]);
      } else {
        setTypeFilter([...typeFilter, type]);
      }
    }
  };

  const handleYearFilter = (year) => {
    setSelectedYear(year);
  };

  const resetFilters = () => {
    setTypeFilter([]);
    setEvent("");
    setCountry("");
    setWarDownDrop("");
    setSelectedYear(0);
  };

  let shipwreckView = useMemo(() => {
    return shipwrecksArray.filter((ship) => {
      const typeMatch = !typeFilter.includes(ship.type);
      const eventMatch = event === "" || ship.shipwreckEvent === event;
      const countryMatch = country === "" || ship.country === country;
      const warMatch = warDownDrop === "" || ship.wardropdown === warDownDrop;
      const yearMatch =
        selectedYear === 0 || getShipWreckYear(ship.sunk) === selectedYear;
      return typeMatch && eventMatch && countryMatch && warMatch && yearMatch;
    });
  }, [typeFilter, event, country, warDownDrop, selectedYear]);

  let shipwreckViewDescription = useMemo(() => {
    return shipwrecksDescription.filter((ship) => {
      const typeMatch = !typeFilter.includes(ship.type);
      const eventMatch = event === "" || ship.shipwreckEvent === event;
      const countryMatch = country === "" || ship.country === country;
      const warMatch = warDownDrop === "" || ship.war === warDownDrop;
      const yearMatch =
        selectedYear === 0 || getShipWreckYear(ship.sunk) === selectedYear;
      return typeMatch && eventMatch && countryMatch && warMatch && yearMatch;
    });
  }, [typeFilter, event, country, warDownDrop, selectedYear]);

  return {
    shipwrecksArray,
    shipwrecksDescription,
    minYear,
    maxYear,
    typeFilter,
    event,
    country,
    shipwreckEventsList,
    shipwreckCountryList,
    shipWarList,
    shipwreckView,
    shipwreckViewDescription,
    warDownDrop,
    handleTypeFilter,
    handleYearFilter,
    setCountry,
    setEvent,
    setWarDownDrop,
    resetFilters,
  };
}
