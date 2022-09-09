
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
                <a href='rsvp'>link to form</a>
          );
      }
  }
    // attach properties to the exports object to define
    // the exported module properties.
    exports.RSVP = RSVP
  }));