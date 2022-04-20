//components
import DestinationSelect from './DestinationSelect';
import PageTitle from './PageTitle';

const DestinationComponent = ({ image, title, text, distance, time, setActiveDestination, moonActive, marsActive, europaActive, titanActive, index, activeIndex, setActiveIndex }) => {
    return (
        <div id={index} className={`destinationComponentContainer ${ activeIndex === index ? 'active' : '' }`}>
            {/* <PageTitle number={'01'} text={'pick your destination'} /> */}
            <div className="destinationComponentContainerLeft">
                <img src={`${ image }`} alt={`${ title } image`} />
            </div>

            <div className="destinationComponentContainerRight">
                <div className="innerRightDestinationComponent">
                    <DestinationSelect setActiveIndex={setActiveIndex} index={index} setActiveDestination={setActiveDestination} moonActive={moonActive} marsActive={marsActive} europaActive={europaActive} titanActive={titanActive} />
                    <h1 className="destinationTitle">{title}</h1>
                    <p className="destinationText">{text}</p>
                    <div className="destinationLine"></div>
                    <div className="destinationInfoContainer">
                        <div className="destinationDistanceContainer">
                            <p className="destinationDistanceText">avg. distance</p>
                            <p className="destinationDistanceNumber">{distance}</p>
                        </div>
                        <div className="destinationTravelTimeContainer">
                            <p className="destinationTravelTimeText">est. travel time</p>
                            <p className="destinationTravelTimeNumber">{time}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DestinationComponent;