import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const TrustedAgency = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    gsap.to(el, {
      x: "-50%",
      duration: 20,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  const companies = [
    "KPIT", "IBM", "Tata", "Sony", "Hughes", "ETON", "AMERICA", "IRIDIUM",
    "Choice", "Star", "P&G", "Fabf",
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="overflow-hidden whitespace-nowrap">
        <div
          ref={containerRef}
          className="inline-flex space-x-12 text-gray-400 font-medium text-lg"
        >
          {companies.concat(companies).map((c, i) => (
            <span key={i} className="hover:text-black transition-colors">{c}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedAgency;
