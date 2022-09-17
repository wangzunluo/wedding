
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Landing = {}, global.React, global.ReactDOM));
  })(this, (function (exports, React, ReactDOM) { 'use strict';
  const {
    Tabs,
    Container,
    Tab,
    Box,
    typography,
    ThemeProvider,
    createTheme,
    Grid,
    Paper
  } = MaterialUI;
  
    class Home extends React.Component {
      constructor(props) {
          super(props);
      }
  
      render() {
          return (
            <Grid item container xs={10} justifyContent="center" alignItems="center" direction="column">
                <Grid item container xs={8} justifyContent="center" alignItems="center" direction="column">
                  <div className="title">Jessica & Arwin</div>
                  <br></br>
                  <br></br>
                  <br></br>
                  <div className="date">• 11 • 12 • 22 • CYPRESS • CA •</div>
                  <br></br>
                  <br></br>
                  <div className="timer">Countdown until we are married!</div>
                  <br></br>
                  <Countdown />
                </Grid>
                <Paper>Test</Paper>
                <Grid item container xs={2} justifyContent="center">
                  <Grid item xs={6} >
                    <div className="footer">
                      website created by arwin<br></br>
                      designed by jessica
                    </div>
                  </Grid>
                </Grid> 
            </Grid>
          );
      }
  }
    // attach properties to the exports object to define
    // the exported module properties.
    exports.Home = Home
  }));