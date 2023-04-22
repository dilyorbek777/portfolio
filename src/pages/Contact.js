import React, { Component } from 'react'
import './contact.css'
import MiniFooter from '../components/MiniFooter'
import Contact from '../components/sections/Contact'

export class ContactMe extends Component {
  render() {
    return (
      <>

        <div className='contact'>
          <img className='bg-img' src="https://img.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg?w=1060&t=st=1682061493~exp=1682062093~hmac=b90890e543245dfde5b7ad858e5d5a6d4f9628985cd4c5a21320478feec9b3a6" />
          
          <Contact />
          <MiniFooter/>
        </div>
      </>
    )
  }
}

export default ContactMe