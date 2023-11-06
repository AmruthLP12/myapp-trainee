import React,{useState} from 'react'

const MapFunction1 = () => {
    const [data, setData] = useState([
        { id: 1, name: 'Alice', age: 25 },
        { id: 2, name: 'Bob', age: 30 },
        { id: 3, name: 'Carol', age: 35 },
      ]);
    
      const rows = data.map((item) => (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.age}</td>
        </tr>
      ));
    
  return (
    <div>
        <h1>2</h1>
      <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
    </div>
  )
}

export default MapFunction1
