import React, { useState } from "react";
import Calendar from "./components/Calendar";
import DateForm from "./components/DateForm";

const App = () => {
  const [createClicked, setCreateClicked] = useState(false);

  return (
    <div className="app">
      {!createClicked ? (
        <div className="flex flex-column centered">
          <p>Start by creating a date</p>
          <button onClick={() => setCreateClicked(!createClicked)}>
            Create
          </button>
        </div>
      ) : (
        <>
          <DateForm />
          <Calendar />
        </>
      )}
    </div>
  );
};

export default App;
