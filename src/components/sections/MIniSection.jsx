import React from 'react'
import Myimg from './img/myimg.jpg'
import './MiniSection.css'

function MIniSection() {



  return (
    <div className='about'>

      <div className="left">
        <img src={Myimg} alt="" />
      </div>
      <div className="right">
        <h2>About me</h2>
        <p>My fullname is Dilyorbek Asfandiyorov. I was born on May 23, 2009 in Samarkand. I became interested in computers when I was 11 years old. From the age of 13, I became interested in programming and started learning programming languages. Now I am a frontend developer. For 9 months, I studied programming languages such as HTML <i class="fa-brands fa-html5" />, CSS <i class="fa-brands fa-css3-alt"/>, JAVASCRIPT <i class="fa-brands fa-js"/>, REACTJS <i class="fa-brands fa-react"/>  in depth.</p>
      </div>


    </div>
  )
}


export default MIniSection