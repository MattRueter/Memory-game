import logo from './logo.svg';
import './App.css';
import React from 'react';   
import Message from './Message';


class MyComp extends React.Component {
// constructor(props){
//  super(props);

// }

  render(){
    return (
      <div>
        <h1 className = {this.props.className}> {this.props.title} </h1>
        <button onClick = {this.props.BTN}>Click Me!</button>
      </div>
    );
  }
}


class App extends React.Component {
  constructor (props){
    super(props);

    this.state ={
      title: 'Heading goes here',
      className: 'b',
      text: "I'm a stateful hello message for ",
    }
    this.BTN = this.BTN.bind(this);
  }

  BTN (){
    if(this.state.title === "Matt's heading"){
      this.setState({
        title: 'Heading modified',
        className: 'b',
      })
    }else{
      this.setState({
         title: "Matt's heading",
         className: 'a',
         text: "HELLO!",
        })
      
    }
  }

  render(){
    return(
      <div>
        <div className = 'App-header'>
          <MyComp title = {this.state.title} className={this.state.className} BTN ={this.BTN} />
        </div>
        <div>
           <Message text= {this.state.text} name='Victoria'/>
           <Message text= {this.state.text} name='Bearlin'/>
           <Message text= {this.state.text} name='Mike'/>
        </div>
      </div>   
    )
  }
}






//***************************** 
// Default React setup
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Victoria!
        </p>
        <p>
          Matt is monkey!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;