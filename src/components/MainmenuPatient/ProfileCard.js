import React from 'react'
import './ProfileCard.css'

export default function ProfileCard(props) {
  let user=props.data;
  console.log(user);



  return (
    <div>
        <div className='profileCard'>
            <ul>
                {/* <li>Name :{user.name}</li>
                <li>Age :{user.age}</li>
                <li>Email Id:{user.email}</li>
                <li>Phone No :{user.phoneno}</li>
                <li>District :{user.district}</li>
                <li>Pincode:{user.pincode}</li> */}
            </ul>
        </div>
    </div>
  )
}
