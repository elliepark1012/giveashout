import VolunteerContainer from './VolunteerContainer'

function Home({volunteers}){
    return(
        <div>
            <VolunteerContainer volunteers={volunteers} />
        </div>
    )
}

export default Home