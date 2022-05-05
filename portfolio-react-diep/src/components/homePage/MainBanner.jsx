import { Link } from "react-router-dom";
import React from 'react'
import './homePage.scss'
import './../../styles/styles.scss'
const MainBanner = () => {
    return (
        <section className="main-banner-area">
            <div className="container-fluid">
                <div className="row align-items-center banner-container">
                    <div className="col-lg-6">
                        <div className="banner-text">
                            <h1>Kathleen Diep</h1>
                            <p>Full Stack Web Engineer</p>
                        </div>
                    </div>
                    <div className="col-lg-6 banner-main-img">
                        {/* Main Image */}
                        <div className="banner-main-img banner-one-main-img">
                            <img className="animate__animated animate__fadeInUp animate__fast" src="/images/aboutmeapple.png" alt="Image" />
                            <ul className="contact-btn-section">
                                    <li>email</li>
                                    <li>email</li>
                                    <li>email</li>
                                    <li>email</li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainBanner;






