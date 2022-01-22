import React from 'react'
import { Box } from '@mui/material'
import TodoList from './components/TodoList';
import InputField from './components/InputField';
import {useDispatch, useSelector} from 'react-redux';
import {addNewTodo, fetchTodos} from './store/todoSlice';
import {motion} from "framer-motion";
import './App.scss'

function App() {
  const [value, setValue] = React.useState('')
  const dispatch = useDispatch()
  const {status, error} = useSelector(state => state.todos)
  const addTask = () => {
    dispatch(addNewTodo(value))
    setValue('')
  }
  React.useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])


  return (
    <Box className="App">
      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>Error: {error}</h2>}
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
