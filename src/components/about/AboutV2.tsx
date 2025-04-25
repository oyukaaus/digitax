"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import thumb2 from "@/assets/img/thumb/2.jpg"
import thumb5 from "@/assets/img/thumb/5.jpg"
import ModalVideo from 'react-modal-video';

const AboutV2 = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className="about-style-two-area default-padding">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-xl-6 offset-xl-1 col-lg-6 order-lg-last">
                            <div className="about-style-two-thumb">
                                <div className="thumb">
                                    <Image src={thumb5} alt="Image Not Found" />
                                    <div className="shape-card text-light" style={{ backgroundImage: 'url(/assets/img/shape/21.png)' }}>
                                        <h4>Санхүүгийн хяналтыг таны гарт</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <h4 className="sub-title">Бидний тухай</h4>
                            <h2 className="title">Бид таны татвар, тайлангийн асуудлыг шийднэ.</h2>
                            <p>
                            Digitax бол таны бизнесийн үйл ажиллагааны өдөр тутмын борлуулалт, зардал, төлбөр тооцоог бүртгэн санхүү, татвар, НДШ, НӨАТ-ын тайланг цаг тухай бүрт дижитал системийн тусламжтай мэргэжлийн нягтлан бодогч нар бэлтгэн илгээж таны цаг завыг хэмнэх гэрээт цахим үйлчилгээ юм.
                            </p>
                            <div className="card-style-two mt-40">
                                <div className="thumb">
                                    <Image src={thumb2} alt="Image Not Found" />
                                    <ModalVideo channel='youtube' isOpen={isOpen} videoId="aTC_RNYtEb0" onClose={() => setOpen(false)} />
                                    <Link onClick={() => setOpen(true)} href="#" scroll={false} className="popup-youtube video-play-button"><i className="fas fa-play" /></Link>
                                </div>
                                <div className="info">
                                    <h2>3.8 X</h2>
                                    <h5>Хялбар тайлагнал </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV2;