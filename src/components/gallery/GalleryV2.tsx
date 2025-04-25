"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
import GalleryV2Data from "@/assets/jsonData/gallery/GalleryV2Data.json"
import SingleGalleryV2 from './SingleGalleryV2';

interface DataType {
    sectionClass?: string
}

const GalleryV2 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`gallery-style-twoa-rea default-padding-bottom mb-80 ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="site-heading">
                                <h4 className="sub-title">Case Studies</h4>
                                <h2 className="title">Have a view of our amazing projects with our clients</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="project-navigation-items">
                                <div className="project-swiper-nav">
                                    <div className="project-pagination" />
                                    <div className="project-button-prev" />
                                    <div className="project-button-next" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fill">
                    <div className="row">
                        <Swiper
                            loop={true}
                            freeMode={true}
                            grabCursor={true}
                            slidesPerView={1}
                            spaceBetween={30}
                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                            pagination={{
                                el: '.project-pagination',
                                type: 'fraction',
                                clickable: true,
                            }}
                            navigation={{
                                nextEl: '.project-button-next',
                                prevEl: '.project-button-prev',
                            }}
                            breakpoints={{
                                768: {
                                    slidesPerView: 2
                                },
                                1024: {
                                    slidesPerView: 2
                                },
                                1200: {
                                    slidesPerView: 3,
                                    spaceBetween: 0,
                                    centeredSlides: true
                                },
                                1500: {
                                    slidesPerView: 4,
                                    spaceBetween: 0,
                                    centeredSlides: true
                                },
                            }}
                            className="gallery-style-two-carousel"
                            modules={[Keyboard, Autoplay, Pagination, Navigation, FreeMode]}
                        >
                            <div className="swiper-wrapper">
                                {GalleryV2Data.map(gallery =>
                                    <SwiperSlide key={gallery.id} >
                                        <SingleGalleryV2 gallery={gallery} />
                                    </SwiperSlide>
                                )}
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GalleryV2;