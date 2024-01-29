import React from 'react';
import Card from 'react-bootstrap/Card';

function Skills(prop) {

    return (
    <Card className='col-lg-2 col-4 skillItem'>
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