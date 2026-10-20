import React, { useState, useEffect } from "react";
import NormalCard from "./card-component/Card";
import "../App.css";

import { useShipwreckFilterContext } from "./provider/ShipwreckFilterContext";
import Pagination from "./Pagination";

function TableView() {
  const { shipwreckViewDescription } = useShipwreckFilterContext();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  //const combined = [...shipwreckView, ...shipwreckViewDescription]
  const totalPages = Math.ceil(shipwreckViewDescription.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const lastIndex = startIndex + itemsPerPage;
  const currentItems = shipwreckViewDescription.slice(startIndex, lastIndex);

  useEffect(() => {
    setCurrentPage(1)
  }, [ shipwreckViewDescription])

  return (
    <section className="table">
      <div className="table-view">
        {currentItems.map((item, index) => (
          <NormalCard shipwreck={item} key={index} />
        ))}
      </div>
      {shipwreckViewDescription.length > itemsPerPage && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onChangeCurrentPage={setCurrentPage}
        />
      )}
    </section>
  );
}

export default TableView;
