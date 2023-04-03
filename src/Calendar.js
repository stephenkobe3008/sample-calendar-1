import React from "react";

class Calendar extends React.Component {
  render() {
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const monthDays = [];
    for (let i = 1; i <= daysInMonth; i++) {
      monthDays.push(i);
    }

    return (
      <div>
        <h1>
          {year}年{month + 1}月
        </h1>
        <div className="days">
          {monthDays.map((day) => (
            <div key={day} className="day">
              {day}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Calendar;
