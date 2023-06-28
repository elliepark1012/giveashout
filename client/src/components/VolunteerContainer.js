import VolunteerCard from './VolunteerCard'

function VolunteerContainer({volunteers, deleteVolunteer }) {
 
    return (
        <div>
            <title className='title' >Give A Shout</title>
            <div className='cardcontainer'>
                {volunteers.map(volunteer => <ul key={volunteer.id} ><VolunteerCard key={volunteer.id} volunteer={volunteer} deleteVolunteer={deleteVolunteer}/></ul>)}
            </div>
        </div>
    )
}

export default VolunteerContainer

