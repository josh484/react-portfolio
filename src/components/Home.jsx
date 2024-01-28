import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import me from '../assets/images/me.jpeg'

function Home() {
    return (
            <Container id='frontGrid'>
                <Row id='frontRow'>
                    <Col xs={12} lg={6} id='aboutMe'>
                    About Me
                    </Col>
                    <Col xs={12} lg={6} id='rightMe'>
                        <div className="jumboPicture text-center">
                            <img src={me} className="rounded-circle" alt="Picture Of Me"/>
                        </div>
                    </Col>

                </Row>
            </Container>
    );
}

export default Home