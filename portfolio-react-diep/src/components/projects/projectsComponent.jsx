import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SingleProject from './singleProject';
import '../homePage/projects/projects.scss'

class ProjectsComponent extends React.Component {
    constructor(props) {
        // super - load parents first
        super(props)
        // just had one state 
        // use this BEFORE other objects
        this.state = {
            projects: [
                { name: "SnacksWorld", img: "/images/luluspaws-web.png", tech: ["Django, Python, React, Javascript, SQL"], about: "fully developed e commerce for small business", github: "", link: "" },
                { name: "LULUSPAWS", img: "/images/luluspaws-web.png", tech: ["PHP, Angular, SQL "], about: "fully developed e commerce for small business", github: "", link: "" },
                { name: "Voyager", img: "/images/luluspaws-web.png", tech: ["MERN, React, Javascript, CSS"], about: "fully developed e commerce for small business", github: "", link: "" },
                { name: "Collections Hub", img: "/images/luluspaws-web.png", tech: ["Express, REST, HTML, CSS"], about: "fully developed e commerce for small business", github: "", link: "" }
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
            <div className="animate__animated animate__fadeInRight animate__delay-1s">
                    <div class="section-head col-sm-12">
                        <h4><span>Check out my work</span></h4>
                    </div>
                    <Carousel
                        // className= "outer-container"
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
        )
    }
}
export default ProjectsComponent
