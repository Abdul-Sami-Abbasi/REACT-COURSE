import React from 'react'
import { useState } from 'react'

const Profile = () => {

    const [profile, setProfile] = useState({
        name: '',
        age: '',
    })

    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setProfile((prev) => ({
            ...prev, [name]: value 
            })
            )

    }

  return (
    <div>
        <h1>Profile Updation Program</h1>

        <input type="text" placeholder='Enter Name' name='name' value={profile.name} onChange={handleChange}/>
        <input type="number" placeholder='Enter Age' name='age' value={profile.age} onChange={handleChange}/>

        <h1>Profile After Updation...</h1>
        <h1>Name: {profile.name}</h1>
        <h1>Age: {profile.age}</h1>
    </div>
  )
}

export default Profile