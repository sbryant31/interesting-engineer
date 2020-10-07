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
  list: {
    fontSize: '1.5vw',
    color: '#e9c46a',
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
        <ul style={classes.list}>
          <li>Blockchain - Ethereum & Bitcoin</li>
          <li>Startup CTO / MVP launches</li>
          <li>Business Automation / API Integration</li>
          <li>Machine learning / AI</li>
          <li>Hiring & leading dev teams</li>
        </ul>
        <p><a style={classes.link} href="mailto:nick@interesting.engineer">Email</a> - <a style={classes.link} href="https://linkedin.com/in/nickbryant123">Linkedin</a> - <a style={classes.link} href="https://github.com/sbryant31">Github</a></p>
      </div>
    </div>
  );
}

export default App;
