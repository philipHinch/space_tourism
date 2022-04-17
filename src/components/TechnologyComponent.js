//components
import TechnologySelect from "./TechnologySelect";
import PageTitle from "./PageTitle";

const TechnologyComponent = ({ title, text, image, setActiveTech, launchVehicleActive, spacePortActive, spaceCapsuleActive, activeIndex, setActiveIndex, index }) => {
    return (
        <div className={`technologyComponentContainer ${ activeIndex === index ? 'active' : '' }`}>
            <PageTitle number={'03'} text={'space launch 101'} />
            <TechnologySelect setActiveTech={setActiveTech} launchVehicleActive={launchVehicleActive} spacePortActive={spacePortActive} spaceCapsuleActive={spaceCapsuleActive} setActiveIndex={setActiveIndex} />
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