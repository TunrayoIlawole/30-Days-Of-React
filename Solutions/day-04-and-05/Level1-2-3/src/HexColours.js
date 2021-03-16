import React from 'react';
import Box from './Box';

const hexaColor = () => {
    const hexNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let color = "";

    for (let i = 0; i < 6; i++) {
        const rand = Math.floor(Math.random() * hexNum.length);
        color += hexNum[rand];
    }

    console.log(color)
    return `#${color}`;
}

const HexColours = (props) => {
    return (
        <div className = "hex-box">
            <Box background = {hexaColor()} />
            <Box background = {hexaColor()} />
            <Box background = {hexaColor()} />
            <Box background = {hexaColor()} />
            <Box background = {hexaColor()} />
            <Box background = {hexaColor()} />
        </div>
    )
}

export default HexColours;