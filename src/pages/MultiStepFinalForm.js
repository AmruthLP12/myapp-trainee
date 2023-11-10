import React from 'react';
import { Form, Field } from 'react-final-form';

const MultiStepFinalForm = () => {
  const onSubmit = (values) => {
    // Handle form submission
    console.log('Form submitted:', values);
  };

  return (
    <Form
      initialValues={{ step: 1, firstName: '', lastName: '', email: '', password: '' }}
      onSubmit={onSubmit}
      render={({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
          {values.step === 1 && (
            <div>
              <label>
                First Name:
                <Field
                  name="firstName"
                  render={({ input }) => <input {...input} type="text" />}
                />
              </label>
              <br />
              <label>
                Last Name:
                <Field
                  name="lastName"
                  render={({ input }) => <input {...input} type="text" />}
                />
              </label>
              <br />
              <button type="button" onClick={() => handleSubmit({ step: 2 })}>
                Next
              </button>
            </div>
          )}

          {values.step === 2 && (
            <div>
              {/* Step 2 fields */}
              <button type="button" onClick={() => handleSubmit({ step: 1 })}>
                Previous
              </button>
              <button type="button" onClick={() => handleSubmit({ step: 3 })}>
                Next
              </button>
            </div>
          )}

          {values.step === 3 && (
            <div>
              {/* Step 3 fields */}
              <button type="button" onClick={() => handleSubmit({ step: 2 })}>
                Previous
              </button>
              <button type="submit">Submit</button>
            </div>
          )}
        </form>
      )}
    />
  );
};

export default MultiStepFinalForm;
