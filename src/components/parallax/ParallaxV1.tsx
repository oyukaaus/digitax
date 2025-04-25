/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import shape27 from "@/assets/img/shape/27.png"
import banner20 from "@/assets/img/banner/20.jpg"
import Link from 'next/link';
import CircleType from 'circletype';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ParallaxV1 = () => {

    const circleTypeElm = useRef<HTMLDivElement | null>(null);
    const [width, setWidth] = useState<number | null>(null);

    useEffect(() => {
        if (circleTypeElm.current) {
            const options = circleTypeElm.current.dataset.circleTextOptions; // This might be undefined
            new CircleType(circleTypeElm.current);
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWidth(window.innerWidth);
        }
    }, []);

    useEffect(() => {
        if (width !== null && width > 768) {
            gsap.registerPlugin(ScrollTrigger);
            const imageParallax = document.querySelectorAll<HTMLElement>('.img-container');

            imageParallax.forEach((container) => {
                const img = container.querySelector<HTMLImageElement>('img');
                if (!img) return;

                const t4 = gsap.timeline({
                    scrollTrigger: {
                        trigger: container,
                        scrub: true,
                        pin: false,
                    },
                });

                t4.fromTo(
                    img,
                    { yPercent: -60, ease: 'none' },
                    { yPercent: 60, ease: 'none' }
                );
            });
        }
    }, [width]);

    return (
        <>
            <div className="parallax-area">
                <Image src={shape27} alt="Image Not Found" />
                <div className="img-container shape">
                    <Image src={banner20} alt="Image Not Found" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="circle-progress-style-two text-center">
                                <div className="circle-text-card">
                                    <div className="circle-text style-two">
                                        {/* curved-circle start*/}
                                        <div
                                            ref={circleTypeElm}
                                            className="circle-text-item"
                                            data-circle-text-options='{"radius": 105, "forceWidth": true, "forceHeight": true }'
                                        >
                                            .  Certified Creative   .  Digital Agency Company
                                        </div>
                                    </div>
                                    <Link href="#"><i className="fas fa-long-arrow-right" /></Link>
                                </div>
                                <h2 className="title">Best creative &amp; modern agency</h2>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab veniam ullam vero officia incidunt ea, odio excepturi aut ipsum quis nihil eius ipsa at est libero reprehenderit sapiente iure voluptatem?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ParallaxV1;