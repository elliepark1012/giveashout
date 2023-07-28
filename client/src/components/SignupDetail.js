import  { Link, useParams, useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import UserContext from '../UserContext';

function SignupDetail({ deleteSignup }) {
    const {currentUser} = useContext(UserContext);

    const { id } = useParams();
    const navigate = useNavigate()

    const signup = currentUser.signups.find(signup => signup.id === parseInt(id));

    console.log(signup)
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
              res.json().then(data => console.log(data))
            }
            navigate('/signups')
          })
    }


      return (
        <div>
                <div className='carddetail'>
                    <div>
      
                    <h2 className='cardlink'>{signup.title}</h2>
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