import { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#d3d3d3',
      padding: '10px',
      textDecoration: this.props.todoItem.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const {id, title} = this.props.todoItem;

    return (
      <div style={this.getStyle()}>
        <input type="checkbox" onChange={this.props.setCompleted.bind(this, id)} /> {' '}
        <p>{ title }</p>
        <button onClick={this.props.delTodo.bind(this, id)}>del todo</button>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todoItem: PropTypes.object.isRequired
}

export default TodoItem;
