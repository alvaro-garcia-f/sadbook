import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'

import './Main.css'

function Main() {
  return (
    <div>
      <Header />
      <div className='main-wrapper'>
        <Menu />
        <Outlet />
      </div>
    </div>
  )
}

export default Main
