import React from 'react';
import Skills from './Skills';
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
                    <Skills skill = "HTML" />
                    <Skills skill = "CSS" />
                    <Skills skill = "JavaScript" />
                    <Skills skill = "React" />
                    <Skills skill = "PHP" />
                    <Skills skill = "Node" />
                    <Skills skill = "MongoDB" />
                    <Skills skill = "MYSQL" />
                    <Skills skill = "GraphQL" />
                    <Skills skill = "Git" />
                </div>
            </div>

            <footer>
                <p>&copy; Joined on Aug 20, 2020</p>
            </footer>
        </div>
    )
}

export default UserCard;