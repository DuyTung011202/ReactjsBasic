import React from 'react';
import './App.css';
import Home from "./components/home.js"

class App extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
  }
  handleLogIn = () => {
    this.setState({
          isLoggedIn: true
        })
  }
  handleLogOut = () => {
    this.setState({
          isLoggedIn: false
        })
  }
  render() {
    const {isLoggedIn} = this.state
    if(isLoggedIn) {return(<Home logOut={this.handleLogOut} />)}
    return(
      <div className="App">
        <h1>Please log in</h1>
        <button onClick={this.handleLogIn}>Log in</button>
      </div>
    )
  
}
}
export default App;
