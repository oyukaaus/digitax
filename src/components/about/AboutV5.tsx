"use client"
import Image from 'next/image';
import thumb7 from "@/assets/img/thumb/7.jpg"
import CountUp from 'react-countup';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface DataType {
    sectionClass?: string
}

const AboutV5 = ({ sectionClass }: DataType) => {

    const textScrollRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (textScrollRef.current) {
            gsap.registerPlugin(ScrollTrigger);
            const textElements = gsap.utils.toArray('.text') as HTMLElement[];

            textElements.forEach((text) => {
                if (text instanceof HTMLElement) {
                    gsap.to(text, {
                        backgroundSize: '100%',
                        ease: 'none',
                        scrollTrigger: {
                            trigger: text,
                            start: 'center 100%',
                            end: 'center 50%',
                            scrub: true,
                        },
                    });
                }
            });
        }
    }, []);

    return (
        <>
            <div className={`about-style-five-area default-padding ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6">
                            <div className="thumb-style-five">
                                <Image src={thumb7} alt="Image Not Found" />
                            </div>
                        </div>
                        <div className="col-lg-6 pl-80 pl-md-15 pl-xs-15">
                            <div className="about-style-five-info">
                                <div className="text-scroll-animation" ref={textScrollRef}>
                                    <h2 className="title text">Crafting unique solutions with precision and passion.</h2>
                                    <div className="d-flex mt-50">
                                        <div className="left">
                                            <div className="achivement-style-one">
                                                <div className="fun-fact">
                                                    <div className="counter">
                                                        <div className="timer"><CountUp end={28} /></div>
                                                        <div className="operator">K</div>
                                                    </div>
                                                    <span className="medium">Completed Projects</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="info">
                                            <p className="text">
                                                Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast.
                                            </p>
                                            <Link href="/about-us-2" className="btn-read-more">Learn More About Us <i className="fas fa-long-arrow-right" /></Link>
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

export default AboutV5;