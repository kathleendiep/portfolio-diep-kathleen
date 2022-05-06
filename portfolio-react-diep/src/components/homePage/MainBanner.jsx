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
                            {/* <ul className="social-links">
                                <a href="mailto:kathleendiep@gmail.com" className="email-link" target="_blank"><Icon icon="ic:baseline-email" /></a></li>
                                <li><a href="https://github.com/kathleendiep/" target="_blank" class="github-link"><Icon icon="bytesize:github" /></a></li>
                                <li><a href="https://www.linkedin.com/kathleen-diep/" target="_blank" class="linkedin-link"><Icon icon="brandico:linkedin-rect" /></a></li>
                                <li><a href="https://twitter.com/imKathleenDiep" target="_blank" class="twitter-link"><Icon icon="brandico:twitter-bird" /></a></li>
                            </ul> */}
                           <a href="https://www.linkedin.com/kathleen-diep/" target="_blank" class="linkedin-link">Click here</a>
                           <div class="links-social">
                           <a href="https://www.linkedin.com/kathleen-diep/" target="_blank" class="linkedin-link">Click here</a>
                                <a href="mailto:kathleendiep@gmail.com" className="email-link" target="_blank"><Icon icon="ic:baseline-email" /></a>
                                <a href="https://github.com/kathleendiep/" target="_blank" class="github-link"><Icon icon="bytesize:github" /></a>
                               <a href="https://www.linkedin.com/kathleen-diep/" target="_blank" class="linkedin-link"><Icon icon="brandico:linkedin-rect" /></a>
                               <a href="https://twitter.com/imKathleenDiep" target="_blank" class="twitter-link"><Icon icon="brandico:twitter-bird" /></a>
                            </div> 
             
                        </div>

                    </div>
                </div>
            </div>
        </section >
    )
}

export default MainBanner;






