import React from 'react'

import Wall from './Wall/Wall'
import Aside from './Aside/Aside'

import './Home.css'

function Home() {
  return (
    <div className='home'>
      <Wall />
      <Aside />
    </div>
  )
}

export default Home
