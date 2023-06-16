import React from 'react'
import { Link } from 'react-router-dom'
import './SetAppointment.css'
import { useEffect,useState } from 'react';
import axios from 'axios';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function SetAppointment(props) {

console.log(props)
  const userid=props.details.phoneno;
  console.log(userid)

  const [timeSlots, setTimeSlots] = useState([]);
  const [newTimeSlot, setNewTimeSlot] = useState({ startTime: '', endTime: '', slotsAvailable: '' });

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
    setTimeSlots(newTimeSlot);
    setNewTimeSlot({ startTime: '', endTime: '', slotsAvailable: '' });
    axios.post(`${process.env.REACT_APP_URL}/appointmenttime`,{timeSlots,userid})
    .then(res=>{
      console.log(res)
    })
  };
  console.log(timeSlots)
  const token=window.localStorage.getItem("token");
  const [appdetails,setappdetails]=useState([]);
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_URL}/appointmenttimeslot`,{
      headers:{token}
    })
    .then(res=>{
      setappdetails(res.data);
      
    })
  },[timeSlots])
  console.log(appdetails)

  const [appdata,setappdata]=useState([])

  useEffect(()=>{
    const  newdata=[];
    appdetails.map((data,index,appdetails)=>{
        if(data.userId==props.details.phoneno){
          data.timeslot._id=data._id
          newdata.push(data.timeslot)
          
        }
        // newdata.sort((a,b)=>moment(b.date).diff(moment(a.date)))
        
    },setappdata(newdata)
    )
  },[appdetails])
  console.log(appdata)
  const [dltres,setdltres]=useState();
  const [appdlt,setappdlt]=useState('')
  const deleteuser=(id)=>{
    setappdlt(id)
   if(appdlt){
    if(window.confirm("Are you want to delete the appointment")){
      axios.post(`${process.env.REACT_APP_URL}/dltappointmenttimeslot`,{
       appdlt
      },{
        headers:{token}
      }
     ).then(res=>{
       setdltres(res.data.data)
       console.log(res)
     })
 }
   }
    else{

    }
  }

console.log(appdata)


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
      {appdata.length === 0 ? (
        <p>No time slots added yet.</p>
      ) : (
        <ul >
          {appdata.map((slot, index) => (
            <li className='card' key={index}>
              <div>Start Time: {slot.startTime}</div>
              <div>End Time: {slot.endTime}</div>
              <div>Slots Available: {slot.slotsAvailable}</div>
              <div><FontAwesomeIcon className='deletebtn positondlt'  icon={faTrash} onClick={()=>deleteuser(slot._id)}  /></div>
            </li>
            
          ))}
        </ul>
        
      )}
    </div>
        
      </div>
    </div>
)}
