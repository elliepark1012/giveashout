function UserPage({ currentUser }) {
    const params = useParams()
    const {id} = params
    useEffect(()=>{
        fetch(`/users/${id}`)
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    setUser(user)
                })
            }
        })
       
    },[])
   


    return (
        <div>
        <h1>{currentUser.username}</h1>
        <h3>Tickets</h3>
        <ul>
            {currentUser.signups.map(signup => (
            <li>
                <h2>{signup.volunteer.title}</h2>
                <p>Price: {signup.price}</p>
            </li>
            ))}
        </ul>
    </div>
    )
 
    
   
    
  }
  

export default UserPage