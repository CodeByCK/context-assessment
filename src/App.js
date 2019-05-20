import React, { Component, Fragment } from 'react';
import './App.css';

// Declaring new context
const MyContext = React.createContext();



class MyProvider extends Component {
  state = {
    x: 0
  }

  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        handleXClick: () => this.setState({
          x: this.state.x + 1
        })
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}






class A extends Component {
  render() {
    return (
      <Fragment>
        <MyContext.Consumer>
          {(context) => {
            return (
              <div className="component-A">
                <h1>Component A</h1>
                The state in the component A is {context.state.x} <br />
                this.handleXClick will set the state to a new value => {"this.setState({x: this.state.x + 1})"} <br />
                <B />
                <D />
              </div>
            )
          }}
        </MyContext.Consumer>
      </Fragment>
    );
  }
}



class B extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {(context) => {
          return (
            <div className="component-B">
              <h1>Component B</h1>
              this.props.x = {context.state.x} <br />
              this.props.onXClick => (method from component A) <br />
              <C />
            </div>
          )
        }}
      </MyContext.Consumer>
    );
  }
}




class C extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {(context) => {
          return (
            <div className="component-C">
              <h1>Component C</h1>
              this.props.x = {context.state.x} <br />
              this.props.onXClick => (method passed from component B) <br />
              <button onClick={context.handleXClick}>{context.state.x}</button> onClick =>
              this.props.onXClick
          </div>
          )
        }}
      </MyContext.Consumer>
    );
  }
}





class D extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {(context) => {
          return (
            <div className="component-D">
              <h1>Component D</h1>
              this.props.x = {this.props.x} <br />
              this.props.onXClick => (method from component A) <br />
              <button onClick={context.handleXClick}>{context.state.x}</button> onClick =>
              this.props.onXClick
          </div>
          )
        }}
      </MyContext.Consumer>

    );
  }
}





function App() {
  return (
    <MyProvider>
      <div className="App">
        <A />
      </div>
    </MyProvider>
  );
}

export default App;






