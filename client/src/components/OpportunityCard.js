import {Link} from 'react-router-dom'


function OpportunityCard( {opportunity} ) {
    const {title, date, location, about, img_url, id, contact_name, contact_email } = opportunity

    return (
        <div className='card'>
        <Link className="cardlink" to={`/opportunities/${id}`}>
  
            <img className='cardimage' src={img_url}/>
            <h2>{title}</h2>
            <p>Date: {date}</p>
            <p>Location: {location}</p>
            <p>{about}</p> 
            <p>{contact_name}</p>
            <p>{contact_email}</p>             
        </Link>
        </div>
    )
}

export default OpportunityCard