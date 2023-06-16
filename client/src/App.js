import './App.css';
import { Route, Routes, Link } from 'react-router-dom'
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
    fetch('/volunteers')
    .then(res => {
      if(res.ok){
        res.json().then(volunteers => setVolunteers(volunteers))
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
  <div id="app">
    <Navbar/>
      <Routes>
        <Route path='/volunteers/new' element={ <VolunteerForm addVolunteer={addVolunteer} />} /> 
        <Route path='/volunteers/:id/edit' element={ <EditVolunteerForm updateVolunteer={updateVolunteer} />} />
        <Route path='/volunteers/:id/' element={    <VolunteerDetail deleteVolunteer={deleteVolunteer} /> } />
        <Route exact path='/' element={  <Home volunteers={volunteers} /> } />
        <Route element={ <NotFound />} />
      </Routes> 
  </div>
  );
}

export default App;

