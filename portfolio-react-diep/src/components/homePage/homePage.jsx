import { useEffect } from 'react'
import './homePage.scss'
import 'animate.css';
import scrollreveal from 'scrollreveal'
import MainBanner from './MainBanner'
import About from './about'
import Footer from '../footer/footer'
import Projects from './projects/projects'

const HomePage = () => {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        .row,
        .row2
    `,
      {
        opacity: 0,
        interval: 100,
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
          <div className="row2">
          <Projects/>
          </div>

        </div>
    <Footer/>
      </section>
    </>
  )
}

export default HomePage

   