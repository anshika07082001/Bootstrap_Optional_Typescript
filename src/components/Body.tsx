import React from 'react'
import MiddleBody from './MiddleBody'
import SideBar from './SideBar'

const Body = () => {
  return (
    <div className='col-12 pTop d-flex flex-row'>
      <SideBar/>
      <MiddleBody/>
    </div>
  )
}

export default Body