import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Also the frontend is sending the user_id to the backend but the backend is the keeper of the logged in user.  What you are doing allows potential for hacking

function SignupforVolunteerForm({ addSignup, volunteer_id, user_id, title }) {
    const [formData, setFormData] = useState({
       price:1,
       experience:'',
       participants:'',
       names:'',
       user_id:user_id,
       volunteer_id:volunteer_id,
       title: title
    })

    console.log('OMFG', title)

    const [errors, setErrors] = useState()
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value, title:title, volunteer_id:volunteer_id })
    }

    function onSubmit(e) {
        e.preventDefault()
        fetch('/signups', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(addSignup)
                    navigate('/volunteers')
                    
                }
                else {
                    res.json().then(data => console.log(data))
                }
            })
    }

    return (
        <div className='signupformbox'>

            <form onSubmit={onSubmit}>

                <h5>SIGN UP FOR THE VOLUNTEER</h5>
                <h4>There's a $1 Donation Fee as a deposit for signing up! Thank you for your support.</h4>
                {errors ? errors.map(e => <div className='error'>{e}</div>) : null}
                <label>Participants</label>
                <input type='number' name='participants' value={formData.participants} onChange={handleChange} />

                <label>Experiences</label>
                <input type='number' name='experience' value={formData.experience} onChange={handleChange} />
                <br></br>
                <label>Full Names of Participants</label>
                <input className='nameinput' type='text' name='names' value={formData.names} onChange={handleChange} />

                <button type='submit'>Sign Up for the volunteer</button>
            </form>
        </div>
    )
}

export default SignupforVolunteerForm