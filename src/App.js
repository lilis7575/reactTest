import React, { Component, Fragment } from 'react';
import './App.css';
import { createPortal } from 'react-dom';

class ErrorMaker extends Component {
  state = {
    friends: ["111", "222", "333", "444"]
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        friends: undefined
      })
    }, 2000)
  }

  render() {
    const { friends } = this.state;
    return friends.map(friend => ` ${friend} `);
  }
}

class Portal extends Component {
  render() {
    return createPortal(<Message />, document.getElementById("touchme"));
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

const ErrorCallBack = () => "Error !!!";

class App extends Component {
  state = {
    hassError : false
  }

  componentDidCatch = (error, errinfo) => {
    console.log(` catch : ${error} / info : ${JSON.stringify(errinfo)}`);
    this.setState({
      hassError : true
    });
  }

  render() {
    const {hassError} = this.state;

    return (
      <Fragment>
        <ReturnType />
        <Portal></Portal>
        {hassError ? <ErrorCallBack/> : <ErrorMaker></ErrorMaker>}
      </Fragment>
    );
  }
}

export default App;
