import React from 'react';
import { useForm } from "react-hook-form";
import './Booking.css'

const Booking = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className='shadow-lg my-5 p-5 w-25 mx-auto'>
      <form onSubmit={handleSubmit(onSubmit)} className='booking-field'>
        <input type="text" {...register("name",)} placeholder='Name' requred />
        <input type="email" {...register("email")} placeholder='Email' requred />
        <input type="email" {...register("email")} placeholder='Confirm Email' requred />
        <input type="number" {...register("phone")} placeholder='Cell Phone' requred />
        <input type="date" {...register("date")} placeholder='Date' requred />
        <input type="number" {...register("number")} placeholder='Tickets Number' requred />
        <textarea type="text" {...register("message")} placeholder='Message' />
        <input type="submit" className='custom-btn rounded-0 text-uppercase text-white mt-3' />
      </form>
    </div>
  );
};

export default Booking;