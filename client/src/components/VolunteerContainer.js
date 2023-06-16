import VolunteerCard from './VolunteerCard'

function VolunteerContainer({volunteers}) {
    return (
        <div>
            <title className='title' >Give A Shout</title>
            <div className='cardcontainer'>
                {volunteers.map(volunteer => <ul><VolunteerCard key={volunteer.id} volunteer={volunteer}/></ul>)}
            </div>
        </div>
    )
}

export default VolunteerContainer

