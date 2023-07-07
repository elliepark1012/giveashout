import OpportunityContainer from './OpportunityContainer'
// import React, { useContext } from 'react';
// import UserContext from '../UserContext';

function Opportunities({ opportunities }){

  // const currentUser = useContext(UserContext);
    return(
        <div>
            <OpportunityContainer opportunities={opportunities}  />
        </div>
    )
}

export default Opportunities