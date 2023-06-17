import React, { useState, useEffect } from 'react'
import './Slot.css'
import { Link, Route, Router, Switch } from "react-router-dom";
import axios from 'axios';
import moment from 'moment'
export default function Slot(props) {
  

  const formdata = JSON.parse(window.localStorage.getItem('appdeatail'));

  const [counter,setcounter]=useState(0);
  const [availcounter,setavailcounter]=useState(0);

  const [getapp,setgetapp]=useState([])

  const [timeschedule,settimeschedule]=useState()

  const [appdetails,setappdetails]=useState([]);

  const [slid,setslid]=useState()

  const [code,setcode]=useState('');


const [sel,setsel]=useState();
  const choosetime=(e,count,code)=>{
    



      settimeschedule(e.target.value)
      setslid(e.target.id);
      setsel(e.target.name)
      setcode(code)
      setavailcounter(count)
  
      
      
  }
  // console.log(availcounter)
  
  const token=window.localStorage.getItem("token");

  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_URL}/appointmentinfo`,{
      headers:{token}
    })
    .then(res=>{
      setappdetails(res.data);
    })
  },[timeschedule])

  const [apptimedetails,setapptimedetails]=useState([]);
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_URL}/appointmenttimeslot`,{
      headers:{token}
    })
    .then(res=>{
      setapptimedetails(res.data);
      
    })
  },[])

  // console.log(apptimedetails)

const [flag,setflag]=useState(true)

  useEffect(()=>{
    let count=0;
    appdetails.map((app)=>{
      if(app.slotid==slid && app.govhospitalname==formdata.HospitalName && app.date==formdata.Date ){
        count=count+1;
      }
      if(app.slotid==slid && app.govhospitalname==formdata.DoctorName && app.date==formdata.Date ){
        count=count+1;
      }
      if(app.patientname==props.details.name && app.govhospitalname==formdata.DoctorName && app.date==formdata.Date){
        setflag(false)  
      }
      if(app.patientname==props.details.name && app.govhospitalname==formdata.HospitalName && app.date==formdata.Date){
        setflag(false)  
      }
     
      setcounter(count);
      
    })
  },[timeschedule])

  const datas = [];

  for (const item in formdata) {
    datas.push(item)
  }

  // console.log(formdata)
  // console.log(apptimedetails)

const [appdata,setappdata]=useState([])
// console.log(appdetails)
  useEffect(()=>{
    const  newdata=[];
    apptimedetails.map((data,index)=>{
        if(data.hospitalname==formdata.HospitalName||data.hospitalname==formdata.DoctorName){
          newdata.push(data.timeslot)
          
        }
        setappdata(newdata)
        // newdata.sort((a,b)=>moment(b.date).diff(moment(a.date)))
        
    }
    )
  },[formdata])


  console.log(appdata)

  const selectBtn=[
  {id:'slota',time:"09:00-09:30"},
  {id:'slotb',time:"09:30-10:00"},
  {id:'slotc',time:"10:00-10:30"},
  {id:'slotd',time:"10:30-11:00"},
  {id:'slote',time:"11:00-11:30"},
  {id:'slotf',time:"11:30-12:00"},
  {id:'slotg',time:"12:00-12:30"},
  {id:'sloth',time:"12:30-01:00"}
]

const handlesubmit=(e)=>{
  e.preventDefault()
  if(timeschedule){
    if(flag){
      if(counter<=Number(availcounter)){
        formdata.timeapp=timeschedule;
        formdata.patientName=props.details.name;
        formdata.patientid=props.details.userId;
        formdata.slotid=slid;
        // if(slid==0){
        //   formdata.tokenid='A'+JSON.stringify(counter+1);
        // }
        // else if(slid==1){
        //   formdata.tokenid='B'+JSON.stringify(counter+1);
        // }
        // else if(slid==2){
        //   formdata.tokenid='C'+JSON.stringify(counter+1);
        // }
        // else if(slid==3){
        //   formdata.tokenid='D'+JSON.stringify(counter+1);
        // }
        // else if(slid==4){
        //   formdata.tokenid='E'+JSON.stringify(counter+1);
        // }
        // else if(slid==5){
        //   formdata.tokenid='F'+JSON.stringify(counter+1);
        // }
        // else if(slid==6){
        //   formdata.tokenid='G'+JSON.stringify(counter+1);
        // }
        // else if(slid==7){
        //   formdata.tokenid='H'+JSON.stringify(counter+1);
        // }
        formdata.tokenid=code+JSON.stringify(counter+1);
        
        
        try {
              axios.post(`${process.env.REACT_APP_URL}/home/takeappointment/slot`,{
                formdata
            }).then(res=>{
              
              if(res.data.message=='token generated'){
                alert("Token Generated");
                window.location.href='/home'
              }
              else{
                alert("network error sorry please try later")
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
    <div>
      <div className='sloter'>
        <div className='slotHeader'>
          <h1>Choose Slot</h1>
          <ul>
            <li><Link to="/home/takeappointment" className='linker'>back</Link></li>
          </ul>
        </div>
      </div>
      <div className='containerSlot'>
        {appdata.length>0?(
          <div className='wrapper'>
          {
            appdata.map((btn,index)=>(
              <button  onClick={(e) => choosetime(e,btn.slotsAvailable,btn.code)}  key={index} value={`${btn.startTime}-${btn.endTime}`} className={`${sel===btn.code?'new':'choosetime'}`} name={btn.code} id={index}>{`${btn.startTime}-${btn.endTime}`}</button>
             ))
          }
        </div>
        ):(<h3>Currently No appointment time is scheduled</h3>)}
        <div className='formcontainer'>
         <div>
            <form onSubmit={handlesubmit}>
            <div className='formapp'>
                {formdata.Category?<label >{datas[4]}:</label>:''}
                <input type='text' value={formdata[datas[4]]}></input>
              </div>
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
                <label>Slot Left:</label>
                <input type='text' value={Number(availcounter)-counter} name=''></input>
              </div>
              <div  className='formapp'>
                <label>Time:</label>
                <input type='text' value={timeschedule} name=''></input>
              </div>
             
              <div  className='formapp'>
                <button type='submit'>Generate</button>
              </div>
            </form>
            </div>
        </div>
      </div>
    </div>
  )
}
