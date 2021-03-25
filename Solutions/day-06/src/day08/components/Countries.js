import React from 'react';


class Countries extends React.Component {

    onSelectCountry = () => {
        this.props.selectCountry()
    }

    render() {
        if (this.props.random) {
            return (
                <div>
                    <div className = "country-con">
                        <div className = "country-flag">
                            <img src = {this.props.random.flag} alt = {this.props.random.name} />
                            <p>{this.props.random.name}</p>
                        </div>
                        <div className = "countryinfo">
                            <p>Capital: <span>{this.props.random.capital}</span></p>
                            <p>Language: <span>{this.props.random.languages[0].name}</span></p>
                            <p>Population: <span>{this.props.random.population}</span></p>
                            <p>Currency: <span>{this.props.random.currencies[0].name}</span></p>
                        </div>
                    </div>
                    <button className = "btn-country" onClick = {this.onSelectCountry}>Select Country</button>
                </div>
            )
        }
        
        return <button className = "btn-country" onClick = {this.onSelectCountry}>Select Country</button>
    }
}

export default Countries;