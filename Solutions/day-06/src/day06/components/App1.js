// Level one

import React from 'react';
import NumberGenerator from './NumberGenerator';

import '../../App.css'


const App1 = ({ numbers }) => {
    return (
        <div className = "app1">
            <NumberGenerator numbers = {numbers} />
        </div>
    )
}

export default App1;