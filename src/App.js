import { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Get over here  - 1',
        completed: false
      },
      {
        id: 2,
        title: 'Get over here - 2',
        completed: true
      },
      {
        id: 3,
        title: 'Get over here - 3',
        completed: false
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
