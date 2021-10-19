import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import contactImg from '../../images/contact.png'

const ContactUs = () => {
    return (
        <div>
            <img src={contactImg} alt="" className=' w-100 h-25' />

            <Container className='my-5 text-secondary'>
                < Row >
                    <Col>
                        <h3 className='text-uppercase text-custom'>Sent a massage</h3>
                        <Form className='mt-4'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label><i class="fas fa-user me-2 text-custom-danger"></i>Name</Form.Label>
                                <Form.Control className="mb-3" type="text" />
                                <Form.Label><i class="far fa-envelope me-2 text-custom-danger"></i>E-mail</Form.Label>
                                <Form.Control className="mb-3" type="email" />
                                <Form.Label><i class="far fa-file-alt me-2 text-custom-danger"></i>Subjects</Form.Label>
                                <Form.Control className="mb-3" type="text" />
                                <Button variant="" className='fw-bold text-white mt-3 px-5 bg-custom-warning'>Submit</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col className='mt-3'>
                        <Form.Group className="mt-5" controlId="exampleForm.ControlTextarea1">
                            <Form.Label><i class="fas fa-comments me-2 text-custom-danger"></i>Comments</Form.Label>
                            <Form.Control as="textarea" rows={11} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <h3 className='text-uppercase text-custom'>contact info</h3>
                        <div className='mt-4 text-secondary' >
                            <p >Sed ut imperdiet nisi. Proin condimentum . Etiam pharetra erat sed fermentum feugiat velit mauris egestas quam ut aliquam .</p>
                            <p><i class="fas fa-home me-2 text-custom-danger"></i>99123 Street Down Town, California, USA</p>
                            <p><i class="fas fa-phone-alt me-2 text-custom-danger"></i>5 (012) 4565 789</p>
                            <a href="/" class="text-decoration-none"><i class="far fa-envelope me-2 text-custom-danger"></i>Info@Info.Com</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactUs;
