// Level one

import React from 'react';
import HexGenerator from './HexGenerator';

import '../../App.css';

const App2 = ({ numbers }) => {
    return (
        <div className = "app1">
            <HexGenerator numbers = {numbers} />
        </div>
    )
}

export default App2;