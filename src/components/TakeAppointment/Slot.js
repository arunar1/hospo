import React, { useState, useEffect } from 'react'
import './Slot.css'
import { Link, Route, Router, Switch } from "react-router-dom";
export default function Slot() {
  const [activeButton, setActiveButton] = useState(0);
  let active;



  const [selected, setselected] = useState({
    "slotA": 0,
    "slotB": 0,
    "slotC": 0,
    "slotD": 0,
    "slotE": 0,
    "slotF": 0,
    "slotG": 0,
    "slotH": 0,


  })

  const formdata = JSON.parse(window.localStorage.getItem('appdeatail'));
  console.log(formdata)



  const datas = [];

  for (const item in formdata) {
    datas.push(item)
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
                <input type='text' value='' name=''></input>
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
