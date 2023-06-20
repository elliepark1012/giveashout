import './App.css';
import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Volunteers from './components/Volunteers'
// import VolunteerForm from './components/VolunteerForm'
// import EditVolunteerForm from './components/EditVolunteerForm'
import Navbar from './components/Navbar'
import VolunteerDetail from './components/VolunteerDetail'
import UserPage from './components/UserPage';
import Auth from './components/Auth';
import Login from './components/Login';

function App() {
  // const [volunteers, setVolunteers] = useState([])
  // const [errors, setErrors] = useState(false)
  const [currentUser, setCurrentUser] = useState(false)

  const updateUser = (user) => setCurrentUser(user)
  useEffect(() => {
    fetch('/me')
    .then(r => {
      if (r.ok) {
        r.json().then((user) => updateUser(user));
      }
    });
  }, [])

  // if(errors) return <h1>{errors}</h1>
  return (
  <div id="app">

<div>

    <Navbar currentUser={currentUser} updateUser={updateUser} />
    <Routes>
    <Route exact path='/volunteers' element= {<Volunteers currentUser={currentUser}/>} />
    <Route exact path='/users/:id' element= {<UserPage currentUser={currentUser} />} />
    <Route exact path='/volunteer/:id' element={<VolunteerDetail currentUser={currentUser}/>} />
    <Route exact path='/login' element={<Login updateUser={updateUser} />} />
    <Route exact path='/' element={<Auth setCurrentUser={setCurrentUser} />} />
    </Routes>

</div>
{/* 
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
        <Route path='/volunteer/:id' element={    <VolunteerDetail  } />
        <Route path='/users/new' element={ <NewMember />} />
        <Route path='/users/:id' element={ <UserPage />} />
        <Route exact path='/' element={<Home volunteers={volunteers}/>} />
      </Routes>
      </>
      } */}
  </div>
  );
}




export default App;