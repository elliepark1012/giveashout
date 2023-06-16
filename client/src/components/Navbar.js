import {Link} from 'react-router-dom'
import logo from '../logo.jpeg'
function NavBar() {
    return (
        <>
        <div className="navbar">
            <ul>
                <li><Link className="navlink" to='/volunteers/new'>New Volunteer</Link></li>
                <li><Link className="navlink" to='/'> Home</Link></li>
           </ul>
        </div>
        <img src={logo}/>
        </>
    )
}

export default NavBar;