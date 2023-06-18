import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { useState, useEffect } from 'react'

export default function EditAppointment(props) {
const [dltres,setdltres]=useState();
const token=window.localStorage.getItem("token");
const [dates,setdates]=useState('');
const [view,setview]=useState()

  const [appdetails,setappdetails]=useState([]);
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_URL}/appointmentinfo`,{
      headers:{token}
    })
    .then(res=>{
      setappdetails(res.data);
    })
  },[dltres])

  const myDate = new Date();
  const formattedDate = moment(myDate).format('YYYY-MM-DD');
const [appdata,setappdata]=useState([])

  useEffect(()=>{
    const  newdata=[];
    appdetails.map((data)=>{
        
        if((data.govhospitalname==props.details.hospitalname || data.govhospitalname==props.details.name) && data.date==view && data.date>=formattedDate){

          newdata.push(data)
        }
        setappdata(newdata)
    //   newdata.sort((a,b)=>moment(b.date).diff(moment(a.date)))
    }
    )
  },[appdetails,view])

  const [appdlt,setappdlt]=useState('')

  const select=()=>{
    setview(dates)
  }

  const deleteuser=(id)=>{
    setappdlt(id)

   if(appdlt){
    if(window.confirm("Are you want to delete the appointment")){
      axios.post(`${process.env.REACT_APP_URL}/deleteuserapp`,{
       appdlt
      },{
        headers:{token}
      }
     ).then(res=>{
       setdltres(res.data.data)
      //  if(res.data.data='Appointment Cancelled'){
      //   window.location.href='/home/cancelappointment'
      //  }

     })
 }
   }
    else{

    }
  }
//   console.log(appdata)
//   console.log(props.details)
//   console.log(view)
  
  return (
    <div>
      <div className='Cancel'>
        <div className='CancelHeader'>
            <h1>Edit Appointment</h1>
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
              <th></th>
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
                <td><FontAwesomeIcon className='deletebtn'  icon={faTrash} onClick={()=>deleteuser(appointment._id)} /></td>
              </tr>
            ))}
          </tbody>
        </table>
          
        )}
        </div>
            {/* <ul>
              <li><Link to="/home" className='linker'>back</Link></li>
            </ul>
        </div>
        <div>
        <table>
        <thead>
          <tr>
            <th>Sl no</th>
            <th>Date</th>
            <th>Hospital/Doctor</th>
            <th>Hospital Type</th>
            <th>Time</th>
            <th>Token</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {appdata.map((appointment,index) => (
            <tr>
              <td>{index+1}</td>
              <td>{appointment.date}</td>
              <td>{(appointment.category)?`${appointment.govhospitalname} - ${appointment.category}`:`${appointment.govhospitalname}`}</td>
              <td>{appointment.hospitaltype}</td>
              <td>{appointment.time}</td>
              <td>{appointment.token}</td>
              <td><FontAwesomeIcon className='deletebtn'  icon={faTrash} onClick={()=>deleteuser(appointment._id)} /></td>
            </tr>
          ))}
        </tbody>
      </table>
        </div> */}
      </div>
    </div>
  )
}
