import React from 'react';
import { Col, Container, Form, Row , Button} from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
           <Col className='page-top-banner text-white fw-bold px-5'>
               <div className = 'text-center p-5'>
               <h1 >Contact Us</h1>
                <p><i className="fas fa-map-marker-alt me-2"></i>Home / Contact</p>
               </div>
            </Col>
            <Container className='my-5 text-secondary'>
                < Row xs={1} md={2} >
                    <Col>
                        <h2 className='text-uppercase custom-text-primary fw-bold'>Sent message</h2>
                        <Form className='mt-4 shadow-lg p-5'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label><i className="fas fa-user me-2 custom-text-warning"></i>Name</Form.Label>
                                <Form.Control className="mb-3" type="text" />
                                <Form.Label><i className="far fa-envelope me-2 custom-text-warning"></i>E-mail</Form.Label>
                                <Form.Control className="mb-3" type="email" />
                                <Form.Label><i className="far fa-file-alt me-2 custom-text-warning"></i>Subjects</Form.Label>
                                <Form.Control className="mb-3" type="text" />
                                <Form.Label><i className="fas fa-comments me-2 custom-text-warning"></i>Message</Form.Label>
                            <Form.Control as="textarea" rows={5} />
                                <Button className='fw-bold text-white mt-4 custom-btn border-0 form-control'><i className="fas fa-paper-plane me-2"></i>Send Message</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <h2 className = 'custom-text-primary fw-bold'>Get In Touch</h2>
                        <p className = 'mt-4'>Thank you for your interest in contacting Wikipedia. Before proceeding, some important disclaimers.</p>
                        < Row xs={1} md={2}  className = 'mt-5'>
                            <Col>
                            <h5 className = 'custom-text-primary mb-4'>Ubud, Bali</h5>
                            <p><i className="fas fa-phone-alt custom-text-warning me-2"></i>(+62) 361 154874</p>
                            <p><i className="fas fa-envelope me-2 custom-text-warning"></i>contact@domain.com</p>
                            <p><i className="fas fa-map-marker-alt me-2 custom-text-warning"></i>Jl. Raya Ubud No.88, Bali 80571</p>
                           </Col>
                            <Col>
                            <h5 className = 'custom-text-primary mb-4'>Denpasar, Bali</h5>
                            <p><i className="fas fa-phone-alt custom-text-warning me-2"></i>(+62) 361 154875</p>
                            <p><i className="fas fa-envelope me-2 custom-text-warning"></i>contact@domain.com</p>
                            <p><i className="fas fa-map-marker-alt me-2 custom-text-warning"></i>Jl. Raya Ubud No.88, Bali 80571</p>
                           </Col>
                        </Row>
                        < Row xs={1} md={2}  className = 'mt-5'>
                            <Col>
                            <h5 className = 'custom-text-primary mb-4'>Kuta, Bali</h5>
                            <p><i className="fas fa-phone-alt custom-text-warning me-2"></i>(+62) 361 154876</p>
                            <p><i className="fas fa-envelope me-2 custom-text-warning"></i>contact@domain.com</p>
                            <p><i className="fas fa-map-marker-alt me-2 custom-text-warning"></i>Jl. Raya Ubud No.88, Bali 80571</p>
                           </Col>
                            <Col>
                            <h5 className = 'custom-text-primary mb-4'>Tabanan, Bali</h5>
                            <p><i className="fas fa-phone-alt custom-text-warning me-2"></i>(+62) 361 154877</p>
                            <p><i className="fas fa-envelope me-2 custom-text-warning"></i>contact@domain.com</p>
                            <p><i className="fas fa-map-marker-alt me-2 custom-text-warning"></i>Jl. Raya Ubud No.88, Bali 80571</p>
                           </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;