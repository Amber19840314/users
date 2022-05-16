import React, { Component } from 'react'
import Home from './Home'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import AddUser from './components/adduser'
import Edit from './components/edit'


export default class App extends Component {
  render() {
    return (

    <BrowserRouter>
    <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/add">Add User</Link></li>
                        <li><Link to="/edit">Edit</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route exact path="/" element={Home} />
                    <Route path="/add" element={AddUser} />
                    <Route path="/edit" element={Edit} />
                </Routes>
    </BrowserRouter>
    )
  }
}


