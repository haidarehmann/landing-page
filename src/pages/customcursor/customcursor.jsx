import { useEffect, useRef } from "react";
import "./style.css";

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    let ringX = 0, ringY = 0;
    let mouseX = 0, mouseY = 0;
    let animationFrameId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    // ring follows with a slight delay for a smooth trailing effect
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      animationFrameId = requestAnimationFrame(animateRing);
    };

    const onMouseDown = () => ring.classList.add("nh-cursor-active");
    const onMouseUp = () => ring.classList.remove("nh-cursor-active");

    const onHoverStart = () => ring.classList.add("nh-cursor-hover");
    const onHoverEnd = () => ring.classList.remove("nh-cursor-hover");

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    // grow the ring when hovering clickable elements
    const clickables = document.querySelectorAll("a, button, [role='button']");
    clickables.forEach((el) => {
      el.addEventListener("mouseenter", onHoverStart);
      el.addEventListener("mouseleave", onHoverEnd);
    });

    animationFrameId = requestAnimationFrame(animateRing);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      clickables.forEach((el) => {
        el.removeEventListener("mouseenter", onHoverStart);
        el.removeEventListener("mouseleave", onHoverEnd);
      });
    };
  }, []);

  return (
    <>
      <div className="nh-cursor-dot" ref={dotRef} />
      <div className="nh-cursor-ring" ref={ringRef} />
    </>
  );
}

export default CustomCursor;