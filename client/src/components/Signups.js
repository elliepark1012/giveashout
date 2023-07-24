import SignupContainer from './SignupContainer'
import { useEffect } from 'react'
import React, { useContext } from 'react';
import UserContext from '../UserContext';

function Signups({ setSignups }){

  const currentUser = useContext(UserContext);



  // useEffect(() => {
  //   fetch('/signups')
  //     .then(res => {
  //       if (res.ok) {
  //           console.log("yes")
  //         return res.json();
  //       } else {
  //         throw new Error('Network response was not ok');
  //       }
  //     })
  //     .then(signups => {
  //       setSignups(signups);
  //       console.log(signups)
  //     })
  //     .catch(error => {
  //       // Handle the error appropriately (e.g., display an error message)
  //       console.log('Error fetching signups:', error);
  //     });
  // }, []);

 
  const deleteSignup = (id) => setSignups(current => current.filter(s => s.id !== id))

    return(
        <div>
            <SignupContainer signups={currentUser.signups} deleteSignup={deleteSignup} />
        </div>
    )
}

export default Signups