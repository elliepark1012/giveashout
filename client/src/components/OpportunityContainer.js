import OpportunityCard from './OpportunityCard'
import { Link } from 'react-router-dom'

function OpportunityContainer({ opportunities, deleteOpportunity }) {
 
    return (
        <div>
            <title className='title' >Give A Shout</title>
            <div className='cardcontainer'>
                {opportunities.map(opportunity => 
                  <li key={opportunity.id}>
                    <Link to={`/opportunities/${opportunity.id}`}>
                         <OpportunityCard 
                            key={opportunity.id} 
                            opportunity={opportunity} 
                            deleteOpportunity={deleteOpportunity}/>
                    </Link>
                   </li>
                 )}
            </div>
        </div>
    )
}

export default OpportunityContainer

