import React, { Component, Fragment } from 'react';
import './App.css';
import { createPortal } from 'react-dom';



class Portal extends Component {
  render() {
    return createPortal(<Message/>, document.getElementById("touchme"));
  }
}

const Message = () => "just touch";


class ReturnType extends Component {

  render() {
    return (
      <div className="App">
        hello!222~~!
      </div>
    );
  }
}

class App extends Component {

  render() {
    return (
      <Fragment>
        <ReturnType />
        <Portal></Portal>
      </Fragment>
    );
  }
}

export default App;
