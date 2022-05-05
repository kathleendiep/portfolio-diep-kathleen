import { useEffect } from 'react'
import React, { Component }  from 'react';
import './homePage.scss'
import '../style/background.css';
import 'animate.css';
import scrollreveal from 'scrollreveal'
import MainBanner from './MainBanner'
import Footer from '../footer/footer'
import ProjectsComponent from '../projects/projectsComponent';
import Banner from '../style/banner';
import AboutMe from '../aboutMe/aboutMe';
import Contact from '../aboutMe/contact'
import Skillsets from '../skillsets/skillsets';

// https://github.com/koolkishan/react-music-dashboard-2/blob/master/src/App.js
const HomePage = () => {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 4000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        .row,
        .row2,
        .row3
    `,
      {
        opacity: 0,
        interval: 100,
      }
    );
    const sr2 = scrollreveal({
      origin: "right",
      distance: "80px",
      duration: 1000,
      reset: false,
    });
    sr2.reveal(
      `
       #rightSidebar
    `,
      {
        opacity: 0,
      }
    );
  }, []);

  return (
    <>
      <section>  
        <div className="grid">
          <div className="row">
          <MainBanner></MainBanner>
          </div>
          <div className="row2">
          <AboutMe/>
          <Contact/>
          </div>
          <div className="row3">
          <Banner/>
          <Skillsets/>
          <ProjectsComponent/>
          </div>

        {/* <Banner/> */}
        </div>
          <Footer/>
      </section>
    </>
  )
}

export default HomePage

   