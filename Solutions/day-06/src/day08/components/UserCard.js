import React, { Component } from 'react';
import me from '../../images/me.jpeg';

class UserCard extends Component {
    state = {
        time: '',
        changing: false,
        background: 'white',
        foreground: 'black'
    }

    showTime = (time) => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        const month = months[time.getMonth()].slice(0, 3);
        const year = time.getFullYear();
        const date = time.getDate();

        return `${month} ${date}, ${year}`;
    }

    greetPeople() {
        alert("Welcome to 30 Days of React!");
    }

    changeBackground = () => {
        let background = this.state.background === 'white'? '#192841' : 'white';
        let foreground = this.state.foreground === 'black'? 'white' : 'black';
        this.setState({
            changing: true,
            background: background,
            foreground: foreground

        });
    }

    setTime = () => {
        const day = new Date();

        let theTime = this.state.time === ''? `${this.showTime(day)}` : '';

        this.setState({
            time: theTime
        })
    }

    setBackground = () => {
        if (this.state.background === 'white' && this.state.changing) {
            return '#192841'
        } else {
            return 'white';
        }
    }

    setForeground = () => {
        if (this.state.foreground === 'black' && this.state.changing) {
            return 'white'
        } else {
            return 'black';
        }
    }

    setHeader = () => {
        if (this.state.background === 'white' && this.state.changing) {
            return '#192841'
        } else {
            return '#0CF'
        }
    }

    render() {
        const myStyle = {
            backgroundColor: `${this.setBackground()}`,
            color: `${this.setForeground()}`
        }

        const headerStyle = {
            backgroundColor: `${this.setHeader()}`,
        }

        return (
            <div className = "user-card" style = {myStyle}>
                <div className = "header" style = {headerStyle}>
                    <h1>Welcome to 30 Days Of React</h1>
                    <h2>Getting Started React</h2>
                    <p>Motunrayo Ilawole</p>
                    <p>{this.state.time}</p>
                </div>
                <div className = "main">
                    <h3>Prerequisite to get started with react.js</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                    <img src = {me} alt = "Motunrayo Ilawole" />
                    <p>Motunrayo Ilawole</p>
                </div>
                <div className = "buttons">
                    <button onClick = {this.greetPeople}>Greet People</button>
                    <button onClick = {this.setTime}>Show Time</button>
                    <button onClick = {this.changeBackground}>Change Background</button>
                </div>
            </div>
        )
    }
}

export default UserCard;