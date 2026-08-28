import React from "react";
import { Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "./NormalPopUp.css";

function NormalPopUp({shipInfo}) {
    const getShipWreckYear = (date) => {
        const dateOfShipWreck = new Date(date);
        return dateOfShipWreck.getFullYear();
    }

    const getShipwreckDate = (date) => {
        const dateOfWreck = new Date(date);
        return dateOfWreck.toLocaleDateString();
    }

    return (
        <Popup>
            <div className="heading">
                <p>{shipInfo.type}</p>
                <p>Year: { shipInfo.sunk ? getShipWreckYear(shipInfo.sunk) : "Unknown"}</p>
            </div>
            <h4 className="name">{shipInfo.shipName}</h4>
            <div className="facts">
                <p>Date: {shipInfo.sunk ? getShipwreckDate(shipInfo.sunk) : "Unknown"}</p>
                <p>Shipwreck: {shipInfo.shipwreckEvent ? shipInfo.shipwreckEvent : "Unknown"}</p>
                <p>Wreck Location: {shipInfo.wreckLocation ? shipInfo.wreckLocation : "Unknown"}</p>
                <p>Country: {shipInfo.country ? shipInfo.country : "Unknown"}</p>
            </div>
            <p className="source">{shipInfo.source}</p>
        </Popup>
    )
}

export default NormalPopUp;