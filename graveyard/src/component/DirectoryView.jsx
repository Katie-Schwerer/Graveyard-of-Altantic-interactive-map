import React, { useState, useEffect } from 'react';
import "../App.css"

import { useShipwreckFilterContext } from './provider/ShipwreckFilterContext';
import DescriptionContainer from './card-component/DescriptionContainer';

function DirectoryView() {
    const { shipwreckViewDescription } = useShipwreckFilterContext();
    const PAGE_SIZE = 10;
    const [index, setIndex] = useState(1);
    const [visibleData, setVisibleData] = useState([]);

    useEffect(() => {
        let amount = PAGE_SIZE * index;
        let shipwrecks = []; 
        for (let i = 0; i < amount && i < shipwreckViewDescription.length; i++) {
            shipwrecks.push(shipwreckViewDescription[i]);
        }
        setVisibleData(shipwrecks);
    }, [index, shipwreckViewDescription]);

    return (
        <section className='table'>
            <div className='table-view'>
                {visibleData.map((item, index) => (
                    <DescriptionContainer ship={item} key={index}/>
                ))}
            </div>
            { shipwreckViewDescription.length !== visibleData.length && <button onClick={() => setIndex(prevState => prevState + 1)}>Load More Shipwrecks</button>}
        </section>
    )
}

export default DirectoryView;