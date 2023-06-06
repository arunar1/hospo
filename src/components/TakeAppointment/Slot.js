import React, { useState, useEffect } from 'react'
import './Slot.css'
import { Link, Route, Router, Switch } from "react-router-dom";
import axios from 'axios';

export default function Slot(props) {
  console.log(props)

  const formdata = JSON.parse(window.localStorage.getItem('appdeatail'));

  const [counter,setcounter]=useState(0);

  const [getapp,setgetapp]=useState([])

  const [timeschedule,settimeschedule]=useState()

  const [appdetails,setappdetails]=useState([]);

  const [slid,setslid]=useState()

  const choosetime=(e)=>{
      settimeschedule(e.target.value)
      setslid(e.target.id);
  }

  useEffect(()=>{
    axios.get("http://localhost:5000/appointmentinfo")
    .then(res=>{
      setappdetails(res.data);
    })
  },[timeschedule])

const [flag,setflag]=useState(true)

  useEffect(()=>{
    let count=0;
    appdetails.map((app)=>{
      if(app.slotid==slid && app.govhospitalname==formdata.HospitalName && app.date==formdata.Date ){
        count=count+1;
        console.log(app)
        console.log(app.name)
      }
      if(app.patientname==props.details.name && app.govhospitalname==formdata.HospitalName && app.date==formdata.Date){
        setflag(false)  
      }
      setcounter(count);
      
    })
  },[timeschedule])

  console.log(appdetails)
  
  console.log(counter);




  console.log(formdata)

  



  const datas = [];

  for (const item in formdata) {
    datas.push(item)
  }



  const selectBtn=[
  {id:'slota',time:"09:00-09:30"},
  {id:'slotb',time:"09:30-10:00"},
  {id:'slotc',time:"10:00-10:30"},
  {id:'slotd',time:"10:30-11:00"},
  {id:'slote',time:"11:30-12:00"},
  {id:'slotf',time:"12:00-12:30"},
  {id:'slotg',time:"12:30-01:00"}
]

const handlesubmit=(e)=>{
  e.preventDefault()
  if(timeschedule){
    if(flag){
      if(counter<=10){
        formdata.timeapp=timeschedule;
        formdata.patientName=props.details.name;
        formdata.patientid=props.details.userId;
        formdata.slotid=slid;
        formdata.tokenid=counter;
        console.log(formdata)
        try {
              axios.post('http://localhost:5000/home/takeappointment/slot',{
                formdata
            }).then(res=>{
              console.log(res)
              if(res.data.message=='token generated'){
                alert("Token Generated");
                window.location.href='/home'
              }
            })
          
        } catch (error) {
          alert(error)
          
        }
        }
        else{
          alert("slot is filled")
        }

    }
    else{
      alert('Already had an appointment')
    }
  
  }
  else{
    alert("select the time slot")
  }
}



  return (
    <>
      <div className='sloter'>
        <div className='slotHeader'>
          <h1>Choose Slot</h1>
          <ul>
            <li><Link to="/home/takeappointment" className='linker'>back</Link></li>
          </ul>
        </div>
      </div>
      <div className='containerSlot'>
        <div className='wrapper'>
          {
            selectBtn.map((btn,index)=>(
              <button onClick={choosetime} key={index} value={btn.time} className='choosetime' id={index}>{btn.time}</button>
             ))
          }
        </div>
        <div className='formcontainer'>
         <div>
            <form onSubmit={handlesubmit}>
              <div className='formapp'>
                <label >{datas[3]}:</label>
                <input type='text' value={formdata[datas[3]]}></input>
              </div>
              <div className='formapp'>
                <label>{datas[0]}:</label>
                <input type='text' value={formdata[datas[0]]} ></input>
              </div>
              <div  className='formapp'>
                <label>{datas[1]}:</label>
                <input type='text' value={formdata[datas[1]]}></input>
              </div>
              <div  className='formapp'>
                <label>{datas[2]}:</label>
                <input type='text' value={formdata[datas[2]]}></input>
              </div>
              <div  className='formapp'>
                <label>Time:</label>
                <input type='text' value={timeschedule} name=''></input>
              </div>
              <div  className='formapp'>
                <label>Slot Left:</label>
                <input type='text' value={10-counter} name=''></input>
              </div>
              <div  className='formapp'>
                <button type='submit'>Generate</button>
              </div>
            </form>
            </div>
        </div>
      </div>
    </>
  )
}
