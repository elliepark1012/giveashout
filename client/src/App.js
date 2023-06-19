import './App.css';
import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './components/Home'
import VolunteerForm from './components/VolunteerForm'
import EditVolunteerForm from './components/EditVolunteerForm'
import Navbar from './components/Navbar'
import VolunteerDetail from './components/VolunteerDetail'
import UserPage from './components/UserPage';
import NewMember from './components/NewMember';
import Login from './components/Login';

function App() {
  const [volunteers, setVolunteers] = useState([])
  const [errors, setErrors] = useState(false)
  const [currentUser, setCurrentUser] = useState(false)

  useEffect(() => {
    fetch('authorized_user')
    .then(res => {
      if(res.ok) {
        res.json().then(user => {
          updateUser(user)
          fetchVolunteer()
        })
      }
    })
  }, [])

  const fetchVolunteer = () => {
    fetch('/volunteers')
    .then(res => {
      if(res.ok){
        res.json().then(volunteers => setVolunteers(volunteers))
      } else {
        res.json().then(data => setErrors(data.error))
      }
    })
  }

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

  const updateUser = (user) => setCurrentUser(user)

  if(errors) return <h1>{errors}</h1>
  return (
  <div id="app">

    <Navbar updateUser={updateUser} volunteers={volunteers}/>
   
    {!currentUser? 
    <>
   <Login error={'please login'} updateUser={updateUser} /> 
   
    </>
     :
     <>
     <Routes>
        <Route path='/volunteers/new' element={ <VolunteerForm addVolunteer={addVolunteer} />} /> 
        <Route path='/volunteer/:id/edit' element={ <EditVolunteerForm updateVolunteer={updateVolunteer} />} />
        <Route path='/volunteer/:id' element={    <VolunteerDetail deleteVolunteer={deleteVolunteer} currentUser={currentUser}/> } />
        <Route path='/users/new' element={ <NewMember />} />
        <Route path='/users/:id' element={ <UserPage />} />
        <Route exact path='/' element={<Home volunteers={volunteers}/>} />
      </Routes>
      </>
      }
     
  </div>
  );
}


export default App;