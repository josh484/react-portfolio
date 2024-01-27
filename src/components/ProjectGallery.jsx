import React, { useState } from 'react';
import Data from './projects.json'
import Project from './Project';

function ProjectGallery() {
    const [projects, setProjects] = useState(Data);
    return (
        <div>
            <p>hello world</p>
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
    )
}

export default ProjectGallery