import React, { useState,useEffect } from 'react'
import './Slot.css'
import { Link, Route, Router, Switch } from "react-router-dom";
export default function Slot() {
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
  const select = (e) => {
    setselected(()=>{
    })
  }
  const selectA = (selected) => {
    setselected(selected+1)
    
  }
  console.log(selected)
  
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
          <div><button onClick={selectA} className='slot slotA'>{selected.slotA}/10</button></div>
          <div><button onClick={select} className='slot slotB'>{selected.slotB}/10</button></div>
          <div><button onClick={select} className='slot slotC'>{selected.slotA}/10</button></div>
          <div><button onClick={select} className='slot slotD'>{selected.slotA}/10</button></div>
          <div><button onClick={select} className='slot slotE'>{selected.slotA}/10</button></div>
          <div><button onClick={select} className='slot slotF'>{selected.slotA}/10</button></div>
          <div><button onClick={select} className='slot slotG'>{selected.slotA}/10</button></div>
          <div><button onClick={select} className='slot slotH'>{selected.slotA}/10</button></div>
        </div>
      </div>
    </>
  )
}
