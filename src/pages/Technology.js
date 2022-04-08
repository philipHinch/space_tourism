//components
import TechnologyComponent from "../components/TechnologyComponent";
//hooks
import { useState } from "react";
//data
import Data from '../data.json';
//images
import launchVehicle from '../assets/technology/image-launch-vehicle-portrait.jpg';
import spacePort from '../assets/technology/image-spaceport-portrait.jpg';
import spaceCapsule from '../assets/technology/image-space-capsule-portrait.jpg';


const Technology = () => {

    const [launchVehicleActive, setLaunchVehicleActive] = useState(true)
    const [spacePortActive, setSpacePortActive] = useState(false)
    const [spaceCapsuleActive, setSpaceCapsuleActive] = useState(false)

    const { technology } = Data

    console.log(technology);

    const resetActive = () => {
        setLaunchVehicleActive(false)
        setSpacePortActive(false)
        setSpaceCapsuleActive(false)
    }

    const setActive = (e) => {
        resetActive()
        if (e.target.textContent === '1') {
            setLaunchVehicleActive(true)
        } else if (e.target.textContent === '2') {
            setSpacePortActive(true)
        } else if (e.target.textContent === '3') {
            setSpaceCapsuleActive(true)
        }
    }

    return (
        <div className="technologyContainer">
            {launchVehicleActive && <TechnologyComponent title={technology[0].name} text={technology[0].description} image={launchVehicle} setActive={setActive} launchVehicleActive={launchVehicleActive} />}
            {spacePortActive && <TechnologyComponent title={technology[1].name} text={technology[1].description} image={spacePort} setActive={setActive} spacePortActive={spacePortActive} />}
            {spaceCapsuleActive && <TechnologyComponent title={technology[2].name} text={technology[2].description} image={spaceCapsule} setActive={setActive} spaceCapsuleActive={spaceCapsuleActive} />}
        </div>
    );
}

export default Technology;