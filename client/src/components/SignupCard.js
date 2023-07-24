import {Link} from 'react-router-dom'


function SignupCard({signup}) {
    console.log(signup)
    const {title, donation, participants, extras, id} = signup

    console.log("SIGNUP:", signup)

    return (
        <Link className="cardlink" to={`/signups/${id}`}>
        <div className='card'>
            <h2>{title}</h2>
            <p>Donation $ {donation}</p>
            <p>participants: Total {participants}</p>
            <p>Who's Coming with you? {extras} </p>              
        </div>
        </Link>

    )
}

export default SignupCard