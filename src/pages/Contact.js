import React, { Component } from 'react'

import bgImg from '../images/bg-img.png' 


import './contact.css'
import MiniFooter from '../components/MiniFooter'
import Contact from '../components/sections/Contact'

export class ContactMe extends Component {
  render() {
    return (
      <>

        <div className='contact'>
        <img className='bg-img' src={bgImg} />
          
          
          <Contact />
          <MiniFooter/>
        </div>
      </>
    )
  }
}

export default ContactMe