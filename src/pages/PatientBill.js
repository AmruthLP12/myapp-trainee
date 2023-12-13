import React, { useState } from "react";

const PatientBill = () => {
  const [patientId, setPatientId] = useState("");
  const [, setSelectedDoctor] = useState("");
  const [patientData, setPatientData] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setPatientId(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/combined-data/${patientId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log("Fetched Data:", data);
      setPatientData(data);
      if (data && data.doctors && data.doctors.length > 0) {
        console.log("Selected Doctor Name:", data.items[0].selectdoctorname);
        setSelectedDoctor(data.items[0].selectdoctorname);
      }
    } catch (error) {
      setError("Error fetching data");
    }
  };

  return (
    <div>
      <div>
        <label>
          Patient ID:
          <input type="text" value={patientId} onChange={handleInputChange} />
        </label>
        <button onClick={handleSearch}>Search</button>
      </div>

      {error && <div>Error: {error}</div>}

      {patientData ? (
        <div>
          <p>Patient Name: {patientData.name}</p>

          {patientData.items && patientData.items.length > 0 && (
            <div>
              <p>Selected Doctor: {patientData.items[0].selectdoctorname}</p>
            </div>
          )}
          {/* Render other fields as needed */}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default PatientBill;
