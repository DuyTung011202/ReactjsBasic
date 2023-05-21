import {Component} from 'react';
import './App.css';

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    color: "blue"
  }
}
componentDidMount = () => {
  setTimeout(() => {
    this.setState({
      color: "red"
    })
  },10000)
}

render() {
  return(
 <div style={{backgroundColor:this.state.color, width:500, height:200}}></div>

   
  )
}
}

export default App;
