import VolunteerCard from './VolunteerCard'

function VolunteerContainer({volunteers, currentUser, deleteVolunteer}) {
 
    return (
        <div>
            <title className='title' >Give A Shout</title>
            <div className='cardcontainer'>
                {volunteers.map(volunteer => <ul key={volunteer.id} ><VolunteerCard key={volunteer.id} volunteer={volunteer} currentUser={currentUser} deleteVolunteer={deleteVolunteer}/></ul>)}
            </div>
        </div>
    )
}

export default VolunteerContainer

