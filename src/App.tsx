import React from 'react';


import './App.css';
import CountDown from './timer';

function App() {
  
  return (
    <div className="App">
      <h1>Timer</h1>
      <label htmlFor="initialTime">Set Initial Time (seconds):</label>
   <CountDown initialTime={100} />
    </div>
  );
}

export default App;
