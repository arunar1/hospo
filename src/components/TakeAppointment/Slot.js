import React from 'react'
import './Slot.css'
import { Link, Route, Router, Switch } from "react-router-dom";
export default function Slot() {
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
          <div className='slot slotA'>09:00-09:30</div>
          <div className='slot slotB'>09:30-10:00</div>
          <div className='slot slotC'>10:00-10:30</div>
          <div className='slot slotD'>10:30-11:00</div>
          <div className='slot slotE'>11:00-11:30</div>
          <div className='slot slotF'>11:30-12:00</div>
          <div className='slot slotG'>12:00-12:30</div>
          <div className='slot slotH'>12:30-01:00</div>
        </div>
      </div>
    </>
  )
}
