import { Link } from "react-router-dom";
import React from 'react'
import './homePage.scss'
import './../../styles/styles.scss'
const MainBanner = () => {
    return (
        <section className="main-banner-area main-banner-area-one">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="banner-text">
                            <h1>Kathleen Diep</h1>
                            <p>Full Stack Web Engineer</p>

                            {/* <div className="banner-btn">
                                    button goes ere 
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        {/* Main Image */}
                        <div className="banner-main-img banner-one-main-img">
                            <img className="animate__animated animate__fadeInUp animate__fast" src="/images/aboutmeapple.png" alt="Image" />
                        </div>

                    </div>
                </div>
                <div className="over-shape">
                    <img src="/images/home-one/shape/animate1.png" alt="Image" />
                    <img src="/images/home-one/shape/animate2.png" alt="Image" />
                    <img src="/images/home-one/shape/animate3.png" alt="Image" />
                </div>
                <div className="white-shape">
                    <img src="/images/home-one/bottom-shape.png" alt="Image" />
                </div>
            </div>
        </section>
    )
}

export default MainBanner;






