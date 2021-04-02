import React from 'react';

const Population = ({ country, count, world}) => {
    return (
        <div className = "country-info">
            <p className = "country">{country}</p>
            <div className = "population">
                <div className = "pop-box" style = {{width: `${(count/world) * 100}%`}}></div>
            </div>
            <p className = "count">{count}</p>
        </div>
    )
}

export default Population;