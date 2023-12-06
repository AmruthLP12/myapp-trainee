// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios'; 

// const FormMERN = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     gender: '', // Add a 'gender' field to the form data
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       console.log('Form Data:', formData); // Log the form data
//       // Send formData to backend
//       await axios.post('http://localhost:5001/users', formData);
  
//       // Redirect on success
//       navigate('/LoginMERN');
//     } catch (err) {
//       console.error('Error:', err.response.data); // Log the error response details
  
//       // Show an alert with the error message
//       window.alert(`Error: ${err.response.data.error}`);
//     }
//   };
  
  

//   return (
//     <div>
//       <h1>React Form Example</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="firstName">First Name</label>
//           <input
//             type="text"
//             id="firstName"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//           />
//         </div>

//         <div>
//           <label htmlFor="lastName">Last Name</label>
//           <input
//             type="text"
//             id="lastName"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//           />
//         </div>

//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>

//         <div>
//           <label>Gender</label>
//           <input
//             type="radio"
//             id="male"
//             name="gender"
//             value="male"
//             checked={formData.gender === "male"}
//             onChange={handleChange}
//           />
//           <label htmlFor="male">Male</label>
//           <input
//             type="radio"
//             id="female"
//             name="gender"
//             value="female"
//             checked={formData.gender === "female"}
//             onChange={handleChange}
//           />
//           <label htmlFor="female">Female</label>
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };


// export default FormMERN;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const FormMERN = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    password: '',
    profilePicture: null,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Create a new FormData object
      const formDataToSend = new FormData();
  
      // Append form data to FormData object
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('lastName', formData.lastName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('gender', formData.gender);
      formDataToSend.append('password', formData.password);
  
      // Check if a file is selected before appending to FormData
      if (formData.profilePicture) {
        formDataToSend.append('profilePicture', formData.profilePicture);
      }
  
      console.log('Form Data:', formDataToSend);
  
      // Send formData to the backend using axios
      await axios.post('http://localhost:5001/users', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the content type for file uploads
        },
      });
  
      // Redirect on success
      navigate('/LoginMERN');
    } catch (err) {
      console.error('Error:', err.response.data);
  
      // Show an alert with the error message
      window.alert(`Error: ${err.response.data.error}`);
    }
  };
  

  return (
    <div>
      <h1>React Form Example</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

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
          <label>Gender</label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={formData.gender === 'male'}
            onChange={handleChange}
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={formData.gender === 'female'}
            onChange={handleChange}
          />
          <label htmlFor="female">Female</label>
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

        <div>
          <label htmlFor="profilePicture">Profile Picture</label>
          <input
            type="file"
            id="profilePicture"
            name="profilePicture"
            accept="image/*"
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormMERN;

