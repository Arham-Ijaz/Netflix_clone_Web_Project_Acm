import React from 'react'
import './Home.css'
import NavBar from '../../components/navbar/Navbar'
import Background from '../../images/background.png'
import backgroundtxt from '../../images/herotxt_img.png'
import Footer from '../../components/footer/Footer'
import Player from '../player/Player'

const Home = () => {
  return (
    <div id=' maindiv' className='Home'>
      <NavBar />


      <div className='contianer-fluid'>
        <div className='row position-relative'>

          <img className='position-relative img-fluid' id='banner' src={Background} alt="" />


          <div id='bannertext'>


            <img className='d-flex justify-content-center align-items-center flex-column' src={backgroundtxt} id='imgtxt' alt="" />
            <div className='d-flex buttondiv'>

              <button className="btn btn-primary playbutton">
                play
              </button>
              <button className="btn btn-info playbutton">
                More information
              </button>
            </div>
          </div>

        </div>
      </div>


      <Player />

      <Footer />
    </div>

  )
}


export default Home
