import React from 'react'
import { FormGroup } from '@mui/material'
import TodoItem from './TodoItem'

const TodoList = ({todos, toggleCompleted, removeTodo}) => {
  return (
    <div className="TodoList">
      <FormGroup>
        {todos.map(todo =>
          <TodoItem
            toggleCompleted={toggleCompleted}
            removeTodo={removeTodo}
            key={todo.id} {...todo} />
        )}
      </FormGroup>
    </div>
  )
}

export default TodoList