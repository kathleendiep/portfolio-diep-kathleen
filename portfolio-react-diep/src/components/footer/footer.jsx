import React from 'react'
import { useState } from 'react'
import './footer.scss'
import { Icon } from '@iconify/react';

const Footer = () => {
    return(
        <footer className="mesh-footer" id="contact">
            <span> let's connect!</span>
            <div className='social-links'>
                    <ul>
                        <li className="social-icons"><a href="mailto:kathleendiep@gmail.com" className="email-link" target="_blank"><Icon icon="ic:baseline-email" /></a></li>
                        <li className="social-icons"> <a href="https://github.com/kathleendiep/" target="_blank" class="github-link"><Icon icon="bytesize:github" /></a></li> 
                        <li className="social-icons"><a href="https://www.linkedin.com/kathleen-diep/" target="_blank" class="linkedin-link"><Icon icon="brandico:linkedin-rect" /></a></li>
                        <li className="social-icons"><a href="https://twitter.com/imKathleenDiep" target="_blank" class="twitter-link"><Icon icon="brandico:twitter-bird" /></a></li>
                    </ul>
            </div>
            <li>    &copy;2022 Kathleen Diep | All Rights Reserved </li>
            
        </footer> 
    )
}

export default Footer
