function UserPage({ currentUser }) {

    const volunteer = currentUser.volunteers.map((v) => {return v})
    // const list = volunteer.map((v) => v.title)
    console.log(volunteer)

    return (
        <>
       <h1>{currentUser.username}</h1>
       {/* <h2>{list}</h2> */}
       </>
    )
 
    
   
    
  }
  

export default UserPage