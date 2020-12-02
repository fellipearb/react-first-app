import React, { Component } from 'react'

export class AddTodoForm extends Component {
    state = {
        title: ''
    }

    onChangeField = e => this.setState({ [e.target.name]: e.target.value });

    AddTodo = e => {
        e.preventDefault();

        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    render() {
        return (
            <form onSubmit={this.AddTodo}>
                <input name="title" value={this.state.title} onChange={this.onChangeField} />
                <button type="submit">Add +</button>
            </form>
        )
    }
}

export default AddTodoForm
