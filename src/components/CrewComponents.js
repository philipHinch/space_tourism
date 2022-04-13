//images
import douglas from '../assets/crew/image-douglas-hurley.png';
//components
import PageTitle from './PageTitle';


const CrewComponent = ({ name, bio, role, image }) => {
    return (
        <div className="crewComponentContainer">
            <PageTitle number={'02'} text={'meet your crew'} />
            <div className="crewComponentContainerLeft">
                <div className="innerLeftCrewComponent">
                    <h2 className="crewSubTitle">{role}</h2>
                    <h1 className="crewTitle">{name}</h1>
                    <p className="crewText">{bio}</p>
                </div>
            </div>

            <div className="crewComponentContainerRight">
                <img src={image} alt="moon" />
            </div>
        </div>
    );
}

export default CrewComponent;