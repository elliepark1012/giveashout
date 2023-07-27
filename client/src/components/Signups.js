import SignupContainer from './SignupContainer'
import React, { useContext } from 'react';
import UserContext from '../UserContext';

function Signups({ setSignups }){

  const currentUser = useContext(UserContext);

  console.log(currentUser)

 
  const deleteSignup = (id) => setSignups(current => current.filter(s => s.id !== id))

    return(
        <div>
            <SignupContainer signups={currentUser.signups} deleteSignup={deleteSignup} />
        </div>
    )
}

export default Signups