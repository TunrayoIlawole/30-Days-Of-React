import React from 'react';
import Population from './Population';
import highestPopulation from '../highestPopulation';

console.log(highestPopulation);
const worldCount = highestPopulation[0].population;

const Populations = () => {
    const highestPop = highestPopulation.map(pop => {
        return <Population key = {pop.country} country = {pop.country} count = {pop.population} world = {worldCount}/>
    })

    return (
        <div>
            <h2>World Population</h2>
            <p>Ten most populated countries</p>
            <div className = "population-box">
                {highestPop}
            </div>
        </div>
    )
}

export default Populations;