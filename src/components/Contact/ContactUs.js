import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'


const ContactUs = () => {
    return (
        <div>
            <Col className='top-banner w-auto text-white fw-bold px-5'>
                <h1 >Contact Us</h1>
                <p><i class="fas fa-map-marker-alt me-2"></i>Home / Contact</p>
            </Col>

            <Container className='my-5 text-secondary'>
                < Row xs={1} md={3} >
                    <Col>
                        <h4 className='text-uppercase text-custom-secondary fw-bold'>Sent message here</h4>
                        <Form className='mt-4'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label><i class="fas fa-user me-2 text-custom-danger"></i>Name</Form.Label>
                                <Form.Control className="mb-3" type="text" />
                                <Form.Label><i class="far fa-envelope me-2 text-custom-danger"></i>E-mail</Form.Label>
                                <Form.Control className="mb-3" type="email" />
                                <Form.Label><i class="far fa-file-alt me-2 text-custom-danger"></i>Subjects</Form.Label>
                                <Form.Control className="mb-3" type="text" />
                                <Button className='fw-bold text-white mt-3 px-4 py-2 bg-custom-danger border-0'><i class="fas fa-paper-plane me-2"></i>Send Message</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form.Group className="mt-5" controlId="exampleForm.ControlTextarea1">
                            <Form.Label><i class="fas fa-comments me-2 text-custom-danger"></i>Message</Form.Label>
                            <Form.Control as="textarea" rows={11} />
                        </Form.Group>
                    </Col>
                    <Col>
                        < h5 className=' text-uppercase text-custom-secondary fw-bold' id='apoinment'><i class="fas fa-user-md me-2"></i>Request apoinmetn here</h5>
                        <div className='mt-4 text-secondary' >
                            <h5 className='text-custom-danger fw-bold'><i class="fas fa-building  me-2 text-custom-secondary fs-3"></i>Our Branches</h5>
                            <p >Lima - AV Los Olivos N° 2520
                                <br />
                                Cusco - Calle Real N° 5720</p>
                            <h5 className='text-custom-danger fw-bold'><i class="fas fa-envelope-square me-2 text-custom-secondary fs-3"></i>Email Address</h5>
                            <p>Lima - lima@ medico.com
                                <br />
                                Cusco - cusco@ medico.com</p>
                            <h5 className='text-custom-danger fw-bold'><i class="fas fa-phone-square-alt me-2 text-custom-secondary fs-3"></i>Call Center</h5>
                            <p>Lima - 51 01 000 0000
                                <br />
                                Cusco -51 21 000 0000</p>
                            <h5 className='text-custom-danger fw-bold'><i class="fas fa-clock  me-2 text-custom-secondary fs-3"></i>Our Schedule</h5>
                            <p>Lima - Mon to Sat - 08 to 19
                                <br />
                                Cusco - Mon to Sat - 08 to 19</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactUs;
