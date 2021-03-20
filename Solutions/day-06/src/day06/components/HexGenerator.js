import React from 'react';
import Colours from './Colours';

const HexGenerator = ({ numbers }) => {
    const colorSquares = numbers.map(number => {
        return <Colours key = {number} />
    });

    return (
        <div>
            <h2>Hexadecimal Colors</h2>
            <div className = "numbers-box">
                {colorSquares}
            </div>
        </div>
    )
}

export default HexGenerator;