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
        completed: false
      },
      {
        id: 3,
        title: 'Get over here - 3',
        completed: false
      }
    ]
  }

  setCompleted = (id) => {
    this.setState({todos: 
      this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }

        return todo;
      })
    })
  }

  delTodo = (id) => {
    this.setState({todos: 
      this.state.todos.filter(todo => todo.id !== id)
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <Todos todos={this.state.todos} setCompleted={this.setCompleted} delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
