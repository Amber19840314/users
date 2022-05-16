import React, { Component } from 'react'
import {connect} from 'react-redux'
import addUser from '../action_adduser'


class AddUser extends Component {
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
    this.props.addUser1(this.state.target.value, this.props.history)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <h2>Add User</h2>
        <form>
      
      <p>First Name: <input  name="firstName" onChange={this.handleChange}  type="text" placeholder='First Name'></input></p>
  
  
      <p>Last Name: <input name="lastName" onChange={this.handleChange}  type="text" placeholder='Last Name'></input></p>
  
      <p>Sex: <input name="sex" onChange={this.handleChange}  type="text" placeholder='Sex'></input></p>
  
      <p>Age: <input name="age" onChange={this.handleChange}  type="text" placeholder='Age'></input></p>
  
      <p>Password: <input name="password" onChange={this.handleChange}  type="password" placeholder='Password'></input></p>
 
      <p>Repeat: <input name="password2" onChange={this.handleChange}  type="password" placeholder='Repeat Password'></input></p>
  
</form>

<button onClick={this.onSubmit}>Create User</button>
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
    addUser1: (user, history) => dispatch(addUser(user, history)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUser)

  
