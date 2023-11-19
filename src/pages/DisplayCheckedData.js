import React, { useState, useEffect } from "react";

function DisplayCheckedData() {
  const [checkedData, setCheckedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/checked');
        if (response.ok) {
          const data = await response.json();
          setCheckedData(data);
        } else {
          console.error("Failed to fetch data from server");
        }
      } catch (error) {
        console.error("Error fetching data from server:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Fetched Checked Data:</h2>
      {checkedData.map((item, index) => (
        <div key={index}>
          <p><strong>{item.name}</strong></p>
          <p>Total: {item.total}</p>
          {item.subs && item.subs.length > 0 && (
            <ul>
              {item.subs.map((sub, subIndex) => (
                <li key={subIndex}>
                  {sub.name}: {sub.value}
                  {/* Display the nested array inside each 'item.subs' item */}
                  {sub.nestedArray && sub.nestedArray.length > 0 && (
                    <ul>
                      {sub.nestedArray.map((nestedItem, nestedIndex) => (
                        <li key={nestedIndex}>
                          {nestedItem.name}: {nestedItem.value}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
          {item.checked && item.checked.length > 0 && (
            <div>
              <p>Checked:</p>
              <ul>
                {item.checked.map((checkedItem, checkedIndex) => (
                  <li key={checkedIndex}>
                    {checkedItem.name}: {checkedItem.value}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default DisplayCheckedData;
