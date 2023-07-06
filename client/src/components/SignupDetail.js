import  { Link, useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import UserContext from '../UserContext';

function SignupDetail({ deleteSignup }) {
    const currentUser = useContext(UserContext);
    const [signup, setSignup] = useState({})
    const [errors, setErrors] = useState()
    const {id, participants, experience, names, title, price} = signup

    const params = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        fetch(`/signups/${params.id}`)
        .then(res => {
            if(res.ok){
                res.json().then(data => setSignup(data))
            } else {
                res.json().then(data => setErrors(data.error))
            }
            console.log(params)
        })
    },[])

    function handleDelete(){
        fetch(`/signups/${params.id}`,{
            method:'DELETE',
            headers: {'Content-Type': 'application/json'}
          })
          .then(res => {
            if(res.ok){
              deleteSignup(id)
            } else {
              alert('Please Contact Admin')
              res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
            }
            navigate('/signups')
          })
    }

      if(errors) return <h1>{errors}</h1>

      return (
        <div>
                <div className='carddetail'>
                    <div>
                    <h1 className='cardlink'>{title}</h1>
                    <p>price:{price}</p>
                    <p>participants: {participants}</p>
                    <p>experience: {experience}</p>    
                    <p>Full Names: {names}</p>      
                    </div>

                <div className='button-container'>

                    <button><Link className='buttonlink' to={`/signups/${id}/edit`}>Edit Details</Link></button>
                    <button onClick={handleDelete}><Link to={`/signups`}>Next Time</Link></button>
                </div> 
                </div>
        </div>
      )
    }

    export default SignupDetail