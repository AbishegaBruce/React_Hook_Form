import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  const { register, handleSubmit, reset, formState: { isSubmitSuccessful, errors } } = useForm();
  const [submittedData, setSubmittedData] = useState([]);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const onSubmit = (data) => {
    if (data.name && data.email && data.message) {
      setSubmittedData([...submittedData, data]);
      window.alert('Form submitted successfully!');
      reset();
      setShowErrorMessage(false);
    } else {
      setShowErrorMessage(true);
      window.alert('Please enter valid data.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <div className="max-w-md w-full bg-white p-6 rounded-md shadow-md">
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4">
          <h2 className="text-2xl font-bold mb-4 text-center col-span-1">Reactive Form</h2>
          <input
            type="text"
            {...register('name', { required: true })}
            placeholder="Name"
            className={`w-full p-2 border rounded focus:outline-none ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.name && <p className="text-red-500">Name is required</p>}
          <input
            type="email"
            {...register('email', { required: true })}
            placeholder="Email"
            className={`w-full p-2 border rounded focus:outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
          <textarea
            {...register('message', { required: true })}
            placeholder="Message"
            className={`w-full p-2 border rounded focus:outline-none ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
          ></textarea>
          {errors.message && <p className="text-red-500">Message is required</p>}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full transition duration-300 shadow-md"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="mt-6">
          {submittedData.map((data, index) => (
            <div key={index} className="border-t border-gray-300 pt-4 mt-4">
              <h3 className="text-lg font-semibold">Submitted Data {index + 1}</h3>
              <p>Name: {data.name}</p>
              <p>Email: {data.email}</p>
              <p>Message: {data.message}</p>
            </div>
          ))}
        </div>

        {showErrorMessage && <p className="text-red-500 mt-4 text-center">Please enter valid data.</p>}
        {isSubmitSuccessful && <p className="text-green-500 mt-4 text-center">Form submitted successfully!</p>}
      </div>
    </div>
  );
}

export default App;

    
