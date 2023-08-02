import React, { useContext } from 'react';
import UserContext from '../UserContext';

function UserPage( ) {
    const {currentUser} = useContext(UserContext);

    console.log(currentUser)
    
    return (
        <div className="userpage">
        <h1>Hello, {currentUser.username} !</h1>
        <h2> {currentUser.email}</h2>
        <h1> Your Volunteer List</h1>

        <ul>
            {currentUser.opportunities.map(opportunity => (
            <div>
                <h2>{opportunity.title}</h2>
                <h3>Contact Info {opportunity.contact_name} </h3>
                <h3>{opportunity.contact_email} </h3>
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