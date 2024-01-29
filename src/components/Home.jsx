import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Skills from './skills.json';
import SkillCard from './skills'
import me from '../assets/images/me.jpeg'

function Home() {
    const [skills, setSkills] = useState(Skills);

    return (
        <Container fluid id='frontGrid'>
            <Row id='frontRow'>
                <Col xs={12} lg={8} id='leftMe'>
                    <div id='aboutMe' className='col-lg-10 col-8'>
                        <h1>Hi,</h1>
                        <h1>I'm Joshua <span id='mendozaC'>Mendoza</span></h1>
                        <h2>A Front-End Web Developer</h2>
                        <Button variant="primary" className='buttonC'>
                            My CV
                        </Button>
                        <div>
                            zz
                        </div>
                    </div>
                    <div id='skills' className='col-lg-10 col-8'>
                        <h4>My Skills</h4>
                        <ListGroup key={'xs'} horizontal={'lg'} className="col-10" id='listSkills'>
                            <ListGroup.Item className='col-12 col-lg-4 skillItem'>HTML5</ListGroup.Item>
                            <ListGroup.Item className='col-12 col-lg-4 skillItem'>CSS3</ListGroup.Item>
                            <ListGroup.Item className='col-12 col-lg-4 skillItem'>JavaScript</ListGroup.Item>
                            <ListGroup.Item className='col-12 col-lg-4 skillItem'>JQuery</ListGroup.Item>
                            <ListGroup.Item className='col-12 col-lg-4 skillItem'>Node.js</ListGroup.Item>
                            <ListGroup.Item className='col-12 col-lg-4 skillItem'>React</ListGroup.Item>
                        </ListGroup>
                        {skills.map(skills => (
                            <SkillCard 
                            id={skills.id}
                            key={skills.id}
                            skill={skills.skill}
                            />
                                

                        ))}
                        </div>
                </Col>
                <Col xs={12} lg={4} id='rightMe'>
                    <div className="jumboPicture text-center">
                        <img src={me} className="rounded-circle" alt="Picture Of Me" />
                    </div>
                    <h3>-"Welcome to my portfolio website"</h3>
                </Col>

            </Row>
        </Container>
    );
}

export default Home