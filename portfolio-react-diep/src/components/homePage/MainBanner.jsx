import { Link } from "react-router-dom";
import React from 'react'
import './homePage.scss'
import './../../styles/styles.scss'
import {  faNavicon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from '@iconify/react';


const MainBanner = () => {
    return (
        <section className="main-banner-area">
            <div className="container-fluid">
                <div className="row align-items-center banner-container">
                    <div className="col-lg-6">
                        <div className="banner-text">
                            <h1 className="gradient">Kathleen Diep</h1>
                            <p>Full Stack Web Engineer</p>
                        </div>
                    </div>
                    <div className="col-lg-6 banner-main-img">
                        {/* Main Image */}
                        <div className="banner-main-img banner-one-main-img">
                            <img className="animate__animated animate__fadeInUp animate__fast" src="/images/aboutmeapple.png" alt="Image" />
                            <ul className="contact-btn-section social-links">
                            <li><a href="https://github.com/kathleendiep/" target="_blank" class="github-link"><Icon icon="ic:baseline-email" /></a></li>
                                <li><a href="https://github.com/kathleendiep/" target="_blank" class="github-link"><Icon icon="bytesize:github" /></a></li>
                                <li><a href="https://github.com/kathleendiep/" target="_blank" class="github-link"><Icon icon="brandico:linkedin-rect" /></a></li>
                                <li><a href="https://github.com/kathleendiep/" target="_blank" class="github-link"><Icon icon="brandico:twitter-bird" /></a></li>



                            </ul>

                            {/* <div class="social-links">
                                <a href="https://github.com/BenThom21" target="_blank" class="github-link"><i class="fa fa-github" aria-hidden="true"></i></a>
                                <a href="https://www.freecodecamp.com/benthom21" target="_blank" class="fcc-link"><i class="fa fa-free-code-camp" aria-hidden="true"></i></a>
                                <a href="https://www.linkedin.com/in/benthompson2014" target="_blank" class="linkedin-link"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                                <a href="https://twitter.com/BenThom21" target="_blank" class="twitter-link"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                <a href="mailto:benthompson4496@gmail.com"><i class="email-link fa fa-envelope-o" aria-hidden="true"></i></a>
                            </div> */}
                        </div>

                    </div>
                </div>
            </div>
        </section >
    )
}

export default MainBanner;






