import SignupCard from './SignupCard'

function SignupContainer({ signups }) {


    return(
        <div>
            <title className='title' >Give A Shout</title>
            <div className='cardcontainer'>
                {signups.map(signup => <ul key={signup.id} ><SignupCard key={signup.id} signup={signup} /></ul>)}
            </div>
        </div>
    )
    
}

export default SignupContainer
