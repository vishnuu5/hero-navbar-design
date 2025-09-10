import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const dotsRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate dots entrance
      gsap.fromTo(
        ".animated-dot",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 0.8,
          duration: 1.5,
          stagger: 0.2,
          ease: "back.out(1.7)",
        }
      );

      // Animate connecting lines
      gsap.fromTo(
        ".connecting-line",
        { strokeDasharray: "0,1000" },
        {
          strokeDasharray: "5,5",
          duration: 2,
          delay: 1,
          ease: "power2.inOut",
        }
      );

      // Animate text elements
      gsap.fromTo(
        ".hero-title span",
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          delay: 0.5,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".hero-subtitle",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 1.5,
          ease: "power2.out",
        }
      );

      // Continuous floating animation for dots
      gsap.to(".animated-dot", {
        y: "random(-20, 20)",
        x: "random(-10, 10)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 2,
          from: "random",
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const AnimatedDots = () => {
    const dots = [
      { x: 60, y: 120, color: "bg-red-400", size: "w-4 h-4" },
      { x: 140, y: 80, color: "bg-purple-500", size: "w-6 h-6" },
      { x: 220, y: 140, color: "bg-blue-500", size: "w-4 h-4" },
      { x: 100, y: 200, color: "bg-red-500", size: "w-3 h-3" },
      { x: 180, y: 220, color: "bg-purple-400", size: "w-5 h-5" },
      { x: 260, y: 180, color: "bg-blue-400", size: "w-4 h-4" },
      { x: 80, y: 280, color: "bg-black", size: "w-4 h-4" },
      { x: 160, y: 300, color: "bg-black", size: "w-3 h-3" },
      { x: 240, y: 260, color: "bg-purple-600", size: "w-4 h-4" },
      { x: 40, y: 160, color: "bg-red-300", size: "w-2 h-2" },
      { x: 300, y: 120, color: "bg-blue-600", size: "w-5 h-5" },
      { x: 120, y: 340, color: "bg-purple-300", size: "w-3 h-3" },
    ];

    return (
      <div
        className="absolute left-0 top-0 w-full h-full pointer-events-none overflow-hidden"
        ref={dotsRef}
      >
        {dots.map((dot, index) => (
          <div
            key={index}
            className={`animated-dot absolute ${dot.color} ${dot.size} rounded-full`}
            style={{ left: dot.x, top: dot.y }}
          />
        ))}

        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
          {dots.flatMap((dot, index) =>
            dots
              .slice(index + 1, index + 3)
              .map((nextDot, nextIndex) => (
                <line
                  key={`${index}-${nextIndex}`}
                  className="connecting-line text-gray-300"
                  x1={dot.x + 8}
                  y1={dot.y + 8}
                  x2={nextDot.x + 8}
                  y2={nextDot.y + 8}
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                />
              ))
          )}
        </svg>
      </div>
    );
  };

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-white pt-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 lg:h-[500px] hidden lg:block">
            <AnimatedDots />
          </div>

          <div className="text-left lg:text-left" ref={textRef}>
            <h1 className="hero-title text-5xl sm:text-6xl lg:text-7xl font-bold text-black leading-tight mb-6">
              <span className="block">Design</span>
              <span className="block">Transform</span>
              <span className="block">Accelerate</span>
            </h1>

            <p className="hero-subtitle text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Redefining user experiences through <br />
              <span className="font-medium text-black">
                Behavioural Science & AI
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
