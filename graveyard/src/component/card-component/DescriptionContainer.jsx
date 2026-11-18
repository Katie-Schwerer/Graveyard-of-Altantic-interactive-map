import React from "react";
import parse from "html-react-parser";
import { getShipwreckDate } from "../../support-functions/date-function";

import "./DescriptionContainer.css"

function DescriptionContainer({ ship }) {
    const createParagraph = (descript) => {
        return parse(descript.join(" "))
    }


    return (
        <div className="info-container">
            <h2>{ship.shipName}</h2>
            <p className="description">{createParagraph(ship.description)}</p>
            <br></br>
            <p className="fact"><b>Shipwreck Date: </b>{getShipwreckDate(ship.sunk)}</p>
            <p className="fact"><b>Ship Type: </b>{ship.type}</p>
            <p className="fact"><b>Country: </b>{ship.country}</p>
            {ship.war && <p className="fact"><b>War: </b>{ship.war}</p>}
            {ship.wreckLocation && <p className="fact"><b>Shipwreck Location: </b>{ship.wreckLocation}</p>}
            {ship.shipwreckEvent && <p className="fact"><b>Shipwreck Event: </b>{ship.shipwreckEvent}</p>}
            {ship.source && <p className="source">{ship.source}</p>}
            <hr />
        </div>
    )
}

export default DescriptionContainer;