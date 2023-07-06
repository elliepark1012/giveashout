import './App.css';
import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Volunteers from './components/Volunteers'
import Navbar from './components/Navbar'
import VolunteerDetail from './components/VolunteerDetail'
import UserPage from './components/UserPage';
import Auth from './components/Auth';
import Login from './components/Login';
import NotFound from './components/NotFound';
import EditVolunteerForm from './components/EditVolunteerForm';
import VolunteerForm from './components/VolunteerForm'
import UserContext from './UserContext'
import SignupforVolunteerForm from './components/SignupforVolunteerForm';
import EditSignupForm from './components/EditSignupForm'
import Signups from './components/Signups'
import SignupDetail from './components/SignupDetail';

function App() {
  const [volunteers, setVolunteers] = useState([])
  const [errors, setErrors] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [signups, setSignups] = useState([])

    const updateUser = (user) => setCurrentUser(user)
      useEffect(() => {
            fetch('/me')
            .then(r => {
            if (r.ok) {
            r.json().then((user) => updateUser(user));
            } 
           else {
            r.json().then(data => setErrors(data.error))
           }});
           }, [])

    const addVolunteer = (volunteer) => {
            setVolunteers(current => [...current, volunteer])
           }

    const updateVolunteer = (updatedVolunteer) => setVolunteers(current => {
            console.log(currentUser) 
            return current.map(volunteer => {
               if (volunteer.id === updatedVolunteer.id){
                 return updatedVolunteer 
               } else {
                 return volunteer 
               }
             })
           })
         

    if(errors) return <h1>{errors}</h1>

  return (
    <UserContext.Provider value={currentUser}>  
  <div id="app">
    <div>
      <Navbar  updateUser={updateUser} />
      <Routes>
        <Route exact path='/volunteers' element= {<Volunteers  volunteers={volunteers} setVolunteers={setVolunteers}/>} />
        <Route exact path='/signups' element= {<Signups signups={signups} setSignups={setSignups} />} />
        <Route exact path='/users/:id' element= {<UserPage />} />
        <Route exact path='/signups/:id' element={<SignupDetail  />} />
        <Route exact path='/volunteers/:id' element={<VolunteerDetail setSignups={setSignups} />} />
        <Route exact path='/login' element={<Login updateUser={updateUser} />} />
        <Route exact path='/' element={<Auth setCurrentUser={setCurrentUser} />} />
        <Route path='/volunteers/new' element={ <VolunteerForm addVolunteer={addVolunteer}/>} /> 
        <Route path='/volunteers/:id/edit' element={ <EditVolunteerForm updateVolunteer={updateVolunteer} />} /> 
        <Route path='/signups/new' element={ <SignupforVolunteerForm />} /> 
        <Route path='/signups/:id/edit' element={ <EditSignupForm />} /> 
        <Route element={NotFound} />
      </Routes>
    </div>
  </div>
    </UserContext.Provider>
  );
}

export default App;