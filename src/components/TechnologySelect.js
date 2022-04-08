const TechnologySelect = ({ setActive, launchVehicleActive, spacePortActive, spaceCapsuleActive }) => {

    const handleClick = (e) => {
        setActive(e)
    }

    return (
        <div className="technologySelectContainer">
            <div className={`selectCircle ${ launchVehicleActive && 'activeCircle' }`} onClick={handleClick}>
                1
            </div>
            <div className={`selectCircle ${ spacePortActive && 'activeCircle' }`} onClick={handleClick}>
                2
            </div>
            <div className={`selectCircle ${ spaceCapsuleActive && 'activeCircle' }`} onClick={handleClick}>
                3
            </div>
        </div>
    );
}

export default TechnologySelect;