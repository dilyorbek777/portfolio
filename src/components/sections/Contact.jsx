import React, { Component } from 'react'
import './Work.css'

export class Contact extends Component {
    render() {
        return (
            <div className="service">
                <h2>
                    Contact me
                </h2>
                <div className="cards contact">
                    <div className="card">
                        <i class="fa-solid fa-phone" />
                        <p>+998 97 397 81 81</p>
                    </div>
                    <div className="card">
                        <i class="fa-solid fa-envelope" />
                        <p>asfandiyorov dilyorbek@gmail.com</p>
                    </div>
                    <div className="card">
                        <i class="fab fa-github" />
                        <p>Follow me on github dilyorbek777</p>
                    </div>
                    <div className="card">
                        <i class="fab fa-telegram" />
                        <p>@ dilyorbek asfandiyorov</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact