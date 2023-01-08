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
import { useState } from "react";

const Calendar = () => {
  const today = startOfToday();
  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  const newDays = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

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

  const nextMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  };

  const previousMonth = () => {
    const firstDayPreviousMonth = sub(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayPreviousMonth, "MMM-yyyy"));
  };

  const onDayChange = (e: any) => {
    let dateTime = e.target.dateTime;

    if (!dateTime) {
      dateTime = e.target.querySelector("time").dateTime;
    }

    if (selectedDates.includes(dateTime)) {
      console.log(`Removing ${dateTime}`);
      setSelectedDates(selectedDates.filter((date) => date !== dateTime));
    } else {
      console.log(`Adding ${dateTime}`);
      setSelectedDates((dates) => [...dates, dateTime]);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(selectedDates);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="calendar">
        <div className="month-indicator">
          <h2>{format(firstDayCurrentMonth, "MMM yyyy")}</h2>
          <div>
            <button onClick={previousMonth} type="button">
              prev
            </button>
            <button onClick={nextMonth} type="button">
              next
            </button>
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
                className={
                  selectedDates.includes(format(day, "yyyy-MM-dd"))
                    ? "day-button-checked"
                    : "day-button"
                }
                onClick={onDayChange}
              >
                <time dateTime={format(day, "yyyy-MM-dd")}>
                  {format(day, "d")}
                </time>
              </button>
            </div>
          ))}
        </div>
      </div>
      <button type="submit">submit</button>
      <button type="reset" onClick={() => setSelectedDates([])}>
        reset
      </button>
    </form>
  );
};

export default Calendar;
