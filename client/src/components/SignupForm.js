import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignupForm({ addSignup, volunteer_id, user_id, title }) {

    const navigate = useNavigate() 

    const [formData, setFormData] = useState({
       donation:1,
       participants:'',
       extras:'',
       user_id:user_id,
       volunteer_id:volunteer_id,
       title: title
    })

    console.log('OMFG', title)


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
                    navigate('/opportunities')
                    
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

                <label>Participants</label>
                <input type='number' name='participants' value={formData.participants} onChange={handleChange} />

                <br></br>
                <label>Full Names of Other Participants</label>
                <input className='nameinput' type='text' name='extras' value={formData.extras} onChange={handleChange} />

                <button type='submit'>Sign Up for the volunteer Opportunity</button>
            </form>
        </div>
    )
}

export default SignupForm