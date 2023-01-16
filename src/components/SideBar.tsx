import React from 'react'

const SideBar = () => {
  return (
    <div className='bg-white pt-3 ps-3 pe-3'>
        <div className='p-2 ms-2 '><i className="bi bi-grid"></i><label className='ms-2 txTcoL'>Dashboard</label></div>
        <div className=" d-flex justify-content-between p-2 ms-2 box" data-bs-toggle="collapse" data-bs-target="#Components" aria-expanded="false" aria-controls="Components">
            <i className="bi bi-menu-button-wide"><label className='ms-2 txtCol'>Components</label></i>
            <i className="bi bi-chevron-down"></i>
        </div>
        <div className="collapse" id="Components">
            <ul style={{listStyle:'circle'}} className='txtCol'>
                <li className='p-2 ms-4'>Alerts</li>
                <li className='p-2 ms-4'>Accordion</li>
                <li className='p-2 ms-4'>Badges</li>
                <li className='p-2 ms-4'>Breadcrumbs</li>
                <li className='p-2 ms-4'>Buttons</li>
                <li className='p-2 ms-4'>Cards</li>
                <li className='p-2 ms-4'>Crousel</li>
                <li className='p-2 ms-4'>List Groups</li>
                <li className='p-2 ms-4'>Modal</li>
                <li className='p-2 ms-4'>Tabs</li>
                <li className='p-2 ms-4'>Pagination</li>
            </ul>
        </div>
        <div className="d-flex justify-content-between p-2 ms-2  box " data-bs-toggle="collapse" data-bs-target="#forms" aria-expanded="false" aria-controls="forms">
        <i className="bi bi-journal-text"><label className='ms-2 txtCol'>Forms</label></i>
        <i className="bi bi-chevron-down"></i>
        </div>
        <div className="collapse" id="forms">
            <ul style={{listStyle:'circle'}} className='txtCol'>
                <li className='p-2 ms-4'>Form Elements</li>
                <li className='p-2 ms-4'>Form Layouts</li>
                <li className='p-2 ms-4'>Form Editors</li>
                <li className='p-2 ms-4'>Form Validation</li>
            </ul>
        </div>
        <div className="d-flex justify-content-between p-2 ms-2 box " data-bs-toggle="collapse" data-bs-target="#Tables" aria-expanded="false" aria-controls="Tables">
        <i className="bi bi-layout-text-window-reverse"><label className='ms-2 txtCol'>Tables</label></i>
        <i className="bi bi-chevron-down"></i>
        </div>
        <div className="collapse" id="Tables">
            <ul style={{listStyle:'circle'}} className='txtCol'>
                <li className='p-2 ms-4'>General Tables</li>
                <li className='p-2 ms-4'>Data Tables</li>
            </ul>
        </div>
        <div className="d-flex justify-content-between p-2 ms-2 box" data-bs-toggle="collapse" data-bs-target="#Charts" aria-expanded="false" aria-controls="Charts">
        <i className="bi bi-bar-chart"><label className='ms-2 txtCol'>Charts</label></i>
        <i className="bi bi-chevron-down"></i>
        </div>
        <div className="collapse" id="Charts">
            <ul style={{listStyle:'circle'}} className='txtCol'>
                <li className='p-2 ms-4'>chart.js</li>
                <li className='p-2 ms-4'>ApexCharts</li>
                <li className='p-2 ms-4'>ECharts</li>
            </ul>
        </div>
        <div className="d-flex justify-content-between p-2 ms-2 box " data-bs-toggle="collapse" data-bs-target="#Icons" aria-expanded="false" aria-controls="Icons">
        <i className="bi bi-gem"><label className='ms-2 txtCol'>Icons</label></i>
        <i className="bi bi-chevron-down"></i>
        </div>
        <div className="collapse" id="Icons">
            <ul style={{listStyle:'circle'}} className='txtCol'>
                <li className='p-2 ms-4'>Bootstrap Icons</li>
                <li className='p-2 ms-4'>Remix Icons</li>
                <li className='p-2 ms-4'>Boxicons</li>
            </ul>
        </div>
        <label className='fSize ms-3 text-secondary fw-bold'>PAGES</label>
        <div className="d-flex justify-content-between p-2 ms-2 box" >
        <i className="bi bi-person"><label className='ms-2 txtCol'>Profile</label></i>
        </div>
        <div className="d-flex justify-content-between p-2 ms-2 box " >
        <i className="bi bi-question-circle"><label className='ms-2 txtCol'>F.A.Q</label></i>
        </div>
        <div className="d-flex justify-content-between p-2 ms-2 box " >
        <i className="bi bi-envelope"><label className='ms-2 txtCol'>Contact</label></i>
        </div>
        <div className="d-flex justify-content-between p-2 ms-2 box " >
        <i className="bi bi-card-list"><label className='ms-2 txtCol'>Register</label></i>
        </div>
        <div className="d-flex justify-content-between p-2 ms-2 box " >
        <i className="bi bi-box-arrow-in-right"><label className='ms-2 txtCol'>Login</label></i>
        </div>
        <div className="d-flex justify-content-between p-2 ms-2 box " >
        <i className="bi bi-dash-circle"><label className='ms-2 txtCol'>Error 404</label></i>
        </div>
        <div className="d-flex justify-content-between p-2 ms-2 box " >
        <i className="bi bi-file-earmark"><label className='ms-2 txtCol'>Blank</label></i>
        </div>
    </div>
  )
}

export default SideBar