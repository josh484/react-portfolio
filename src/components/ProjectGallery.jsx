import React, { useState } from 'react';
import Data from './projects.json'
import Project from './Project';
import Carousel from 'react-bootstrap/Carousel';

function ProjectGallery() {
    const [projects, setProjects] = useState(Data);
    return (
        <div id ='carousel'>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    {projects.map((projects) => (
                        <Project
                            id={projects.id}
                            key={projects.id}
                            name={projects.name}
                            image={projects.image}
                            description={projects.description}
                        />
                    ))}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>

        
    )
}


export default ProjectGallery