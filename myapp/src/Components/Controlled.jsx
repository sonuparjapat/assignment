import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
// import 'react-date-picker/dist/DatePicker.css';

function Controlled() {
  // Set initial state for selected date (initialize with today's date)
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Handle date change
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Handle month and year change with arrow buttons
  const handleMonthChange = (amount) => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(newDate.getMonth() + amount);
    setSelectedDate(newDate);
  };

  const handleYearChange = (amount) => {
    const newDate = new Date(selectedDate);
    newDate.setFullYear(newDate.getFullYear() + amount);
    setSelectedDate(newDate);
  };

  return (
    <div className="App">
      <h1>Custom Calendar with Arrow Buttons</h1>
      <div className="calendar-container">
        <DatePicker
          value={selectedDate}
          onChange={handleDateChange}
          format="MM/dd/yyyy"
          clearIcon={null}
          prevLabel={<span>&lt;</span>}
          nextLabel={<span>&gt;</span>}
          onPrevClick={() => handleMonthChange(-1)}
          onNextClick={() => handleMonthChange(1)}
        />
      </div>
      <div className="selected-date">
        <h2>Selected Date:</h2>
        <p>{selectedDate ? selectedDate.toDateString() : 'No date selected'}</p>
      </div>
    </div>
  );
}

export default Controlled;
