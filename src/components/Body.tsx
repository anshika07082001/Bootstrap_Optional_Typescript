import React from 'react'
import MiddleBody from './MiddleBody'
import RightBody from './RightBody'
import SideBar from './SideBar'

const Body = () => {
  return (
    <div className='col-12 pTop d-flex flex-row'>
      <SideBar/>
      <MiddleBody/>
      <RightBody/>
    </div>
  )
}

export default Body