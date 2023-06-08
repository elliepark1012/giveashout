import VolunteerCard from './VolunteerCard'

function VolunteerContainer({volunteers}) {
    return (
        <div>
            <Title>Give A Shout</Title>
            <div>
                {volunteers.map(volunteer => <ul><VolunteerCard key={volunteer.id} volunteer={volunteer}/></ul>)}
            </div>
        </div>
    )
}

export default VolunteerContainer

