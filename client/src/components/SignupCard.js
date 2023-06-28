import {Link} from 'react-router-dom'


function SignupCard({signup}) {
    const {price, participants, experience, title, id} = signup

    console.log("SIGNUP:", signup)

    return (
        <Link className="cardlink" to={`/signup/${id}`}>
        <div className='card'>
             <h2>{title}</h2>
            <p>price:{price}</p>
            <p>participants: {participants}</p>
            <p>experience: {experience}</p>              
        </div>
        </Link>

    )
}

export default SignupCard