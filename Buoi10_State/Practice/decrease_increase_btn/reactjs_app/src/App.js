import {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
        this.state = {
          count: 0
        };

      
  }
  handleDecrease = () => {
        this.setState({
                  count: this.state.count - 1
                });
      }  

      handleIncrease = () => {
        this.setState({
                  count: this.state.count + 1
                });
      }  
  render() {
    return (
      <div className="App">
        <button onClick={this.handleDecrease}>Decrease</button>
        <p>{this.state.count}</p>
        <button onClick={this.handleIncrease}>Increase</button>
      </div>
    )
  }
}



export default App;
