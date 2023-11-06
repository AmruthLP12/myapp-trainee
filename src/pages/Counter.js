// import React, { useState } from 'react';

// function Counter() {
//   // Declare a state variable 'count' with an initial value of 0
//   const [count, setCount] = useState(0);

//   // Event handler to increment the count
//   const incrementCount = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={incrementCount}>Increment</button>
//     </div>
//   );
// }

// export default Counter;


import React , {useEffect, useState} from 'react'

const Counter = () => {
    const [count , setCount] = useState(0);
    // useEffect(() => console.log("clicked"))
    console.log(` clicked count : ${count}`)
  return (
    <div>
      <button onClick={() => setCount(count+1)}>clicked</button>
    </div>
  )
}

export default Counter
