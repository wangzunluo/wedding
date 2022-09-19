
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Hotel = {}, global.React, global.ReactDOM));
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
  
    class Accommodation extends React.Component {
      constructor(props) {
          super(props);
      }
  
      render() {
          return (
                <Grid item container xs={10} justifyContent="flex-start" alignItems="center" direction="row">
                    <Grid item xs={1}></Grid>
                    <Grid item container xs={3} justifyContent="flex-start" alignItems="center" direction="column" sx={{height: "100%"}}>
                      <Grid item xs={10}>
                      <RedPaper>
                        <Grid item container xs={12} justifyContent="center" alignItems="center" direction="column" sx={{height: "100%"}}>
                          <div className='Details'>Ayres Hotel<br></br></div>
                          <div className='Details'>12850 Seal<br></br></div>
                          <div className='Details'>Beach Blvd.<br></br><br></br></div>
                          <div className='Details'>Single king:<br></br></div>
                          <div className='Details'>$165/night<br></br></div>
                          <div className='Details'>Call 562-596-8330<br></br></div>
                          <div className='Details'>Group name:<br></br></div>
                          <div className='Details'>The Wangs<br></br></div>
                          <div className='Details'>Group code:<br></br></div>
                          <div className='Details'>2976<br></br><br></br></div>
                          <div className='Details'>Reserve by:<br></br></div>
                          <div className='Details'>10/11/2022<br></br></div>
                        </Grid>
                      </RedPaper>
                      </Grid>
                      
                    </Grid>
                    <Grid item container xs={6}>
                        
                    </Grid>
                    
                </Grid>
          );
      }
  }
    // attach properties to the exports object to define
    // the exported module properties.
    exports.Accommodation = Accommodation
  }));