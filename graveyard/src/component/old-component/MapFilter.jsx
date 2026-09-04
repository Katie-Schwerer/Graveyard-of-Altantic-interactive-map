import React from "react";

function MapFilter({ listOfEvents, shipwreckEvent, handleEvent, listOfCountries, shipwreckCountry, handleCountry }) {
    return (
        <section className="filter-row">
            <div className="shipwreck-event">
                <label htmlFor="shipwreck-event">Ship Wreck Event:</label>
                <select id="shipwreck-event" value={shipwreckEvent} onChange={(e) => handleEvent(e.target.value)}>
                    <option value="" disabled>Select From the Ship Wreck Event:</option>
                    {listOfEvents.map((event, index) => (
                        <option key={index} value={event}>{event}</option>
                    ))}
                </select>
            </div>
            <div className="country">
                <label htmlFor="country">Country: </label>
                <select id="country" value={shipwreckCountry} onChange={(e) => handleCountry(e.target.value)}>
                    <option value="">Select From the Country List</option>
                    {listOfCountries.map((country, index) => (
                        <option key={index} value={country}>{country}</option>
                    ))}
                </select>
            </div>
        </section>
    )
}

export default MapFilter;