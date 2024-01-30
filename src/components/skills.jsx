import React from 'react';
import Card from 'react-bootstrap/Card';

function Skills(prop) {

    return (
    <Card className='col-lg-3 col-md-3 col-10 skillItem text-bg-dark'>
        <Card.Body>
            <Card.Title>{prop.skill}</Card.Title>
                <a href={prop.href}><img src={prop.image} className='imgSkills' alt={prop.description}/></a>

        </Card.Body>
    </Card>
    )

}

export default Skills