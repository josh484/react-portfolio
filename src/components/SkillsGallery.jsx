import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SkillCard from './skills'
import Skills from './skills.json';


function SkillsGallery() {
    const [skills, setSkills] = useState(Skills);
    return (
        <>

        <Container fluid id='skillsGrid'>
        <h1 id='skillHeading'>Technical Skills</h1>
            <Row>
                <Col id='skillsMid'>
                    <div id='skills' className='col-lg-8 col-10 '>
                        <div id='skillsBox'>
                            {skills.map(skills => (
                                <SkillCard
                                    id={skills.id}
                                    key={skills.id}
                                    skill={skills.skill}
                                />

                            ))}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </>

    )
}


export default SkillsGallery