import React, { useState } from "react"
import NormalCard from "./card-component/NormalCard";
import "../App.css";

import { useShipwreckFilterContext } from "./provider/ShipwreckFilterContext";
import Pagination from "./Pagination";

function TableView() {
    const { shipwreckView } = useShipwreckFilterContext();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 25;

    const totalPages = Math.ceil(shipwreckView.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const lastIndex =  startIndex + itemsPerPage;
    const currentItems = shipwreckView.slice(startIndex, lastIndex);

    return (
        <section className="table-view">
            {currentItems.map((item, index) => (
                <NormalCard shipwreck={item} key={index} />
            ))}
            { (shipwreckView.length > itemsPerPage) &&  
            <Pagination currentPage={currentPage} totalPages={totalPages} onChangeCurrentPage={setCurrentPage} />}
        </section>
    )
}

export default TableView;