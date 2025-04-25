"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import about1 from "@/assets/img/about/1.jpg"
import icon4 from "@/assets/img/icon/4.png"

interface DataType {
    sectionClass?: string
}

const AboutV1 = ({ sectionClass }: DataType) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className={`about-style-one-area default-padding-top ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="about-style-one-items">
                        <div className="row">
                            <div className="col-xl-7 col-lg-6">
                                <div className="thumb-style-one">
                                    <Image src={about1} alt="Image Not Found" />
                                    <ModalVideo channel='youtube' isOpen={isOpen} videoId="aTC_RNYtEb0" onClose={() => setOpen(false)} />
                                    <Link onClick={() => setOpen(true)} href="#" scroll={false} className="popup-youtube video-play-button">
                                        <i className="fas fa-play" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6 pl-50 pl-md-15 pl-xs-15">
                                <div className="about-style-one-info">
                                    <div className="content">
                                        <h2 className="title">Үйлчилгээний үнэ</h2>
                                        <p>
                                            Дараах үнийн саналаас сонгон үйлчилгээний гэрээ байгуулан хамтран ажиллах боломжтой. Үйлчлүүлэгч байгууллагын үйл ажиллагааны онцлог нөхцөл байдлаас хамааран үнэ өөрчлөгдөж болно.
                                        </p>
                                    </div>
                                    <ul className="card-list">
                                        <li>
                                            <Image src={icon4} alt="Image Not Found" />
                                            <h5>Зөвлөх үйлчилгээний компани</h5>
                                        </li>
                                        <li>
                                            <h2>3.8 X</h2>
                                            <h5>Өсөлт</h5>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV1;