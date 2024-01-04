import React, { useState } from 'react';
import './App.css'; // Import your custom CSS file

const ExampleComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    const errors = {}; // Define errors object to store validation errors

    // Validation logic for each field
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }

    setFormErrors(errors); // Store validation errors

    if (isValid) {
      // Perform submission or API call here
      console.log('Form submitted:', formData);
      setSubmittedData(formData); // Store submitted data
      setFormData({ // Reset form fields after successful submission
        name: '',
        email: '',
        message: '',
      });
      setFormErrors({}); // Clear form errors after successful submission

      // Show success message in pop-up window
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          {formErrors.name && <p className="error-message">{formErrors.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          {formErrors.email && <p className="error-message">{formErrors.email}</p>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          ></textarea>
          {formErrors.message && <p className="error-message">{formErrors.message}</p>}
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
