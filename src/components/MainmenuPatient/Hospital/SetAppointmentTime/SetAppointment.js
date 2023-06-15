import React from 'react'
import { Link } from 'react-router-dom'
import './SetAppointment.css'
import { useEffect,useState } from 'react';
export default function SetAppointment() {
  const [timeSlots, setTimeSlots] = useState([]);
  const [newTimeSlot, setNewTimeSlot] = useState({ startTime: '', endTime: '', slotsAvailable: 0 });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTimeSlot((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
console.log(timeSlots)
  const handleAddTimeSlot = (e) => {
    e.preventDefault();
    setTimeSlots((prevSlots) => [...prevSlots, newTimeSlot]);
    setNewTimeSlot({ startTime: '', endTime: '', slotsAvailable: 0 });
  };
  console.log(timeSlots)
  return (
    <div>
      <div className='setappointment'>
        <div className='setappointmentHeader'>
            <h1>Set Appointment Time</h1>
            <ul>
              <li><Link to="/hospitalhome" className='linker'>back</Link></li>
            </ul>
        </div>
        <div>
      <form onSubmit={handleAddTimeSlot}>
      <div className='setapp'> 
        
        <div className='settime'>
        <label htmlFor="startTime">Start Time:</label>
        <input
          type="time"
          id="startTime"
          name="startTime"
          value={newTimeSlot.startTime}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className='settime'>
        <label htmlFor="endTime">End Time:</label>
        <input
          type="time"
          id="endTime"
          name="endTime"
          value={newTimeSlot.endTime}
          onChange={handleInputChange}
          required
        />
        
      </div>
      <div className='settime'>
        <label htmlFor="slotsAvailable">Slots Available:</label>
        <input
          type="number"
          id="slotsAvailable"
          name="slotsAvailable"
          value={newTimeSlot.slotsAvailable}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
      <button type='submit' >Add Time Slot</button>

      </div>
        
      </div>
      </form>

      <h2>Time Slots</h2>
      {timeSlots.length === 0 ? (
        <p>No time slots added yet.</p>
      ) : (
        <ul >
          {timeSlots.map((slot, index) => (
            <li className='card' key={index}>
              <div>Start Time: {slot.startTime}</div>
              <div>End Time: {slot.endTime}</div>
              <div>Slots Available: {slot.slotsAvailable}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
        
      </div>
    </div>
)}
