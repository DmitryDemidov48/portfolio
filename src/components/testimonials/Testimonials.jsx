import React from 'react';
import s from "./testimonials.module.css";
import AVTR1 from'../../assets/unnamed-3.jpg';
import AVTR2 from'../../assets/unnamed-4.jpg';
import AVTR3 from'../../assets/Me-about.jpg';
import AVTR4 from'../../assets/ME.png';

import { Swiper, SwiperSlide} from 'swiper/react';
import  {  Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        avatar: AVTR1,
        name: 'Avatar1',
        review: '   Lorem ipsum dolor sit amet, consectetur adipisicing elit Ab' +
            ' consectetur culpa ducimus, ex harum hic iste magnam molestiae molestias ' +
            'natus nesciunt optio praesentium'
    },
    {
        avatar: AVTR2,
        name: 'Avatar2',
        review: '   Lorem ipsum dolor sit amet, consectetur adipisicing elit Ab' +
            ' consectetur culpa ducimus, ex harum hic iste magnam molestiae molestias ' +
            'natus nesciunt optio praesentium'
    },
    {
        avatar: AVTR3,
        name: 'Avatar3',
        review: '   Lorem ipsum dolor sit amet, consectetur adipisicing elit Ab' +
            ' consectetur culpa ducimus, ex harum hic iste magnam molestiae molestias ' +
            'natus nesciunt optio praesentium'
    },
    {
        avatar: AVTR4,
        name: 'Avatar4',
        review: '   Lorem ipsum dolor sit amet, consectetur adipisicing elit Ab' +
            ' consectetur culpa ducimus, ex harum hic iste magnam molestiae molestias ' +
            'natus nesciunt optio praesentium'
    },
]
export const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <Swiper className={s.container_testimonials__container}
            modules={[Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{clickable: true}}>
                {
                    data.map(({avatar,name,review}, index)=>{
                        return(
                            <SwiperSlide key={index} className={s.testimonials}>
                                <div className={s.client__avatar}>
                                    <img src={avatar}/>
                                </div>
                                <h5 className={s.client__name}>{name}</h5>
                                <small className={s.client__review}>
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    );
};

