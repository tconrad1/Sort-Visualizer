import React, { useState } from "react";
import List from "./List";

const ListManip = (props) => {
    const [listProps, setListProps] = useState({
        length: 10,
        elementMin: 1,
        elementMax: 100
    });

    const generateRandomList = () => {
        const randomLength = Math.floor(Math.random() * 100) + 1; // Random length between 1 and 100
        const randomMin = Math.floor(Math.random() * 50); // Random min value between 0 and 50
        const randomMax = randomMin + Math.floor(Math.random() * 50) + 1; // Random max value between min and min+50

        setListProps({
            length: randomLength,
            elementMin: randomMin,
            elementMax: randomMax
        });
    };

    return (
        <div>
            <h1>Buttons!</h1>
           <div className="control-panel" > <button onClick={generateRandomList}>Generate Random List</button> </div>
            <List length={listProps.length} elementMin={listProps.elementMin} elementMax={listProps.elementMax} />
        </div>
        /*<button onClick={sort(curr, 1) }> Next Sort Step </button> */
    );
};

export default ListManip;