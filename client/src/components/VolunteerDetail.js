import  { Link, useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import UserContext from '../UserContext';

function VolunteerDetail({ deleteVolunteer}) {
     const currentUser = useContext(UserContext);
    const [volunteer, setVolunteer] = useState({contacts:[]})
    const [errors, setErrors] = useState()
    const {id, title, date, location, about, img_url, contacts} = volunteer

    const cid = currentUser.id

    const params = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        fetch(`/volunteers/${params.id}`)
        .then(res => {
            if(res.ok){
                res.json().then(data => setVolunteer(data))
            } else {
                res.json().then(data => setErrors(data.error))
            }
        })
    },[])

    function handleDelete(){
        fetch(`/volunteers/${params.id}`,{
            method:'DELETE',
            headers: {'Content-Type': 'application/json'}
          })
          .then(res => {
            if(res.ok){
              deleteVolunteer(id)
            } else {
              alert('Please Contact Admin')
              res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
            }
            navigate('/volunteers')
          })
    }

    const handleSignUp = () => {
        fetch(`/signups`,{
          method:'POST',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify({volunteer_id:id, user_id:cid, price:1})
        })
        .then(res => {
          if(res.ok){
            navigate('/volunteers')
          } else {
            res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
          }
        })
      }

      if(errors) return <h1>{errors}</h1>

      return (
        <div>
                <div className='button-container'>
                    <button onClick={handleSignUp} >Sign Up!</button>
                </div> 
                <div className='carddetail'>
                    <div>
                    <h3>There's a Signup fee $1 for Donation.</h3>
                    <h1 className='cardlink'>{title}</h1>
                    <img className='cardimage' src={img_url}/>
                        <h3>Date: {date}</h3>
                        <h3>Location: {location}</h3>
                        <h3 className='cardabout'>About: {about}</h3>
                        <h4>Contacts:</h4>
                        <ul className='contact'>{contacts.map(contact => <li key={contact}>{contact.name} : {contact.email}</li>)}</ul>
                    </div>
                    -------Admin Only------
                <div className='button-container'>
                    <button><Link className='buttonlink' to={'/volunteers/new'}>New Volunteer</Link></button>
                    <button><Link className='buttonlink' to={`/volunteer/${id}/edit`}>Edit Volunteer</Link></button>
                    <button onClick={handleDelete}><Link to={`/volunteers`}>Delete Volunteer</Link></button>
                </div> 
                </div>
        </div>
      )
    }

    export default VolunteerDetail