import React, { useState } from 'react';

interface TodoItem {
  id: number;
  task: string;
  deadline: Date;
}

interface TodosProps {
  todos: TodoItem[];
  onAddTodo: (task: string, deadline: Date) => void;
  onDeleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodosProps> = ({ todos, onAddTodo, onDeleteTodo }) => {
  const [newTask, setNewTask] = useState('');
  const [newDeadline, setNewDeadline] = useState<Date | null>(null);

  const handleAddTodo = () => {
    if (newTask && newDeadline) {
      onAddTodo(newTask, newDeadline);
      setNewTask('');
      setNewDeadline(null);
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <b>Task</b><br></br>
            <span>{todo.task}</span><br></br>
            <b>Deadline</b><br></br>
            <span>{todo.deadline.toDateString()}</span><br></br>
            <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <div>
        <h3>Add New Task</h3>
        <b>Task</b><br></br>
        <input
          type="text"
          placeholder="New task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <br></br>
        <b>Deadline</b> <br></br>
        <input
          type="date"
          value={newDeadline?.toISOString().split('T')[0] || ''}
          onChange={(e) => setNewDeadline(new Date(e.target.value))}
        />
        <br></br>
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
    </div>
  );
};

export default TodoList;
