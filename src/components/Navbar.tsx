import React from 'react'

type navbarProps = {
  style:string
  setStyle:React.Dispatch<React.SetStateAction<string>>
  padding:string
  setPadding:React.Dispatch<React.SetStateAction<string>>
}

const Navbar = (props:navbarProps) => {
  // functon shows/hide sidebar
  const showHide=()=>{
    if(props.style=='show'){
      props.setStyle('hide')
      props.setPadding('padLeftBig')
    }
    else{
      props.setStyle('show')
      props.setPadding('padLeftSmall')
    }
  }

  return (
  <nav className="navbar fixed-top navbar-light bg-white shadow">
    <div className="container-fluid d-flex flex-row align-items-center">
      <div className='d-flex align-items-center '>
        <img style={{height:'30px',width:'30px'}} src='https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/logo.png' alt=''/>
        <label className='fs-3 fw-bold txtCol ps-1'>NiceAdmin</label>
      </div>
      <div className='d-flex flex-row align-items-center txtCol col-2 col-xl-5 '>
        <i className="bi bi-list fs-3" onClick={showHide}></i>
        <div className='border border-secondary-subtle ms-3 p-2 rounded d-none d-xl-block'>
          <input className='border-0 bgLight' style={{outline:'none'}} placeholder='search'/>
          <i className="bi bi-search txtCol ps-1"></i>
        </div>
      </div>
      <div className=' col-3 col-xl-2 justify-content-around  txtCol d-flex flex-row align-items-center'>
        <i className="bi bi-bell fs-4 position-relative ">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-primary fw-lighter fSize">4</span>
        </i>
        <i className="bi bi-chat-left-text position-relative fs-4 ">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-success fw-lighter fSize">6</span>
        </i>
        <div>
          <img src='https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/profile-img.jpg' className='rounded-circle ms-3' style={{height:'40px',width:'40px'}} alt=''/>
          <span className='fSize ms-1 d-none d-xl-block '>K. Anderson<i className="bi bi-caret-down-fill"></i></span>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar