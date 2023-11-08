import React,{useState} from 'react';

const Search = () => {
  const data = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Carol', age: 35 },
  ];

  const [search, setSearch] = useState('');

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = data.filter((item) => {
    const searchValue = search.toLowerCase();
    return (
      item.name.toLowerCase().includes(searchValue) 
    );
  });

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search by name, ID, or age"
          value={search}
          onChange={handleInputChange}
        />
      </div>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.id}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Search;
