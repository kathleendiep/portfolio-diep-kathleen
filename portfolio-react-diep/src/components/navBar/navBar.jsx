import React, { useState, Component } from 'react';
import './navBar.scss'

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

        </>
    )
}

export default NavBar;