import React from 'react'
import './ConprofileCard.css'

export default function ConprofileCard(props) {
 
  const user=props.data;  

  return (
    <div>
        <div className='conprofileCard'>
            <ul>
                <li>Doctor Name <span>: {user.name}</span></li>
                <li>Category<span>: {user.category}</span></li>
                {/* <li>License<span>: {user.licenceId}</span></li> */}
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
