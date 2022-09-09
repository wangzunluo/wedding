
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
  
    class Registry extends React.Component {
      constructor(props) {
          super(props);
      }
  
      render() {
          return (
                <Grid item container xs={10} justifyContent="flex-start" alignItems="center" direction="column">
                    <Grid item container xs={2}></Grid>
                    <div className='message'>
                    Your presence at our wedding is the<br></br>
                    greatest gift of all. However, if you<br></br>
                    wish to honor us with a gift, we have<br></br>
                    registered a list on Amazon. Otherwise,<br></br>
                    a cash gift to use towards our<br></br>
                    honeymoon would be very welcome.
                    </div>
                    <Link href="https://www.amazon.com/wedding/share/jessicarwin" target="_blank" rel="noopener">https://www.amazon.com/wedding/share/jessicarwin</Link>
                </Grid>
          );
      }
  }
    // attach properties to the exports object to define
    // the exported module properties.
    exports.Registry = Registry
  }));