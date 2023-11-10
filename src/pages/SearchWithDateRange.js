import React, { useState } from 'react';

const SearchWithDateRange = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [data, setData] = useState([
    { date: '2023-11-10', product: 'Product A', quantity: 100, price: 25.99 },
    { date: '2023-11-10', product: 'Product B', quantity: 50, price: 19.99 },
    { date: '2023-11-11', product: 'Product A', quantity: 75, price: 25.99 },
    { date: '2023-11-11', product: 'Product C', quantity: 30, price: 34.99 },
    { date: '2023-11-12', product: 'Product B', quantity: 120, price: 19.99 },
  ]);

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleReset = () => {
    setStartDate('');
    setEndDate('');
  };

  const filteredData = data.filter(
    (item) =>
      (startDate === '' || item.date >= startDate) &&
      (endDate === '' || item.date <= endDate)
  );

  return (
    <div>
      <h2>Date Range Filter Table</h2>

      <label htmlFor="startDateFilter">Start Date:</label>
      <input
        type="date"
        id="startDateFilter"
        value={startDate}
        onChange={handleStartDateChange}
      />

      <label htmlFor="endDateFilter">End Date:</label>
      <input
        type="date"
        id="endDateFilter"
        value={endDate}
        onChange={handleEndDateChange}
      />

      <button onClick={handleReset}>Reset</button>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.product}</td>
              <td>{item.quantity}</td>
              <td>${item.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchWithDateRange;
