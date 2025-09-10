import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CompanyLogos = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const logos = scrollRef.current;
    if (logos) {
      gsap.to(logos, {
        x: "-50%",
        duration: 20,
        ease: "none",
        repeat: -1,
      });
    }
  }, []);

  const companies = [
    "KPIT",
    "JCB",
    "SONY",
    "Hughes",
    "ETON",
    "AMERICA",
    "IRIDIUM",
    "Choice",
    "P&G",
    "Fabf",
    "KPIT",
    "JCB",
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600">
            your trusted{" "}
            <span className="font-semibold text-black">
              UI UX design agency
            </span>
          </p>
        </div>

        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            className="flex items-center space-x-12 w-[200%]"
          >
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
