import React from 'react';

const Box = (props) => {
    return (
        <div className = "box" style = {{backgroundColor: `${props.background}`}}>{props.background}</div>
    )
}

export default Box;