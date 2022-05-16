import React, { Component } from 'react'
//import { Navigate } from 'react-router-dom'
import {connect} from 'react-redux'
import editUser from '../action_edit'

class Edit extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      sex: '',
      age:'',
      password: '',
      password2: ''
    }
  }

  handleChange = e => {
    this.setState({[e.target.name]:e.target.value});
}

  onSubmit = e => {
    const {target} = e
    console.log('submit', target.value)
    this.props.editUser1(this.state.target.value, this.props.history)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <h2>Add User</h2>
        <form>
      
      <p>First Name: <input  name="firstName" onChange={this.handleChange}  type="text" placeholder=''></input></p>
  
  
      <p>Last Name: <input name="lastName" onChange={this.handleChange}  type="text" placeholder=''></input></p>
  
      <p>Sex: <input name="sex" onChange={this.handleChange}  type="text" placeholder=''></input></p>
  
      <p>Age: <input name="age" onChange={this.handleChange}  type="text" placeholder=''></input></p>
  
      <p>Password: <input name="password" onChange={this.handleChange}  type="password" placeholder='Password'></input></p>
 
      <p>Repeat: <input name="password2" onChange={this.handleChange}  type="password" placeholder='Repeat Password'></input></p>
  
</form>

<button onClick={this.onSubmit}>Edit User</button>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return{
    editUser1: (user, history) => dispatch(editUser(user, history)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)

