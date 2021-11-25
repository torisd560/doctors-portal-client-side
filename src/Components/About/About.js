import React from 'react';
import { Button, Col, Container } from 'react-bootstrap';
import aboutBanner from '../../images/aboutBanner.png'
import './About.css'
import agent1 from '../../images/agent1.jpg'
import agent2 from '../../images/agent2.jpg'
import agent3 from '../../images/agent3.jpg'
const About = () => {
    return (
        <div >
            <Col className='page-top-banner text-white fw-bold px-5'>
               <div className = 'text-center p-5'>
               <h1 >About Us</h1>
                <p><i className="fas fa-map-marker-alt me-2"></i>Home / About</p>
               </div>
            </Col>
            {/*-------------------------- Satisfaction service section------------------------ */}
           <Container>
           <div className="row my-5 p-5 text-secondary align-items-center">
                <div className="col-sm-12 col-md-6">
                    <img src={aboutBanner} alt="" className='img-fluid' />
                </div>
                <div className="col-md-1"></div>
                <div className="col-sm-12 col-md-5 mt-sm-5">
                    <h2 className='custom-text-primary fw-bold '>Get 100% Satisfaction With
                        Our Service</h2>
                    <div className='underline'></div>
                    <p className='mt-4'>The origin of the word "travel" is most likely lost to history. The term "travel" may originate from the Old French word travail, which means 'work'. According to the Merriam Webster dictionary, the first known use of the word travel was in the 14th century. </p>
                    <Button className='custom-btn text-uppercase'>Read More</Button>
                </div>
            </div>
            {/*============================ vission mission section======================= */}
           <div className="row text-secondary my-5">
               <div className="col-md-4 p-5">
                   <h2 className= 'custom-text-primary fw-bold'>Who We Are</h2>
                   <p className = 'mt-4'>Travel dates back to antiquity where wealthy Greeks and Romans would travel for leisure to their summer homes and villas in cities such as Pompeii and Baiae. While early travel tended to be slower, more dangerous, and more dominated by trade and migration.</p>
               </div>
               <div className="col-md-4 shadow-lg p-5">
                   <h5 className= 'custom-text-primary fw-bold'>Our Mission</h5>
                   <p className = 'mt-4'>Travel dates back to antiquity where wealthy Greeks and Romans would travel for leisure to their summer homes and villas in cities such as Pompeii and Baiae. While early travel tended to be slower, more dangerous, and more dominated by trade and migration.</p>
               </div>
               <div className="col-md-4 shadow-lg p-5 ">
                   <h5 className= 'custom-text-primary fw-bold'>Our Vission</h5>
                   <p className = 'mt-4'> Travel dates back to antiquity where wealthy Greeks and Romans would travel for leisure to their summer homes and villas in cities such as Pompeii and Baiae. While early travel tended to be slower, more dangerous, and more dominated by trade and migration.</p>
               </div>
           </div>
           {/* ================travel agent======================= */}
           <section className = 'travel-container text-secondary text-center '>
               <h2 className = 'custom-text-primary fw-bold'>Our Travel Agents</h2>
               <p className = 'lh-lg my-4'>While early travel tended to be slower, more dangerous, and more dominated by trade and migration Travel dates back to antiquity where wealthy Greeks and Romans would travel for leisure to their summer homes and villas in cities such as Pompeii and Baiae</p>
           <div className="row my-5 ">
               <div className="col-md-4">
                   <div>
                       <img src={agent1} alt=""  className='img-fluid' />
                      <div className = 'p-3 shadow-lg rounded-3'>
                      <h5 className = 'custom-text-primary fw-bold'>Rubie Talley</h5>
                       <p>Tour Guide</p>
                      </div>
                   </div>
               </div>
               <div className="col-md-4">
                   <div>
                       <img src={agent2} alt=""  className='img-fluid' />
                       <div className = ' p-3 shadow-lg rounded-3'>
                       <h5 className = 'custom-text-primary fw-bold'>Marcel Frame</h5>
                       <p>Tour Guide</p>
                       </div>
                   </div>
               </div>
               <div className="col-md-4">
                   <div>
                       <img src={agent3} alt=""  className='img-fluid' />
                       <div className = ' p-3 shadow-lg rounded-3'>
                       <h5 className = 'custom-text-primary fw-bold'>Dina Driscoll</h5>
                       <p>Tour Guide</p>
                       </div>
                   </div>
               </div>
           </div>
           </section>
           </Container>
           
        </div>
    );
};

export default About;