import React, { Component } from 'react'
import './Skills.css'
export class Skills extends Component {
    render() {
        return (
            <div className='skills-page'>
                <h2>My skills </h2>
                <div className="skills">
                    <div className="skill">
                        <div className="name-per">
                            <p> HTML</p>

                        </div>
                        <div className="wide">
                            <div className="inner"></div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="name-per">
                            <p>CSS</p>

                        </div>
                        <div className="wide">
                            <div className="inner"></div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="name-per">
                            <p>JAVASCRIPT</p>

                        </div>
                        <div className="wide">
                            <div className="inner"></div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="name-per">
                            <p>REACTJS</p>

                        </div>
                        <div className="wide">
                            <div className="inner"></div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="name-per">
                            <p>PYTHON</p>

                        </div>
                        <div className="wide">
                            <div className="inner"></div>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="name-per">
                            <p>NODEJS</p>

                        </div>
                        <div className="wide">
                            <div className="inner"></div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Skills