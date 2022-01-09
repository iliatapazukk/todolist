import React from 'react'
import {
  Box,
} from '@mui/material'
import './App.scss'
import TodoList from './components/TodoList';
import InputField from './components/InputField';
import {useDispatch} from 'react-redux';
import {addTodo} from './store/todoSlice';
import {motion} from "framer-motion";

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
        component={motion.div}
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 1.5 }}
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
