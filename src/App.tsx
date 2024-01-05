import React, { useState } from 'react';
import SearchFilter from './filter';
import Timer from './timer';
import TodoList from './todo';
// List of array to be used for inserting data in the searched filter 
const people=[
  {id: 1, name: 'Smit Choksi' },
  { id: 2, name: 'Darshan Modi' },
  { id: 3, name: 'Jhanvi Shukla'},
  {id: 4, name: 'Shahin Bharthu'},
  {id: 5, name: 'Meet Patel'},
  {id: 6, name:'Tanish Shah'}
]

interface TodoItem {
  id: number;
  task: string;
  deadline: Date;
}


const App: React.FC = () => {
  const [inputSeconds, setInputSeconds] = useState('');
  const [startTimer, setStartTimer] = useState(false);
  const [buttonClicked,setButtonClicked]=useState(false); //State to track whether the button is clicked
  const [todos, setTodos] = useState<TodoItem[]>([]);


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputSeconds(event.target.value);
  };
  
  const handleStartTimer = () => {
    setStartTimer(true);
  };

  const handleButtonClick =()=>{
    setButtonClicked(true);
  };

  const handleAddTodo = (task: string, deadline: Date) => {
    const newTodo: TodoItem = {
      id: Date.now(),
      task,
      deadline
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {/*Timer Application Buttons */}
      <h1>Timer App</h1>
      <label htmlFor="inputSeconds">Enter Seconds:</label>
      <input
        type="number"
        id="inputSeconds"
        value={inputSeconds}
        onChange={handleInputChange}
        placeholder="Enter seconds"
      />
      {/*Timer will start on Clicking this button */}
      <button onClick={handleStartTimer}>Start Timer</button>
      {startTimer && <Timer initialSeconds={parseInt(inputSeconds, 10) || 0} />}
      
      {/*Search FIlter */}
      <SearchFilter people={people} />

      {/*Toggle Button */}
      <h1>Toggle Button</h1>
      <button onClick={handleButtonClick}>
        {buttonClicked? 'Button Clicked ':'Click me'}
        </button>

{/*To Do Application */}
        <h1>ToDo Application</h1>
        <TodoList todos={todos} onAddTodo={handleAddTodo} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
};

export default App;
