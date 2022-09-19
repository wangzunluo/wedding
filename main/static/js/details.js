
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Information = {}, global.React, global.ReactDOM));
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

  function RedPaper(props) {
    let tabsx = {
      height: "100%",
      backgroundColor: "rgba(219,150,140,0.6)",
      outline: "10px solid rgba(219,150,140,0.6)",
      outlineOffset: "2px",
      padding: "10px"
    }
    return (
      <Paper 
      sx={tabsx}
      {...props}
      />
    )
  }
  
    class Details extends React.Component {
      constructor(props) {
          super(props);
      }
  
      render() {
          return (
                <Grid item container xs={10} justifyContent="center" alignItems="center" direction="column">
                    <Grid item container xs={6}></Grid>
                    <Grid item container xs={4} justifyContent="center" alignItems="center" direction="row">
                        <Grid item container xs={6}>
                          <RedPaper>
                            <Grid item container xs={12} justifyContent="center" alignItems="center" direction="column">
                              <div className='Details'>November 12, 2022 | 3 PM | Navy Golf Course<br></br></div>
                              <div className='Details'>5660 Orangewood Ave, Cypress, CA 90630<br></br></div>
                              <div className='Details'>Reception to follow</div>
                            </Grid>
                          </RedPaper>
                        </Grid>   
                    </Grid>
                    <Grid item container xs={2} justifyContent="center" alignItems="center" direction="row">
                      <Grid item container xs={3}>
                        <RedPaper>
                        <Grid item container xs={12} justifyContent="center" alignItems="center" direction="column">
                          <div className='Dress'>dress code: formal<br></br></div>
                          <div className='Dress'>black-tie optional</div>
                          </Grid>
                        </RedPaper>
                      </Grid>
                    </Grid>
                </Grid>
          );
      }
  }
    // attach properties to the exports object to define
    // the exported module properties.
    exports.Details = Details
  }));