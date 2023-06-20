import {Link} from 'react-router-dom'
import logo from '../logo.jpeg'
import Home from './Home'
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
                <li><Link className="navlink" to='/'> Home</Link></li>
                <li><Link className="navlink" to='/volunteers/new'>Add New Volunteer</Link></li>
                <li><Link className="navlink" to='/users/new'> New Member</Link></li>
                <li><Link className="navlink" to='/login'> Login</Link></li>
                <li><Link className="navlink" to='/users/:id'> My WORk</Link></li>
                <li><button onClick={handleLogOut}>Log Out</button></li>
           </ul>

        </div>
        <img src={logo} className='logo'/>
       
        </>
    )
}

export default NavBar;