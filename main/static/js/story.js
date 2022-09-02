
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
    Grid
  } = MaterialUI;
  
    class Story extends React.Component {
      constructor(props) {
          super(props);
      }
  
      render() {
          return (
                <Grid item container xs={10} justifyContent="center" alignItems="center" direction="row">
                    <Grid item container xs={5} justifyContent="center" alignItems="center" direction="column" sx={{height: "100%"}}>
                        <div className='Statement'>Arwin aka the looks:<br></br></div>
                        <div className='Response'>Software engineer at JPMC<br></br></div>
                        <div className='Statement'>Jessica aka the brain:<br></br></div>
                        <div className='Response'>Faculty librarian at HCC<br></br></div>
                        <div className='Statement'>Where/how they met:<br></br></div>
                        <div className='Response'>mutual friends in Houston<br></br></div>
                        <div className='Statement'>Why Arwin likes Jess:<br></br></div>
                        <div className='Response'>She’s not afraid to be herself, and<br></br></div>
                        <div className='Response'>she accepts me for who I am.<br></br></div>
                        <div className='Statement'>Why Jess likes Arwin:<br></br></div>
                        <div className='Response'>He waits in line with me when I<br></br></div>
                        <div className='Response'>want samples at Costco and H Mart.</div>
                    </Grid>
                    <Grid id="leag" item container xs={3} justifyContent="center" alignItems="center" direction="column">
                    </Grid>
                </Grid>
          );
      }
  }
    // attach properties to the exports object to define
    // the exported module properties.
    exports.Story = Story
  }));