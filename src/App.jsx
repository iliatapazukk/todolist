import React from 'react'
import {
  Box,
} from '@mui/material'
import './App.scss'
import TodoList from './components/TodoList';
import InputField from './components/InputField';

function App() {
  const [todos, setTodos] = React.useState([])
  const [value, setValue] = React.useState('')
  const handleChange = (event) => { setValue(event.target.value) }
  const addTodo = () => {
    if (!value.trim().length) return
    setTodos([
      ...todos,
      {
        id: new Date().toISOString(),
        value,
        completed: false,
      }
    ])
    setValue('')
  }
  const removeTodo = (id) => setTodos(todos.filter(todo => todo.id !== id))
  const toggleCompleted = (id) => {
    setTodos(
      todos.map(
        todo => {
          if (todo.id !== id) return todo
          return {
            ...todo,
            completed: !todo.completed
          }
        }
      )
    )
  }
  return (
    <Box className="App">
      <Box
        sx={{
          display: 'flex', alignItems: 'flex-start', p: 1, m: 1, height: '100vh',
        }}
      >
        <Box sx={{width: 1/2, display: 'flex', flexDirection: 'column', padding: 1}}>
          <InputField value={value} handleSubmit={addTodo} handleInput={handleChange}/>
        </Box>
        <Box sx={{ width: 1/2, display: 'flex', flexDirection: 'column', padding: 1}}>
          <TodoList
            todos={todos}
            toggleCompleted={toggleCompleted}
            removeTodo={removeTodo}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
