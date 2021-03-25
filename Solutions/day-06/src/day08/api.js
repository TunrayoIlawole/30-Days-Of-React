import axios from 'axios';

const makeRequest = axios.create({
    baseURL: 'https://restcountries.eu/rest/v2'
})

export default makeRequest;