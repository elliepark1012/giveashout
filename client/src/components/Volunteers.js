import VolunteerContainer from './VolunteerContainer'
import { useState, useEffect } from 'react'

function Volunteers({currentUser}){

    const [volunteers, setVolunteers] = useState([])
    // const [errors, setErrors] = useState(false)

    useEffect(() => {
        fetch('/volunteers')
        .then(res => {
          if(res.ok) {
            res.json().then(volunteers => {
              setVolunteers(volunteers)
              // updateUser(user)
              // fetchVolunteer()
            })
          }
        })
      }, [setVolunteers])

        const addVolunteer = (volunteer) => setVolunteers(current => [...current, volunteer])

  const updateVolunteer = (updatedVolunteer) => setVolunteers(current => {
    return current.map(volunteer => {
      if (volunteer.id === updatedVolunteer.id){
        return updatedVolunteer 
      } else {
        return volunteer 
      }
    })
  })

  const deleteVolunteer = (id) => setVolunteers(current => current.filter(v => v.id !== id))



    return(
        <div>
            <VolunteerContainer volunteers={volunteers}  deleteVolunteer={deleteVolunteer} currentUser={currentUser}/>
        </div>
    )
}

export default Volunteers