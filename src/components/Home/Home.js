import React from 'react';
import Banner from '../Banner/Banner'
import middleBanner from '../../images/home-middle-part.jpg'
import Services from '../Services/Services'
import Doctors from '../Doctors/Doctors';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            {/* ---------------------------- Our quality section-------------------------- */}
            <div className="row my-5 py-4 px-2 justify-content-between align-items-center">
                <div className="col-md-6">
                    <img src={middleBanner} alt="" className='img-fluid' />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-5">
                    <h1 className='text-custom-secondary fw-bold'>Quality and confidentiality</h1>
                    <div className="underline "></div>
                    <p className='mt-4 lh-lg text-secondary'>A gynecologist is a doctor specializing in the female reproductive organs. The American College of Obstetricians and Gynecologists recommends that young women make their first visit for reproductive health between the ages of 13 and 15. Women may visit yearly, or as needed, after that.Physicians for Women is a Women's Health Connecticut practice with ... I just can't say enough about the quality of care I received from Dr. LaMonica!Physicians for Women is a Women's Health Connecticut practice with I just can't say enough about the quality of care I received from Dr.</p>
                </div>
            </div>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;