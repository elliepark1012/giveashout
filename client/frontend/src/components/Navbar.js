import {Link} from 'react-router'

function NavBar() {
    return (
        <Nav>
            <ul>
                <li><Link to='/volunteers/new'>New Volunteer</Link></li>
                <li><Link to='/'> Home</Link></li>
           </ul>
        </Nav>
    )
}

export default NavBar;