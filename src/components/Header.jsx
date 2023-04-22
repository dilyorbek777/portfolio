import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './Header.css';


export class Header extends Component {
    render() {

        return (
            <header>
                <img className='bg-img' src="https://img.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg?w=1060&t=st=1682061493~exp=1682062093~hmac=b90890e543245dfde5b7ad858e5d5a6d4f9628985cd4c5a21320478feec9b3a6" />
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