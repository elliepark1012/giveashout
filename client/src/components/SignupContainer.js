import SignupCard from './SignupCard'


function SignupContainer({signups}) {
   
    const signupsArray = Array.isArray(signups) ? signups: [signups];

    return(
        <div>
            <title className='title' >Give A Shout</title>
            <div className='cardcontainer'>
            <ul>
                {signupsArray && signupsArray.map(signup => <li key={signup.id}><SignupCard signup={signup} /></li>)}
            </ul>
            </div>
        </div>
    )
    
}

export default SignupContainer
