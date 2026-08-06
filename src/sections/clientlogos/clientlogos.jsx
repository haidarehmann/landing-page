'use client';
import React, { useRef, useState, useEffect } from 'react';
import './style.css';
import { programs } from '../../data/data';
import { ArrowButton } from '../../components/button/button';

const ClientLogos = () => {
    const trackRef = useRef(null);
    const [hovering, setHovering] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth <= 899);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    const scrollLeft = () => {
        trackRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        trackRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    const showArrows = hovering || isMobile;

    return (
        <section id="services" className="section">
            <div className="header1">
                <p className="tagline">WHAT I OFFER</p>
                <h2 className="title">Services</h2>
                <div className="underline1"></div>
                <p className="subtitle">
                    Practical, governance-first support across finance, risk, and AI-driven transformation.
                </p>
            </div>

            <div
                className="sliderWrapper"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
            >
                <ArrowButton style="slider" direction="left" visible={showArrows} onClick={scrollLeft} />

                <div className="track" ref={trackRef}>
                    {programs.map((item, i) => {
                        const isCenter = !isMobile && i % 2 === 1;
                        return (
                            <div
                                className={isCenter ? 'cardBig' : 'cardSmall'}
                                key={i}
                            >
                                <div className="imgBox">
                                    <img src={item.img} alt={item.title} />
                                    <div className="overlay">
                                        <h3 className="cardTitle">{item.title}</h3>
                                        <p className="cardDesc">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <ArrowButton style="slider" direction="right" visible={showArrows} onClick={scrollRight} />
            </div>

            <div className="quoteSection">
                <p className="quoteText">
                    <span className="quoteMark">"</span>
                    AI is not just a technological shift  it is a leadership shift, and every service here is built to prove it.
                </p>
                <div className="quoteLine"></div>
            </div>
        </section>
    );
};

export default ClientLogos;