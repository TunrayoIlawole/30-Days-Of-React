import React from 'react';

const hexaColor = () => {
    const hexNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let color = "";
    const rand = Math.floor(Math.random() * hexNum.length);

    for (let i = 0; i < 6; i++) {
        color += hexNum[rand];
    }

    console.log(color)
    return `#${color}`;
}

const HexColours = () => {
    return (
        <div className = "hex-box">
            <div className = "box" style = {{backgroundColor: `${hexaColor()}`}}>{hexaColor()}</div>
            <div className = "box" style = {{backgroundColor: `${hexaColor()}`}}>{hexaColor()}</div>
            <div className = "box" style = {{backgroundColor: `${hexaColor()}`}}>{hexaColor()}</div>
            <div className = "box" style = {{backgroundColor: `${hexaColor()}`}}>{hexaColor()}</div>
            <div className = "box" style = {{backgroundColor: `${hexaColor()}`}}>{hexaColor()}</div>
            <div className = "box" style = {{backgroundColor: `${hexaColor()}`}}>{hexaColor()}</div>
        </div>
    )
}

export default HexColours;