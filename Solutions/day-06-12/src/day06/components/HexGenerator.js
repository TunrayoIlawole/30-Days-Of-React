import React from 'react';
import Colours from './Colours';

class HexGenerator extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const numbers = this.props.numbers;

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

}

export default HexGenerator;