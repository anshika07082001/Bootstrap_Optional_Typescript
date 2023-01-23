import React from 'react'
import {App} from '../charts/CircleChart'
import {RadarComp} from '../charts/RadarChartComp'

const RightBody = () => {
  return (
  <div className='col-xl-4 col-lg-12 d-flex flex-column'>
    <div className='col-11 bg-white d-flex flex-column shadow mt-3 ms-3 rounded mt-4'>
      <div className='col-12 d-flex flex-row align-items-center justify-content-between p-3'>
        <label className='text-secondary fs-5'><span className='fs-5 txtCol'>Recent Activity</span><span className='ms-1'>|</span><span className='ms-1'>Today</span></label>
        <i className='bi bi-three-dots'></i>
      </div>
      <div className='d-flex flex-row p-3 col-12'>
        <div className='d-flex flex-column col-3 text-secondary'>
          <label className='ms-2'>32 min</label>
          <label className='ms-2 mt-5'>56 min</label>
          <label className='ms-2 mt-5'>2 hrs</label>
          <label className='ms-2 mt-5'>1 day</label>
          <label className='ms-2 mt-5'>2 days</label>
          <label className='ms-2 mt-5'>4 weeks</label>
        </div>
        <div className='col-1 d-flex flex-column align-items-center'>
          <i className="bi bi-circle-fill text-success"></i>
          <label className='fs-2 text-secondary fw-light'>|</label>
          <i className="bi bi-circle-fill text-danger"></i>
          <label className='fs-2 text-secondary fw-light'>|</label>
          <i className="bi bi-circle-fill text-primary"></i>
          <label className='fs-2 text-secondary fw-light'>|</label>
          <i className="bi bi-circle-fill text-info"></i>
          <label className='fs-2 text-secondary fw-light'>|</label>
          <i className="bi bi-circle-fill text-warning"></i>
          <label className='fs-2 text-secondary fw-light'>|</label>
          <i className="bi bi-circle-fill text-secondary"></i>
        </div>
        <div className='col-8 fSize d-flex flex-column align-items-center fw-light text-secondary'>
          <label>Quia quae rerum explicabo officiis beatae</label>
          <label className='mt-4'>Voluptatem blanditiis blanditiis eveniet</label>
          <label className='mt-5'>Voluptates corrupti molestias voluptatem</label>
          <label className='mt-4'>Tempore autem saepe occaecati voluptatem tempore</label>
          <label className='mt-5'>Est sit eum reiciendis exercitationem</label>
          <label className='mt-4'>Dicta dolorem harum nulla eius. Ut quidem quidem sit quas</label>
        </div>
      </div>
    </div>
    <div className='col-11 bg-white d-flex flex-column shadow mt-4 ms-3 rounded'>
      <div className='col-12 d-flex flex-row align-items-center justify-content-between p-3'>
        <label className='text-secondary fs-5'><span className='fs-5 txtCol'>Budget Report</span><span className='ms-1'>|</span><span className='ms-1'>This Month</span></label>
        <i className='bi bi-three-dots'></i>
      </div>
      <div className='p-3'>
        {/* Component Shows the radar Chart */}
        <RadarComp/>
      </div>
    </div>
    <div className='col-11 bg-white d-flex flex-column shadow mt-4 ms-3 rounded'>
      <div className='col-12 d-flex flex-row align-items-center justify-content-between p-3'>
        <label className='text-secondary fs-5'><span className='fs-5 txtCol'>Website Traffic</span><span className='ms-1'>|</span><span className='ms-1'>Today</span></label>
        <i className='bi bi-three-dots'></i>
      </div>
      <div className='p-3'>
        {/* Component shows the Doughnut Chart */}
        <App/>
      </div>
    </div>
    <div className='col-11 bg-white d-flex flex-column shadow mt-4 ms-3 rounded'>
      <div className='col-12 d-flex flex-row align-items-center justify-content-between p-3'>
        <label className='text-secondary fs-5'><span className='fs-5 txtCol'>Website Traffic</span><span className='ms-1'>|</span><span className='ms-1'>Today</span></label>
        <i className='bi bi-three-dots'></i>
      </div>
      <div className='d-flex flex-row col-12 p-3 justify-content-between'>
        <img src='https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/news-1.jpg' alt='' className='rounded' style={{height:'50px',width:'80px'}}/>
        <div className='d-flex flex-column ms-4 fSize'>
          <label className='txtCol'>Nihil blanditiis at in nihil autem</label>
          <label className='text-secondary'>Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum...</label>
        </div>
      </div>
      <div className='d-flex flex-row col-12 p-3 justify-content-between'>
        <img src='https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/news-2.jpg' alt='' className='rounded' style={{height:'50px',width:'80px'}}/>
        <div className='d-flex flex-column ms-4 fSize'>
          <label className='txtCol'>Quidem autem et impedit</label>
          <label className='text-secondary'>Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum...</label>
        </div>
      </div>
      <div className='d-flex flex-row col-12 p-3 justify-content-between'>
        <img src='https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/news-3.jpg' alt='' className='rounded' style={{height:'50px',width:'80px'}}/>
        <div className='d-flex flex-column ms-4 fSize'>
          <label className='txtCol'>Id quia et et ut maxime similique occaecati ut</label>
          <label className='text-secondary'>Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum...</label>
        </div>
      </div>
      <div className='d-flex flex-row col-12 p-3 justify-content-between'>
        <img src='https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/news-4.jpg' alt='' className='rounded' style={{height:'50px',width:'80px'}}/>
        <div className='d-flex flex-column ms-4 fSize'>
          <label className='txtCol'>Laborum corporis quo dara net para</label>
          <label className='text-secondary'>Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum...</label>
        </div>
      </div>
      <div className='d-flex flex-row col-12 p-3 justify-content-between'>
        <img src='https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/news-5.jpg' alt='' className='rounded' style={{height:'50px',width:'80px'}}/>
        <div className='d-flex flex-column ms-4 fSize'>
          <label className='txtCol'>Et dolores corrupti quae illo quod dolor</label>
          <label className='text-secondary'>Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum...</label>
        </div>
      </div>
    </div>
  </div>
  )
}

export default RightBody