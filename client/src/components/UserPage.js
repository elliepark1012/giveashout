import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
function UserPage(){
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)
    
    const params = useParams()
    const {id} = params
    useEffect(()=>{
        fetch(`/users/${id}`)
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    setUser(user)
                    setLoading(false)
                })
            }else {
                res.json().then(data => setErrors(data.errors))
            }
        })
    },[])
 

    if(loading) return <h1>Loading</h1>
    if(errors) return <h1>{errors}</h1>


    return (
        <div>
            <h1>{user.username}</h1>
            <h3>Sign Up List</h3>
            <ul>
                {user.signups?.map(signup => (
                <li key={signup.id}>
                    <h2>{signup.volunteer.title}</h2>
                    {/* <p>Date: {signup.volunteer.date}</p>
                    <p>Location: {signup.volunteer.location}</p>
                    <p>Donation: {signup.price}</p> */}
                </li>
                ))}
            </ul>
        </div>
    )
}

export default UserPage