import React from 'react'
import './aboutMe.scss'
import { Icon } from '@iconify/react';

const AboutMe = () => {
  return (
    <section id="about">
    <div class="well skewed-bg2 text-center">
      <div className="skewed-text">

        <div className="about-img-full about-img">
          <img src="/images/profilephoto.png" alt="Image" />
        </div>

        <div className="about-content">
          <h2>About Me</h2>
          <h5 className="about-headline">software engineer |  entreprenuer  | sf bay area adventurer</h5>
          <p>Passionate about welding projects into existence starting from user experience then full stack and mobile technologies. </p>
          <p> Currently studying iOS Development and currently building a Dog Community iOS App and hope to list in AppStore soon! </p>
          <p> With years of experience as a business owner, accountant, software engineer, I have a strong foundation in driving result-oriented solutions.</p>
          <p>I have a passion to build knowledge, stay creative, and continually grow my mindset and I am motivated to leverage modern technologies to ship awesome user experiences.</p>

          <button className="default-btn about-btn about-container">
            <a href="Kathleen-Diep-Resume-Software.pdf" download="KathleenDiepSoftwareResume.pdf">
              Download Resume <Icon icon="ep:download" />
            </a>
          </button>
        </div>
      </div>
    </div>
    </section>
  )
}
export default AboutMe
