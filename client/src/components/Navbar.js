import { Link, useNavigate } from 'react-router-dom'
import logo from '../logo.jpeg'
import React, { useContext } from 'react';
import UserContext from '../UserContext';

function NavBar( { updateUser } ) {

  const currentUser = useContext(UserContext);
  const navigate = useNavigate()

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        updateUser(false);
        alert("See you again (ʘ‿ʘ)ノ✿")
        navigate('/')
      }
    })
  }

    return (
        <>
          <div className="navbar">
            <ul>
                <li><Link className="navlink" to='/'> Home</Link></li>
                <li><Link className="navlink" to='/opportunities'>Opportunities</Link></li>   
                {!currentUser? (<></>
                ) : (
                <>
                <li><Link className="navlink" to='/users/:id'> My Work</Link></li>
                <li><Link className="navlink" to='/signups'>My signups</Link></li>
                <button className="signout" onClick={handleLogoutClick}>Sign out</button>
                </>
                )}
            </ul>
          </div>
          <img src={logo} className='logo'/>
        </>        
    )
}

export default NavBar;