//components
import Swiper from "../components/Swiper";
import PageTitle from "../components/PageTitle";

const Crew = () => {
    return (
        <div className="wrapper">
            <div className="crewContainer">
                <PageTitle number={'02'} text={'meet your crew'} crewPageTitle={true} />
                <Swiper />
            </div>
        </div>
    );
}

export default Crew;