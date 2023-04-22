import React, { Component } from 'react'
import './MiniFooter.css'

export class MiniFooter extends Component {
  render() {
    return (
      <div className='footer'>
        <p>asfandiyorovdilyorbek@gmail.com</p>
        <p><i class="fa-brands fa-telegram"/> @dilyorbek_asfandiyorov</p>
        <p><i class="fa-brands fa-github"/> dilyorbek777</p>

        </div>
    )
  }
}

export default MiniFooter