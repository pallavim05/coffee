import React, { useRef, useState } from 'react';
import './Offer.css';
import { offer } from "../../Data";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import Pagination module correctly
import { Pagination } from 'swiper/modules'; // For Swiper v8+
// For Swiper v6 or v7: import { Pagination } from 'swiper';

const Offer = () => {
    return (
        <section className="offer section" id="offer">
            <h2 className="section_title" data-title="Offer">
                Special Offer For You
            </h2>
            <Swiper
                spaceBetween={70}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="container"
            >
                {offer.map(({ img, title, discount, description }, index) => (
                    <SwiperSlide key={index} className="offer_item">
                        <div className="offer_img-wrapper">
                            <img src={img} alt={title} className="offer_img" />
                        </div>
                        <div className="offer_content">
                            <h3 className="offer_title">{title}</h3>
                            <span className="offer_discount">{discount}</span>
                            <p className="offer_description">{description}</p>
                            <a href="#" className="btn">
                                Offer Now
                            </a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Offer;
