import React from 'react'
import './Header.css'

import searchContext from '../../context/search'
import { useContext, useState } from 'react'

import { useNavigate } from 'react-router-dom'


function Header() {

  const {setSearchInput} = useContext(searchContext)
  const navigate = useNavigate()
  
  const handleKeyDown = (e) => {
    if (e.code === 'Enter') {
      setSearchInput(e.target.value)
      return navigate('/friends')
    }
  }

  return (
    <div className='header'>
      <div className='header-wrapper'>
        <h1 className='title'>SADBOOK</h1>
        <div className='search-wrapper'>
          <input type='text' id='search' placeholder='Search' onKeyDown={handleKeyDown} />
        </div>
      </div>
      <div className='avatar'>RB</div>
    </div>
  )
}

export default Header
