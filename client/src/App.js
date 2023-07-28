import './App.css';
import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Opportunities from './components/Opportunities'
import Navbar from './components/Navbar'
import OpportunityDetail from './components/OpportunityDetail'
import UserPage from './components/UserPage';
import Auth from './components/Auth';
import Login from './components/Login';
import NotFound from './components/NotFound';
import EditOpportunityForm from './components/EditOpportunityForm';
import OpportunityForm from './components/OpportunityForm'
import UserContext from './UserContext'
import SignupForm from './components/SignupForm';
import EditSignupForm from './components/EditSignupForm'
import Signups from './components/Signups'
import SignupDetail from './components/SignupDetail';

function App() {
  const [opportunities, setOpportunities] = useState([])
  const [currentUser, setCurrentUser] = useState({signups:[]})

  const updateUser = (user) => setCurrentUser(user)
  
  useEffect(() => {
      fetch('/me')
      .then(r => {
          if (r.ok) {
          r.json().then((user) => updateUser(user))
          } 
        });
      }, [setCurrentUser])

  useEffect(() => {
        fetch('/opportunities')
        .then(res => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error('Network response was not ok');
            }
            })
        .then(opportunities => {
            setOpportunities(opportunities);
        })
        .catch(error => {
        console.error('Error fetching opportunities:', error);
        });
      }, [])


  const addOpportunity = (opportunity) => {
       setOpportunities(current => [...current, opportunity])
       }

  const updateOpportunity = (updatedOpportunity) => setOpportunities(current => {
            // console.log(currentUser) 
            return current.map(opportunity => {
               if (opportunity.id === updatedOpportunity.id){
                 return updatedOpportunity
               } else {
                 return opportunity 
               }
             })
           })
  
  const deleteOpportunity = (id) => setOpportunities(current => current.filter(o => o.id !== id))

  const deleteSignup = (id) => {
    const newSignups = currentUser.signups.filter(s => s.id !== id)
    const newUser = {...currentUser, signups: newSignups}

    setCurrentUser(newUser)
  }

  const editSignup = (updatedSignup) => {
    setCurrentUser(currentUser => {
      return currentUser.signups.map(signup => {
        if (signup.id === updatedSignup.id) {
          return updatedSignup;
        } else {
          return signup;
        }
      });
    });
  }

  return (
    <UserContext.Provider value={{currentUser, setCurrentUser}}>  
  <div id="app">
    <div>
      <Navbar  updateUser={updateUser} />
      <Routes>
        <Route exact path='/opportunities' element= {<Opportunities opportunities={opportunities} />} />
        <Route exact path='/opportunities/:id' element={<OpportunityDetail deleteOpportunity={deleteOpportunity} opportunities={opportunities} setOpportunities={setOpportunities}/>} />        
        <Route path='/opportunities/new' element={ <OpportunityForm addOpportunity={addOpportunity}/>} /> 
        <Route path='/opportunities/:id/edit' element={ <EditOpportunityForm updateOpportunity={updateOpportunity} />} /> 
        <Route path='/signups/new' element={ <SignupForm />} /> 
        <Route exact path='/signups' element= {<Signups />} />
        <Route path='/signups/:id/edit' element={ <EditSignupForm opportunities={opportunities} editSignup={editSignup} />} /> 
        <Route exact path='/signups/:id' element={<SignupDetail deleteSignup={deleteSignup}/>} />

        <Route exact path='/users/:id' element= {<UserPage />} />

        <Route exact path='/login' element={<Login updateUser={updateUser}  />} />
        <Route exact path='/' element={<Auth setCurrentUser={setCurrentUser} />} />
        <Route element={NotFound} />
      </Routes>
    </div>
  </div>
    </UserContext.Provider>
  );
}

export default App;