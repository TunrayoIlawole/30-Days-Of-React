import React from 'react';

const numberType = (num) => {
    let isPrime = true;

    if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
            }
        }
    }

    if (num > 1 && isPrime) {
        return 'red';
    }

    if (num % 2 === 0) {
        return 'green';
    }

    if (num % 2 === 1) {
        return 'yellow';
    }

}

const Numbers = ({ num }) => {
    return (
        <div className = "number-box" style = {{backgroundColor: `${numberType(num)}`}} >{num}</div>
    )
}

export default Numbers;