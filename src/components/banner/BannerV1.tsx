import Image from 'next/image';
import Link from 'next/link';
import Animate from '../animation/Animate';

const BannerV1 = () => {
    return (
        <>
            <div className="banner-style-one-area overflow-hidden bg-gray">
                <div className="shape-blury" />
                <div className="banner-style-one">
                    <div className="container">
                        <div className="content">
                            <div className="row align-center">
                                <div className="col-xl-6 col-lg-7 pr-50 pr-md-15 pr-xs-15">
                                    <div className="information">
                                        <div className="animation-shape">
                                            <Image src="/assets/img/shape/anim-2.png" alt="Image not found" width={200} height={200} />
                                        </div>
                                        <Animate className="animate__animated animate__fadeInUp" duration="400ms">
                                            <h4>Зөвлөх үйлчилгээ</h4>
                                        </Animate>

                                        <Animate className="animate__animated animate__fadeInUp" delay="500ms" duration="400ms">
                                            <h2>Таны <strong>санхүүгийн</strong> <br />хөтөч</h2>
                                        </Animate>

                                        <Animate className="animate__animated animate__fadeInUp" delay="900ms" duration="400ms">
                                            <p>
                                                Digitax - Санхүүгийн хяналтыг таны гарт
                                            </p>
                                        </Animate>

                                        <Animate className="animate__animated animate__fadeInUp" delay="1200ms" duration="400ms">
                                            <div className="button mt-40">
                                                <Link className="btn btn-md circle btn-gradient animation" href="/contact-us">Эхлэх</Link>
                                            </div>
                                        </Animate>

                                    </div>
                                </div>
                                <div className="banner-one-thumb col-xl-6 col-lg-5 pl-60 pl-md-15 pl-xs-15">
                                    <div className="thumb">
                                        <Animate className="animate__animated animate__fadeInUp">
                                            <Image src="/assets/img/thumb/1.png" alt="Thumb" width={1000} height={1142} />
                                        </Animate>
                                        <div className="strategy">
                                            <Animate className="animate__animated animate__fadeInLeft" delay="800ms">
                                                <div className="item">
                                                    <div className="icon">
                                                        <i className="fas fa-chart-pie" />
                                                    </div>
                                                    <div className="info">
                                                        <p><strong>86%</strong> Бизнесийн өсөлт</p>
                                                    </div>
                                                </div>
                                            </Animate>

                                            <Animate className="animate__animated animate__fadeInRight" delay="500ms">
                                                <div className="item">
                                                    <div className="icon">
                                                        <i className="fas fa-rocket" />
                                                    </div>
                                                    <div className="info">
                                                        <p><strong>75%</strong> Цаг хэмнэлт</p>
                                                    </div>
                                                </div>
                                            </Animate>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV1;