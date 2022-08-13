(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Reserve = {}, global.React, global.ReactDOM));
  })(this, (function (exports, React, ReactDOM) { 'use strict';
  
    class RSVP extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
              time: this.getTime()
          }
      }
  
      getTime() {
          const weddingDay = new Date('November 11, 2022 00:00:00');
          const today = new Date();
          let d = today.getDate();
          let h = today.getHours();
          let m = today.getMinutes();
          let s = today.getSeconds();
          
          var seconds = Math.floor((weddingDay.getTime() - today.getTime()) / 1000);
  
          d = Math.floor(seconds / ( (60**2) * 24 ));
          let r = seconds % ( (60**2) * 24 )
          h = Math.floor(r / 60 ** 2);
          r = r % 60 ** 2
          m = Math.floor(r / 60);
          s = seconds % 60;
          
  
          d = this.checkTime(d);
          h = this.checkTime(h);
          m = this.checkTime(m);
          s = this.checkTime(s);
          return d + " days : " + h + " hours : " + m + " minutes : " + s + " seconds";
      }
  
      checkTime(i) {
          if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
          return i;
      }
  
      //This happens when the component mount and the setInterval function get called with a call back function updateClock()
      componentDidMount() {
          this.intervalID = setInterval(() =>
              this.updateClock(),
              1000
          );
      }
      
      //This section clears setInterval by calling intervalID so as to optimise memory
      componentWillUnmount(){
          clearInterval(this.intervalID)
      }
      
      //This function set the state of the time to a new time
      updateClock(){
          this.setState({time: this.getTime()});
      }
  
      render() {
          return (
              <div>
                  <h1>Countdown until we are married!</h1>
                  <h2>{this.state.time}</h2>
              </div>
          );
      }
  }
    // attach properties to the exports object to define
    // the exported module properties.
    exports.Countdown = Countdown
  }));