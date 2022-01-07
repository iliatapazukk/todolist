import * as React from 'react';
import {Button, Box, TextField} from '@mui/material';

export function InputField({value, handleInput, handleSubmit}) {
  return (
    <>
      <TextField
        id="outlined-helperText"
        label="Create todo"
        multiline
        maxRows={8}
        minRows={4}
        sx={{marginBottom: 1}}
        value={value}
        onChange={handleInput}
      />
      <Button onClick={handleSubmit} variant="contained">Add to list</Button>
    </>
  )
}

export default InputField
