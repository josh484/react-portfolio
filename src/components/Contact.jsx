import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: ''
    });

    const handleInputChange = (event) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
    
        // Updating the input's state
        setFormData({
          ...formData,
          [name]: value,
        });
      };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        
        alert(`Hello ${formData.name}, You're email has been sent`);
        setFormData({
        name: '',
        email: '',
        description: ''
      });
    }


    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="input" placeholder="name@example.com"onChange={handleInputChange} value={formData.name} name='name' required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com"onChange={handleInputChange} value={formData.email} name='email'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} type='input' value={formData.description} onChange={handleInputChange} name='description'/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleFormSubmit}>
                Submit
            </Button>
        </Form>
    );
}

export default Contact