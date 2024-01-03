import React, { useState, useEffect } from 'react';

const FormValidationExample = () => {
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

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (formSubmitted) {
      const errors = {};
      if (!formData.name) {
        errors.name = 'Name is required';
      }
      if (!formData.email) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Invalid email address';
      }
      if (!formData.message) {
        errors.message = 'Message is required';
      }
      setFormErrors(errors);
      setFormSubmitted(false); // Reset form submission state after validation
    }
  }, [formSubmitted, formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="p-4">
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
          {formErrors.name && <p className="text-red-600">{formErrors.name}</p>}
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
          {formErrors.email && <p className="text-red-600">{formErrors.email}</p>}
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
          {formErrors.message && <p className="text-red-600">{formErrors.message}</p>}
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
      {Object.keys(formErrors).length === 0 && formSubmitted && (
        <p className="mt-4 text-green-600">Successfully Submitted!</p>
      )}
    </div>
  );
};

export default FormValidationExample;
