import VolunteerCard from './VolunteerCard'

function VolunteerContainer({volunteers}) {
    return (
        <div>
            <title>Give A Shout</title>
            <div>
                {volunteers.map(volunteer => <ul><VolunteerCard key={volunteer.id} volunteer={volunteer}/></ul>)}
            </div>
        </div>
    )
}

export default VolunteerContainer

