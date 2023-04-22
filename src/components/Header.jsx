import React, { Component } from 'react';
import bgImg from '../images/bg-img.png' 
import { Link } from "react-router-dom";

import './Header.css';


export class Header extends Component {
    render() {

        return (
            <header>
                <img className='bg-img' src={bgImg} />
                <div className="viewer">
                    <div className="left">
                        <h2>
                            Hi, <br />
                            I'm Dilyorbek
                        </h2>
                        <p>I'm frontend developer</p>
                        <div className="icons">
                            <Link to='https://t.me/dilyorbek_asfandiyorov' target='_blank'> <i class="fa-brands fa-telegram"></i></Link>
                            <Link to='https://github.com/dilyorbek777/' target='_blank'><i class="fa-brands fa-github"></i></Link>
                        </div>
                    </div>
                    <div className="right">

                    </div>
                </div>
                <div className="bottom">
                    <div class="mouse"></div>

                </div>
            </header>
        )
    }
}

export default Header