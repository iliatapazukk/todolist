import {createSlice} from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: []
  },
  reducers: {
    addTodo(state, action) {
      console.log('!!! action:', action)
      state.todos.push({
        id: new Date().toISOString(),
        value: action.payload.value,
        completed: false,
      })
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
    },
    toggleCompleted(state, action) {
      const toggledTodo = state.todos.find(todo => todo.id === action.payload.id)
      toggledTodo.completed = !toggledTodo.completed
    },
  },
})

export const {addTodo, removeTodo, toggleCompleted} = todoSlice.actions

export default todoSlice.reducer
