import React, { useState, useEffect } from 'react'
import { useParams  } from 'react-router-dom'

function EditVolunteerForm({updateVolunteer}) {
    const [formData, setFormData] = useState({
        title:'',
        date:'',
        location:'',
        about:'',
        img_url:''
    })
    const [errors, setErrors] = useState()

    const {id} = useParams()
        useEffect(() => {

        },[])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value })
        }

    
  function onSubmit(e){
    e.preventDefault()
    fetch(`/volunteers/${id}`,{
      method:'PATCH',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(formData)
    })
    .then(res => {
      if(res.ok){
        res.json().then(updateVolunteer)
      } else {
        res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
      }
    })
 }
    return (
        <div>
            {errors?errors.map(e => <div>{e}</div>) : null}
            <form onSubmit={onSubmit}>
                <label>Title</label>
                <input type ='text' name='title' value={formData.title} onChange={handleChange} />

                <label>Date</label>
                <input type ='text' name='date' value={formData.date} onChange={handleChange} />

                <label>Location</label>
                <input type ='text' name='location' value={formData.location} onChange={handleChange} />

                <label>Image</label>
                <input type='text' name='img_url' value={formData.img_url} onChange={handleChange} />

                <label>About</label>
                <textarea type='text' rows='4' cols='50' name='about' value={formData.about} onChange={handleChange} />
                
                <input type='submit' value='Update Volunteer' />
            </form>
            </div>
    )
}

export default EditVolunteerForm 