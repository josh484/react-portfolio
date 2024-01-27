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
        <Carousel activeIndex={index} onSelect={handleSelect}>
                {projects.map(projects => (
                    <Carousel.Item key={projects.id}>
                        <img
                            className="projectImage"
                            src={projects.image}
                            alt={projects.name}
                        />
                        <Carousel.Caption>
                            <h3>{projects.name}</h3>
                            <p>{projects.content}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
        </Carousel>
    )


}


export default ProjectGallery