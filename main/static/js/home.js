
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
            <Grid item container xs={10} direction="column">
              <Grid item container xs={10} direction="row" justifyContent="center">
              <Grid item xs={10}>
                  <Paper sx={{height: "100%", backgroundColor: "#DB968C", opacity: "0.6", outline: "10px solid #DB968C", outlineOffset: "2px"}}>test</Paper>
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