import React, { useState } from 'react';
import Data from './projects.json'
import Project from './Project';
import Carousel from 'react-bootstrap/Carousel';

function ProjectGallery() {
    const [projects, setProjects] = useState(Data);
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div id='carousel'>
        <Carousel activeIndex={index} onSelect={handleSelect} data-bs-theme="dark">
                {projects.map(projects => (
                    <Carousel.Item key={projects.id}>
                        <a href={projects.website}>
                        <img
                            className="projectImage d-block min-vh-100"
                            src={projects.image} 
                            alt={projects.name}
                            
                        />
                        </a>
                        <Carousel.Caption>
                            <h3>{projects.name}</h3>
                            <p>{projects.link}</p>
                            <p>{projects.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
        </Carousel>
        </div>
    )


}


export default ProjectGallery