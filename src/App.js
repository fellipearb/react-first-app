import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './shared/Header';
import AddTodoForm from './components/AddTodoForm';
import About from './pages/About';
import axios from 'axios';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos/?limit=10')
      .then(res => this.setState({ todos: res.data }))
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
    const requestData = {
      title,
      completed: false
    }

    axios.post('https://jsonplaceholder.typicode.com/todos', requestData)
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }))
  }

  delTodo = (id) => {
    this.setState({todos: 
      this.state.todos.filter(todo => todo.id !== id)
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodoForm addTodo={this.addTodo} />
                <Todos todos={this.state.todos} setCompleted={this.setCompleted} delTodo={this.delTodo} />
              </React.Fragment>
            )} />

            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
