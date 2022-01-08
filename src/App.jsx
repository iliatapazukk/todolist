import React from 'react'
import {
  Box,
} from '@mui/material'
import './App.scss'
import TodoList from './components/TodoList';
import InputField from './components/InputField';
import {useDispatch} from 'react-redux';
import {addTodo} from './store/todoSlice';

function App() {
  const [value, setValue] = React.useState('')
  const dispatch = useDispatch()
  const addTask = () => {
    dispatch(addTodo({value}))
    setValue('')
  }
  return (
    <Box className="App">
      <Box
        sx={{
          display: 'flex', alignItems: 'flex-start', p: 1, m: 1, height: '100vh',
        }}
      >
        <Box sx={{width: 1/2, display: 'flex', flexDirection: 'column', padding: 1}}>
          <InputField value={value} handleSubmit={addTask} handleInput={setValue}/>
        </Box>
        <Box sx={{ width: 1/2, display: 'flex', flexDirection: 'column', padding: 1}}>
          <TodoList/>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
