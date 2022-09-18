
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Pages = {}, global.React, global.ReactDOM));
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
      outlineOffset: "2px"
    }
    return (
      <Paper 
      sx={tabsx}
      {...props}
      />
    )
  }
  
    class Story extends React.Component {
      constructor(props) {
          super(props);
      }
  
      render() {
          return (
                <Grid item container xs={10} justifyContent="flex-start" alignItems="flex-start" direction="row">
                    <Grid item container xs={5} justifyContent="flex-start" alignItems="center" direction="column" sx={{height: "100%"}}>
                      <Grid item xs={1}></Grid>
                      <Grid item xs={7}>
                      <RedPaper>
                        <Grid item container justifyContent="center" alignItems="center" direction="column" sx={{height: "100%"}}>
                        <div className='Statement'>Arwin aka the looks:<br></br></div>
                        <div className='Response'>
                          Software engineer at<br></br>
                        </div>
                        <div className='Response'>
                          JPMC<br></br>
                        </div>
                        <div className='Statement'>Jessica aka the brain:<br></br></div>
                        <div className='Response'>
                          Faculty librarian at<br></br>
                        </div>
                        <div className='Response'>
                          HCC<br></br>
                        </div>
                        <div className='Statement'>Why Arwin likes Jess:<br></br></div>
                        <div className='Response'>
                          She’s not afraid to be<br></br>
                          </div>
                          <div className='Response'>
                          herself, and she accepts<br></br>
                        </div>
                        <div className='Response'>
                          me for who I am.<br></br>
                        </div>
                        <div className='Statement'>Why Jess likes Arwin:<br></br></div>
                        <div className='Response'>
                          He waits in line with<br></br>
                          </div>
                          <div className='Response'>
                          me when I want<br></br>
                          </div>
                          <div className='Response'>
                          samples at Costco<br></br>
                          </div>
                          <div className='Response'>
                          and H Mart.
                          </div>
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
    exports.Story = Story
  }));