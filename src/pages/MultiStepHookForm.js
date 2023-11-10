import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const MultiStepHookForm = () => {
  const { handleSubmit, control, setValue, getValues } = useForm();

  const onSubmit = (data) => {
    // Handle form submission
    console.log('Form submitted:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="step"
        control={control}
        defaultValue={1}
        render={({ field }) => (
          <>
            {field.value === 1 && (
              <div>
                <label>
                  First Name:
                  <input
                    type="text"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      setValue('firstName', e.target.value);
                    }}
                  />
                </label>
                <br />
                <label>
                  Last Name:
                  <input
                    type="text"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      setValue('lastName', e.target.value);
                    }}
                  />
                </label>
                <br />
                <button type="button" onClick={() => setValue('step', 2)}>
                  Next
                </button>
              </div>
            )}

            {field.value === 2 && (
              <div>
                {/* Step 2 fields */}
                <button type="button" onClick={() => setValue('step', 1)}>
                  Previous
                </button>
                <button type="button" onClick={() => setValue('step', 3)}>
                  Next
                </button>
              </div>
            )}

            {field.value === 3 && (
              <div>
                {/* Step 3 fields */}
                <button type="button" onClick={() => setValue('step', 2)}>
                  Previous
                </button>
                <button type="submit">Submit</button>
              </div>
            )}
          </>
        )}
      />
    </form>
  );
};

export default MultiStepHookForm;
