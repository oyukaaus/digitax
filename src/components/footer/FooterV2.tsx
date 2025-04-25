import Link from 'next/link';
import FooterNewsLetter from '../form/FooterNewsLetter';
import SocialShare from '../utilities/SocialShare';
import logo from "@/assets/img/logo.png"
import Image from 'next/image';

const FooterV2 = () => {
    return (
        <>
            <footer className="bg-gray overflow-hidden">
                <div className="container">
                    <div className="f-items default-padding">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 footer-item pr-30 pr-md-15 pr-xs-15">
                                <div className="f-item address">
                                    <Image src={logo} alt="Image Not Found" />
                                    <p>
                                        Excellence decisively nay man twins impression maximum contrasted remarkably is perfect.
                                    </p>
                                    <ul className="footer-social">
                                        <SocialShare />
                                    </ul>
                                    <ul className="contact-address">
                                        <li>
                                            <p>Our Location</p>
                                            <h4>175 10h Street, Office 375 Berlin, Devolina 21562</h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 footer-item">
                                <div className="f-item link">
                                    <h4 className="widget-title">Quick Links</h4>
                                    <ul>
                                        <li>
                                            <Link href="/about-us">Company Profile</Link>
                                        </li>
                                        <li>
                                            <Link href="/contact-us">Help Center</Link>
                                        </li>
                                        <li>
                                            <Link href="/about-us">Career</Link>
                                        </li>
                                        <li>
                                            <Link href="/pricing">Plans &amp; Pricing</Link>
                                        </li>
                                        <li>
                                            <Link href="/blog-with-sidebar">News & Blog</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 footer-item">
                                <div className="f-item link">
                                    <h4 className="widget-title">Our Services</h4>
                                    <ul>
                                        <li>
                                            <Link href="/services-details/1">Manage investment</Link>
                                        </li>
                                        <li>
                                            <Link href="/services-details/1">Email Marketing</Link>
                                        </li>
                                        <li>
                                            <Link href="/services-details/1">Growth Hacking</Link>
                                        </li>
                                        <li>
                                            <Link href="/services-details/1">Lead Generation</Link>
                                        </li>
                                        <li>
                                            <Link href="/services-details/1">Offline SEO</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 footer-item">
                                <div className="f-item newsletter">
                                    <h4 className="widget-title">Newsletter</h4>
                                    <p>
                                        Join our subscribers list to get the latest <br /> news and special offers.
                                    </p>
                                    <FooterNewsLetter />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Start Footer Bottom */}
                <div className="footer-bottom bg-dark text-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <p>&copy; Copyright {(new Date().getFullYear())}. All Rights Reserved by <a href="https://themeforest.net/user/validthemes" target='_blank'>validthemes</a></p>
                            </div>
                            <div className="col-lg-6 text-end">
                                <ul className="link-list">
                                    <li>
                                        <Link href="#" scroll={false}>Terms</Link>
                                    </li>
                                    <li>
                                        <Link href="#" scroll={false}>Privacy</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact-us">Support</Link>
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

export default FooterV2;