import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  parse,
  startOfToday,
  sub,
} from "date-fns";
import React, { useState } from "react";

const Calendar = () => {
  const today = startOfToday();
  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());
  console.log(selectedDates);

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

  const onDayChange = (event: any) => {
    let dateTime = event.target.dateTime;

    if (!dateTime) {
      dateTime = event.target.querySelector("time").dateTime;
    }

    if (selectedDates.includes(dateTime)) {
      console.log(`Removing ${dateTime}`);
      setSelectedDates(selectedDates.filter((date) => date !== dateTime));
    } else {
      console.log(`Adding ${dateTime}`);
      setSelectedDates((dates) => [...dates, dateTime]);
    }
  };

  return (
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
            <button
              type="button"
              className="day-button"
              onClick={onDayChange}
              style={{
                backgroundColor: selectedDates.includes(
                  format(day, "yyyy-MM-dd")
                )
                  ? "#0071F8"
                  : "",
              }}
            >
              <time dateTime={format(day, "yyyy-MM-dd")}>
                {format(day, "d")}
              </time>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
