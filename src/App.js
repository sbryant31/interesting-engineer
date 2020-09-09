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
  link: {
    color: '#2a9d8f',
    fontWeight: '400',
  },
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
  header: {
    fontSize: '10vw',
    color: "#e76f51",
  },
  subtitle: {
    fontSize: '5vw',
    color: "#f4a261"
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2vw',
    marginTop: '2vh',
    color: "#e9c46a",
  },
}

function App() {
  return (
    <div style={classes.container}>
			<Helmet>
					<meta charSet="utf-8" />
					<title>Interesting Engineer</title>
					<link rel="canonical" href="interesting.engineer" />
			</Helmet>
      <h1 style={classes.header}>Nick Bryant</h1>
      <h3 style={classes.subtitle}>Interesting Engineer.</h3>
      <div style={classes.body}>
        <p>Building incredible web apps since 2002.</p>
        <p>Need it built yesterday? email
            <span> </span>
            <a style={classes.link} href="mailto:nick@interesting.engineer">nick@interesting.engineer</a>
        </p>
      </div>
    </div>
  );
}

export default App;
