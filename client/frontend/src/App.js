import './App.css';
import { Route, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './components/Home'
import VolunteerForm from './components/VolunteerForm'
import EditVolunteerForm from './components/EditVolunteerForm'
import Navbar from './components/Navbar'
import VolunteerDetail from './components/VolunteerDetail'
import NotFound from './components/NotFound'

function App() {
  const [volunteers, setVolunteers] = useState([])
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    fetch('volunteers')
    .then(res => {
      if(res.ok){
        res.json().then(setVolunteers)
      } else {
        res.json().then(data => setErrors(data.error))
      }
    })
  },[])

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

  if(errors) return <h1>{errors}</h1>

  return (
  <>
    <Navbar /> 
      <Switch>
        
        <Route path='/volunteers/new'>
          <VolunteerForm addVolunteer={addVolunteer} />
        </Route>

        <Route path='/volunteers/:id/edit'>
          <EditVolunteerForm updateVolunteer={updateVolunteer} />
        </Route>
        
        <Route path='/volunteers/:id/'>
          <VolunteerDetail deleteVolunteer={deleteVolunteer} />
        </Route>

        <Route exact path='/'>
          <Home volunteers={volunteers} />
        </Route>

        <Route>
          <NotFound />
        </Route>
        
      </Switch>
  </>
  );
}

export default App;
