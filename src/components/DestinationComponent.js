//components
import DestinationSelect from './DestinationSelect';
import PageTitle from './PageTitle';


const DestinationComponent = ({ image, title, text, distance, time, setActive, moonActive, marsActive, europaActive, titanActive }) => {



    return (
        <div className="destinationComponentContainer">
            <PageTitle number={'01'} text={'pick your destination'} />
            <div className="destinationComponentContainerLeft">
                {/* temporary image */}
                <img src={image} alt="moon" />
            </div>
            <div className="destinationComponentContainerRight">

                <div className="innerRightDestinationComponent">
                    <DestinationSelect setActive={setActive} moonActive={moonActive} marsActive={marsActive} europaActive={europaActive} titanActive={titanActive} />
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