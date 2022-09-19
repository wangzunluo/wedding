
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Shopping = {}, global.React, global.ReactDOM));
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
    Link
  } = MaterialUI;

  function RedPaper(props) {
    let tabsx = {
      height: "100%",
      backgroundColor: "rgba(219,150,140,0.6)",
      outline: "6px solid rgba(219,150,140,0.6)",
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
  
    class Registry extends React.Component {
      constructor(props) {
          super(props);
      }
  
      render() {
          return (
                <Grid item container xs={10} justifyContent="center" alignItems="center" direction="row">
                    
                    <Grid item container xs={4} justifyContent="center" alignItems="center" direction="column" sx={{height: "100%"}}>
                      <Grid item container xs={9} justifyContent="center" alignItems="center" direction="column">
                        <RedPaper>
                          <Grid item container xs={12} justifyContent="center" alignItems="center" direction="column" sx={{height: "100%"}}>
                            <div className='Details'>Your presence<br></br></div>
                            <div className='Details'>at our wedding<br></br></div>
                            <div className='Details'>is the greatest<br></br></div>
                            <div className='Details'>gift of all. However,<br></br></div>
                            <div className='Details'>if you wish to<br></br></div>
                            <div className='Details'>honor us with<br></br></div>
                            <div className='Details'>a gift, we have<br></br></div>
                            <div className='Details'>registered a<br></br></div>
                            <div className='Details'>list on Amazon.<br></br></div>
                            <div className='Details'>Otherwise, a<br></br></div>
                            <div className='Details'>cash gift to use<br></br></div>
                            <div className='Details'>towards out honeymoon<br></br></div>
                            <div className='Details'>would be very<br></br></div>
                            <div className='Details'>welcome.</div>
                          </Grid>
                        </RedPaper>
                      </Grid>
                    </Grid>
                    <Grid item container xs={7} justifyContent="flex-end" alignItems="center" direction="column" sx={{height: "100%"}}>
                      <Grid item xs={1}>
                        <Link href="https://www.amazon.com/wedding/share/jessicarwin" underline="none">
                        <RedPaper >
                        <Grid item container xs={12} justifyContent="center" alignItems="center" direction="column" sx={{height: "100%"}}>
                          <div className='Details'>
                          https://www.amazon.com/wedding/share/jessicarwin
                          </div>
                          </Grid>
                        </RedPaper>
                        </Link>
                        
                      </Grid>
                      <Grid item xs={1}/>
                      <Grid item xs={1}>
                        <RedPaper>
                        <Grid item container xs={12} justifyContent="center" alignItems="center" direction="column" sx={{height: "100%"}}>
                          <div className='Details'>Zelle: Zunluo Wang 405-465-3268</div>
                          </Grid>
                        </RedPaper>
                      </Grid>
                      <Grid item xs={1}/>
                    </Grid>
                    
                </Grid>
          );
      }
  }
    // attach properties to the exports object to define
    // the exported module properties.
    exports.Registry = Registry
  }));