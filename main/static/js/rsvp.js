
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
    Grid,
    Paper,
    Link
  } = MaterialUI;

  function RedPaper(props) {
    let tabsx = {
      height: "100%",
      backgroundColor: "rgba(219,150,140,0.6)",
      outline: "10px solid rgba(219,150,140,0.6)",
      outlineOffset: "2px",
      padding: "5px"
    }
    return (
      <Paper 
      sx={tabsx}
      {...props}
      />
    )
  }
  
    class RSVP extends React.Component {
      constructor(props) {
          super(props);
      }
  
      render() {
          return (
              <Grid item container xs={10} justifyContent="center" alignItems="flex-start" direction="row">
                <Grid item xs={6}></Grid>
                <Grid item container xs={3} direction="column" sx={{height: "100%"}}>
                  <Grid item xs={7}>
                    <RedPaper>
                      <Grid item container xs={12} direction="column" justifyContent="center" alignItems="center" sx={{height: "100%"}}>
                        <div className='rsvpdetails'>We politely request<br></br></div>
                        <div className='rsvpdetails'>that only the<br></br></div>
                        <div className='rsvpdetails'>people listed in<br></br></div>
                        <div className='rsvpdetails'>the invitation be<br></br></div>
                        <div className='rsvpdetails'>present. We hope<br></br></div>
                        <div className='rsvpdetails'>to have a bigger<br></br></div>
                        <div className='rsvpdetails'>celebration with<br></br></div>
                        <div className='rsvpdetails'>everyone at a<br></br></div>
                        <div className='rsvpdetails'>different time!<br></br></div>
                        <div className='rsvpdue'>Please RSVP by<br></br></div>
                        <div className='rsvpdue'>October 8.</div>
                      </Grid>
                    </RedPaper>
                  </Grid>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={1}>
                    <Link href="rsvp/form" underline="none">
                      <RedPaper>
                        <Grid item container xs={12} direction="column" justifyContent="center" alignItems="center" sx={{height: "100%"}}>
                          <div className='rsvpdetails'>Click here to RSVP</div>
                        </Grid>
                      </RedPaper>
                    </Link>
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