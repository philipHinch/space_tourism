//components
import PageTitle from "../components/PageTitle";
import DestinationComponent from "../components/DestinationComponent";
//hooks
import { useState } from "react";
//data
import Data from '../data.js';
//images
import moon from '../assets/destination/image-moon.png';
import mars from '../assets/destination/image-mars.png';
import europa from '../assets/destination/image-europa.png';
import titan from '../assets/destination/image-titan.png';


const Destination = () => {

    const [moonActive, setMoonActive] = useState(true)
    const [marsActive, setMarsActive] = useState(false)
    const [europaActive, setEuropaActive] = useState(false)
    const [titanActive, setTitanActive] = useState(false)


    const { destinations } = Data

    console.log(destinations);

    const resetActive = () => {
        setMoonActive(false)
        setMarsActive(false)
        setEuropaActive(false)
        setTitanActive(false)
    }

    const setActive = (e) => {
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

            {/* trying to map and import local image through path to json file */}

            {/* {destinations.map(destination => (
                <DestinationComponent key={destination.name} image={destination.images.png} title={destination.name} text={destination.description} distance={destination.distance} time={destination.travel} setActive={setActive} />
            ))} */}



            {moonActive && <DestinationComponent image={moon} title={destinations[0].name} text={destinations[0].description} distance={destinations[0].distance} time={destinations[0].travel} setActive={setActive} moonActive={moonActive} />}
            {marsActive && <DestinationComponent image={mars} title={destinations[1].name} text={destinations[1].description} distance={destinations[1].distance} time={destinations[1].travel} setActive={setActive} marsActive={marsActive} />}
            {europaActive && <DestinationComponent image={europa} title={destinations[2].name} text={destinations[2].description} distance={destinations[2].distance} time={destinations[2].travel} setActive={setActive} europaActive={europaActive} />}
            {titanActive && <DestinationComponent image={titan} title={destinations[3].name} text={destinations[3].description} distance={destinations[3].distance} time={destinations[3].travel} setActive={setActive} titanActive={titanActive} />}
        </div>
    );
}

export default Destination;