import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Project(prop) {

    return (
        <>
            <Carousel.Item key={prop.id}>
            <img src={prop.image} text={prop.name} />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>{prop.description}</p>
                </Carousel.Caption>
            </Carousel.Item>
            </>
    )

}

export default Project