import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async function(_, {rejectWithValue})
  {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');

      if (!response.ok) {
        throw new Error('Server Error!11')
      }
      return await response.json()

    } catch (error) {
      console.log(error.message)
      return rejectWithValue(error.message)
    }
  }
)

export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async function(id, {
    rejectWithValue,
    dispatch
  }){
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {method: 'DELETE'}
      )
      console.log('!!! response:', response)
      if (!response.ok) throw new Error('Delete error!!!11')
      dispatch(removeTodo({id}))
    } catch (error) {
      console.log('!!!', error.message)
      return rejectWithValue(error.message)
    }
  }
)

const setError = (state, action) => {
  state.status = 'rejected'
  state.error = action.payload
}
const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    status: null,
    todos: [],
    error: null,
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
  extraReducers: {
    [fetchTodos.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.todos = action.payload
    },
    [fetchTodos.rejected]: setError,
    [deleteTodo.rejected]: setError,
  }
})

export const {addTodo, removeTodo, toggleCompleted} = todoSlice.actions

export default todoSlice.reducer
