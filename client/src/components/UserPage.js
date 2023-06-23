function UserPage({ currentUser }) {


    return (
        <div className="userpage">
        <h1>{currentUser.username}</h1>
        <h1> Volunteer List</h1>
        <ul>
            {currentUser.signups.map(signup => (
            <li>
                <h2>{signup.volunteer.title}</h2>
                <h2>{signup.volunteer.date}</h2>
                <h2>{signup.volunteer.location}</h2>
                <h2>Donation: {signup.price}</h2>
                <h3>Donation cannot be refunded.</h3>
            </li>
            ))}
        </ul>
        Thank you
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </div>
    )
 
    
   
    
  }
  

export default UserPage