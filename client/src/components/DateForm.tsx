import React, { useState } from "react";

const DateForm = () => {
  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  const [checkedState, setCheckedState] = useState(
    new Array(months.length).fill(false)
  );

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const selectedMonths: string[] = [];
    checkedState.forEach((value, index) => {
      if (value === true) {
        selectedMonths.push(months[index])
      }
    })
    console.log(selectedMonths)
  };

  const handleChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  console.log(checkedState);
  return (
    <div className="form-container">
      <h2>DateForm</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Kesäinen Mökkireissu" />
        <ul className="months-linst">
          {months.map((month, index) => {
            return (
              <li key={index}>
                <div className="month-list-item">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={month}
                    value={month}
                    checked={checkedState[index]}
                    onChange={() => handleChange(index)}
                  />
                  <label htmlFor={`custome-checkbox-${index}`}>{month}</label>
                </div>
              </li>
            );
          })}
        </ul>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default DateForm;
