import SignupContainer from './SignupContainer'
import React, { useContext } from 'react';
import UserContext from '../UserContext';

function Signups(){

  const {currentUser} = useContext(UserContext);

    return(
        <div>
            <SignupContainer signups={currentUser.signups} />
        </div>
    )
}

export default Signups