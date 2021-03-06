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
import Test from '../aboutMe/test';
import NavBar from '../navBar/navBar';
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
          <NavBar/>
          <div className="row">
          <MainBanner></MainBanner>
          </div>
          <AboutMe/>
          <Contact/>
          <div className="row2">
          <a id="projects">
          <ProjectsComponent/>
          </a>
          </div>
          <div className="row3">
          <Banner/>
          </div>
        </div>
          <Footer/>
      </section>
    </>
  )
}

export default HomePage

   