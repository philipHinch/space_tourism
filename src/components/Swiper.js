// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
//data
import Data from '../data';
//components
import CrewComponent from './CrewComponents';

export default () => {

    const { crew } = Data

    return (
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            {crew.map((person, i) => (
                <SwiperSlide key={person.name}><CrewComponent name={person.name} bio={person.bio} role={person.role} image={person.images.webp} /></SwiperSlide>
            ))}
        </Swiper>
    );
};