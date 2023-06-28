import VolunteerContainer from './VolunteerContainer'
import { useEffect } from 'react'
import React, { useContext } from 'react';
import UserContext from '../UserContext';

function Volunteers({ volunteers, setVolunteers }){

  const currentUser = useContext(UserContext);

  useEffect(() => {
    fetch('/volunteers')
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .then(volunteers => {
        setVolunteers(volunteers);
      })
      .catch(error => {
        // Handle the error appropriately (e.g., display an error message)
        console.error('Error fetching volunteers:', error);
      });
  }, []);

 
  const deleteVolunteer = (id) => setVolunteers(current => current.filter(v => v.id !== id))

    return(
        <div>
            <VolunteerContainer volunteers={volunteers}  deleteVolunteer={deleteVolunteer} currentUser={currentUser}/>
        </div>
    )
}

export default Volunteers