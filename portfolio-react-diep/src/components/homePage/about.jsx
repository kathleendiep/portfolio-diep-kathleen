import React from 'react';
const About = () => {
    return (
        <section className="about-area pb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src="/images/profilephoto.png" alt="Image" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="about-content">
                            <span></span>
                            <h2>About Me</h2>
                            <h3>Purpose-driven software engineer</h3>
                            <p>Passionate about welding projects into existence starting from user experience then full stack technologies.
                                With years of experience as a business owner, accountant, front-end web-developer, I have a strong foundation in driving result-oriented solutions.</p>
                            <p>I have a passion to build knowledge, stay creative, and continually grow my mindset and I am motivated to leverage modern Front-end technologies to ship awesome user experiences.</p>
                        <span>Let's Connect!</span>
<span className="center-section">
                            <a href="mailto: kathleendiep@gmail.com"><i class="fa fa-envelope fa-2x" aria-hidden="true"></i></a>
          <a href="https://github.com/kathleendiep"><i class="fa fa-github fa-2x" aria-hidden="true"></i></a>
                            

                            
                            
                            
                            
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About