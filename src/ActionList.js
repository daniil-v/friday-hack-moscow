import React from 'react';
// import logo from './logo.svg';
import './App.css';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { Paper, Grid, Select, MenuItem } from '@material-ui/core';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import AccountCircle from '@material-ui/icons/AccountCircle';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';

import Menu from '@material-ui/core/Menu';

import { makeStyles } from '@material-ui/core/styles';
import { whileStatement } from '@babel/types';

const useStyles = makeStyles(theme => ({
  wrapper: {
    height: '70vh',
    width: '80vw',
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: 'white',
  },

}));

const ActionList = () => {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="center" >
      <Paper elevation4 className={classes.wrapper}>
        <Grid xs={12}>
         
        </Grid>
      </Paper>
    </Grid>
  );
}

export default ActionList;
