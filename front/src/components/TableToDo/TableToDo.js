import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, IconButton, Checkbox } from '@material-ui/core';
import InputField from '../InputField/InputField';
import DeleteIcon from '@material-ui/icons/Delete';
import { useSelector, useDispatch } from 'react-redux';
import { setList, ToDoUseEffect } from '../../redux/actions';

const useStyles = makeStyles({
  table: {
    width: '1650px',
  },
  delete: {
    marginTop: '9px',
  },
  text: {
    width: '1550px'
  },
  checkbox: {
    marginRight: '25px'
  }
});


function TableToDo() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    dispatch(ToDoUseEffect())
    // (async () => {
    //   const response = await fetch('/api');
    //   const json = await response.json();

    //   dispatch(setList(json.tasks));
    // })()
  }, [dispatch])
  const list = useSelector(state => state.list);

  async function handleCheckBox(event) {
    const response = await fetch('api/check', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: event.target.id
      }),
    });
    const json = await response.json();
    dispatch(setList(json.tasks));
  };

  async function deleteItem(id) {
    const response = await fetch('api/delete', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id
      }),
    });
    const json = await response.json();
    dispatch(setList(json.tasks));
  }

  return (
    <>
      <InputField />

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">

          <TableBody className={classes.body}>
            {list.map((obj) => (
              <TableRow key={obj._id}>

                <TableCell className={classes.text} component="th" scope="row">
                  <Checkbox
                    className={classes.checkbox}
                    id={obj._id}
                    checked={obj.status && checked}
                    onChange={handleCheckBox}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                  {obj.text}
                </TableCell>
                <IconButton className={classes.delete} onClick={() => deleteItem(obj._id)} aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>
    </>
  );
}

export default TableToDo;
