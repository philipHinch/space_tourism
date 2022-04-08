//components
import TechnologySelect from "./TechnologySelect";
import PageTitle from "./PageTitle";

const TechnologyComponent = ({ title, text, image, setActive, launchVehicleActive, spacePortActive, spaceCapsuleActive }) => {
    return (
        <div className="technologyComponentContainer">
            <PageTitle number={'03'} text={'space launch 101'} />
            <TechnologySelect setActive={setActive} launchVehicleActive={launchVehicleActive} spacePortActive={spacePortActive} spaceCapsuleActive={spaceCapsuleActive} />
            <div className="technologyComponentLeft">
                <div className="innerTechnologyComponentLeft">
                    <h2 className="technologySubTitle">the terminology<span className="threeDots">...</span> </h2>
                    <h1 className="technologyTitle">{title}</h1>
                    <p className="technologyText">{text}</p>
                </div>
            </div>
            <div className="technologyComponentRight">
                <img src={image} alt="launch vehicle" />
            </div>
        </div>
    );
}

export default TechnologyComponent;