import React, { useEffect, useState } from 'react';

import { Paper, Grid, Divider } from '@material-ui/core';
import { blueGrey, blue } from '@material-ui/core/colors/';

import AccountCircle from '@material-ui/icons/AccountCircle';
import ChatIcon from '@material-ui/icons/Chat';
import CallIcon from '@material-ui/icons/Call';
import { makeStyles } from '@material-ui/core/styles';

const axious = require('axios');

const useStyles = makeStyles(theme => ({
  wrapper: {
    height: '70vh',
    width: '60vw',
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: 'white',
    overflowY: 'scroll',
  },
  block: {
    padding: theme.spacing(1),
    backgroundColor: blueGrey[50],
  },
  icon: {
    fontSize: 48,
  },
  iconSmall: {
    fontSize: 30,
    color: blue[800],
  },
}));

const Messages = () => {
  const classes = useStyles();

  const [ messages, setMessages ] = useState([]);

  useEffect(() => { setMessages(getMessages()) }, []);

  const getMessages = () => {
    axious.get(`http://84.201.146.49:8000/messages/`)
      .then(({ data }) => { setMessages(data) });
  }

  return (
    <Grid container direction="row" justify="center" alignItems="flex-start" >
      <Paper elevation={2} className={classes.wrapper}>
        <Grid container spacing={2}>
          {messages && messages.map(message => (
            <Grid container spacing={4} item xs={12} key={`message_${message.id}`}>
              <Grid item xs={12}>
                <Paper className={classes.block} elevation={2}>
                  <Grid container direction="row" justify="space-between" alignItems="flex-start">
                    <Grid item xs={1}><AccountCircle className={classes.icon}/></Grid>
                    <Grid item container xs={9}>
                      <Grid item xs={12} container direction="row" justify="space-between" alignItems="baseline">
                        <Grid item xs={8}>
                          {message.user_name} 
                        </Grid>
                        <Grid style={{fontSize: 12}} item xs={4}>
                          {message.date_time} 
                        </Grid> 
                      </Grid>
                      <Divider component="div" />
                      <Grid item xs={12} style={{paddingTop: 8}}>
                        {message.spelled_out ? message.action : 'We did not manage to split out this request'}
                      </Grid>
                      <span style={{fontSize: 12}}>Original text: {message.message_text}</span>
                    </Grid>
                    <Grid item xs={1} style={{textAlign: 'right'}}>
                      <CallIcon className={classes.iconSmall}/>
                      <ChatIcon className={classes.iconSmall}/>
                    </Grid>
                  </Grid>
                  
                </Paper>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Messages;
