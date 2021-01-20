import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Helmet from 'react-helmet'

// pallette
// https://coolors.co/264653-2a9d8f-e9c46a-f4a261-e76f51
//  #e76f51
//  #f4a261
//  #e9c46a
//  #2a9d8f
//  #264653
const classes = {
  container: {
    width: '100%',
    backgroundColor: '#264653',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    justifyItems: 'center',
    alignContent: 'center',
    height: '100%',
    position: 'absolute',
  },
  body: {
    color: "#264653",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2vw',
    marginTop: '2vh',
  },
}

function App() {
  return (
    <div style={classes.container}>
      <p className={classes.body}>My name is Nick.</p>
      <p className={classes.body}>You may have landed here because you're a recruiter for a company seeking a new developer. I assure you that I am not a fit for the job.</p>
      <p className={classes.body}>Currently, I work on software in the crypto, gaming and B2C spaces. Other interests include internet enabled consumer products & artificial intelligence.</p>
      <p className={classes.body}>If you are a founder, seeking a technical cofounder for a profitable bootstrapped or privately funded venture, feel free to contact me. Simply guess my email.</p>
    </div>
  );
}

export default App;
