import React from 'react';
import {Box, Checkbox, FormControlLabel, IconButton, Typography} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {useDispatch} from 'react-redux';
import {deleteTodo, toggleCompleted} from '../store/todoSlice';

const TodoItem = ({id, completed, title}) => {
  const dispatch = useDispatch()
  return (
    <Box
      className="TodoItem"
      key={id}
      sx={{ marginBottom: 1, display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}
    >
      <FormControlLabel
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
        }}
        control={
          <Checkbox
            onChange={() => dispatch(toggleCompleted({id}))}
            checked={completed}
            sx={{marginTop: -1}}
          />
        }
        label={
          <Typography sx={{textDecoration: completed ? 'line-through' : undefined}}>
            {title}
          </Typography>}
      />
      <IconButton
        onClick={() => dispatch(deleteTodo(id))}
        onChange={() => toggleCompleted(id)}
        sx={{marginTop: -1}}
        aria-label="delete"
        size="small">
        <DeleteIcon />
      </IconButton>
    </Box>
  )
}

export default TodoItem
