import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


function EditSignupForm({ editSignup }) {

  const { id } = useParams()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
       participants:'',
       extras:'',
       donation: 1
  })


  useEffect(() => {
    fetch(`/signups/${id}`)
      .then(res => res.json())
      .then(setFormData)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  function onSubmit(e) {
    e.preventDefault()
    console.log(id)
    fetch(`/signups/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(res => {
        if (res.ok) {
          res.json().then(editSignup)
          navigate('/signups')
        } else {
          // res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
          alert('Please Contact Admin')
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

export default EditSignupForm 