import React from 'react';
import TechSkill from './TechSkill';
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
                <TechSkill image = {html} altext = "HTML Logo" />
                <TechSkill image = {css} altext = "CSS Logo" />
                <TechSkill image = {javascript} altext = "JavaScript logo" />
                <TechSkill image = {react} altext = "React Logo" />
            </div>
        </div>
    )
}

export default TechSkills;