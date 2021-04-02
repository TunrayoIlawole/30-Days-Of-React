// level 2
import React from 'react';
import Numbers from './Numbers';


const NumberGenerator = ({ numbers }) => {
    const numberSquares = numbers.map(number => {
        return <Numbers key = {number} num = {number} />
    })

    return (
        <div>
            <h2>Number Generator</h2>
            <div className = "numbers-box">
                {numberSquares}
            </div>
        </div>
    )
}

export default NumberGenerator;