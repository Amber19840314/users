import React from 'react'
import User from './user'

const UserList = ({users, search})=> {
  console.log(users)
  let users1 = []
  
  return(
    <div>
      <ul>
        {users1.map(
          user => <User key={user._id} user={user}/>
        )}
      </ul>
    </div>
  )
}

export default UserList

