import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function NewMember() {
    const [formData, setFormData] = useState({
        username:'',
        email:'',
        password: '',
        password_confirmation: ''
    })
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const {username, email, password, password_confirmation} = formData

    function onSubmit(e){
        e.preventDefault()
        const user = {
            username,
            email,
            password,
            password_confirmation
        }
       
        fetch(`/users`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    navigate(`/users/${user.id}`)
                })
            }else {
                res.json().then(json => setErrors(Object.entries(json.errors)))
            }
        })
       
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }
    return (
        <div className='formbox'> 
        <form onSubmit={onSubmit}>
        <h5>SIGN UP WITH US</h5>
        {errors?errors.map(e => <div className='error'>{e[0]+': ' + e[1]}</div>):null}
        <label>
          Username
          </label>  
          <input type='text' name='username' value={username} onChange={handleChange} />
       
        <label>
         Email
         </label>
        <input type='text' name='email' value={email} onChange={handleChange} />
        <label>
         Password
         </label>
        <input type='password' name='password' value={password} onChange={handleChange} />
         <label>
         Password Confirmation
         </label>
        <input type='password' name='password_confirmation' value={password_confirmation} onChange={handleChange} />
       
        <button type='submit'>Welcome!</button>
      </form>
      
        </div>
    )
}

export default NewMember