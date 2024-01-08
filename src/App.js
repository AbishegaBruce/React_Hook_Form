import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  const { register, handleSubmit, reset, formState: { isSubmitSuccessful } } = useForm();
  const [submittedData, setSubmittedData] = useState([]);

  const onSubmit = (data) => {
    setSubmittedData([...submittedData, data]);
    window.alert('Form submitted successfully!');
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <div className="max-w-md w-full bg-white p-6 rounded-md shadow-md">
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4">
          <h2 className="text-2xl font-bold mb-4 text-center col-span-1">Reactive Form</h2>
          {/* Form inputs */}
          <input
            type="text"
            {...register('name')}
            placeholder="Name"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            {...register('email')}
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <textarea
            {...register('message')}
            placeholder="Message"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          ></textarea>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full transition duration-300 shadow-md"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Submitted data */}
        <div className="mt-6">
          {/* Display submitted data */}
          {submittedData.map((data, index) => (
            <div key={index} className="border-t border-gray-300 pt-4 mt-4">
              <h3 className="text-lg font-semibold">Submitted Data {index + 1}</h3>
              <p>Name: {data.name}</p>
              <p>Email: {data.email}</p>
              <p>Message: {data.message}</p>
            </div>
          ))}
        </div>

        {isSubmitSuccessful && <p className="text-green-500 mt-4 text-center">Form submitted successfully!</p>}
      </div>
    </div>
  );
}

export default App;
