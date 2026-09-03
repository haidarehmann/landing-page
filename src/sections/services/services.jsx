import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.css';
import { services } from '../../data/data';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const wrapperRef = useRef(null);
  const cardsRef = useRef([]);
  const textRef = useRef([]);
  const count = services.length;

  useLayoutEffect(() => {
    const cards = cardsRef.current;
    const texts = textRef.current;

    const ctx = gsap.context(() => {
      const clamp = gsap.utils.clamp(-1, 1);

      const applyFrame = (progress) => {
        cards.forEach((card, i) => {
          if (!card) return;
          const diff = i - progress;
          const t = clamp(diff);
          const abs = Math.abs(t);
          const isActive = abs < 0.03;

          gsap.set(card, {
            xPercent: 15 * abs,
            yPercent: 124 * t,
            rotateZ: -15 * t,
            rotateY: 20 * abs,
            scale: 1 - 0.45 * abs,
            autoAlpha: gsap.utils.clamp(0, 1, 1 - abs * 1.8),
            zIndex: isActive ? 3 : 2 - Math.round(abs),
            pointerEvents: isActive ? 'auto' : 'none',
          });
          card.classList.toggle('active', isActive);
        });

        texts.forEach((txt, i) => {
          if (!txt) return;
          const diff = i - progress;
          const t = clamp(diff);
          const abs = Math.abs(t);
          const isActive = abs < 0.03;

          gsap.set(txt, {
            yPercent: 30 * t,
            autoAlpha: gsap.utils.clamp(0, 1, 1 - abs * 1.8),
            zIndex: isActive ? 3 : 1,
            pointerEvents: isActive ? 'auto' : 'none',
          });
        });
      };

      applyFrame(0);

      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: 'top top',
        end: () => `+=${(count - 1) * 100}%`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => applyFrame(self.progress * (count - 1)),
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, [count]);

  return (
    <div className="servicesPinWrapper" ref={wrapperRef}>
      <section id="services" className="section">
        <div className="header1">
          <h2 className="title">Features</h2>
          <p className="subtitle">
            Everything you need to manage, grow, and future-proof your business.
          </p>
        </div>

        <div className="slideWrapper">
          <div className="stackTextCol">
            {services.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  className="slideText"
                  key={item.title}
                  ref={(el) => (textRef.current[i] = el)}
                >
                  <span className="slideBadge">
                    {Icon ? <Icon size={26} strokeWidth={2} /> : null}
                  </span>
                  <h3 className="slideTitle">{item.title}</h3>
                  <p className="slideDesc">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="stackMediaCol">
            {services.map((item, i) => (
              <div
                className="mediaCard"
                key={item.title}
                ref={(el) => (cardsRef.current[i] = el)}
              >
                <video src={item.video} autoPlay muted loop playsInline />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;