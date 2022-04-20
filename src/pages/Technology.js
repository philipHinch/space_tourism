//components
import TechnologyComponent from "../components/TechnologyComponent";
import PageTitle from "../components/PageTitle";
//hooks
import { useState } from "react";
//data
import Data from '../data.js';

const Technology = () => {

    const { technology } = Data

    const [launchVehicleActive, setLaunchVehicleActive] = useState(true)
    const [spacePortActive, setSpacePortActive] = useState(false)
    const [spaceCapsuleActive, setSpaceCapsuleActive] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)

    const resetActive = () => {
        setLaunchVehicleActive(false)
        setSpacePortActive(false)
        setSpaceCapsuleActive(false)
    }

    const setActiveTech = (e) => {
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
            <PageTitle number={'03'} text={'space launch 101'} techPageTitle={true} />
            {technology && technology.map((tech, i) => {
                if (window.innerWidth < 900) {
                    return <TechnologyComponent key={tech.name} title={tech.name} text={tech.description} image={tech.images.landscape} setActiveTech={setActiveTech} launchVehicleActive={launchVehicleActive} spacePortActive={spacePortActive} spaceCapsuleActive={spaceCapsuleActive} activeIndex={activeIndex} setActiveIndex={setActiveIndex} index={i} />
                } else {
                    return <TechnologyComponent key={tech.name} title={tech.name} text={tech.description} image={tech.images.webp} setActiveTech={setActiveTech} launchVehicleActive={launchVehicleActive} spacePortActive={spacePortActive} spaceCapsuleActive={spaceCapsuleActive} activeIndex={activeIndex} setActiveIndex={setActiveIndex} index={i} />
                }
            })}
        </div>
    );
}

export default Technology;