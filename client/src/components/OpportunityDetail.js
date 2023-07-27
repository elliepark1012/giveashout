import  { Link, useParams, useNavigate } from 'react-router-dom'
import  { useContext, useState } from 'react'
import UserContext from '../UserContext';
import SignupForm from './SignupForm'

function OpportunityDetail({ deleteOpportunity, opportunities, setOpportunities }) {
    const currentUser = useContext(UserContext);
    const [opportunity, setOpportunity] = useState();
    const { id } = useParams();
    const navigate = useNavigate();

    const singleOpportunity = setOpportunity(opportunities.find(opportunity => opportunity.id === parseInt(id)));

    if (!singleOpportunity) {
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
            }
            navigate('/opportunities')
          })
    }

    const addSignup = (signup) => {
      const newSignups = [...singleOpportunity.signups, signup]
      opportunity.signups = newSignups

      const filteredOpportunities = opportunities.filter(oppo => oppo.id !== signup.opportunity_id)
      const newOpportunities = [...filteredOpportunities, opportunity]

      setOpportunity(opportunity)
      setOpportunities(newOpportunities)
    }
 
    return (
        <div>
              <div className='button-container'>
                 {currentUser? <SignupForm opportunity={opportunity} addSignup={addSignup} /> : null   }
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
                  {currentUser.admin? <>
                    <button><Link className='buttonlink' to={'/opportunities/new'}>New Opportunities</Link></button>
                    <button><Link className='buttonlink' to={`/opportunities/${id}/edit`}>Edit Opportunity Detail</Link></button>
                    <button onClick={handleDelete}><Link to={`/opportunities`}>Delete Volunteer</Link></button>
                    </> : 
                  null}
                </div> 
              </div>
        </div>
      )
    }

    export default OpportunityDetail