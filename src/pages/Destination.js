//components
import DestinationComponent from "../components/DestinationComponent";
//hooks
import { useState } from "react";
//data
import Data from '../data.js';

const Destination = () => {

    const [moonActive, setMoonActive] = useState(true)
    const [marsActive, setMarsActive] = useState(false)
    const [europaActive, setEuropaActive] = useState(false)
    const [titanActive, setTitanActive] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)

    const { destinations } = Data

    const resetActive = () => {
        setMoonActive(false)
        setMarsActive(false)
        setEuropaActive(false)
        setTitanActive(false)
    }

    const setActiveDestination = (e) => {
        resetActive()
        if (e.target.textContent === 'moon') {
            setMoonActive(true)
        } else if (e.target.textContent === 'mars') {
            setMarsActive(true)
        } else if (e.target.textContent === 'europa') {
            setEuropaActive(true)
        } else if (e.target.textContent === 'titan') {
            setTitanActive(true)
        }
    }

    return (
        <div className="destinationContainer">
            {destinations && destinations.map((dest, i) => (
                <DestinationComponent key={dest.name} image={dest.images.webp} title={dest.name} text={dest.description} distance={dest.distance} time={dest.travel} moonActive={moonActive} marsActive={marsActive} europaActive={europaActive} titanActive={titanActive} setActiveDestination={setActiveDestination} index={i} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            ))}
        </div>
    );
}

export default Destination;