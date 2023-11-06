import React from 'react';
import { useLocation } from 'react-router-dom';

const FormData = () => {
    const formData = useLocation().state.submittedFormData;
  
    return (
      <div>
        <h1>Form Data</h1>
        <p>First Name: {formData.firstName}</p>
        <p>Last Name: {formData.lastName}</p>
        <p>Email: {formData.email}</p>
        <p>gender: {formData.gender}</p>
      </div>
    );
  };
  

export default FormData;
