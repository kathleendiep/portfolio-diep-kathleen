import React, { useState, Component } from 'react';
import './navBar.scss'
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [active, setActive] = useState(false)
    const [showing, setShowing] = useState()
     //Selects the element with the class name of hamburger.
    //Creating an arrow function for changing the class to active.
    const menuIsActive = () => {
        setActive(true)
    }
    const menuIsNotActive = () => {
        setActive(false)
    }
    return (
        <>
        {
            active
            ? 
            <div class="nav-header">
            <button type="button" class="hamburger active" onClick={menuIsNotActive}>
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </button>
            <div class="container-sidenav">
                    <nav id="sideNav">
                        {/* Endpoint to route to Home component */}
                        <Link to="#Projects">Projects</Link>
                        {/* Endpoint to route to About component */}
                        <Link to="#Skills">Skills</Link>
                        {/* Endpoint to route to Check more out! component */}
                        <Link to="#About">About</Link>
                    </nav>
                </div>
            </div>
            :
            <div class="nav-header">
            <button type="button" class="hamburger" onClick={menuIsActive}>
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </button>
        </div>

        }

        {



        }

        </>
    )
}

export default NavBar;