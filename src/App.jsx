import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { useState, useContext } from 'react'

import './App.css'

import searchContext from './context/search'

function App() {

  const {search} = useContext(searchContext)
  const [searchInput, setSearchInput] = useState(search)
  const valueObj = { searchInput, setSearchInput }

  return (
    <>
    <searchContext.Provider value={valueObj} >
      <RouterProvider router={router}></RouterProvider>
    </searchContext.Provider>
    </>
  )
}

export default App
