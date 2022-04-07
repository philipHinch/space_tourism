//components
import DestinationSelect from './DestinationSelect';
import PageTitle from './PageTitle';
//images
import moon from '../assets/destination/image-moon.png';

const DestinationComponent = ({ image, title, text, distance, time }) => {
    return (
        <div className="destinationComponentContainer">
            <PageTitle number={'01'} text={'pick your destination'} />
            <div className="destinationComponentContainerLeft">
                {/* temporary image */}
                <img src={moon} alt="moon" />
            </div>
            <div className="destinationComponentContainerRight">

                <div className="innerRightDestinationComponent">
                    <DestinationSelect />
                    <h1 className="destinationTitle">MOON</h1>
                    <p className="destinationText">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                    <div className="destinationLine"></div>
                    <div className="destinationInfoContainer">
                        <div className="destinationDistanceContainer">
                            <p className="destinationDistanceText">avg. distance</p>
                            <p className="destinationDistanceNumber">384,400 km</p>
                        </div>
                        <div className="destinationTravelTimeContainer">
                            <p className="destinationTravelTimeText">est. travel time</p>
                            <p className="destinationTravelTimeNumber">3 days</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DestinationComponent;