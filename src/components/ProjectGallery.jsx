import React, { useState } from 'react';
import Data from './projects.json'
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
                        <Carousel.Caption id='cCaption'>
                            <h3>{projects.name}</h3>
                            <a href={projects.link} style={{color: "#bb86fc"}}><h3>Link to Repository</h3></a>
                            <p>{projects.description}</p>
                            <p>{projects.technique}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
        </Carousel>
        </div>
    )


}


export default ProjectGallery