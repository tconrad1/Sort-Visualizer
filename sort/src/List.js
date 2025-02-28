import React, {useState, UseEffect, useEffect} from 'react';





const RandomListGen = ({length, elementMin, elementMax }) => {
    const [randomNumber, genRandomNumber] = useState([]);

    React.useEffect(() => {
        const gen = () => {
            let list = [];
            for (let i = 0; i < length; i++) {
                list.push(Math.floor(Math.random() * (elementMax - elementMin + 1)) + elementMin);
            }
            genRandomNumber(list);
        };
        gen();
    }, [length, elementMin, elementMax]);


    return (
        
        <div className='list-container'>
            <h2>List</h2>
        
        <div className="list">
            {randomNumber.map((number, index) => (
                <div className="list-item" key={index}>
                    {number}
                </div>
            ))}
        </div>
        </div>
    );
    };

export default RandomListGen;


