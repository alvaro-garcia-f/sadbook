import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <div className='header-wrapper'>
        <h1 className='title'>SADBOOK</h1>
        <div className='search-wrapper'>
          <input type='text' id='search' placeholder='Search'/>
        </div>
      </div>
      <div className='avatar'>RB</div>
    </div>
  )
}

export default Header
