import  { Link, useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import UserContext from '../UserContext';

function SignupDetail({ deleteSignup, signups }) {
    const currentUser = useContext(UserContext);

    const [errors, setErrors] = useState()
    const { id } = useParams();
    const navigate = useNavigate()
  
    console.log(currentUser)

    const signup = signups.find(signup => signup.id === parseInt(id));

    if (!signup) {
      return <div>Sign Up not found</div>;
    }

    function handleDelete(){
        fetch(`/signups/${id}`,{
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
      
                    <h2 className='cardlink'>{signup.opportunity.title}</h2>
                     <p>Donation $ {signup.donation}</p>
                     <p>participants: Total {signup.participants}</p>
                       <p>Who's Coming with you? {signup.extras} </p>    
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