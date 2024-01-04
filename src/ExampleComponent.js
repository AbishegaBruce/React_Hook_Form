import React from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

const ExampleComponent = () => {
  const [submittedData, setSubmittedData] = React.useState(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    setSubmittedData(data);
    reset();
    // You can add a pop-up or notification here for successful submission
    alert('Form submitted successfully!');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Name is required' })}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          {errors.name && <p className="error-message">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: 'Email is required', pattern: /^\S+@\S+$/i })}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            {...register('message', { required: 'Message is required' })}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          {errors.message && <p className="error-message">{errors.message.message}</p>}
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>

      {submittedData && (
        <div className="mt-4">
          <h2 className="submitted-data-heading">Submitted Data:</h2>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Message: {submittedData.message}</p>
        </div>
      )}
    </div>
  );
};

export default ExampleComponent;
