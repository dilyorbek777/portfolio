import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import './Navbar.css'




export class Navbar extends Component {

    render() {
        const click = () => {

            document.querySelector(".links").classList.toggle('responsive');
            document.querySelector(".fa-bars-staggered").classList.toggle("fa-xmark");

        }
        const scroll = () => {
            
                window.addEventListener('scroll', function () {
                    const header = document.querySelector('nav');
                    header.classList.toggle('sticky', window.scrollY > 0)
                })
           
        }
        scroll()


        return (
            <>
                <nav>
                    <div className="logo">
                        <Link to="/">Programmer</Link>

                    </div>

                    <ul className="links">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/service">Service</Link>
                        </li>
                    </ul>
                    <i className="fa-solid fa-bars-staggered" onClick={click} />
                </nav>
                <Outlet />
            </>
        )
    }
}

export default Navbar