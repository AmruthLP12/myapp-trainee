// import React, { useState } from 'react';
// import {DayPicker} from 'react-day-picker';
// import 'react-day-picker/dist/style.css';

// function DatePicker() {
//   const [selectedDate, setSelectedDate] = useState(null);

//   return (
//     <div>
//       <DayPicker
//         selectedDays={selectedDate} 
//         onDayClick={(day) => setSelectedDate(day)}
//       />
//       {selectedDate && (
//         <p>You selected {selectedDate.toLocaleDateString()}</p>  
//       )}
//     </div>
//   );
// }

// export default DatePicker;


import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

function DatePicker() {
  const [selectedDate, setSelectedDate] = useState(null);

  const formatDate = (date) => {
    // Customize the date format as per your requirement
    return date.toLocaleDateString('es-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  };

  return (
    <div>
      <DayPicker
        selectedDays={selectedDate}
        onDayClick={(day) => setSelectedDate(day)}
      />
      {selectedDate && (
        <p>You selected {formatDate(selectedDate)}</p>
      )}
    </div>
  );
}

export default DatePicker;
