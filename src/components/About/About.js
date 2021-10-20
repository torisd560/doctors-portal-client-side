import React from 'react';
import { Accordion, Col } from 'react-bootstrap';
import aboutBanner from '../../images/about-banner.jpg'

const About = () => {
    return (
        <div>
            <Col className='top-banner text-white fw-bold px-5'>
                <h1 >About Us</h1>
                <p><i class="fas fa-map-marker-alt me-2"></i>Home / About</p>
            </Col>
            {/*-------------------------- history section------------------------ */}
            <div className="row my-5 p-5 text-secondary">
                <div className="col-sm-12 col-md-6">
                    <h2 className='text-custom-secondary fw-bold'>A Brief History</h2>
                    <div className='underline'></div>
                    <p className='mt-4'>The history of hospitals began in antiquity with hospitals in Greece, the Roman Empire and on the Indian subcontinent as well, starting with precursors in the Asclepian temples in ancient Greece and then the military hospitals in ancient Rome. The Greek temples were dedicated to the sick and infirm but did not look anything like modern hospitals. The Romans did not have dedicated, public hospitals. Public hospitals, per se, did not exist until the Christian period. Towards the end of the 4th century, the "second medical revolution" took place with the founding of the first Christian hospital in the eastern Byzantine Empire by Basil of Caesarea, and within a few decades, such hospitals had become ubiquitous in Byzantine society.</p>
                    <div className="row mt-5">
                        <div className="col-sm-12 col-md-6">
                            <h3 className='text-custom-secondary fw-bold'>Our Mission</h3>
                            <p className='mt-3'>The Protestant churches reentered the health field in the 19th century, especially with the establishment of orders of women, called deaconesses who dedicated themselves to nursing services. This movement began in Germany in 1836 when Theodor Fliedner and his wife opened. </p>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <h3 className='text-custom-secondary fw-bold'>Our Vision</h3>
                            <p className='mt-3'>Weiner states that the widespread acceptance of the stethoscope would likely not have happened in any other setting, and the setting allowed for Laennec to pass on this technology to the eager medical community that had gathered there. This invention also brought even more attention.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <img src={aboutBanner} alt="" />
                </div>
            </div>
            {/* ---------------------------question section---------------------------------*/}
            <div className="row about-banner my-5">
                <div className="col-sm-12  col-md-6 p-5">
                    <h2 className='text-white fw-bold my-4'>Why Choose Us</h2>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0" className='mb-3'>
                            <Accordion.Header>Certified by Ministry of Health</Accordion.Header>
                            <Accordion.Body>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird .
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className='mb-3'>
                            <Accordion.Header >Modern equipment</Accordion.Header>
                            <Accordion.Body>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird .
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Recommended by patients</Accordion.Header>
                            <Accordion.Body>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird .
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className="col-sm-12  col-md-6 p-5">
                    <h2 className='text-white fw-bold my-4'>Questions & Answers</h2>
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0" className='mb-3'>
                            <Accordion.Header>About Professionals</Accordion.Header>
                            <Accordion.Body>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird .
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className='mb-3'>
                            <Accordion.Header>About Insurance</Accordion.Header>
                            <Accordion.Body>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird .
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className='mb-3'>
                            <Accordion.Header>About Attention</Accordion.Header>
                            <Accordion.Body>
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird .
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
            {/* -----------------last section----------- */}
            <div className="row container mx-auto my-5">
                <div className="col-md-4 d-flex align-items-center">
                    <div className='bg-custom-danger p-3 me-4'>
                        <i class="fas fa-user-md fs-1 text-white"></i>
                    </div>
                    <div>
                        <h2 className='text-custom-secondary fw-bold'>18</h2>
                        <h4 className='text-secondary'>Gynecologists</h4>
                    </div>
                </div>
                <div className="col-md-4 d-flex align-items-center">
                    <div className='bg-custom-danger p-3 me-4'>
                        <i class="fas fa-procedures fs-1 text-white"></i>
                    </div>
                    <div>
                        <h2 className='text-custom-secondary fw-bold'>12356</h2>
                        <h4 className='text-secondary'>Patients</h4>
                    </div>
                </div>
                <div className="col-md-4 d-flex align-items-center">
                    <div className='bg-custom-danger p-3 me-4'>
                        <i class="fas fa-user-md fs-1 text-white"></i>
                    </div>
                    <div>
                        <h2 className='text-custom-secondary fw-bold'>73</h2>
                        <h4 className='text-secondary'>Doctors</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;