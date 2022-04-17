const TechnologySelect = ({ setActiveTech, launchVehicleActive, spacePortActive, spaceCapsuleActive, setActiveIndex }) => {

    const handleClick = (e) => {
        setActiveTech(e)
        setActiveIndex(parseInt(e.target.textContent) - 1)
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