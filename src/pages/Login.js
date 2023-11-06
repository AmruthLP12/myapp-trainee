import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const submittedFormData = state && state.submittedFormData;
  const [formData, setFormData] = React.useState({
    firstName: '',
    password: '',
  });
  const [firstNameError, setFirstNameError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    const { firstName, password } = formData;

    if (firstName !== submittedFormData.firstName) {
      setFirstNameError('First name is incorrect. Please try again.');
    } else {
      setFirstNameError('');
    }

    if (password !== submittedFormData.password) {
      setPasswordError('Password is incorrect. Please try again.');
    } else {
      setPasswordError('');
    }

    if (firstName === submittedFormData.firstName && password === submittedFormData.password) {
      navigate('/');
    }
  };

  return (
    <div>
      <h1>Form Data Page</h1>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        {firstNameError && <p>{firstNameError}</p>}
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
        {passwordError && <p>{passwordError}</p>}
      </div>
      <button onClick={handleLogin}>Login</button>
      <Link to="/home">Go to Home Page</Link>
    </div>
  );
};

export default Login;
