import React from 'react';
import Card from 'react-bootstrap/Card';

function Skills(prop) {

    return (
    <Card className='col-lg-3 col-md-3 col-10 skillItem text-bg-dark'>
        <Card.Body>
            <Card.Title>{prop.skill}</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Card.Text>
        </Card.Body>
    </Card>
    )

}

export default Skills