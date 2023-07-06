import {Link} from 'react-router-dom'


function SignupCard({signup}) {
    const {price, participants, experience, id} = signup

    console.log("SIGNUP:", signup)

    return (
        <Link className="cardlink" to={`/signups/${id}`}>
        <div className='card'>
             <h2>{signup.volunteer.title}</h2>
            <p>price: $ {price}</p>
            <p>participants: Total {participants}</p>
            <p>experience: {experience} Times </p>              
        </div>
        </Link>

    )
}

export default SignupCard