import React, { useState } from 'react';
import Timer from './timer';

const App: React.FC = () => {
  const [inputSeconds, setInputSeconds] = useState('');
  const [startTimer, setStartTimer] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputSeconds(event.target.value);
  };

  const handleStartTimer = () => {
    setStartTimer(true);
  };

  return (
    <div>
      <h1>Timer App</h1>
      <label htmlFor="inputSeconds">Enter Seconds:</label>
      <input
        type="number"
        id="inputSeconds"
        value={inputSeconds}
        onChange={handleInputChange}
        placeholder="Enter seconds"
      />
      <button onClick={handleStartTimer}>Start Timer</button>
      {startTimer && <Timer initialSeconds={parseInt(inputSeconds, 10) || 0} />}
    </div>
  );
};

export default App;
