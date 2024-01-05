import React, { useState } from 'react';
import SearchFilter from './filter';
import Timer from './timer';
// List of array to be used for inserting data in the searched filter 
const people=[
  {id: 1, name: 'Smit Choksi' },
  { id: 2, name: 'Darshan Modi' },
  { id: 3, name: 'Jhanvi Shukla'},
  {id: 4, name: 'Shahin Bharthu'},
  {id: 5, name: 'Meet Patel'},
  {id: 6, name:'Tanish Shah'}
]

//Event handler function for the button click


const App: React.FC = () => {
  const [inputSeconds, setInputSeconds] = useState('');
  const [startTimer, setStartTimer] = useState(false);
  //State to track whether the button is clicked
  const [buttonClicked,setButtonClicked]=useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputSeconds(event.target.value);
  };
  
  const handleStartTimer = () => {
    setStartTimer(true);
  };

  const handleButtonClick =()=>{
    setButtonClicked(true);
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
      <SearchFilter people={people} />
      <h1>Toggle Button</h1>
      <button onClick={handleButtonClick}>
        {buttonClicked? 'Button Clicked ':'Click me'}
        </button>
    </div>
  );
};

export default App;
