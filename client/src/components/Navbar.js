import {Link} from 'react-router-dom'
import logo from '../logo.jpeg'
function NavBar({updateUser}) {

    const handleLogOut = () => {
        fetch('/logout', {
            method: 'DELETE'
        })
        .then(res => {
            if(res.ok){
                updateUser(false)
            }
        })
    }
    return (
        <>
        <div className="navbar">
            <ul>
                <li><Link className="navlink" to='/volunteers/new'>New Volunteer</Link></li>
                <li><Link className="navlink" to='/'> Home</Link></li>
                <li><Link className="navlink" to='/users/new'> New Member</Link></li>
                <li><Link className="navlink" to='/login'> Login</Link></li>
           </ul>
           <button onClick={handleLogOut}>Log Out</button>
        </div>
        <img src={logo} className='logo'/>
        </>
    )
}

export default NavBar;