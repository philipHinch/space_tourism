// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
//images
import douglas from '../assets/crew/image-douglas-hurley.png';
import mark from '../assets/crew/image-mark-shuttleworth.png';
import victor from '../assets/crew/image-victor-glover.png';
import an from '../assets/crew/image-anousheh-ansari.png';
//data
import Data from '../data';
//components
import CrewComponent from './CrewComponents';

export default () => {

    console.log(Data.crew);

    const { crew } = Data

    return (
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide><CrewComponent name={crew[0].name} bio={crew[0].bio} role={crew[0].role} image={douglas} /></SwiperSlide>
            <SwiperSlide><CrewComponent name={crew[1].name} bio={crew[1].bio} role={crew[1].role} image={mark} /></SwiperSlide>
            <SwiperSlide><CrewComponent name={crew[2].name} bio={crew[2].bio} role={crew[2].role} image={victor} /></SwiperSlide>
            <SwiperSlide><CrewComponent name={crew[3].name} bio={crew[3].bio} role={crew[3].role} image={an} /></SwiperSlide>
        </Swiper>
    );
};