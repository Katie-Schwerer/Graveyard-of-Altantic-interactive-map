import React from "react"
import NormalCard from "./card-component/NormalCard";
import "../App.css";

import { useShipwreckFilterContext } from "./provider/ShipwreckFilterContext";

function TableView() {
    const { shipwreckView } = useShipwreckFilterContext();
    return (
        <section className="table-view">
            {shipwreckView.map((item, index) => (
                <NormalCard shipwreck={item} key={index} />
            ))}
        </section>
    )
}

export default TableView;