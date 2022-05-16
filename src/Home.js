import React, { Component } from 'react'
import UserList from './components/userlist'
import Search from './components/search'

import {connect} from 'react-redux'
import * as actions from './actions'
import getUsers from './action_getusers'
import addUser from './action_adduser'
import editUser from './action_edit'


class Home extends Component {
  constructor(props){
    super(props)
    this.state = {search: ''}
  }

  componentDidMount(){
    console.log('in componentDidMount')
    //this.props.getTodos1();
  }

  setSearch (value) {
    this.setState({search: value})
  }

  render() {

    if(this.props.getUsersR.isFetching) {
      return <h2>Loading in progress...</h2>
    }
    if(this.props.getTodosR.error){
      return <h2>Loading Failed!</h2>
    }
    return (
      <div>
        <h2>User List</h2>
        <Search currentValue={this.props.search} setSearch={this.props.setSearch}/>
        <UserList search={this.props.search} users={this.props.getUsersR.users} editTodo={this.props.editTodo1}/>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    search: state.search,
    getUsersR: state.getUsersR
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSearch: search => {
      dispatch({type: actions.ACTION_SET_SEARCH, search:search})
    },
    addUser: (firstName, lastName, sex, age, password, password2) => {
      dispatch({type: actions.ACTION_ADDUSER, firstName:firstName, lastName:lastName, sex: sex, age: age, password: password, password2: password2})
    },
    editUser: (id,firstName, lastName, sex, age, password, password2 ) => {
      dispatch({type: actions.ACTION_EDIT_USER, id: id,firstName:firstName, lastName:lastName, sex: sex, age: age, password: password, password2: password2})
    },
    getUsers1: dispatch(getUsers()),
    addUser1: user => dispatch(addUser(user)),
    editUser1: id => dispatch(editUser(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);