import React from 'react'
import './singleProject.scss'
import { Icon } from '@iconify/react';

const SingleProject = (props) =>{
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
                                <button> <a href={props.project.github} target="_blank"><Icon icon="bytesize:github" /> </a></button>
                                <button> <a href={props.project.link} target="_blank"><Icon icon="clarity:computer-solid" /></a></button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
export default SingleProject
