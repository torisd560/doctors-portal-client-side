import React from 'react';
import { useForm } from "react-hook-form";

const PlaceOrders = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input type = "text" {...register("name", )} />
      <input type = "email" {...register("email")} />
      <input type = "email" {...register("email")} />
      <input type = "number" {...register("phone")} />
      <input type = "date" {...register("date")} />
      <input type = "number" {...register("number")} />
      <textarea type = "text" {...register("message")} />
     
      <input type="submit" />
    </form>
        </div>
    );
};

export default PlaceOrders;