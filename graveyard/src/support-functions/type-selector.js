import L from "leaflet";
import ReactDOMServer from "react-dom/server";
import SailingIcon from "@mui/icons-material/Sailing";
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import GasMeterIcon from '@mui/icons-material/GasMeter';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import { RxColorWheel } from 'react-icons/rx';
import { GiBattleship, GiBoatFishing, GiCargoCrane, GiCargoShip, GiFishingBoat, GiIronHulledWarship, GiPoliceBadge, GiSubmarine } from "react-icons/gi";
import { FaLightbulb, FaShip } from "react-icons/fa";
import { RiShip2Fill } from "react-icons/ri";
import { SiCodeship, SiMentorcruise } from "react-icons/si";
import { PiEngineBold } from "react-icons/pi";


function iconDetermine(type) {
  let iconHTML;
  let divIcon;

  if (type.toLowerCase().includes("sailing vessel")) {
    iconHTML = ReactDOMServer.renderToString(<SailingIcon />);
    divIcon = L.divIcon({
      html: iconHTML,
      className: "custom-water-icon",
      iconSize: [18, 18],
      iconAnchor: [12, 12],
      popupAnchor: [0, 0],
    });
    
  } else if (type.toLowerCase().includes("tanker")) {
    iconHTML = ReactDOMServer.renderToString(
      <WaterDropIcon style={{ color: "#d32f2f" }} />
    );
    divIcon = L.divIcon({
      html: iconHTML,
      className: "custom-water-icon",
      iconSize: [18, 18],
      iconAnchor: [12, 12],
      popupAnchor: [0, -12],
    });
  } else if (type.toLowerCase().includes("gas stern wheel")) {
    iconHTML = ReactDOMServer.renderToString(
      <GasMeterIcon style={{ color: "#d32f2f" }} />
    );
    divIcon = L.divIcon({
      html: iconHTML,
      className: "custom-water-icon",
      iconSize: [18, 18],
      iconAnchor: [12, 12],
      popupAnchor: [0, -12],
    });
  } else if (type.toLowerCase().includes("steamer")) {
    iconHTML = ReactDOMServer.renderToString(<RxColorWheel size={18} />);
    divIcon = L.divIcon({
      html: iconHTML,
      className: "custom-water-icon",
      iconAnchor: [12, 12],
      popupAnchor: [0, -12],
    });
  } else if (type.toLowerCase().includes("trawler") || type.toLowerCase().includes("converted trawler")) {
    iconHTML = ReactDOMServer.renderToString(<GiFishingBoat size={18} />);
    divIcon = L.divIcon({
      html: iconHTML,
      className: "custom-water-icon",
      iconAnchor: [12, 12],
      popupAnchor: [0, -12],
    });
  } else if (type.toLowerCase().includes("barge")) {
    iconHTML = ReactDOMServer.renderToString(<DirectionsBoatIcon />);
    divIcon = L.divIcon({
      html: iconHTML,
      className: "custom-water-icon",
      iconSize: [18, 18],
      iconAnchor: [12, 12],
      popupAnchor: [0, -12],
    });
  } else if (type.toLowerCase().includes("lightship")) {
    iconHTML = ReactDOMServer.renderToString(<FaLightbulb size={18} />);
    divIcon = L.divIcon({
      html: iconHTML,
      className: "custom-water-icon",
      iconAnchor: [12, 12],
      popupAnchor: [0, -12],
    });
  } else if (type.toLowerCase().includes("freighter")) {
    iconHTML = ReactDOMServer.renderToString(<GiCargoShip size={18} />);
    divIcon = L.divIcon({
      html: iconHTML,
      className: "custom-water-icon",
      iconAnchor: [12, 12],
      popupAnchor: [0, -12],
    });
  } else if (type.toLowerCase().includes("tugboat")) {
    iconHTML = ReactDOMServer.renderToString(<RiShip2Fill size={18} />);
    divIcon = L.divIcon({
      html: iconHTML,
      className: "custom-water-icon",
      iconAnchor: [12, 12],
      popupAnchor: [0, -12],
    });
  } else if (type.toLowerCase().includes("dredge")) {
    iconHTML = ReactDOMServer.renderToString(<GiCargoCrane size={18} />);
    divIcon = L.divIcon({
      html: iconHTML,
      className: "custom-water-icon",
      iconAnchor: [12, 12],
      popupAnchor: [0, -12],
    });
  } else if (type.toLowerCase().includes("submarine")) {
    iconHTML = ReactDOMServer.renderToString(<GiSubmarine size={18} />);
    divIcon = L.divIcon({
      html: iconHTML,
      className: "custom-water-icon",
      iconAnchor: [12, 12],
      popupAnchor: [0, -12],
    });
  } else if (type.toLowerCase().includes("liberty ship")) {
    iconHTML = ReactDOMServer.renderToString(<FaShip style={{ color: "#455a64" }} size={18} />);
    divIcon = L.divIcon({
      html: iconHTML,
      className: "custom-water-icon",
      iconAnchor: [12, 12],
      popupAnchor: [0, -12],
    });
  } else if (type.toLowerCase().includes("fishing vessel")) {
    iconHTML = ReactDOMServer.renderToString(<GiBoatFishing size={18} />);
    divIcon = L.divIcon({
      html: iconHTML,
      className: "custom-water-icon",
      iconAnchor: [12, 12],
      popupAnchor: [0, -12],
    });
  } else if (type.toLowerCase().includes("yacht")|| type.toLowerCase().includes("converted yacht")) {
    iconHTML = ReactDOMServer.renderToString(<SiMentorcruise size={18} />);
    divIcon = L.divIcon({
      html: iconHTML,
      className: "custom-water-icon",
      iconSize: [24, 24],
      iconAnchor: [12, 12],
      popupAnchor: [0, -12],
    });
  } else if (type.toLowerCase().includes("motor vessel diesel")) {
    iconHTML = ReactDOMServer.renderToString(<PiEngineBold  size={18} />);
    divIcon = L.divIcon({
      html: iconHTML,
      className: "custom-water-icon",
      iconAnchor: [12, 12],
      popupAnchor: [0, -12],
    });
  } else if (type.toLowerCase().includes("gunboat")) {
    iconHTML = ReactDOMServer.renderToString(<GiBattleship size={18} />);
    divIcon = L.divIcon({
      html: iconHTML,
      className: "custom-water-icon",
      iconAnchor: [12, 12],
      popupAnchor: [0, -12],
    });
  } else if (type.toLowerCase().includes("patrol boat")) {
    iconHTML = ReactDOMServer.renderToString(<GiPoliceBadge size={18} />);
    divIcon = L.divIcon({
      html: iconHTML,
      className: "custom-water-icon",
      iconAnchor: [12, 12],
      popupAnchor: [0, -12],
    });
  } else if (type.toLowerCase().includes("tank landing ship")) {
    iconHTML = ReactDOMServer.renderToString(<SiCodeship size={18} />);
    divIcon = L.divIcon({
      html: iconHTML,
      className: "custom-water-icon",
      iconAnchor: [12, 12],
      popupAnchor: [0, -12],
    });
  } else if (type.toLowerCase().includes("ironclad")) {
    iconHTML = ReactDOMServer.renderToString(<GiIronHulledWarship size={18} />);
    divIcon = L.divIcon({
      html: iconHTML,
      className: "custom-water-icon",
      iconAnchor: [12, 12],
      popupAnchor: [0, -12],
    });
  }

  return divIcon;
}

export default iconDetermine;
