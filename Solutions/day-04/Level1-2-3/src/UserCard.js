import React from 'react';
import me from './images/me.jpeg';

const UserCard = () => {
    return (
        <div className = "user-card">
            <div className = "header">
            <img src = {me} alt = "Motunrayo Ilawole" />
            <h1>Motunrayo Ilawole</h1>
            <p>Student, Nigeria</p>
            </div>

            <div className = "skills">
                <h2>Skills</h2>
                <div className = "skills">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>React</span>
                    <span>PHP</span>
                    <span>Node</span>
                    <span>MongoDB</span>
                    <span>MYSQL</span>
                    <span>GraphQL</span>
                    <span>Git</span>
                </div>
            </div>

            <footer>
                <p>&copy; Joined on Aug 20, 2020</p>
            </footer>
        </div>
    )
}

export default UserCard;