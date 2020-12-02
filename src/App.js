import './App.css';

import { Component } from 'react';
import Todos from './components/Todos';
import Header from './shared/Header';
import AddTodoForm from './components/AddTodoForm';

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

  addTodo = (title) => {
    const todoItem = {
      id: this.state.todos.length + 1,
      title: title,
      completed: false
    };

    this.setState({todos: [...this.state.todos, todoItem]})
  }

  delTodo = (id) => {
    this.setState({todos: 
      this.state.todos.filter(todo => todo.id !== id)
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddTodoForm addTodo={this.addTodo} />
        <Todos todos={this.state.todos} setCompleted={this.setCompleted} delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
