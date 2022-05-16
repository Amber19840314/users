
import React from 'react'
import {Link} from 'react-router-dom'

const UserList = ({user, editUser})=> {
  return (
    <div>
      <tr>
        <td><button>{<Link to ='/edit'/>}Edit</button></td>
        <td><button>Delete</button></td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.sex}</td>
        <td>{user.age}</td>
      </tr>
    </div>
  )
}

export default UserList