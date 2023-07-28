import SignupCard from './SignupCard'
import React, { useContext } from 'react';
import UserContext from '../UserContext';

function SignupContainer() {
    const {currentUser} = useContext(UserContext);

    const signups = currentUser.signups

    return(
        <div>
            <title className='title' >Give A Shout</title>
            <div className='cardcontainer'>
                {signups && signups.map(signup => <ul key={signup.id} ><SignupCard key={signup.id} signup={signup} /></ul>)}
            </div>
        </div>
    )
    
}

export default SignupContainer
