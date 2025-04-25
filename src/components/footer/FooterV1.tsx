import Link from 'next/link';
import FooterNewsLetter from '../form/FooterNewsLetter';

const FooterV1 = () => {
    return (
        <>
            <footer className="bg-dark overflow-hidden text-light">
                <div className="container">
                    <div className="f-items default-padding">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 footer-item pr-30 pr-md-15 pr-xs-15">
                                <div className="f-item address">
                                    <ul className="contact-address">
                                        <li>
                                            <p>Бидэнтэй холбогдох</p>
                                            <h4><a href="mailto:info@validthemes.com">taxtime8899@gmail.com</a></h4>
                                        </li>
                                        <li>
                                            <p>Холбоо барих</p>
                                            <h4><a href="tel:+4733378901">Утас:99015440, 99097756, 99160604</a></h4>
                                        </li>
                                        <li>
                                            <p>Манай хаяг</p>
                                            <h4>Сүхбаатар дүүрэг 6 дугаар хороо, Монреимпекс ХХК-ийн байр, 208 тоот</h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 footer-item">
                                <div className="f-item link">
                                    <h4 className="widget-title">Холбоос</h4>
                                    <ul>
                                        <li>
                                            <Link href="/about-us">Компаний танилцуулга</Link>
                                        </li>
                                        <li>
                                            <Link href="/contact-us">Тусламж</Link>
                                        </li>
                                        <li>
                                            <Link href="/pricing">Үйлчилгээ</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                           
                            <div className="col-lg-4 col-md-6 footer-item">
                                <div className="f-item newsletter">
                                    <p>
                                        Имэйлээр мэдээ, мэдээлэл <br /> цаг хугацаанд нь авах
                                    </p>
                                    <FooterNewsLetter />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="row">
                            <div className="col-lg-6">
                                <p>&copy; Copyright {(new Date().getFullYear())}. All Rights Reserved by <a href="https://digitax.mn" target='_blank'>Digitax</a></p>
                            </div>
                            <div className="col-lg-6 text-end">
                                <ul className="link-list">
                                    <li>
                                        <Link href="#" scroll={false}>Үйлчилгээний нөхцөл</Link>
                                    </li>
                                    <li>
                                        <Link href="#" scroll={false}>Нууцлалын бодлого</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact-us">Тусламж</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV1;