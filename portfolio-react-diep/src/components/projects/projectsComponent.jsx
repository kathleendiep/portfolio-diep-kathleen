import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SingleProject from './singleProject';
import './projects.scss'

class ProjectsComponent extends React.Component {
    constructor(props) {
        // super - load parents first
        super(props)
        // just had one state 
        // use this BEFORE other objects
        this.state = {
            projects: [
                { name: "Pet-Ventures", img: "/images/projects-petventures.png", tech: ["Django, Python, React, Javascript, SQL, Cloudinary"], about: "social media app that will connect pet lovers through setting up dog/human profiles, services, and blog posts ", github: "https://github.com/kathleendiep/pet-ventures", link: "https://petventures.herokuapp.com" },
                { name: "SnacksWorld", img: "/images/projects-snack.png", tech: ["Django, Python, React, Javascript, SQL"], about: "upload and share info of different snacks in the world", github: "https://github.com/kathleendiep/snack-world-react", link: "https://snack-world.herokuapp.com/home" },
                { name: "LULUSPAWS", img: "/images/luluspaws-web.png", tech: ["PHP, Angular, SQL "], about: "fully developed e commerce for small business", github: "n/a", link: "https://www.luluspaws.com" },
                { name: "Voyager", img: "/images/projects-voyager.png", tech: ["MERN, React, Javascript, CSS"], about: "fully developed e commerce for small business", github: "https://github.com/kathleendiep/voyager-front-end", link: "" },
            ],
        }
    }
    render() {
        console.log("Rendering");
        const responsive = {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3,
                slidesToSlide: 3 // optional, default to 1.
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
                slidesToSlide: 2 // optional, default to 1.
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                slidesToSlide: 1 // optional, default to 1.
            }
        };
        return (
            <>
                
                <div className="parent" id="Projects">
                    <div className="mesh-background"> 
                    <div className="animate__animated animate__fadeInRight animate__delay-1s project-container">
                        <div class="section-head col-sm-12">
                            <h4><span>Check out my work</span></h4>
                        </div>
                
                        <Carousel
                            className="outer-container"
                            /*
                            swipeable={false}
                            draggable={false}
                            */
                            responsive={responsive}
                            ssr
                            showDots
                            containerClass="container-with-dots"
                            itemClass="image-item"
                            deviceType={this.props.deviceType}
                        >
                            {this.state.projects.map((project) => {
                                return <SingleProject
                                    projects={this.state.projects}
                                    project={project}
                                >
                                    {JSON.stringify(this.projects)}
                                </SingleProject>
                            })}
                        </Carousel>
                    </div>
                    </div> 
       
                </div>
            </>
        )
    }
}
export default ProjectsComponent

