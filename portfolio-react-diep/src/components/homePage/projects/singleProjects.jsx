import React from 'react'
import './projects.scss'
import './singleProjects.scss'
const SingleProjects = (props) =>{
        return (
            <>
                <div className="single-item-component">
                    {/* CARD ELEMENT */}
                    <div class="cards">
                        {/* IMAGE */}
                        <div class="card">
                            <div class="img">
                                <img className="image-voyager" src="/images/luluspaws-web.png"></img>
                            </div>
                            <div class="card__body">
                                <div class="card__color-picker">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <h2 className="card-title"></h2>
                                <h3 >tech stack</h3>
                                <li className="card-jobtitle">country</li>
                                <div class="card-content">
                                    <div class="card-subtitle">ABOUT</div>
                                    <p class="card-desc">description</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }


export default SingleProjects
