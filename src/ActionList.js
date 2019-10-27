import React, { useEffect, useState } from 'react';

import { Paper, Grid } from '@material-ui/core';
import { teal, blueGrey } from '@material-ui/core/colors/';

import AddCircleIcon from '@material-ui/icons/AddCircle';

import { makeStyles } from '@material-ui/core/styles';

const axious = require('axios');

const useStyles = makeStyles(theme => ({
  wrapper: {
    height: '70vh',
    // width: '80vw',
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
    axious.get(` https://cors-anywhere.herokuapp.com/http://84.201.146.49:8000/actions/2`)
      .then(({ data }) => { setActions(JSON.parse(data)) });
  }

  return (
    <Grid container item xs={12} direction="row" justify="center" alignItems="center" >
      <Grid item xs={8}>
        <Paper elevation={2} className={classes.wrapper}>
          <h4>{actions && actions.length && actions[0].company_name} </h4>

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
                   <Grid item key={`argument_add`}> 
                    <Paper className={classes.block} elevation={2}  style={{padding: '4px 12px 4px 12px', color: 'green'}}><AddCircleIcon /></Paper>
                  </Grid>
                </Grid>
              </Grid>
            ))}
              <Grid container spacing={4} item xs={12} key={`action_add`}>
                <Grid item xs={4}> 
                  <Paper className={classes.block} elevation={2} style={{textAlign: 'right'}}>
                    + add call to action
                  </Paper>
                </Grid>
              </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default ActionList;
