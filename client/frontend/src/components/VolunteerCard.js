import {Link} from 'react-router-dom'

function VolunteerCard({volunteer}) {
    const {title, date, location, about, img_url} = volunteer

    return (
        <>
        <div>
            <Link to={'/volunteers/${id}'}> <h2>{title}</h2></Link>
            <p>{date}</p>
            <p>{location}</p>
            <p>{about}</p>              
        </div>
        <img src={img_url}/>
        </>
    )
}

export default VolunteerCard