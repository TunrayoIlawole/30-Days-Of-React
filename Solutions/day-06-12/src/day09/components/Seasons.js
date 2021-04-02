import React, {Component} from 'react';

class Seasons extends Component {

    state = {
        season: null,
        color: null
    }

    componentDidMount() {
        this.getSeason();
    }

    getSeason = () => {
        const month = new Date().getMonth();
        let season = "";
        let color = "";

        if (month === 8 || month === 9 || month === 10) {
            season = "Autumn";
            color = "orange";
        } else if (month === 11 || month === 0 || month === 1) {
            season = "Winter";
            color = "blue";
        } else if (month === 2 || month === 3 || month === 4) {
            season = "Spring";
            color = "pink"
        } else if (month === 5 || month === 6 || month === 7) {
            season = "Summer";
            color = "yellow";
        }

        this.setState({
            season: season,
            color: color
        })
    }

    render() {
        return (
            <div style = {{ backgroundColor: `${this.state.color}`, padding: '30px'}}>
                <p>Now, it's {this.state.season}</p>
            </div>
        )
    }
}

export default Seasons;