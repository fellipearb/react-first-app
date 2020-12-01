import { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    console.log(this.props.todos)

    return this.props.todos.map((todo) => {
      return <TodoItem key={todo.id} todoItem={todo} setCompleted={this.props.setCompleted} delTodo={this.props.delTodo} />
    });
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
