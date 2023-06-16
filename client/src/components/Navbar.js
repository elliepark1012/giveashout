import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <ul>
                <li><Link to='/volunteers/new'>New Volunteer</Link></li>
                <li><Link to='/'> Home</Link></li>
           </ul>
        </div>
    )
}

export default NavBar;