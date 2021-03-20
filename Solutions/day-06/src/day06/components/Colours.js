import React from 'react';

const hexaColor = () => {
    const hexNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let color = "";

    for (let i = 0; i < 6; i++) {
        const rand = Math.floor(Math.random() * hexNum.length);
        color += hexNum[rand];
    }
    
    return `#${color}`;
}


const Colours = () => {
    return (
        <div className = "number-box" style = {{backgroundColor: `${hexaColor()}`}} >{hexaColor()}</div>
    )
}

export default Colours;