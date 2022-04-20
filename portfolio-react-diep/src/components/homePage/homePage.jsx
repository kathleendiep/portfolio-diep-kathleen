import { useEffect } from 'react'
import './homePage.scss'
import 'animate.css';
import scrollreveal from 'scrollreveal'
import MainBanner from './MainBanner'
import About from './about'
import Footer from '../footer/footer'
import Projects from './projects/projects'
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
          <About/>
          </div>
          <div className="row3">
          <Projects/>
          </div>

        </div>
    <Footer/>
      </section>
    </>
  )
}

export default HomePage

   