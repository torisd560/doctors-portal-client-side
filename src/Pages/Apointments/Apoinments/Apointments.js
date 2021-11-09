import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation'
import ApointmentHeader from '../ApointmentHeader/ApointmentHeader';
import AvailableApointment from '../AvialableApointment/AvailableApointment';


const Apointments = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <div>
      <Navigation></Navigation>
      <ApointmentHeader date ={date} setDate ={setDate}></ApointmentHeader>
      <AvailableApointment date = {date}></AvailableApointment>
    </div>
  );
};

export default Apointments;