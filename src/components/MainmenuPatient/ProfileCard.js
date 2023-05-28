import React from 'react'
import './ProfileCard.css'

export default function ProfileCard() {
 
  const user=JSON.parse(window.localStorage.getItem("userid"))


  return (
    <div>
        <div className='profileCard'>
            <ul>
                <li>Name <span>: {user.name}</span></li>
                <li>Age <span>:{user.age}</span></li>
                <li>Gender <span>: {user.gender}</span></li>
                <li>Email Id<span>: {user.email}</span></li>
                <li>Phone No <span>: {user.phoneno}</span></li>
                <li>House Name <span>: {user.housename}</span></li>
                <li>Street Name <span>: {user.streetname}</span></li>
                <li>District <span>: {user.district}</span></li>
                <li>Pincode<span>: {user.pincode}</span></li>
            </ul>
        </div>
    </div>
  )
}
