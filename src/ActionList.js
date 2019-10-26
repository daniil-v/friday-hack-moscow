import React, { useEffect, useState } from 'react';

import { Paper, Grid, Button } from '@material-ui/core';
import { teal, blueGrey } from '@material-ui/core/colors/';

import { makeStyles } from '@material-ui/core/styles';

const axious = require('axios');

const useStyles = makeStyles(theme => ({
  wrapper: {
    height: '70vh',
    width: '80vw',
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: 'white',
    overflowY: 'scroll',
  },
  header: {
    fontWeight: 800,
    marginBottom: theme.spacing(2),
  },
  actionBlock: {
    padding: theme.spacing(1),
    backgroundColor: teal[300],
  },
  block: {
    padding: theme.spacing(1),
    backgroundColor: blueGrey[100],
  },
}));

const ActionList = () => {
  const classes = useStyles();
  const [ actions, setActions ] = useState([]);
  useEffect(() => { setActions(getActions()) }, []);

  const getActions = () => {
    axious.get(`http://84.201.146.49:8000/actions/`)
      .then(({ data }) => { setActions(data) });
  }

  return (
    <Grid container direction="row" justify="center" alignItems="center" >
      <Paper elevation={2} className={classes.wrapper}>
      <Button onClick={getActions}>
        btn
      </Button>
        <Grid container spacing={4} item xs={12} className={classes.header}>
          <Grid item xs={4}>Call to action</Grid>
          <Grid item xs={8}>Subjects</Grid>
        </Grid>
        <Grid container spacing={2} item xs={12}>
          {actions && actions.map(action => (
            <Grid container spacing={4} item xs={12} key={`action_${action.action_id}`}>
              <Grid item xs={4}> 
                <Paper className={classes.actionBlock} elevation={2}>{action.action_name}</Paper>
              </Grid>
              <Grid item container spacing={2} xs={8}> 
                {action && action.action_parametrs && action.action_parametrs.map(argument => (            
                  <Grid item key={`argument_${argument}`}> 
                    <Paper className={classes.block} elevation={2}>{argument}</Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Grid>
  );
}

export default ActionList;
