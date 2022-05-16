import React, { useState, Component } from 'react';
import './navBar.scss'
import { Link } from 'react-router-dom';
import ProjectsComponent from '../projects/projectsComponent';

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
                            <span class="line "></span>
                            <span class="line "></span>
                            <span class="line "></span>
                        </button>
                        <div class="container-sidenav">
                            <nav id="sideNav">
                                {/* Endpoint to route to Home component */}
                                <h2><a href="#about">About</a></h2>
                                <h2><a href="#Projects">Projects</a></h2>
                                <h2><a href="#Skills">Skills</a></h2>
                                <h2><a href="#contact">Contact</a></h2>
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