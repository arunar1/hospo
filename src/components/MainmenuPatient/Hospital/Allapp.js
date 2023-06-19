import React from 'react'
import { Link } from 'react-router-dom'
// import './ShowAppointment.css'
import { useEffect,useState } from 'react'
import axios from 'axios'
import moment from 'moment'
export default function Allapp(props) {
  const myDate = new Date();
  const formattedDate = moment(myDate).format('YYYY-MM-DD');

  const token=window.localStorage.getItem("token");
  
    const [appdetails,setappdetails]=useState([]);
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_URL}/appointmentinfo`,{
      headers:{token}
    })
    .then(res=>{
      setappdetails(res.data);
    })
  },[])



  
const [appdata,setappdata]=useState([])

  useEffect(()=>{
    const  newdata=[];
    appdetails.map((data)=>{
      
        if((data.govhospitalname==props.details.hospitalname || data.govhospitalname==props.details.name) && data.date>=formattedDate){

            newdata.push(data)
        }
       
      newdata.sort((a,b)=>moment(b.date).diff(moment(a.date)))
    },setappdata(newdata)
    )
  },[appdetails])




  return (
    <div>
      <div className='showappointment'>
        <div className='showappointmentHeader'>
            <h1>Show All Appointments</h1>
            <ul>
            {props.details.usertype=='privateconsultant'?<li><Link to="/consultanthome" className='linker'>back</Link></li>:<li><Link to="/hospitalhome" className='linker'>back</Link></li>}
            </ul>
        </div>
        
        <div className='setdate'>
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
                <td>{appointment.date}</td>
                <td>{appointment.patientname}</td>
                <td>{appointment.patientphone}</td>
                <td>{appointment.time}</td>
                <td>{appointment.token}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}
