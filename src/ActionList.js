import React from 'react';

import { Paper, Grid } from '@material-ui/core';
import { teal, blueGrey } from '@material-ui/core/colors/';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  wrapper: {
    height: '70vh',
    width: '80vw',
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: 'white',
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

const actions = [
  {
      "id": "appointment",
      "action_name": "Назначить встречу",
      "arguments": ["время", "специалист"]
  },
  {
      "id": "rebook",
      "action_name": "Перенести встречу",
      "arguments": ["исходное время", "Финальное время"]
  },
];

const ActionList = () => {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="center" >
      <Paper elevation4 className={classes.wrapper}>
        <Grid container spacing={4} item xs={12} className={classes.header}>
          <Grid item xs={4}>Call to action</Grid>
          <Grid item xs={8}>Subjects</Grid>
        </Grid>
        <Grid container spacing={2} xs={12}>
          {actions.map(action => (
            <Grid container spacing={4} item xs={12}>
              <Grid item xs={4}> 
                <Paper className={classes.actionBlock} elevation4>{action.action_name}</Paper>
              </Grid>
              <Grid item container spacing={2} xs={8}> 
                {action.arguments.map(argument => (            
                  <Grid direction="row" item> 
                    <Paper className={classes.block} elevation4>{argument}</Paper>
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
