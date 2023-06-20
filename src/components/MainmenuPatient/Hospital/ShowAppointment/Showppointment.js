import React from 'react'
import { Link } from 'react-router-dom'
import './ShowAppointment.css'
import { useEffect,useState } from 'react'
import axios from 'axios'
import moment from 'moment'
export default function ShowAppointment(props) {
  const myDate = new Date();
  const formattedDate = moment(myDate).format('YYYY-MM-DD');

  const token=window.localStorage.getItem("token");
  const [dates,setdates]=useState('');
    const [appdetails,setappdetails]=useState([]);
    const [view,setview]=useState()
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_URL}/appointmentinfo`,{
      headers:{token}
    })
    .then(res=>{
      setappdetails(res.data);
    })
  },[view])

const select=()=>{
  setview(dates)
}

// console.log(view)
  
const [appdata,setappdata]=useState([])

  useEffect(()=>{
    const  newdata=[];
    appdetails.map((data)=>{
      
        if((data.govhospitalname==props.details.hospitalname || data.govhospitalname==props.details.name) && data.date==view){

          newdata.push(data)
        }
        
    },setappdata(newdata)
    )
  },[view])


  


  return (
    <div>
      <div className='showappointment'>
        <div className='showappointmentHeader'>
            <h1>Show Appointments</h1>
            <ul>
            {props.details.usertype=='privateconsultant'?<li><Link to="/consultanthome" className='linker'>back</Link></li>:<li><Link to="/hospitalhome" className='linker'>back</Link></li>}
            </ul>
        </div>
        
        <div className='setdate'>
        <h4>Select Date :</h4>
          <input type='date'  name='select' onChange={(e)=>setdates(e.target.value)}/>
          <button onClick={select}>select</button>
        </div>
        <div>
        {appdata.length==0?(<h3>No appointments on {view}</h3>):(
          <table>
          <thead>
            <tr>
              <th>Sl no</th>
              <th>Date of Appointment</th>
              <th>Patient Name</th>
              <th>Contact Number</th>
              <th>Time</th>
              <th>Token</th>
            </tr>
          </thead>
          <tbody>
            {appdata.map((appointment,index) => (
              <tr>
                <td>{index+1}</td>
                <td>{moment(appointment.date).format('DD-MM-YYYY')}</td>
                <td>{appointment.patientname}</td>
                <td>{appointment.patientphone}</td>
                <td>{appointment.time}</td>
                <td>{appointment.token}</td>
              </tr>
            ))}
          </tbody>
        </table>
          
        )}
        </div>
      </div>
    </div>
  )
}
