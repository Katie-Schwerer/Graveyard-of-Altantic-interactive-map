import React, { useEffect } from "react";
import "../App.css"
//import placeholder from '../asset/ship.png'

function InfoContainer({ shipwreck }) {

    const getDate = (dateString) => {
        let date = new Date(dateString);
        return date.toLocaleDateString("en-US")
    }

    useEffect(() => {
        console.log(shipwreck);
    })

    return (
        <div className="info">
           {shipwreck ? (
            <div className="ship-wreck-card">
                <h2>{shipwreck.shipName}</h2>
                <div className="facts">
                    <p><b>Ship Type</b>: {shipwreck.type}</p>
                    <p><b>Country</b>: {shipwreck.country}</p>
                    <p><b>Ship Wreck Event</b>: {shipwreck.shipwreckEvent}</p>
                    <p><b>Sunk</b>: {getDate(shipwreck.sunk)}</p>
                </div>
            </div>
           ): (
             <div className="start-up">
                <h3>Info Container</h3>
                <p>Click or Tap one of the points on the Map</p>
             </div>
           )}
        </div>
    )
}

export default InfoContainer;