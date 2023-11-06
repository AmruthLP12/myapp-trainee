import React,{useState} from 'react'


const Input = () => {
    // Declare a state variable to store the input value
  const [inputValue, setInputValue] = useState('');

  // Event handler to update the input value
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  console.log(inputValue)
  return (
    <>
       <h1>Input Component</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <p>You typed: {inputValue}</p>
    </>
  )
}

export default Input
