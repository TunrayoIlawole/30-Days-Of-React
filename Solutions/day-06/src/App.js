import React from 'react';
import './App.css';

import App1 from './day06/components/App1';
import App2 from './day06/components/App2';
import App3 from './day06/components/App3';

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function App() {
  return (
    <div className="App">
      <h1>30 Days Of React</h1>
      <App3 />
    </div>
  );
}

export default App;
