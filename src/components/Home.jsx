import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import me from '../assets/images/me.jpeg'

function Home() {
    return (
        <Container fluid id='frontGrid'>
            <Row id='frontRow'>
                <Col xs={12} lg={6} id='leftMe'>
                    <div id='aboutMe'>
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
                </Col>
                <Col xs={12} lg={6} id='rightMe'>
                    <div className="jumboPicture text-center">
                        <img src={me} className="rounded-circle" alt="Picture Of Me" />
                    </div>
                </Col>

            </Row>
        </Container>
    );
}

export default Home