import React from 'react';

import { Paper, Grid, Select, MenuItem } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const ActionList = () => {
  // const classes = useStyles();

  return (
      <Paper>
        <Grid xs={2} style={{height: '90vh'}}>
          <Select
            value={'Delivery 0'}
            onChange={console.log('change select')}
            inputProps={{
              name: 'field',
              id: 'field-id',
            }}
          >
            <MenuItem value={'Delivery 0'}>Your business field</MenuItem>
            <MenuItem value={'Delivery 1'}>Delivery 1</MenuItem>
            <MenuItem value={'Delivery 2'}>Delivery 2</MenuItem>

          </Select>
        </Grid>
      </Paper>
  );
}

export default ActionList;
