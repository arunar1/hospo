import React, { useState, useEffect } from 'react'
import './Slot.css'
import { Link, Route, Router, Switch } from "react-router-dom";
export default function Slot() {
  


  const formdata = JSON.parse(window.localStorage.getItem('appdeatail'));
  console.log(formdata)
  const [timeschedule,settimeschedule]=useState()
  

  const choosetime=(e)=>{
      settimeschedule(e.target.value)
    
  }


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
              <button onClick={choosetime} value={btn.time} className='choosetime' id={btn.id}>{btn.time}</button>
             ))
          }
        </div>
        <div className='formcontainer'>
         <div>
            <form>
              <div className='formapp'>
                <label >{datas[3]}:</label>
                <input type='text' value={formdata[datas[3]]}></input>
              </div>
              <div className='formapp'>
                <label>{datas[0]}:</label>
                <input type='text' value={formdata[datas[0]]}></input>
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
                <button type='submit'>Generate</button>
              </div>
            </form>
            </div>
        </div>
      </div>
    </>
  )
}
