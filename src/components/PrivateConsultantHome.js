import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './private.css'

const DoctorDetails = () => {
  const [doctor, setDoctor] = useState(null);
  const [workingTime, setWorkingTime] = useState([]);

  useEffect(() => {
    // Fetch doctor details
    axios
      .get('/api/doctors/doctorId')
      .then((response) => {
        setDoctor(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // Fetch available time entries
    axios
      .get('/api/available-time/doctorId')
      .then((response) => {
        setWorkingTime(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const deleteEntry = (entryId) => {
    // Delete working time entry
    axios
      .delete(`/api/available-time/doctorId/${entryId}`)
      .then((response) => {
        console.log(response.data);
        // Remove the deleted entry from the workingTime state
        setWorkingTime(workingTime.filter((entry) => entry._id !== entryId));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const addEntry = (entry) => {
    // Add new working time entry
    axios
      .post('/api/available-time/doctorId', entry)
      .then((response) => {
        console.log(response.data);
        // Add the new entry to the workingTime state
        setWorkingTime([...workingTime, entry]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Doctor Details</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {doctor && (
            <tr>
              <td>{doctor.name}</td>
              <td>{doctor.department}</td>
              <td>{doctor.phoneNumber}</td>
            </tr>
          )}
        </tbody>
      </table>

      <h2>Working Time</h2>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Start</th>
            <th>End</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {workingTime.map((entry) => (
            <tr key={entry._id}>
              <td>{entry.day}</td>
              <td>{entry.start}</td>
              <td>{entry.end}</td>
              <td>
                <button onClick={() => deleteEntry(entry._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Add Entry</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const { day, start, end } = e.target.elements;
          addEntry({ day: day.value, start: start.value, end: end.value });
          e.target.reset();
        }}
      >
        <div>
          <label htmlFor="day">Day:</label>
          <input type="text" id="day" name="day" required />
        </div>
        <div>
          <label htmlFor="start">Start:</label>
          <input type="text" id="start" name="start" required />
        </div>
        <div>
          <label htmlFor="end">End:</label>
          <input type="text" id="end" name="end" required />
        </div>
        <button type="submit">Add</button>
      </form>
      <div className="wrapper">
        <h2>See Appointment Details</h2>
        <div className="see-appointment-of-date">
          <label htmlFor="appointment_date">SELECT DATE:</label>
          <input type="date" id="appointment_date" name="appointment_date" onChange={handleDateChange} />
        </div>
        <div className="submit">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
