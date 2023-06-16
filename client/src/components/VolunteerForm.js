import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function VolunteerForm({addVolunteer}) {
    const [formData, setFormData] = useState({
        title:'',
        date:'',
        location:'',
        about:'',
        img_url:''
    })
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value })
    }

    function onSubmit(e){
        e.preventDefault()
        fetch('http://localhost:3000/volunteers',{
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify({...formData,ongoing:true})
        })
        .then(res => {
            if(res.ok){
                res.json().then(data => {
                    addVolunteer(data)
                    navigate('/')
                })
            } else {
                res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
            }
        })
    }

        return (
            <div className='formbox'>
            
            <form  onSubmit={onSubmit}>
            
              <h5>ADD NEW VOLUNTEER</h5>
              {errors?errors.map(e => <div className='error'>{e}</div>) : null}
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
                
                <button type='submit'>Add New Volunteer</button>
            </form>
        </div>
        )
}

export default VolunteerForm