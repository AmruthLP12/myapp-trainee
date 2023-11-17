import React, { useState } from 'react';

const Checkbox = ({ label, amount, onChange }) => {
  return (
    <div>
      <label>
        <input type="checkbox" onChange={onChange} />
        {label} - ${amount}
      </label>
    </div>
  );
};

const MainCheckbox = ({ label, checkboxes, onMainChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleMainChange = (event) => {
    setIsChecked(event.target.checked);
    onMainChange(event.target.checked);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleMainChange} />
        {label}
      </label>
      {checkboxes.map((checkbox) => (
        <Checkbox
          key={checkbox.label}
          label={checkbox.label}
          amount={checkbox.amount}
          onChange={checkbox.onChange}
        />
      ))}
    </div>
  );
};

const CheckBox = () => {
  const checkboxes = [
    { label: 'Sub Checkbox 1', amount: 10, isChecked: false },
    { label: 'Sub Checkbox 2', amount: 20, isChecked: false },
    // Add more sub-checkboxes as needed
  ];

  const [totalAmount, setTotalAmount] = useState(0);

  const handleSubCheckboxChange = (index, isChecked) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index].isChecked = isChecked;

    setTotalAmount(
      newCheckboxes.reduce((total, checkbox) => (checkbox.isChecked ? total + checkbox.amount : total), 0)
    );
  };

  const handleMainCheckboxChange = (isChecked) => {
    const newCheckboxes = checkboxes.map((checkbox) => ({ ...checkbox, isChecked }));
    setTotalAmount(isChecked ? checkboxes.reduce((total, checkbox) => total + checkbox.amount, 0) : 0);
  };

  return (
    <div>
      <h1>Total Amount: ${totalAmount}</h1>
      <MainCheckbox label="Main Checkbox" checkboxes={checkboxes} onMainChange={handleMainCheckboxChange} />
      {/* Add more MainCheckboxes as needed */}
    </div>
  );
};

export default CheckBox;
