import React, { useContext } from 'react';
import UserContext from '../UserContext';

function UserPage( ) {
    const currentUser = useContext(UserContext);

    console.log(currentUser)
    
    return (
        <div className="userpage">
        <h1>Hello, {currentUser.username} !</h1>
        <h2> {currentUser.email}</h2>
        <h1> Your Volunteer List</h1>
        <ul>
            {currentUser.signups.map(signup => (

            <div>
                <h2>{signup.title}</h2>
                <h3>{signup.}</h3>
                <h3>{signup.volunteer.location}</h3>
                <h3>Donation: {signup.donation} (Donation cannot be refunded.)</h3>
                <h3>How many people coming with you? (including yourself): {signup.participants} people </h3>
                <h3>Hoe many volunteer work did you do before? : {signup.experience} times </h3>
                <h3>Full names of participants: {signup.names} </h3>
            </div>
            ))}
        </ul>

        <h1>Thank you</h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </div>
    )
 
    
   
    
  }
  

export default UserPage