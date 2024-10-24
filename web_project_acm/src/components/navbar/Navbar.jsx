import React from 'react'
import './Navbar.css'
import logo from '../../images/Logo.png'
import search from '../../images/search_icon.png'
import bell from '../../images/bell_icon.png'
import profile from '../../images/profile_img.png'
import dropdown from '../../images/dropdown.png'




const Navbar = () => {
  return (
    <nav id='diva' className="navbar navbar-expand-lg navbar-dark bg-dark">
      < div id='nav_bar' className="container-fluid "  >
        <div className='nav_left '>

          <img className="navbar-brand logo" src={logo} alt="" />
          <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" >Home</li>
              <li className="nav-item" >TV Shows</li>
              <li className="nav-item" >Movies</li>
              <li className="nav-item" >News & Popular</li>
              <li className="nav-item" >My Lists</li>
              <li className="nav-item" >Browes by Language </li>
            </ul>
          </div>


          {/* Right */}


          <div className=" d-flex  nav_right " >

            <img src={search} className="search icon mx-2 " alt="" />
            <p>Childern </p>
            <img src={bell} className="search icon mx-2" alt="" />

            <div className='dropdown profile_icon'>

              <img src={profile} id='profile' className="icon mx-2" alt="" />
              <img src={dropdown} id='dropdown' alt="" />
              <div className='signout'>
              <button >
             
                Sign Out of Netflix
               
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

  )
}


export default Navbar
