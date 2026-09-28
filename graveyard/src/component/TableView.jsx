import React, { useState, useEffect } from "react";
import NormalCard from "./card-component/Card";
import "../App.css";

import { useShipwreckFilterContext } from "./provider/ShipwreckFilterContext";
import Pagination from "./Pagination";

function TableView() {
  const { shipwreckView, shipwreckViewDescription } = useShipwreckFilterContext();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const combined = [...shipwreckView, ...shipwreckViewDescription]
  const totalPages = Math.ceil(combined.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const lastIndex = startIndex + itemsPerPage;
  const currentItems = combined.slice(startIndex, lastIndex);

  useEffect(() => {
    setCurrentPage(1)
  }, [shipwreckView, shipwreckViewDescription])

  return (
    <section className="table">
      <div className="table-view">
        {currentItems.map((item, index) => (
          <NormalCard shipwreck={item} key={index} />
        ))}
      </div>
      {shipwreckView.length > itemsPerPage && (
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
