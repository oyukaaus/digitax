"use client"
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation } from 'swiper/modules';
import PartnerV1Data from "@/assets/jsonData/partner/PartnerV1Data.json"

const PartnerV1 = () => {
    return (
        <>
            <div className="partner-style-one-area default-padding bg-white text-light" style={{ backgroundImage: 'url(/assets/img/shape/25.png)' }}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-xl-4">
                            <h2 className="title" style={{color:"black"}}>ГИШҮҮНЧЛЭЛ</h2>
                        </div>
                        <div className="col-xl-8 pl-60 pl-md-15 pl-xs-15 brand-one-contents ">
                            <div className="brand-style-one-items" style={{backgroundColor:'white'}}>
                                <Swiper
                                    loop={true}
                                    slidesPerView={2}
                                    spaceBetween={15}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false
                                    }}
                                    breakpoints={{
                                        768: {
                                            slidesPerView: 3,
                                            spaceBetween: 30,
                                        },
                                        992: {
                                            slidesPerView: 3,
                                            spaceBetween: 30,
                                        }
                                    }}
                                    className="brand-style-one-carousel swiper"
                                    modules={[Keyboard, Autoplay, Pagination, Navigation]}
                                >
                                    <div className="swiper-wrapper" >
                                        {PartnerV1Data.map(partner =>
                                            <SwiperSlide className="swiper-slide" key={partner.id} style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center",  marginRight:20, width:220}}>
                                                <div className="brand-one">
                                                    {/* <Image src={`/assets/img/brand/${partner.image}`} alt="Image Not Found" width={512} height={512} /> */}
                                                    <Image src={`/assets/img/brand/${partner.image}`} alt="Image Not Found" width={512} height={512} />
                                                    {partner.url ? (
                                                        <a href={partner.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 30, color:'#246bfd' }}>
                                                            {partner.name}
                                                        </a>
                                                    ) : (
                                                        <span>{partner.name}</span>
                                                    )}
                                                </div>
                                            </SwiperSlide>
                                        )}
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PartnerV1;