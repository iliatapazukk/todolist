import React from 'react'
import { FormGroup } from '@mui/material'
import TodoItem from './TodoItem'
import {useSelector} from 'react-redux';

const TodoList = () => {
  const todos = useSelector(state => state.todos.todos);
  console.log('!!! todos:', todos)
  return (
    <div className="TodoList">
      <FormGroup>
        {todos.map(todo =>
          <TodoItem key={todo.id} value={todo.value} {...todo} />
        )}
      </FormGroup>
    </div>
  )
}

export default TodoList