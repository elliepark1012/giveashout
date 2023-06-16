import {Link} from 'react-router-dom'

function VolunteerCard({volunteer}) {
    const {title, date, location, about, img_url, id} = volunteer

    return (
        <Link className="cardlink" to={`/volunteer/${id}`}><div className='card'>
        <img className='cardimage' src={img_url}/>
             <h2>{title}</h2>
            <p>Date: {date}</p>
            <p>Location: {location}</p>
            <p>{about}</p>              
        </div>
        </Link>

    )
}

export default VolunteerCard