import React from 'react'

const RightBody = () => {
  return (
    <div className='col-3 bg-success'>
        <h1 className='mt-5'></h1>
        <div className='col-12 bg-white shadow-sm mt-5'>
        <div className='col-12 d-flex flex-row align-items-center justify-content-between p-3'>
          <label className='text-secondary fs-5'><span className='fs-5 txtCol'>Top Selling</span><span className='ms-1'>|</span><span className='ms-1'>Today</span></label>
          <i className='bi bi-three-dots'></i>
        </div>
        </div>
    </div>
  )
}

export default RightBody