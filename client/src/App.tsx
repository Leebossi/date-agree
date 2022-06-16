import {
  add,
  endOfMonth,
  format,
  getDay,
  parse,
  startOfToday,
  sub,
} from "date-fns";
import { eachDayOfInterval } from "date-fns/esm";
import React, { useState } from "react";
import DateForm from "./components/DateForm";

const App = () => {
  const today = startOfToday();
  const [createClicked, setCreateClicked] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  const newDays = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  const nextMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  };

  const previousMonth = () => {
    const firstDayPreviousMonth = sub(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayPreviousMonth, "MMM-yyyy"));
  };

  console.log(createClicked);
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
        <DateForm />
      )}
      <div className="calendar">
        <div className="month-indicator">
          <h2>{format(firstDayCurrentMonth, "MMM yyyy")}</h2>
          <div>
            <button onClick={previousMonth}>prev</button>
            <button onClick={nextMonth}>next</button>
          </div>
        </div>
        <div className="day-of-week">
          <div>Mo</div>
          <div>Tu</div>
          <div>We</div>
          <div>Th</div>
          <div>Fr</div>
          <div>Sa</div>
          <div>Su</div>
        </div>
        <div className="date-grid">
          {newDays.map((day, dayIndx) => (
            <div
              key={day.toString()}
              className={`${dayIndx === 0 ? colStartClasses[getDay(day)] : ""}`}
            >
              <button type="button" className="day-button">
                <time dateTime={format(day, "yyyy-MM-dd")}>
                  {format(day, "d")}
                </time>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const colStartClasses = [
  "",
  "col-start-1",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

export default App;
