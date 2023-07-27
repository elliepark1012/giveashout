import SignupCard from './SignupCard'

function SignupContainer({signups, deleteSignup }) {

    console.log(signups)

    return(
        <div>
            <title className='title' >Give A Shout</title>
            <div className='cardcontainer'>
                {signups.map(signup => <ul key={signup.id} ><SignupCard key={signup.id} signup={signup} deleteSignup={deleteSignup}/></ul>)}
            </div>
        </div>
    )
    
}

export default SignupContainer
