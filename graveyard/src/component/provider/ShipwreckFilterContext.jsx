import React, { createContext, useContext } from "react";
import { useShipwreckFilters } from "../hooks/useShipwreckFilters";

const ShipwreckFilterContext = createContext(null);

export function ShipwreckFilterProvider({ children }) {
    const filters = useShipwreckFilters();
    return (
        <ShipwreckFilterContext.Provider value={filters}>
            {children}
        </ShipwreckFilterContext.Provider>
    );
}

export function useShipwreckFilterContext() {
    return useContext(ShipwreckFilterContext);
}