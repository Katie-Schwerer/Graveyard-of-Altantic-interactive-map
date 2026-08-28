import React from "react"
import shipwrecks from "../data/shipwrecks.json";
import NormalCard from "./card-component/NormalCard";
import "../App.css";

function TableView() {
    let shipwreckTotal = shipwrecks.Shipwrecks; 
    return (
        <section className="table-view">
            {shipwreckTotal.map((item, index) => (
                <NormalCard shipwreck={item} key={index} />
            ))}
        </section>
    )
}

export default TableView;