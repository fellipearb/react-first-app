
import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={style}>
            <h1>Hello TodoList</h1>
            <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </header>
    )
}

const style = {
    padding: '30px 10px',
    background: '#000',
    color: '#fff',
    textAlign: 'center'
}

export default Header
