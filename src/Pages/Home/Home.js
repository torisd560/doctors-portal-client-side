import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import Services from '../Home/Services/Services'
import Apoinment from '../Home/Apoinment/Apoinment'
import Banner from '../Home/Banner/Banner'
import DentalCare from './DentalCare/DentalCare';
import Testimonial from './Testimonial/Testimonial';
import Doctors from './Doctors/Doctors';
import HomeFooter from './HomeFooter/HomeFooter';

const Home = () => {
    return (
        <div>
           <Navigation></Navigation>
           <Banner></Banner>
           <Services></Services>
           <DentalCare></DentalCare>
           <Apoinment></Apoinment>
           <Testimonial></Testimonial>
           <Doctors></Doctors>
           <HomeFooter></HomeFooter>
        </div>
    );
};

export default Home;