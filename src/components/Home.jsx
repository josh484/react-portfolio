import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import me from '../assets/images/me.jpeg'
import pdf from '../../public/CV.pdf'
function Home() {


    return (
        <>
            <Container fluid id='frontGrid'>
                <Row id='frontRow'>
                    <Col xs={12} lg={8} id='leftMe'>
                        <div id='aboutMe' className='col-lg-10 col-8'>
                            <h1>Hi,</h1>
                            <h1>I'm Joshua <span id='mendozaC'>Mendoza</span></h1>
                            <h2>A Front-End Web Developer</h2>
                            <a href={pdf}>
                            <Button variant="primary" className='buttonC'>
                                My CV
                            </Button>
                            </a>
                        </div>
                        <div id='socialBox'>
                            <a href='https://www.linkedin.com/in/joshua-mendoza-7b1109225/'><img src='./images/linkedin.png' className='socials'/></a>
                            <a href='https://github.com/josh484'><img src='./images/github.png' className='socials'/></a>
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
        </>
    );
}

export default Home