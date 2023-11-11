import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
];

const MySelectComponent = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  return (
    <div>
      <h2>Select a Fruit</h2>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
      />
      {selectedOption && (
        <p>You selected: {selectedOption.label}</p>
      )}
    </div>
  );
};

export default MySelectComponent;
