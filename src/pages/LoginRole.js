// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginRole = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState(null);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

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
      // Send the login data to the backend for authentication
      const response = await axios.post('http://localhost:5000/login', formData);
  
      // Check if the response status is not 200
      if (response.status !== 200) {
        console.error('Login failed:', response.data); // Log the error response data
        // Handle login error, show a message or redirect to an error page
        return;
      }
  
      // Assuming the backend returns the user role in the response
      const { role } = response.data;
  
      // Set the role in the parent component
      setRole(role);
  
      // Redirect based on the role
      if (role === 'admin') {
        navigate('/admin-dashboard');
      } else {
        navigate('/user-dashboard');
      }
    } catch (error) {
      console.error('Error during login:', error); // Log the general error
      // Handle other errors, show a message or redirect to an error page
    }
  };
  
  

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

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginRole;
