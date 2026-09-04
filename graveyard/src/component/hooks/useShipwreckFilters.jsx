import { useState, useMemo } from "react";
import shipwrecks from "../../data/shipwrecks.json"

const shipwrecksArray = shipwrecks.Shipwrecks;

export function useShipwreckFilters() {
  const [typeFilter, setTypeFilter] = useState([]);
  const [event, setEvent] = useState("");
  const [country, setCountry] = useState("");
  const [warDownDrop, setWarDownDrop] = useState("");

  const shipwreckEventsList = useMemo(() => {
    return [...new Set(shipwrecksArray.map((ship) => ship.shipwreckEvent))];
  }, []);

  const shipwreckCountryList = useMemo(() => {
    return [...new Set(shipwrecksArray.map((ship) => ship.country))];
  }, []);

  const shipWarList = useMemo(() => {
    return [...new Set(shipwrecksArray.map((ship) => ship.wardropdown).filter(Boolean))]
  }, [])

  const handleTypeFilter = (type) => {
    if (typeFilter.includes(type)) {
      let oldFilter = typeFilter;
      if (type === "Trawler") {
        oldFilter = oldFilter.filter((t) => t !== "Converted Trawler");
      } else if (type === "Yacht") {
        oldFilter = oldFilter.filter((t) => t !== "Converted Yacht");
      }
      oldFilter = oldFilter.filter((t) => t !== type);
      setTypeFilter(oldFilter);
    } else {
      if (type === "Trawler") {
        setTypeFilter([...typeFilter, "Converted Trawler", type]);
      } else if (type === "Yacht") {
        setTypeFilter([...typeFilter, "Converted Yacht", type]);
      } else {
        setTypeFilter([...typeFilter, type]);
      }
    }
  };

  let shipwreckView = useMemo(() => {
    return shipwrecksArray.filter((ship) => {
      const typeMatch = !typeFilter.includes(ship.type);
      const eventMatch = (event === "") || (ship.shipwreckEvent === event);
      const countryMatch = (country === "") || (ship.country === country);
      const warMatch = (warDownDrop === "") || (ship.wardropdown === warDownDrop)
      return typeMatch && eventMatch && countryMatch && warMatch;
    });
  }, [typeFilter, event, country, warDownDrop]);

  return {
    shipwrecksArray,
    typeFilter,
    event,
    country,
    shipwreckEventsList,
    shipwreckCountryList,
    shipWarList,
    shipwreckView,
    warDownDrop,
    handleTypeFilter,
    setCountry,
    setEvent,
    setWarDownDrop
  }
}
