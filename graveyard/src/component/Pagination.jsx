import React from "react";

function Pagination({ currentPage, totalPages, onChangeCurrentPage }) {
    return (
        <section className="pagination">
            <button onClick={() => onChangeCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
            <span>Page {currentPage} of {totalPages}</span>
            <button onClick={() => onChangeCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
        </section>
    )
}

export default Pagination;