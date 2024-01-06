import React from 'react';
import { useForm } from 'react-hook-form';

const MyFormComponent = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    
    window.alert('Form submitted successfully!');
    reset(); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        name="name"
        ref={register}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        ref={register}
        placeholder="Email"
      />
      <textarea
        name="message"
        ref={register}
        placeholder="Message"
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyFormComponent;
