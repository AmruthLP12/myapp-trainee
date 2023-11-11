import React, { useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const MyTypeaheadComponent = () => {
  const [selectedOption, setSelectedOption] = useState([]);

  const options = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Grape',
    'Lemon',
    'Orange',
  ];

  return (
    <div>
      <h2>Typeahead Example</h2>
      <Typeahead
        id="basic-typeahead"
        labelKey="name"
        options={options}
        placeholder="Choose a fruit..."
        onChange={(selected) => setSelectedOption(selected)}
      />
      <div>
        {selectedOption.length > 0 && (
          <p>You selected: {selectedOption[0]}</p>
        )}
      </div>
    </div>
  );
};

export default MyTypeaheadComponent;
