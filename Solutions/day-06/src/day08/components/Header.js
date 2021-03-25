import React from 'react';

const Header = (props) => {
    return (
        <div className = "header" style = {props.styleHeader}>
            <h1>Welcome to 30 Days Of React</h1>
            <h2>Getting Started React</h2>
            <p>Motunrayo Ilawole</p>
            <p>{props.time}</p>
        </div>
    )
}

export default Header;