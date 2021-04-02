import React from 'react';
import MouseMove from './MouseEvent';

const App7 = () => {
    const index = Math.floor(Math.random() * 100);

    return (
        <MouseMove num = {index} />
    )
}

export default App7;