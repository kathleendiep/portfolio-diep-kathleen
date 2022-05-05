import React from 'react'
import './aboutMe.scss'

const AboutMe = () => {
  return (
    <div class="well skewed-bg2 text-center">
      <div className="skewed-text">

          <div className="about-img-full about-img">
            <img src="/images/profilephoto.png" alt="Image" />
          </div>

        <div className="about-content">
          <h2>About Me</h2>
          <h3>Purpose-driven software engineer</h3>
          <p>Passionate about welding projects into existence starting from user experience then full stack technologies.
            With years of experience as a business owner, accountant, front-end web-developer, I have a strong foundation in driving result-oriented solutions.</p>
          <p>I have a passion to build knowledge, stay creative, and continually grow my mindset and I am motivated to leverage modern Front-end technologies to ship awesome user experiences.</p>
          <div className="col-lg-4 col-sm-6">
            <a className="default-btn card-container">
              DOWNLOAD RESUME
            </a>
          </div>
        </div>

      </div>
    </div>

  )
}
export default AboutMe
