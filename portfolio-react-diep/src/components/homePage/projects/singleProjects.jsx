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
                                <img className="image-voyager" src={props.project.img}></img>
                            </div>
                            <div class="card__body">
                                <div class="card__color-picker">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <h2 className="card-title">{props.project.name}</h2>
                                <h3></h3>
                                <li className="card-jobtitle">{props.project.tech}</li>
                                <div class="card-content">
                                    <div class="card-subtitle">ABOUT</div>
                                    <p class="card-desc">{props.project.about}</p>
                                </div>
                                <div class="card-buttons">
                                <button> <a href="link"> github </a></button>
                                <button> <a href="link">link</a></button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }


export default SingleProjects
