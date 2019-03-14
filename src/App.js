import React, { Component, Fragment } from 'react';
import './App.css';


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
      </Fragment>
    );
  }
}

export default App;
