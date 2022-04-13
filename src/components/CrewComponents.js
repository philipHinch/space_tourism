//images
import douglas from '../assets/crew/image-douglas-hurley.png';
//components
import PageTitle from './PageTitle';


const CrewComponent = () => {
    return (
        <div className="crewComponentContainer">
            <PageTitle number={'02'} text={'meet your crew'} />
            <div className="crewComponentContainerLeft">
                <div className="innerLeftCrewComponent">
                    <h2 className="crewSubTitle">commander</h2>
                    <h1 className="crewTitle">douglas hurley</h1>
                    <p className="crewText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati sed non aliquam molestiae unde corporis ipsum ea dolores doloremque deleniti expedita aut consequatur repellendus eveniet quisquam saepe, aliquid voluptatibus fugit</p>
                </div>
            </div>

            <div className="crewComponentContainerRight">
                <img src={douglas} alt="moon" />
            </div>
        </div>
    );
}

export default CrewComponent;