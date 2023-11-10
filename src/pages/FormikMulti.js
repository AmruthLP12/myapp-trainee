import React from 'react';
import { useFormik } from 'formik';

const FormikMulti = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      // Handle form submission
      console.log('Form submitted:', values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {formik.values.step === 1 && (
        <div>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
          </label>
          <br />
          <button type="button" onClick={() => formik.setFieldValue('step', 2)}>
            Next
          </button>
        </div>
      )}

      {formik.values.step === 2 && (
        <div>
          {/* Step 2 fields */}
          <button type="button" onClick={() => formik.setFieldValue('step', 1)}>
            Previous
          </button>
          <button type="button" onClick={() => formik.setFieldValue('step', 3)}>
            Next
          </button>
        </div>
      )}

      {formik.values.step === 3 && (
        <div>
          {/* Step 3 fields */}
          <button type="button" onClick={() => formik.setFieldValue('step', 2)}>
            Previous
          </button>
          <button type="submit">Submit</button>
        </div>
      )}
    </form>
  );
};

export default FormikMulti;
