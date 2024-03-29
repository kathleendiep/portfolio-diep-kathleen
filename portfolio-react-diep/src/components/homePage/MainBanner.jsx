import { Link } from "react-router-dom";
import React from 'react'
import './homePage.scss'
import './../../styles/styles.scss'
import { Icon } from '@iconify/react';
import 'animate.css';
const MainBanner = () => {
    return (
        <section className="main-banner-area">
            <div className="container-fluid">
                <div className="row align-items-center banner-container">
                    <div className="col-lg-6 banner-text">
                            <h1 className="gradient">Kathleen Diep</h1>
                            <p>Software Engineer | iOS Developer</p>
                    </div>
                    <div className="col-lg-6">
                        {/* Main Image */}
                        <div className="banner-main-img">
                            <img className="animate__animated animate__fadeInRight animate__fast" src="/images/aboutmeapple.png" alt="Image" />
                        </div>
                        <div className='social-links'>
                            <ul>
                                <li className="social-icons"><a href="mailto:kathleendiep@gmail.com" className="email-link" target="_blank"><Icon icon="ic:baseline-email" /></a></li>
                                <li className="social-icons"> <a href="https://github.com/kathleendiep/" target="_blank" class="github-link"><Icon icon="bytesize:github" /></a></li> 
                                <li className="social-icons"><a href="https://www.linkedin.com/kathleen-diep/" target="_blank" class="linkedin-link"><Icon icon="brandico:linkedin-rect" /></a></li>
                                <li className="social-icons"><a href="https://twitter.com/imKathleenDiep" target="_blank" class="twitter-link"><Icon icon="brandico:twitter-bird" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default MainBanner;






