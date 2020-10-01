import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { useSelector, useDispatch } from 'react-redux';
import { sagaStart, inputFieldSubmit } from '../../redux/actions';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    marginRight: '5px',
    minWidth: '1505px',
  },
  button: {
    marginTop: theme.spacing(1),
    matginLeft: '5px',
    minWidth: '160px',
    height: '55px'
  },
}));

function InputField() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const list = useSelector(state => state.list);

  const [inputValue, setInputValue] = useState('');
  function handleSubmit(event) {
    // event.preventDefault();
    dispatch(sagaStart(inputValue));
  }
  // async function handleSubmit(event) {
  //   event.preventDefault();
  //   // dispatch(inputFieldSubmit(inputValue));
  //   const response = await fetch('api/add', {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       inputValue
  //     }),
  //   });
  //   const json = await response.json();
  //   dispatch(addItem(json.item));
  // }
  function handleChange(event) {
    setInputValue(event.target.value);
  }
  return (
    <>
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <TextField onChange={handleChange} className={classes.root} id="outlined-basic" label="Task..." variant="outlined" value={inputValue} />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      </form>
    </>
  );
}

export default InputField;
