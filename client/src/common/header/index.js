import React from 'react'
import TopColorBar from './TopColorBar'
import TopBar from './TopBar'
import NavBar from './NavBar'

const index = () => {
  return (
    <header className="header" id="pageTop">
     <TopColorBar/>
     <TopBar/>
     <NavBar/>
    </header>
  )
}

export default index