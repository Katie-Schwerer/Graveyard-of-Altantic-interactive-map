import React from 'react';
import { getShipWreckYear, getShipwreckDate } from "../../support-functions/date-function.js"
import "./NormalCard.css";

function NormalCard({ shipwreck }) {
    return (
        <div className='ship-card'>
            <h3>{shipwreck.shipName}</h3>
            <hr></hr>
            <div className='head'>
                <p>{shipwreck.type}</p>
                <p>Year: { shipwreck.sunk ? getShipWreckYear(shipwreck.sunk) : "Unknown"}</p>
            </div>
            <div className="facts">
                <p>Date: {shipwreck.sunk ? getShipwreckDate(shipwreck.sunk) : "Unknown"}</p>
                <p>Shipwreck: {shipwreck.shipwreckEvent ? shipwreck.shipwreckEvent : "Unknown"}</p>
                <p>Wreck Location: {shipwreck.wreckLocation ? shipwreck.wreckLocation : "Unknown"}</p>
                <p>Country: {shipwreck.country ? shipwreck.country : "Unknown"}</p>
            </div>
            <p className="source">{shipwreck.source}</p>
        </div>
    )
}

export default NormalCard;