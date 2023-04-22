import React, { Component } from 'react'
import './Work.css'

export class Work extends Component {
    render() {
        return (
            <div className="service">
                <h2>
                    My services
                </h2>
                <div className="cards">
                    <div className="card">
                        <i class="fa-solid fa-pen-to-square" />
                        <p>Create websites</p>
                    </div>
                    <div className="card">
                        <i class="fa-solid fa-image" />
                        <p>Make logos</p>
                    </div>
                    <div className="card">
                        <i class="fab fa-telegram" />
                        <p>Make telegram bots</p>
                    </div>
                    <div className="card">
                        <i class="fa-sharp fa-solid fa-compass-drafting" />
                        <p>Web design</p>
                    </div>
                    <div className="card">
                        <i class="fa-solid fa-globe" />
                        <p>Hosting</p>
                    </div>
                    <div className="card">
                        <i class="fa-solid fa-chart-simple"/>
                        
                        <p>Marketing</p>
                    </div>
                    <div className="card">
                        <i class="fa-solid fa-cloud"/>
                        
                        <p>Working on a cloud network</p>
                    </div>
                    <div className="card">
                    <i class="fa-brands fa-squarespace"></i>
                        <p>Additional services</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Work