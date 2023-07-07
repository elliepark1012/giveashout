import  { Link, useParams, useNavigate } from 'react-router-dom'
import  { useContext } from 'react'
import UserContext from '../UserContext';
import SignupforVolunteerForm from './SignupForm'

function OpportunityDetail({ deleteOpportunity, setSignups, opportunities }) {
    const currentUser = useContext(UserContext);
    const { id } = useParams();
    const navigate = useNavigate()

    const opportunity = opportunities.find(opportunity => opportunity.id === parseInt(id));

    if (!opportunity) {
      return <div>Opportunity not found</div>;
    }

    function handleDelete(){
        fetch(`/opportunities/${id}`,{
            method:'DELETE',
            headers: {'Content-Type': 'application/json'}
          })
          .then(res => {
            if(res.ok){
              deleteOpportunity(id)
            } else {
              alert('Please Contact Admin')
              res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
            }
            navigate('/opportunities')
          })
    }

    const addSignup = (signup) => {
      setSignups(current => [...current, signup])
    }

    if(errors) return <h1>{errors}</h1>

    return (
        <div>
              <div className='button-container'>
                    <SignupforVolunteerForm addSignup={addSignup} opportunity_id={opportunity.id} user_id={currentUser.id} title={opportunity.title} />
              </div> 
              <div className='carddetail'>
                <div>
                  <h1 className='cardlink'>{opportunity.title}</h1>
                  <img className='cardimage' src={opportunity.img_url}/>
                        <h3>Date: {opportunity.date}</h3>
                        <h3>Location: {opportunity.location}</h3>
                        <h3 className='cardabout'>About: {opportunity.about}</h3>
                        <h4>Contacts:</h4>
                        <ul className='contact'>{opportunity.contact_name} {opportunity.contact_email}</ul>
                </div>
                    -------Admin Only------
                <div className='button-container'>
                    <button><Link className='buttonlink' to={'/opportunities/new'}>New Opportunities</Link></button>
                    <button><Link className='buttonlink' to={`/opportunities/${id}/edit`}>Edit Opportunity Detail</Link></button>
                    <button onClick={handleDelete}><Link to={`/opportunities`}>Delete Volunteer</Link></button>
                </div> 
              </div>
        </div>
      )
    }

    export default OpportunityDetail