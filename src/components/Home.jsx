import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import me from '../assets/images/me.jpeg'

function Home() {
    return (
        <Container fluid id='frontGrid'>
            <Row id='frontRow'>
                <Col xs={12} lg={8} id='leftMe'>
                    <div id='aboutMe' className='col-lg-10 col-sm-8'>
                        <h1>Hi,</h1>
                        <h1>I'm Joshua <span id='mendozaC'>Mendoza</span></h1>
                        <h2>A Front-End Web Developer</h2>
                        <Button variant="primary" id='buttonC'>
                            My CV
                        </Button>
                        <div>
                            zz
                        </div>
                    </div>
                    <div id='skills' className='col-lg-10 col-sm-8'>
                        <h4>My Skills</h4>
                        <ListGroup key={'md'} horizontal={'md'} className="my-2">
                            <ListGroup.Item>HTML5</ListGroup.Item>
                            <ListGroup.Item>CSS3</ListGroup.Item>
                            <ListGroup.Item>JavaScript</ListGroup.Item>
                            <ListGroup.Item>JQuery</ListGroup.Item>
                            <ListGroup.Item>APIs</ListGroup.Item>
                            <ListGroup.Item>React</ListGroup.Item>
                        </ListGroup>
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