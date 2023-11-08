// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // You will need to install axios if you haven't already

// const Pre = () => {
//     const medicinesFieldsData = {
//         medicines: ["Medicine 1", "Medicine 2", "Medicine 3"],
//         doses: ["Dose 1", "Dose 2", "Dose 3"],
//         when: ["When 1", "When 2", "When 3"],
//         frequencies: ["Frequency 1", "Frequency 2", "Frequency 3"],
//         durations: ["Duration 1", "Duration 2", "Duration 3"],
//     };
//     const [medicines, setMedicines] = useState([]);
//     const [rows, setRows] = useState([{ id: 1 }]); 
//     const [medicineInputs, setMedicineInputs] = useState(['']); // Initialize with an empty input

//     // Generate a unique ID for each row
//     const generateUniqueId = () => {
//         const maxId = Math.max(...rows.map(row => row.id));
//         return maxId + 1;
//     };

//     // Update the input state when the user types
//     const handleMedicineInputChange = (e, id) => {
//         const updatedMedicineInputs = [...medicineInputs];
//         const index = rows.findIndex(row => row.id === id);
//         updatedMedicineInputs[index] = e.target.value;
//         setMedicineInputs(updatedMedicineInputs);
//     };

//     const addRow = () => {
//         const newId = generateUniqueId();
//         setRows([...rows, { id: newId }]);
//     };

//     const deleteRow = (id) => {
//         const newRows = rows.filter(row => row.id !== id);
//         setRows(newRows);
//     };

//     useEffect(() => {
//         axios.get('http://localhost:5000/api/allMedicines')
//           .then((response) => {
//             if (Array.isArray(response.data.medicines)) {
//               const allMedicines = response.data.medicines.map((invoice) => {
//                 if (Array.isArray(invoice.medicines)) {
//                   // Access the 'Medicine' field within each object in the 'medicines' array
//                   return invoice.medicines.map((medicine) => medicine.Medicine);
//                 } else {
//                   return []; // If 'medicines' is not an array, return an empty array
//                 }
//               });
//               // Flatten the array of arrays into a single array
//               const flattenedMedicines = [].concat(...allMedicines);
//               setMedicines(flattenedMedicines);
//               console.log(flattenedMedicines);
//             } else {
//               console.error('Medicines array not found in the response data.');
//             }
//           })
//           .catch((error) => {
//             console.error(error);
//           });
//     }, []);
          
//     return (
//         <div>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>SNo</th>
//                         <th>MEDICINE</th>
//                         <th>Dose</th>
//                         <th>When</th>
//                         <th>Frequency</th>
//                         <th>Duration</th>
//                         <th>Notes/Instructions</th>
//                         <th>Add/Delete</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {rows.map((row, index) => (
//                         <tr key={row.id}>
//                             <td>{index + 1}</td>
//                             <td>
//                                 <input
//                                     type="text"
//                                     list={`medicineList${row.id}`}
//                                     value={medicineInputs[index]}
//                                     onChange={(e) => handleMedicineInputChange(e, row.id)}
//                                 />
//                                 <datalist id={`medicineList${row.id}`}>
//                                     {medicines && medicines.length > 0 && (
//                                         medicines.map((medicine, i) => (
//                                             <option key={i} value={medicine} />
//                                         ))
//                                     )}
//                                 </datalist>
//                             </td>
//                             <td>
//                                 <select>
//                                     {medicinesFieldsData.doses.map((dose, i) => (
//                                         <option key={i}>{dose}</option>
//                                     ))}
//                                 </select>
//                             </td>
//                             <td>
//                                 <select>
//                                     {medicinesFieldsData.when.map((time, i) => (
//                                         <option key={i}>{time}</option>
//                                     ))}
//                                 </select>
//                             </td>
//                             <td>
//                                 <select>
//                                     {medicinesFieldsData.frequencies.map((frequency, i) => (
//                                         <option key={i}>{frequency}</option>
//                                     ))}
//                                 </select>
//                             </td>
//                             <td>
//                                 <select>
//                                     {medicinesFieldsData.durations.map((duration, i) => (
//                                         <option key={i}>{duration}</option>
//                                     ))}
//                                 </select>
//                             </td>
//                             <td>
//                                 <input type="text" />
//                             </td>
//                             <td>
//                                 <button onClick={() => deleteRow(row.id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             <button onClick={addRow}>Add Row</button>
//         </div>
//     );
// };

// export default Pre;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // You will need to install axios if you haven't already

// const Pre = () => {
//     const medicinesFieldsData = {
//         doses: ["Dose 1", "Dose 2", "Dose 3"],
//         when: ["When 1", "When 2", "When 3"],
//         frequencies: ["Frequency 1", "Frequency 2", "Frequency 3"],
//         durations: ["Duration 1", "Duration 2", "Duration 3"],
//     };
//     const [medicines, setMedicines] = useState([]);
//     const [rows, setRows] = useState([generateRow()]); 

//     // Generate a unique row
//     function generateRow() {
//         return {
//             id: new Date().getTime(), // Unique identifier for the row
//             medicineInput: '', // Medicine input value
//         };
//     }

//     // Update the input state when the user types
//     const handleMedicineInputChange = (e, id) => {
//         const updatedRows = [...rows];
//         const rowIndex = updatedRows.findIndex(row => row.id === id);
//         updatedRows[rowIndex].medicineInput = e.target.value;
//         setRows(updatedRows);
//     };

//     const addRow = () => {
//         setRows([...rows, generateRow()]);
//     };

//     const deleteRow = (id) => {
//         const updatedRows = rows.filter(row => row.id !== id);
//         setRows(updatedRows);
//     };

//     const handleSubmit = () => {
//         // Create an array to store the data from all the rows
//         const rowData = rows.map(row => ({
//             medicine: row.medicineInput,
//             dose: "", // You can add code to collect dose, when, frequency, and duration here
//             when: "",
//             frequency: "",
//             duration: "",
//             notes: "", // Add code to collect notes/instructions here
//         }));

//         console.log(rowData);
//     };

//     useEffect(() => {
//         axios.get('http://localhost:5000/api/allMedicines')
//           .then((response) => {
//             if (Array.isArray(response.data.medicines)) {
//               const allMedicines = response.data.medicines.map((invoice) => {
//                 if (Array.isArray(invoice.medicines)) {
//                   return invoice.medicines.map((medicine) => medicine.Medicine);
//                 } else {
//                   return [];
//                 }
//               });
//               const flattenedMedicines = [].concat(...allMedicines);
//               setMedicines(flattenedMedicines);
//             } else {
//               console.error('Medicines array not found in the response data.');
//             }
//           })
//           .catch((error) => {
//             console.error(error);
//           });
//     }, []);
    
//     return (
//         <div>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>SNo</th>
//                         <th>MEDICINE</th>
//                         <th>Dose</th>
//                         <th>When</th>
//                         <th>Frequency</th>
//                         <th>Duration</th>
//                         <th>Notes/Instructions</th>
//                         <th>Add/Delete</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {rows.map((row, index) => (
//                         <tr key={row.id}>
//                             <td>{index + 1}</td>
//                             <td>
//                                 <input
//                                     type="text"
//                                     list={`medicineList${row.id}`}
//                                     value={row.medicineInput}
//                                     onChange={(e) => handleMedicineInputChange(e, row.id)}
//                                 />
//                                 <datalist id={`medicineList${row.id}`}>
//                                     {medicines && medicines.length > 0 && (
//                                         medicines.map((medicine, i) => (
//                                             <option key={i} value={medicine} />
//                                         ))
//                                     )}
//                                 </datalist>
//                             </td>
//                             <td>
//                                 <select>
//                                     {medicinesFieldsData.doses.map((dose, i) => (
//                                         <option key={i}>{dose}</option>
//                                     ))}
//                                 </select>
//                             </td>
//                             <td>
//                                 <select>
//                                     {medicinesFieldsData.when.map((time, i) => (
//                                         <option key={i}>{time}</option>
//                                     ))}
//                                 </select>
//                             </td>
//                             <td>
//                                 <select>
//                                     {medicinesFieldsData.frequencies.map((frequency, i) => (
//                                         <option key={i}>{frequency}</option>
//                                     ))}
//                                 </select>
//                             </td>
//                             <td>
//                                 <select>
//                                     {medicinesFieldsData.durations.map((duration, i) => (
//                                         <option key={i}>{duration}</option>
//                                     ))}
//                                 </select>
//                             </td>
//                             <td>
//                                 <input type="text" />
//                             </td>
//                             <td>
//                                 <button onClick={() => deleteRow(row.id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             <button onClick={addRow}>Add Row</button>
//             <button onClick={handleSubmit}>Submit</button>
//         </div>
//     );
// };

// export default Pre;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./CSS/pre.css"


const Pre = () => {
    const medicinesFieldsData = {
        doses: ["Dose 1", "Dose 2", "Dose 3"],
        when: ["When 1", "When 2", "When 3"],
        frequencies: ["Frequency 1", "Frequency 2", "Frequency 3"],
        durations: ["Duration 1", "Duration 2", "Duration 3"],
    };
    const [medicines, setMedicines] = useState([]);
    const [rows, setRows] = useState([generateRow()]); 

    // Generate a unique row
    function generateRow() {
        return {
            id: new Date().getTime(), // Unique identifier for the row
            medicineInput: '', // Medicine input value
            dose: 'Dose 1', // Default value for dose
            when: 'When 1', // Default value for when
            frequency: 'Frequency 1', // Default value for frequency
            duration: 'Duration 1', // Default value for duration
            notes: '', // Notes input value
        };
    }

    // Update the input state when the user types in any field
    const handleInputChange = (e, id, field) => {
        const updatedRows = [...rows];
        const rowIndex = updatedRows.findIndex(row => row.id === id);
        updatedRows[rowIndex][field] = e.target.value;
        setRows(updatedRows);
    };

    const addRow = () => {
        setRows([...rows, generateRow()]);
    };

    const deleteRow = (id) => {
        const updatedRows = rows.filter(row => row.id !== id);
        setRows(updatedRows);
    };

    const handleSubmit = () => {
        // Create an array to store the data from all the rows
        const medicicneData = rows.map(row => ({
            medicine: row.medicineInput,
            dose: row.dose,
            when: row.when,
            frequency: row.frequency,
            duration: row.duration,
            notes: row.notes,
        }));

        console.log(medicicneData);
        setRows([generateRow()]);
    };

    useEffect(() => {
        axios.get('http://localhost:5000/api/allMedicines')
          .then((response) => {
            if (Array.isArray(response.data.medicines)) {
              const allMedicines = response.data.medicines.map((invoice) => {
                if (Array.isArray(invoice.medicines)) {
                  return invoice.medicines.map((medicine) => medicine.Medicine);
                } else {
                  return [];
                }
              });
              const flattenedMedicines = [].concat(...allMedicines);
              setMedicines(flattenedMedicines);
            } else {
              console.error('Medicines array not found in the response data.');
            }
          })
          .catch((error) => {
            console.error(error);
          });
    }, []);
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>SNo</th>
                        <th>MEDICINE</th>
                        <th>Dose</th>
                        <th>When</th>
                        <th>Frequency</th>
                        <th>Duration</th>
                        <th>Notes/Instructions</th>
                        <th>Add/Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={row.id}>
                            <td>{index + 1}</td>
                            <td>
                                <input
                                    type="text"
                                    list={`medicineList${row.id}`}
                                    value={row.medicineInput}
                                    onChange={(e) => handleInputChange(e, row.id, 'medicineInput')}
                                />
                                <datalist id={`medicineList${row.id}`} className="medicine-datalist">
                                    {medicines && medicines.length > 0 && (
                                        medicines.map((medicine, i) => (
                                            <option key={i} value={medicine} />
                                        ))
                                    )}
                                </datalist>
                            </td>
                            <td>
                                <select
                                    value={row.dose}
                                    onChange={(e) => handleInputChange(e, row.id, 'dose')}
                                >
                                    {medicinesFieldsData.doses.map((dose, i) => (
                                        <option key={i} value={dose}>
                                            {dose}
                                        </option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <select
                                    value={row.when}
                                    onChange={(e) => handleInputChange(e, row.id, 'when')}
                                >
                                    {medicinesFieldsData.when.map((time, i) => (
                                        <option key={i} value={time}>
                                            {time}
                                        </option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <select
                                    value={row.frequency}
                                    onChange={(e) => handleInputChange(e, row.id, 'frequency')}
                                >
                                    {medicinesFieldsData.frequencies.map((frequency, i) => (
                                        <option key={i} value={frequency}>
                                            {frequency}
                                        </option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <select
                                    value={row.duration}
                                    onChange={(e) => handleInputChange(e, row.id, 'duration')}
                                >
                                    {medicinesFieldsData.durations.map((duration, i) => (
                                        <option key={i} value={duration}>
                                            {duration}
                                        </option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={row.notes}
                                    onChange={(e) => handleInputChange(e, row.id, 'notes')}
                                />
                            </td>
                            <td>
                                <button onClick={() => deleteRow(row.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={addRow}>Add Row</button>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Pre;


