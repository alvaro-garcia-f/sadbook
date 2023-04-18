import React from 'react'
import './Menu.css'

const menu = ['Amigos', 'Recientes', 'Grupos', 'Marketplace', 'Watch']

function Menu() {
  const listMenu = () => {
    return (
      menu?.length > 0 ? menu.map((item, idx) => <li key={idx}>{item}</li>) : 'No menu items'
    )
  }
  return (
    <div className='menu'>
      <ul>
        { listMenu() }
      </ul>
    </div>
  )
}

export default Menu
