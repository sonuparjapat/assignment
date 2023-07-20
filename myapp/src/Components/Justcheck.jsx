import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';

const ticketOptions = [
  { value: 1, label: '1 ticket' },
  { value: 2, label: '2 tickets' },
  { value: 3, label: '3 tickets' },
  // Add more ticket options as needed
];

export default function JustCheck() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTicketChange = (selectedOption) => {
    setSelectedTicket(selectedOption);
  };

  const calculateTotalPrice = () => {
    if (selectedTicket) {
      return selectedTicket.value * 25;
    }
    return 0;
  };

  return (
    <div className="App">
      <div className="calendar-container">
        <h2>Select Date:</h2>
        <DatePicker selected={selectedDate} onChange={handleDateChange} />
      </div>
      <div className="slot-container">
        {/* Display slots based on the selected date */}
        {/* When a slot is clicked, update the selectedTicket state */}
      </div>
      <div className="ticket-dropdown">
        <h2>Select Tickets:</h2>
        <Select options={ticketOptions} value={selectedTicket} onChange={handleTicketChange} />
      </div>
      <div className="total-price">
        <h2>Total Price:</h2>
        <p>{selectedTicket ? `$${calculateTotalPrice()}` : '$0'}</p>
      </div>
    </div>
  );
}


