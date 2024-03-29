import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function OpportunityForm({ addOpportunity }) {
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        location: '',
        about: '',
        img_url: '',
        contact_name:'',
        contact_email:''
    })
    const [errors, setErrors] = useState()
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    function onSubmit(e) {
        e.preventDefault()
        fetch('/opportunities', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(addOpportunity)
                    navigate('/opportunities')
                }
                else {
                    res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
                    alert('Please Contact Admin')
                }
            })
    }

    return (
        <div className='formbox'>

            <form onSubmit={onSubmit}>

                <h5>ADD NEW VOLUNTEER</h5>
                {errors ? errors.map(e => <div className='error'>{e}</div>) : null}
                <label>Title</label>
                <input type='text' name='title' value={formData.title} onChange={handleChange} />

                <label>Date</label>
                <input type='text' name='date' value={formData.date} onChange={handleChange} />

                <label>Location</label>
                <input type='text' name='location' value={formData.location} onChange={handleChange} />

                <label>Image</label>
                <input type='text' name='img_url' value={formData.img_url} onChange={handleChange} />

                <label>About</label>
                <textarea type='text' rows='4' cols='50' name='about' value={formData.about} onChange={handleChange} />

                <label>Contact Name</label>
                <textarea type='text' rows='4' cols='50' name='contact_name' value={formData.contact_name} onChange={handleChange} />

                <label>Contact Email</label>
                <input type='text' rows='4' cols='50' name='contact_email' value={formData.contact_email} onChange={handleChange} />

                <button type='submit'>Add A New Volunteer Opportunity</button>
            </form>
        </div>
    )
}

export default OpportunityForm