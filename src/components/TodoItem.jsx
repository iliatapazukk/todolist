import React from 'react';
import {Box, Checkbox, FormControlLabel, IconButton, Typography} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({id, checked, value, toggleCompleted, removeTodo}) => {
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
            onChange={() => toggleCompleted(id)}
            checked={checked}
            sx={{marginTop: -1}}
          />
        }
        label={<Typography sx={{textDecoration: checked && 'line-through' } }>{value}</Typography>}
      />
      <IconButton
        onClick={() => removeTodo(id)}
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
