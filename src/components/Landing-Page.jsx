import React from 'react';
import '../css/LandingPage.css';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import TwitterIcon from '@mui/icons-material/Twitter';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const LandingPage = () => {
  return (
    <>
    <div id="main">
      <div id="left">

        <div id="nav-link">
        <span><KeyboardBackspaceIcon/></span>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <span style={{color:"orange", marginLeft:'20px', cursor:'pointer'}}><TwitterIcon/></span>
          </ul>
        </div>
        <div id="text">
          <h1 style={{color:'orange'}}>Zohaib Nazakat</h1>
          <p style={{opacity:'0.8'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora illum perspiciatis soluta consequatur deserunt consequuntur reprehenderit nemo! Dolores, sunt esse.</p>
          <button>Read</button>
        </div>
        
      </div>


      <div id="right">
        <div id="rightT">
          <div id="rightT-left"></div>
          <div id="rightT-right"></div>
        </div>


        <div id="rightB">
          <button className='navigate-btn'>
              <ArrowBackIosIcon/>
          </button>
          <button style={{marginLeft:'50px'}}><ArrowForwardIosIcon/></button>
         
        </div>
        
      </div>
    </div>
    </>
  )
}

export default LandingPage;