import React from 'react'
import MapFunction1 from './MapFunction1';
import MapFuction2 from './MapFuction2';
import MapFuction3 from './MapFuction3';

const MapFunction = () => {
    const data = [
        { id: 1, name: 'Alice', age: 25 },
        { id: 2, name: 'Bob', age: 30 },
        { id: 3, name: 'Carol', age: 35 },
    ];

    const rows = data.map((item) => (
        <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.age}</td>
        </tr>
    ));
    return (
        <div>
            <h1>1</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
            <MapFunction1/>
            <MapFuction2/>
            <MapFuction3/>
        </div>
    )
}

export default MapFunction
