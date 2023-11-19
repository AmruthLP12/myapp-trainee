import React, { useState, useEffect } from "react";

function CheckboxGroup() {
  const [checked1, setChecked1] = useState(false);
  const [subChecked1, setSubChecked1] = useState([]);

  const [checked2, setChecked2] = useState(false);
  const [subChecked2, setSubChecked2] = useState([]);

  const [checked3, setChecked3] = useState(false);
  const [subChecked3, setSubChecked3] = useState([]);

  const [separateChecked, setSeparateChecked] = useState(false);
  const separateValue = 50;

  // New state for additional separate checkbox
  const [separateChecked2, setSeparateChecked2] = useState(false);

  // Value for new checkbox
  const separateValue2 = 100;

  const [total, setTotal] = useState(0);

  const subCheckboxes1 = [
    { id: 1, name: "Sub 1", value: 10 },
    { id: 2, name: "Sub 2", value: 20 },
  ];

  const subCheckboxes2 = [
    { id: 3, name: "Sub 3", value: 30 },
    { id: 4, name: "Sub 4", value: 40 },
  ];

  const subCheckboxes3 = [
    { id: 5, name: "Sub 5", value: 50 },
    { id: 6, name: "Sub 6", value: 60 },
    { id: 7, name: "Sub 7", value: 70 },
  ];

  // / Check if all sub checkboxes are checked
  const allChecked1 = subChecked1.every((sc) => sc.checked);

  // Check if any sub checkbox is unchecked
  const anyUnchecked1 = subChecked1.some((sc) => !sc.checked);
  // Update main checkbox state
  useEffect(() => {
    if (allChecked1) {
      setChecked1(true);
    }
    if (anyUnchecked1) {
      setChecked1(false);
    }
  }, [subChecked1, allChecked1, anyUnchecked1]);

  // / Check if all sub checkboxes are checked
  const allChecked2 = subChecked2.every((sc) => sc.checked);

  // Check if any sub checkbox is unchecked
  const anyUnchecked2 = subChecked2.some((sc) => !sc.checked);
  // Update main checkbox state
  useEffect(() => {
    if (allChecked2) {
      setChecked2(true);
    }
    if (anyUnchecked2) {
      setChecked2(false);
    }
  }, [subChecked2, allChecked2, anyUnchecked2]);

  // / Check if all sub checkboxes are checked
  const allChecked3 = subChecked3.every((sc) => sc.checked);

  // Check if any sub checkbox is unchecked
  const anyUnchecked3 = subChecked3.some((sc) => !sc.checked);
  // Update main checkbox state
  useEffect(() => {
    if (allChecked3) {
      setChecked3(true);
    }
    if (anyUnchecked3) {
      setChecked3(false);
    }
  }, [subChecked3, allChecked3, anyUnchecked3]);

  useEffect(() => {
    setSubChecked1(subCheckboxes1.map((sc) => ({ ...sc, checked: false })));
    setSubChecked2(subCheckboxes2.map((sc) => ({ ...sc, checked: false })));
    setSubChecked3(subCheckboxes3.map((sc) => ({ ...sc, checked: false })));
  }, []);

  useEffect(() => {
    calculateTotal();
  }, [subChecked1, subChecked2, subChecked3, separateChecked]);

  // Update total when checked
  useEffect(() => {
    if (separateChecked2) {
      setTotal((total) => total + separateValue2);
    } else {
      setTotal((total) => total - separateValue2);
    }
  }, [separateChecked2]);

  const calculateTotal = () => {
    let total = 0;
    total += getCheckedTotal(subChecked1);
    total += getCheckedTotal(subChecked2);
    total += getCheckedTotal(subChecked3);

    if (separateChecked) {
      total += separateValue;
    }

    if (separateChecked2) {
      total += separateValue2;
    }

    setTotal(total);
  };

  const getCheckedTotal = (subChecked) => {
    return subChecked
      .filter((sc) => sc.checked)
      .reduce((sum, sc) => sum + sc.value, 0);
  };

  // In checkbox change handler
  const handleCheckbox1Change = (checked) => {
    setChecked1(checked);

    // Also update sub checkboxes
    setSubChecked1(subChecked1.map((sc) => ({ ...sc, checked })));
  };

  const handleCheckbox2Change = (checked) => {
    setChecked2(checked);
    setSubChecked2(subChecked2.map((sc) => ({ ...sc, checked })));
  };

  const handleCheckbox3Change = (checked) => {
    setChecked3(checked);
    setSubChecked3(subChecked3.map((sc) => ({ ...sc, checked })));
  };

  const toggleSubCheckbox = (id, group) => {
    if (group === 1) {
      setSubChecked1((prev) =>
        prev.map((sc) => (sc.id === id ? { ...sc, checked: !sc.checked } : sc))
      );
    } else if (group === 2) {
      setSubChecked2((prev) =>
        prev.map((sc) => (sc.id === id ? { ...sc, checked: !sc.checked } : sc))
      );
    } else if (group === 3) {
      setSubChecked3((prev) =>
        prev.map((sc) => (sc.id === id ? { ...sc, checked: !sc.checked } : sc))
      );
    }
  };

  // ...

  const handleClick = async () => {
    const checked = [];

    // Check if main 1 is checked
    if (checked1 || subChecked1.some((sc) => sc.checked)) {
      checked.push({
        name: "Main Checkbox 1",
        value: "main",
        subs: getCheckedSubs(subChecked1),
      });
    }
    if (checked2) {
      checked.push({
        name: "Main Checkbox 2",
        value: "main",
        subs: getCheckedSubs(subChecked2),
      });
    }

    // Check if main 2 is checked
    if (checked2 || subChecked2.some((sc) => sc.checked)) {
      checked.push({
        name: "Main Checkbox 2",
        value: "main",
        subs: getCheckedSubs(subChecked2),
      });
    }

    // Check if main 3 is checked
    if (checked3 || subChecked3.some((sc) => sc.checked)) {
      checked.push({
        name: "Main Checkbox 3",
        value: "main",
        subs: getCheckedSubs(subChecked3),
      });
    }

    if (separateChecked2) {
      checked.push({
        name: "Separate2",
        value: separateValue2,
      });
    }

    // Add separate checkboxes

    function getCheckedSubs(subChecked) {
      return subChecked
        .filter((sc) => sc.checked)
        .map((sc) => ({ name: sc.name, value: sc.value }));
    }

    console.log(checked);

    console.log("Total:", total);

    const dataToSave = {
      checked,
      total  
    };

    try {
      const response = await fetch('http://localhost:3001/api/checked', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({checked, total}) 
      });

      if (response.ok) {
        console.log("Data sent to server successfully");
      } else {
        console.error("Failed to send data to server");
      }
    } catch (error) {
      console.error("Error sending data to server:", error.message);
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={checked1}
        onChange={(e) => handleCheckbox1Change(e.target.checked)}
      />
      <label>Checkbox Group 1</label>
      {subChecked1.map((sc) => (
        <div key={sc.id}>
          <input
            type="checkbox"
            checked={sc.checked}
            onChange={() => toggleSubCheckbox(sc.id, 1)}
          />
          {sc.name}:{sc.value}
        </div>
      ))}
      <input
        type="checkbox"
        checked={checked2}
        onChange={(e) => handleCheckbox2Change(e.target.checked)}
      />
      <label>Checkbox Group 2</label>
      {subChecked2.map((sc) => (
        <div key={sc.id}>
          <input
            type="checkbox"
            checked={sc.checked}
            onChange={() => toggleSubCheckbox(sc.id, 2)}
          />
          {sc.name}:{sc.value}
        </div>
      ))}
      <input
        type="checkbox"
        checked={checked3}
        onChange={(e) => handleCheckbox3Change(e.target.checked)}
      />
      <label>Checkbox Group 3</label>
      {subChecked3.map((sc) => (
        <div key={sc.id}>
          <input
            type="checkbox"
            checked={sc.checked}
            onChange={() => toggleSubCheckbox(sc.id, 3)}
          />
          {sc.name}:{sc.value}
        </div>
      ))}
      <input
        type="checkbox"
        checked={separateChecked}
        onChange={(e) => setSeparateChecked(e.target.checked)}
      />
      <label>Separate Checkbox : {separateValue}</label>
      <div>
        <input
          type="checkbox"
          checked={separateChecked2}
          onChange={(e) => setSeparateChecked2(e.target.checked)}
        />
        <label>Separate Checkbox 2 : {separateValue2}</label>
      </div>

      <div>Total: {total}</div>

      <button onClick={handleClick}>Log Checked</button>
    </div>
  );
}

export default CheckboxGroup;
