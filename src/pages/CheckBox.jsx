import React, { useState, useEffect } from "react";
import "./CheckboxGroup.css";

function CheckboxGroup() {
  const [checked1, setChecked1] = useState(false);
  const [subChecked1, setSubChecked1] = useState([]);

  const [checked2, setChecked2] = useState(false);
  const [subChecked2, setSubChecked2] = useState([]);  

  const [separates, setSeparates] = useState([
    { id: 1, name: "Blood Group and Rh Type", value: 50 },
    { id: 2, name: "ESR", value: 100 },
    { id: 3, name: "RB", value: 100 },
    { id: 4, name: "FBS", value: 100 },
    { id: 5, name: "PPBS", value: 100 },
    { id: 6, name: "OGCT (75gms glucose, 2nd Hour Value)", value: 100 },
    { id: 7, name: "HBA1C", value: 100 },
    { id: 8, name: "Prothrombin Time(PT)", value: 100 },
    { id: 9, name: "APTT", value: 100 },
    { id: 10, name: "HIV", value: 100 },
    { id: 11, name: "HBSAG", value: 100 },
    { id: 12, name: "VDRL", value: 100 },
    { id: 13, name: "HCV", value: 100 },
    { id: 14, name: "Double Marker", value: 100 },
    { id: 15, name: "Triple Marker", value: 100 },
    { id: 16, name: "Quadruple Marker", value: 100 },
    { id: 17, name: "S.Prolactin", value: 100 },
    { id: 18, name: "S.FSH", value: 100 },
    { id: 19, name: "S.LH", value: 100 },
    { id: 20, name: "S.Testosterone", value: 100 },
    { id: 21, name: "AMH(Anti Mullerian Hormone)", value: 100 },
    { id: 22, name: "S.Creatinine", value: 100 },
    { id: 23, name: "Blood Urea", value: 100 },
    { id: 24, name: "S.BhCG", value: 100 },
    { id: 25, name: "S.CA-125", value: 100 },
    { id: 26, name: "Urine R/M", value: 100 },
    { id: 27, name: "Urine Culture & Sensitivity", value: 100 },
    { id: 28, name: "Urin Pregnancy test", value: 100 },
    
  ]);

 

  const [total, setTotal] = useState(0);

  const subCheckboxes1 = [
    { id: 1, name: "Hb", value: 10 },
    { id: 2, name: "TLC", value: 20 },
    { id: 3, name: "DC", value: 20 },
    { id: 4, name: "Platelet Count", value: 20 },
  ];

  const subCheckboxes2 = [
    { id: 5, name: "Total T3", value: 40 },
    { id: 6, name: "Total T4", value: 40 },
    { id: 7, name: "Free T3", value: 40 },
    { id: 8, name: "Free T4", value: 40 },
    { id: 9, name: "Anti TPO Antibodies", value: 40 },
  ];

  const getCheckedSubs = (subChecked) => {
    return subChecked
      .filter((sc) => sc.checked)
      .map((sc) => ({ name: sc.name, value: sc.value }));
  };

  const allChecked1 = subChecked1.every((sc) => sc.checked);
  const anyUnchecked1 = subChecked1.some((sc) => !sc.checked);

  useEffect(() => {
    if (allChecked1) {
      setChecked1(true);
    }
    if (anyUnchecked1) {
      setChecked1(false);
    }
  }, [subChecked1, allChecked1, anyUnchecked1]);

  const allChecked2 = subChecked2.every((sc) => sc.checked);
  const anyUnchecked2 = subChecked2.some((sc) => !sc.checked);

  useEffect(() => {
    if (allChecked2) {
      setChecked2(true);
    }
    if (anyUnchecked2) {
      setChecked2(false);
    }
  }, [subChecked2, allChecked2, anyUnchecked2]);

  useEffect(() => {
    setSubChecked1(subCheckboxes1.map((sc) => ({ ...sc, checked: false })));
    setSubChecked2(subCheckboxes2.map((sc) => ({ ...sc, checked: false })));
  }, []);

  useEffect(() => {
    calculateTotal();
  }, [subChecked1, subChecked2, separates]);



  const toggleSeparate = (id) => {
    setSeparates((prev) =>
      prev.map((sep) =>
        sep.id === id ? { ...sep, checked: !sep.checked } : sep
      )
    );
  };

  const separateTotal = separates
    .filter((sep) => sep.checked)
    .reduce((total, sep) => total + sep.value, 0);

  const calculateTotal = () => {
    let total = 0;
    total += getCheckedTotal(subChecked1);
    total += getCheckedTotal(subChecked2);
    total += separateTotal;
    setTotal(total);
  };

  const getCheckedTotal = (subChecked) => {
    return subChecked
      .filter((sc) => sc.checked)
      .reduce((sum, sc) => sum + sc.value, 0);
  };

  const handleCheckbox1Change = (checked) => {
    setChecked1(checked);
    setSubChecked1(subChecked1.map((sc) => ({ ...sc, checked })));
  };

  const handleCheckbox2Change = (checked) => {
    setChecked2(checked);
    setSubChecked2(subChecked2.map((sc) => ({ ...sc, checked })));
  };

  const toggleSubCheckbox = (id, group) => {
    if (group === 1) {
      setSubChecked1((prev) =>
        prev.map((sc) =>
          sc.id === id ? { ...sc, checked: !sc.checked } : sc
        )
      );
    } else if (group === 2) {
      setSubChecked2((prev) =>
        prev.map((sc) =>
          sc.id === id ? { ...sc, checked: !sc.checked } : sc
        )
      );
    }
  };

  const handleClick = async () => {
    const checked = [];

    if (checked1 || subChecked1.some((sc) => sc.checked)) {
      checked.push({
        name: "Complete Blood Count",
        value: "main",
        subs: getCheckedSubs(subChecked1),
      });
    }

    if (checked2 || subChecked2.some((sc) => sc.checked)) {
      checked.push({
        name: "TSH",
        value: "main",
        subs: getCheckedSubs(subChecked2),
      });
    }

    checked.push(...separates.filter((sep) => sep.checked));

    const checkedSeparates = separates
      .filter((sep) => sep.checked)
      .map((sep) => ({
        name: sep.name,
        value: sep.value,
      }));

    console.log(checked);
    console.log("Total:", total);

    try {
      const response = await fetch("http://localhost:3001/api/checked", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ checked, total }),
      });

      if (response.ok) {
        console.log("Data sent to server successfully");
      } else {
        console.error("Failed to send data to the server");
      }
    } catch (error) {
      console.error("Error sending data to the server:", error.message);
    }
  };

  return (
    <div className="checkbox-container">
      <div className="checkbox-set"> 
        <input
          type="checkbox"
          checked={checked1}
          onChange={(e) => handleCheckbox1Change(e.target.checked)}
        />
        <label>Complete Blood Count</label>
        <div className="subbox">
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
        </div>
        <input
          type="checkbox"
          checked={checked2}
          onChange={(e) => handleCheckbox2Change(e.target.checked)}
        />
        <label>TSH</label>
        <div className="subbox">
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
        </div>
      </div>

      <div className="checkbox-set1">
        {separates.map((sep) => (
          <div key={sep.id } className={`set${sep.id}`}>
            <input
              type="checkbox"
              checked={sep.checked}
              onChange={() => toggleSeparate(sep.id)}
            />
            <label>
              {sep.name} : {sep.value}
            </label>
          </div>
        ))}

      </div>
        <div className="check-total">Total: {total}</div>

        <div className="check-submit"><button onClick={handleClick}>Submit</button></div>

    </div>
  );
}

export default CheckboxGroup;
