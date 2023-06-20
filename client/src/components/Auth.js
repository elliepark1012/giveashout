import React, {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'

function Auth({setCurrentUser}) {

    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        username:'',
        email:'',
        password: '',
        password_confirmation: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }

      function onSubmit(e){
        e.preventDefault()
        const userCreds = {
           ...formData
        }
       
        fetch(`/users`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(userCreds)
        })
        
        .then(res => {
            if(res.ok){
                setFormData({
                    username:'',
                    email:'',
                    password: '',
                    password_confirmation: ''
                })
                res.json().then(setCurrentUser)
                navigate(`/users/${userCreds.id}`)
                }
            else {
                res.json().then((errorData) => setErrors(Object.entries(errorData.errors).map(e => `${e[0]} ${e[1]}`)))
          
            }
           
        })
    }

    return (
        <div className='formbox'> 
        <form onSubmit={onSubmit}>
        <h5>SIGN UP WITH US</h5>
        <div className='errorbox'>{errors?errors.map(e=> <div className='error'>{e}</div>):null}</div>
        <label>Username</label>  
            <input type='text' 
                   name='username' 
                   value={formData.username} 
                   onChange={handleChange} />
        <label> Email</label>
            <input type='text' 
                   name='email' 
                   value={formData.email} 
                   onChange={handleChange} />
        <label>Password</label>
            <input type='password' 
                   name='password' 
                   value={formData.password} 
                   onChange={handleChange} />
         <label> Password Confirmation </label>
           <input type='password' 
                  name='password_confirmation' 
                  value={formData.password_confirmation} 
                  onChange={handleChange} />
       
        <button type='submit'>Welcome!</button>
      </form>
      <br></br>
      <br></br>
        <Link className='loginlink' to='/login' replace><h2>Have an account already? Log in!</h2></Link>
        </div>
    )
}

export default Auth