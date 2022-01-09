import React from 'react'
import { FormGroup } from '@mui/material'
import TodoItem from './TodoItem'
import {useSelector} from 'react-redux';
import {AnimatePresence, motion} from 'framer-motion';

const variants = {
  initial: {
    opacity: 0,
    x: -200,
  },
  added: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      type: 'spring'
    }
  },
  removed: { x: 400,
    opacity: 0
  },

}
const TodoList = () => {
  const todos = useSelector(state => state.todos.todos);
  return (
    <div className="TodoList">
      <FormGroup>
        <AnimatePresence>
        {todos.map((todo, index) =>
          <motion.div
            key={index}
            variants={variants}
            initial="initial"
            animate="added"
            exit="removed"
          >
            <TodoItem key={todo.id} value={todo.value} {...todo} />
          </motion.div>
        )}
        </AnimatePresence>
      </FormGroup>
    </div>
  )
}

export default TodoList