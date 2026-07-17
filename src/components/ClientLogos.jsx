'use client';
import React, { useRef, useState, useEffect } from 'react';
import './ClientLogos.css';
import km16 from "../assets/km16.jpeg";
import km11 from "../assets/km11.jpeg";
import km17 from "../assets/km17.jpeg";
import km12 from "../assets/km12.jpeg";
import km13 from "../assets/km13.jpeg";
import km7 from "../assets/km7.jpeg";
import km6 from "../assets/km6.jpeg";
import km9 from "../assets/km9.jpeg";
import km3 from "../assets/km3.jpeg";
const programs = [
    {
        img: km16,
        title: "Tax Advisory",
        desc: "Expert support for tax planning and compliance."
    },
    {
        img: km11,
        title: "Financial Advisory",
        desc: "Strategic guidance for business growth and financial stability."
    },
    {
        img: km17,
        title: "Tax Accounting",
        desc: "Accurate tax records and financial reporting solutions."
    },
    {
        img: km12,
        title: "Auditing",
        desc: "Reliable audit services for compliance and transparency."
    },
    {
        img: km13,
        title: "Corporate Finance",
        desc: "Smart financial solutions for business growth and investment."
    },
    {
        img: km6,
        title: "Risk Management",
        desc: "Identifying and mitigating risk across financial operations."
    },
    {
        img: km7,
        title: "AI Governance",
        desc: "Responsible frameworks for adopting AI at the leadership level."
    },
    
    {
        img: km9,
        title: "Digital Transformation",
        desc: "Guiding organizations through technology-driven change."
    },
    {
        img: km3,
        title: "Strategic Planning",
        desc: "Long-term roadmaps built for sustainable business growth."
    }
];

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
                <button
                    className={`arrowLeft ${showArrows ? 'arrowVisible' : ''}`}
                    onClick={scrollLeft}
                    aria-label="Scroll left"
                >
                    &#8592;
                </button>

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

                <button
                    className={`arrowRight ${showArrows ? 'arrowVisible' : ''}`}
                    onClick={scrollRight}
                    aria-label="Scroll right"
                >
                    &#8594;
                </button>
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