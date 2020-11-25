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
      return (
        <div style={this.getStyle()}>
            <p>{ this.props.todoItem.title }</p>
        </div>
      )
  }
}

TodoItem.propTypes = {
  todoItem: PropTypes.object.isRequired
}

export default TodoItem;
