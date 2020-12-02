import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <header style={style}>
                <h1>Hello TodoList</h1>
            </header>
        )
    }
}

const style = {
    padding: '30px 10px',
    background: '#000',
    color: '#fff',
    textAlign: 'center'
}

export default Header
