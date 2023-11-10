import React, { useState } from 'react';

const SearchWithDate = () => {
  const [filterDate, setFilterDate] = useState('');
  const [data, setData] = useState([
    { date: '2023-11-10', product: 'Product A', quantity: 100, price: 25.99 },
    { date: '2023-11-10', product: 'Product B', quantity: 50, price: 19.99 },
    { date: '2023-11-11', product: 'Product A', quantity: 75, price: 25.99 },
    { date: '2023-11-11', product: 'Product C', quantity: 30, price: 34.99 },
    { date: '2023-11-12', product: 'Product B', quantity: 120, price: 19.99 },
    // Add more data as needed
  ]);

  const handleDateChange = (event) => {
    setFilterDate(event.target.value);
  };

  const handleReset = () => {
    setFilterDate('');
  };
  // const filteredData = data.filter((item) => item.date.includes(filterDate));

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  

  const filteredData = data.filter((item) =>
    formatDate(item.date).includes(filterDate)
  );

  return (
    <div>
      <h2>Date Filter Table</h2>

      <label htmlFor="dateFilter">Filter by Date:</label>
      <input
        type="date"
        id="dateFilter"
        value={filterDate}
        onChange={handleDateChange}
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

export default SearchWithDate;
