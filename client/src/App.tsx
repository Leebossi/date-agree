import React, { useState } from "react";
import DatePicker from "./components/DatePicker";

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
        <></>
      )}
    </div>
  );
};

export default App;
