import { Link, useParams, useHistory, __RouterContext } from 'react-router'
import { useEffect, useState } from 'react'

function VolunteerDetail({deleteVolunteer}) {
    const [volunteer, setVolunteer] = useState({contacts:[]})
    const [errors, setErrors] = useState()

    const params = useParams()
    const history = useHistory()

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
              history.push('/')
            } else {
              res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
            }
          })
    }

    const handleSignUp = () => {
        fetch(`/signups`,{
          method:'POST',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify({volunteer_id:id, user_id:1, price:1})
        })
        .then(res => {
          if(res.ok){
            history.push('/users/1')
          } else {
            res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
          }
        })
      }

      if(loading) return <h1>Loading</h1>
      if(errors) return <h1>{errors}</h1>

      const {id, title, date, location, about, img_url, contacts} = volunteer

      return (
        <div>
            <h1>{title}</h1>
                <div>
                    <div>
                        <h3>Date: {date}</h3>
                        <h3>Location: {location}</h3>
                        <h3>About: {about}</h3>
                        <h4>Contacts:</h4>
                        <ul>{contacts.map(contact => <li>{contact.name} : {contact.email}</li>)}</ul>
                    </div>
                    <img src={img_url}/>
                </div>
                <button><Link to={`/volunteers/${id}/edit`}>Edit Volunteer</Link></button>
                <button onClick={handleDelete}>Delete Volunteer</button>
                <button onClick={handleSignUp} >Sign Up!</button>
        </div>
      )
    }

    export default VolunteerDetail