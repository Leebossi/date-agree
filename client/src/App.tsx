import {
  add,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  parse,
  startOfToday,
} from "date-fns";
import { eachDayOfInterval } from "date-fns/esm";
import React, { useState } from "react";

const App = () => {
  const today = startOfToday();
  const [createClicked, setCreateClicked] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  const newDays = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  });
  console.log(newDays);

  const nextMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  };

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
        <div className="calendar">
          <div className="month-indicator">
            <h2>{format(firstDayCurrentMonth, "MMMM yyyy")}</h2>
            <button>p</button>
            <button onClick={nextMonth}>n</button>
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
                className={`${dayIndx === 0 ? colStartClasses[getDay(day)] : ''}`}
              >
                <button type="button">
                  <time dateTime={format(day, "yyyy-MM-dd")}>
                    {format(day, "d")}
                  </time>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
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
