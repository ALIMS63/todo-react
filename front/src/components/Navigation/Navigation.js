import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';


const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    marginLeft: '30px'
  },
  button: {
    marginRight: '50px'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  }
}));


function Navigation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            TODO React App
          </Typography>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navigation;
