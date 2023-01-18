import React from 'react'
import Chart1 from './Chart1'

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

      <div className='col-12 bg-white p-3 mt-4 shadow-sm m-1 rounded pb-5'>
      <div className='col-12 d-flex flex-row align-items-center justify-content-between'>
          <label className='text-secondary fs-5'><span className='fs-5 txtCol'>Reports</span><span className='ms-1'>/</span><span className='ms-1'>Today</span></label>
          <i className='bi bi-three-dots'></i>
        </div>
      <Chart1/>
      </div>

      <div className='col-12 d-flex flex-column p-3 rounded bg-white mt-4 shadow-sm m-1'>
        <div className='col-12 d-flex flex-row align-items-center justify-content-between p-3'>
          <label className='text-secondary fs-5'><span className='fs-5 txtCol'>Recent Sales</span><span className='ms-1'>|</span><span className='ms-1'>Today</span></label>
          <i className='bi bi-three-dots'></i>
        </div>
        <div className='col-12 d-flex flex-row justify-content-between align-items-center'>
          <div className='col-5 p-1 m-2  d-flex flex-row'>
            <select className='border-1 p-1 rounded'>
              <option>10</option>
              <option>212</option>
              <option>23</option>
            </select>
            <label className='ms-2 fw-light'>entries per page</label>
          </div>
          <input placeholder='search...' className='p-1'/>
        </div>
        <table className='table'>
          <tr>
            <td className='fw-bold bg-light p-2'>#</td>
            <td className='fw-bold bg-light p-2'>Customer</td>
            <td className='fw-bold bg-light p-2'>Product</td>
            <td className='fw-bold bg-light p-2'>Price</td>
            <td className='fw-bold bg-light p-2'>Status</td>
          </tr>
          <tr>
            <td className='p-2 fw-bold '>#2644</td>
            <td className='p-2 fw-light'>Angus Grady</td>
            <td className='p-2 text-primary'>Ut voluptatem id earum et</td>
            <td className='p-2 fw-light'>$67</td>
            <td className='p-2 '><span className="badge bg-danger rounded-pill">Rejected</span></td>
          </tr>
          <tr>
            <td className='p-2 fw-bold '>#2644</td>
            <td className='p-2 fw-light'>Raheem Lehner</td>
            <td className='p-2 text-primary'>Sunt similique distinctio</td>
            <td className='p-2 fw-light'>$165	</td>
            <td className='p-2 '><span className="badge bg-success rounded-pill">Approved</span></td>
          </tr>
          <tr>
            <td className='p-2 fw-bold '>#2644</td>
            <td className='p-2 fw-light'>Angus Grady</td>
            <td className='p-2 text-primary'>At praesentium minu</td>
            <td className='p-2 fw-light'>$67</td>
            <td className='p-2 '><span className="badge bg-success rounded-pill">Approved</span></td>
          </tr>
          <tr>
            <td className='p-2 fw-bold '>#2457</td>
            <td className='p-2 fw-light'>Brandon Jacob</td>
            <td className='p-2 text-primary'>At praesentium minu</td>
            <td className='p-2 fw-light'>$67</td>
            <td className='p-2 '><span className="badge bg-warning rounded-pill">Pending</span></td>
          </tr>
          <tr>
            <td className='p-2 fw-bold '>#2644</td>
            <td className='p-2 fw-light'>Angus Grady</td>
            <td className='p-2 text-primary'>Ut voluptatem id earum et</td>
            <td className='p-2 fw-light'>$67</td>
            <td className='p-2 '><span className="badge bg-success rounded-pill">Approved</span></td>
          </tr>
        </table>
        <hr/>
        <label className='fw-light p-2'>Showing 1 to 5 of 5 entries</label>
      </div>
      
     

      <div className=' col-12 d-flex flex-column p-3 rounded bg-white mt-4 shadow-sm m-1'>
        <div className='col-12 d-flex flex-row align-items-center justify-content-between p-3'>
          <label className='text-secondary fs-5'><span className='fs-5 txtCol'>Top Selling</span><span className='ms-1'>|</span><span className='ms-1'>Today</span></label>
          <i className='bi bi-three-dots'></i>
        </div>
        <table className='p-2'>
          <tr className='bg-light fw-bold text-dark p-2'>
            <td className='p-2'>Preview</td>
            <td className='p-2'>Product</td>
            <td className='p-2'>Price</td>
            <td className='p-2'>Sold</td>
            <td className='p-2'>Revenue</td>
          </tr>
          <tr>
            <td className='p-2'><img style={{height:'50px',width:'50px'}} src='https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/product-1.jpg' alt=''/></td>
            <td className='p-2 text-primary fw-bold'>Ut inventore ipsa voluptas nulla</td>
            <td className='p-2 fw-light text-dark'>$64</td>
            <td className='p-2 text-dark fw-bold'>124</td>
            <td className='p-2 fw-light text-dark'>$5,828</td>
          </tr>
          <tr className='p-2'>
            <td className='p-2 '><img style={{height:'50px',width:'50px'}} src='https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/product-2.jpg' alt=''/></td>
            <td className='p-2 text-primary fw-bold'>Exercitationem similique doloremque</td>
            <td className='p-2 fw-light text-dark'>$46</td>
            <td className='p-2 text-dark fw-bold'>98</td>
            <td className='p-2 fw-light text-dark'>$4,508</td>
          </tr>
          <tr className='p-2'>
            <td className='p-2'><img style={{height:'50px',width:'50px'}} src='https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/product-3.jpg' alt=''/></td>
            <td className='p-2 text-primary fw-bold'>Doloribus nisi exercitationem</td>
            <td className='p-2 fw-light text-dark'>$59</td>
            <td className='p-2 text-dark fw-bold'>74</td>
            <td className='p-2 fw-light text-dark'>$4,366</td>
          </tr>
          <tr className='p-2'>
            <td className='p-2'><img style={{height:'50px',width:'50px'}} src='https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/product-4.jpg' alt=''/></td>
            <td className='p-2 text-primary fw-bold'>Ut inventore ipsa voluptas nulla</td>
            <td className='p-2 fw-light text-dark'>$64</td>
            <td className='p-2 text-dark fw-bold'>124</td>
            <td className='p-2 fw-light text-dark'>$5,828</td>
          </tr>
          <tr className='p-2'>
            <td className='p-2'><img style={{height:'50px',width:'50px'}} src='https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/product-5.jpg' alt=''/></td>
            <td className='p-2 text-primary fw-bold'>Officiis quaerat sint rerum error</td>
            <td className='p-2 fw-light text-dark'>$64</td>
            <td className='p-2 text-dark fw-bold'>124</td>
            <td className='p-2 fw-light text-dark'>$5,828</td>
          </tr>
        </table>
      </div>  
    </div>
  )
}

export default MiddleBody