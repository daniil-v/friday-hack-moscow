import React, { useState } from 'react';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { MenuItem, Grid } from '@material-ui/core';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';

import { teal, blue } from '@material-ui/core/colors/';

import { makeStyles } from '@material-ui/core/styles';

import ActionList from './ActionList';
import Messages from './Messages';

import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ViewListIcon from '@material-ui/icons/ViewList';
import TextsmsIcon from '@material-ui/icons/Textsms';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'left',
    backgroundColor: theme.palette.grey[100],
  },
  appBar: {
    zIndex: 9999,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  sideBar: {
      height: '100%',
      width: theme.spacing(8), 
      position: 'fixed',
      top: 64,
      left: 0,
      backgroundColor: teal[200],
      padding: 6
  },
  iconSmall: {
    fontSize: 30,
    color: blue[100],
  },
  active: {
    fontSize: 30,
    color: 'white',
  }
}));

const App = () => {
  const classes = useStyles();
  const auth = true;

  const [ page, setPage ] = useState('Messages');

  return (
    <div className={`App ${classes.root}`}>
       <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            FRIDAY
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => {console.log('handleMenu')}}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={false}
                onClose={() => {console.log('close')}}
              >
                <MenuItem onClick={() => {console.log('Profile')}}>Profile</MenuItem>
                <MenuItem onClick={() => {console.log('My account')}}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Grid container direction="row" justify="flex-start" alignItems="flex-start" >
        <Grid item className={classes.sideBar}>
          <IconButton onClick={() => setPage('Messages')} >
            <TextsmsIcon className={page === 'Messages' ? classes.active : classes.iconSmall}/>
          </IconButton>
          <IconButton onClick={() => setPage('ActionList')} >
            <ViewListIcon className={page === 'ActionList' ? classes.active : classes.iconSmall}/>
          </IconButton>
          <IconButton >
            <CalendarTodayIcon className={classes.iconSmall}/>
          </IconButton>
        </Grid>
        <Grid container item direction="row" justify="center" alignItems="center" >
          {page === 'ActionList' && <ActionList />}
          {page === 'Messages' && <Messages />}
        </Grid>
      </Grid>
    </div>

  );
}

export default App;
