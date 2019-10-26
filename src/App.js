import React from 'react';
// import logo from './logo.svg';
import './App.css';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { MenuItem } from '@material-ui/core';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import AccountCircle from '@material-ui/icons/AccountCircle';

import Menu from '@material-ui/core/Menu';

import { makeStyles } from '@material-ui/core/styles';

import ActionList from './ActionList';
import Messages from './Messages';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'left',
    backgroundColor: theme.palette.grey[100],
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const App = () => {
  const classes = useStyles();
  const auth = true;
  return (
    <div className={`App ${classes.root}`}>
       <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            SVYATOGOR
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
                // anchorEl={anchorEl}
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
      <ActionList />
      {/* <Messages /> */}
    </div>
  );
}

export default App;
