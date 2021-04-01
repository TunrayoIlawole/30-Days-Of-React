import React, {Component} from 'react';

class Time extends Component {

    state = {
        time: null,
        color: null
    }

    componentDidMount() {
        this.getTime();
    }

    getTime = () => {
        const hour = new Date().getHours()
        let time = "";
        let color = "";

        if (hour < 12) {
            time = "Morning";
            color = "yellow";
        } else if (hour === 12) {
            time = "Noon";
            color = "blue";
        } else if (hour > 12 && hour < 19) {
            time = "Evening";
            color = "orange"
        } else if (hour >= 19) {
            time = "Night";
            color = "black";
        }

        this.setState({
            time: time,
            color: color
        })
    }

    render() {
        return (
            <div style = {{ backgroundColor: `${this.state.color}`, padding: '30px'}}>
                <p>Now, it's {this.state.time}!</p>
            </div>
        )
    }
}

export default Time;