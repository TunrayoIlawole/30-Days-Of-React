import React from 'react';
import html from './images/html.PNG';
import css from './images/css.PNG';
import javascript from './images/javascript.JPG';
import react from './images/react.PNG';

const TechSkills = () => {
    return (
        <div className = "techskills">
            <header>
                <h1>Frontend Technologies</h1>
            </header>
            <div className = "main">
            <img src = {html} alt = "HTML Logo" />
            <img src = {css} alt = "CSS Logo" />
            <img src = {javascript} alt = "JavaScript logo" />
            <img src = {react} alt = "React Logo" />
            </div>
        </div>
    )
}

export default TechSkills;