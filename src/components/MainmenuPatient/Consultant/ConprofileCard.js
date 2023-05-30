import React from 'react'
import './ConprofileCard.css'

export default function ConprofileCard() {
 
  const user=JSON.parse(window.localStorage.getItem("userid"))
  

  return (
    <div>
        <div className='conprofileCard'>
            <ul>
                <li>Hospital Name <span>: {user.hospitalname}</span></li>
                <li>Hospital Type<span>: {user.hospitaltype}</span></li>
                <li>Phone No <span>:{user.phoneno}</span></li>
                <li>Email Id<span>: {user.email}</span></li>
                <li>Street Name <span>: {user.streetname}</span></li>
                <li>District <span>: {user.district}</span></li>
                <li>Pincode<span>: {user.pincode}</span></li>
            </ul>
        </div>
    </div>
  )
}
