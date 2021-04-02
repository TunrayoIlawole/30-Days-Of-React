import React from 'react';
import makeRequest from '../api';

import Countries from './Countries';
import Header from './Header';
import Footer from './Footer';

class App5 extends React.Component {
    state = {
        countries: [],
        randomCountry: null
    }


    componentDidMount() {
        this.fetchCountries();
    }

    fetchCountries = async () => {
        const response = await makeRequest.get('/all');

        this.setState({
            countries: response.data
        })
    }

    onSelectCountry = () => {
        const index = Math.floor(Math.random() * this.state.countries.length);
        this.setState({
            randomCountry: this.state.countries[index]
        })
    }

    render() {
        if (this.state.countries) {
            return (
                <div className = "app5">
                    <Header />
                    <Countries countries = {this.state.countries} selectCountry = {this.onSelectCountry} random = {this.state.randomCountry} />
                    <Footer />
                </div>
            )
        }
    }
}

export default App5;