import React from 'react'

import { useContext, useEffect, useState } from 'react'
import searchContext from '../../context/search'

import { findUserByUserName } from '../../services/users'

function Friends() {

const {searchInput} = useContext(searchContext)
const [userList, setUserList] = useState([])

useEffect(() => {
  findUsers()
},[])

const findUsers = async () => {
  const users = await findUserByUserName(searchInput)
  setUserList(users)
}

function displayUsers() {
  return userList.map(user => {
    return (
      <div key={user.id} >
        <h3> {user.username} </h3>
        <p> {user.email} </p>
      </div>
    )
  })
}

  return (
    <div>
      <h1>Friends</h1>
      <p>
        {displayUsers()}
      </p>
    </div>
  )
}

export default Friends
