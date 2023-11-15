// LoginMERN.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginMERN = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Form Data:', formData); // Log the form data
      // Send login data to backend
      const response = await axios.post('http://localhost:5000/login', formData);

      if (response.data.success) {
        // Successful login
        // Show alert on successful login
        window.alert('Login successful!');

        // Redirect to dashboard or any other page
        navigate('/');
      } else {
        // Unsuccessful login
        setError(response.data.error);
      }
    } catch (err) {
        console.error('Error:', err.response.data); // Log the error response details
      
        if (err.response.data.message) {
          // Show the specific error message from the server in the alert
          window.alert(err.response.data.message);
        } else {
          // If no specific message, show a generic error message
          window.alert('An error occurred');
        }
      }
    }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginMERN;
