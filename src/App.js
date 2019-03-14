import React, { Component, Fragment } from 'react';
import './App.css';
import { createPortal } from 'react-dom';



const BoundaryHOC = ProtectedComponent => 
  class Boundary extends Component {
    state = {
      hasErr : false
    }
    componentDidCatch = () => {
      this.setState({
        hasErr:true
      })
    }
    render() {
      const { hasErr } = this.state;
      if(hasErr) {
        return <ErrorCallBack />;
      } else {
        return <ProtectedComponent/>;
      }
    }
  }

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
const PErrorMaker = BoundaryHOC(ErrorMaker);


class Portal extends Component {
  render() {
    return createPortal(<Message />, document.getElementById("touchme"));
  }
}
const PPortal = BoundaryHOC(Portal);




const Message = () => "just touch";
const ErrorCallBack = () => "Error !!!";


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
  state = {
    hassError: false
  }

  componentDidCatch = (error, errinfo) => {
    console.log(` catch : ${error} / info : ${JSON.stringify(errinfo)}`);
    this.setState({
      hassError: true
    });
  }

  render() {
    const { hassError } = this.state;

    return (
      <Fragment>
        <ReturnType />
        <PPortal></PPortal>
        <PErrorMaker />
      </Fragment>
    );
  }
}

export default BoundaryHOC(App);
