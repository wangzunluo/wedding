
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Forms = {}, global.React, global.ReactDOM));
  })(this, (function (exports, React, ReactDOM) { 'use strict';
  const {
    Tabs,
    Container,
    Tab,
    Box,
    typography,
    ThemeProvider,
    createTheme,
    Grid
  } = MaterialUI;
  
    class RSVP extends React.Component {
      constructor(props) {
          super(props);
      }
  
      render() {
          return (
                <Grid item container xs={10} justifyContent="center" alignItems="center" direction="row">
                    <Grid item container xs={6}></Grid>
                    <Grid item container xs={6} justifyContent="center" alignItems="center" direction="column" sx={{height: "100%"}}>
                        <Grid item container xs={6} direction="column" justifyContent="flex-end" alignItems="center">
                        <div className='Details'>November 11, 2022<br></br></div>
                        <div className='Details'>Navy Golf Course<br></br></div>
                        <div className='Details'>5660 Orangewood Ave.<br></br></div>
                        <div className='Details'>Cypress, CA 90630<br></br></div>
                        <div className='Details'>Ceremony @ 3 PM<br></br></div>
                        <div className='Details'>Reception to follow</div>
                        
                        </Grid>
                        <Grid item container xs={6} direction="column" spacing={0} justifyContent="center" alignItems="center">
                            <Grid item xs={1}>
                            <div className='Dress'>dress code: formal<br></br>black-tie optional</div>
                            </Grid>
                        </Grid>
                        
                    </Grid>
                </Grid>
          );
      }
  }
    // attach properties to the exports object to define
    // the exported module properties.
    exports.RSVP = RSVP
  }));