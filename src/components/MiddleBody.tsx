import React from 'react'

const MiddleBody = () => {
  return (
    <div className='p-4  col-6'>
      <span className='fs-3 txtCol'>Dashboard</span>
      <div className='text-secondary fSize'>
        <span >Home</span>
        <span className='ms-1'>/</span>
        <span className='ms-1 fw-bolder'>Dashboard</span>
      </div>
      <div className='d-flex flex-row col-12 mt-3'>
        <div className='shadow-sm bg-white d-flex flex-column p-4 ps-5 pe-5 col-6 rounded'>
          <div className='d-flex flex-row col-12 justify-content-between text-secondary'>
            <div>
              <label className='txtCol fs-5'>Sales</label>
              <label className='ms-1 '>|</label>
              <label className='ms-1'>Today</label>
            </div>
            <i className='bi bi-three-dots'></i>
          </div>
          <div className='d-flex flex-row col-12 mt-2'>
            <div className='p-2 ps-3 pe-3 txTcoL rounded-circle' style={{background:'rgb(233 235 241)'}}><i className='bi bi-cart fs-3'></i></div>
            <div className='d-flex flex-column ms-3'>
              <label className='fs-3 txtCol fw-bold'>145</label>
              <label><span className='text-success'>12%</span><span className='text-secondary ms-1'>increase</span></label>
            </div>
          </div>
        </div>
        <div className='shadow-sm bg-white d-flex flex-column p-4 ps-5 pe-5 col-6 rounded'>
          <div className='d-flex flex-row col-12 justify-content-between text-secondary'>
            <div>
              <label className='txtCol fs-5'>Revenue</label>
              <label className='ms-1 '>|</label>
              <label className='ms-1'>This Month</label>
            </div>
            <i className='bi bi-three-dots'></i>
          </div>
          <div className='d-flex flex-row col-12 mt-2'>
            <div className='p-2 ps-3 pe-3 bg-success-subtle rounded-circle' style={{background:'rgb(233 235 241)'}}><i className='bi bi-currency-dollar fs-3 text-success'></i></div>
            <div className='d-flex flex-column ms-3'>
              <label className='fs-3 txtCol fw-bold'>$3,264</label>
              <label><span className='text-success'>12%</span><span className='text-secondary ms-1'>increase</span></label>
            </div>
          </div>
        </div>
      </div>

      <div className='shadow-sm bg-white d-flex flex-column p-4 col-12 rounded mt-4 ms-1'>
          <div className='d-flex flex-row col-12 justify-content-between text-secondary'>
            <div>
              <label className='txtCol fs-5'>Customers</label>
              <label className='ms-1 '>|</label>
              <label className='ms-1'>This Year</label>
            </div>
            <i className='bi bi-three-dots'></i>
          </div>
          <div className='d-flex flex-row col-12 mt-2'>
            <div className='p-2 ps-3 pe-3 bg-success-subtle rounded-circle' style={{background:'rgb(233 235 241)'}}><i className='bi bi-people fs-3 text-warning'></i></div>
            <div className='d-flex flex-column ms-3'>
              <label className='fs-3 txtCol fw-bold'>1244</label>
              <label><span className='text-danger'>12%</span><span className='text-secondary ms-1'>decrease</span></label>
            </div>
          </div>
      </div>
      
    </div>
  )
}

export default MiddleBody