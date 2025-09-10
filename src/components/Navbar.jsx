import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".navbar",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
    );

    gsap.fromTo(
      ".nav-item",
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.3,
        ease: "power2.out",
      }
    );
  }, []);

  const navItems = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Clients", href: "#clients" },
    { name: "About", href: "#about" },
    { name: "Knowledge", href: "#knowledge" },
  ];

  return (
    <nav
      className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-21 h-21 flex items-center justify-center">
                <img
                  src="/logo-light.svg"
                  alt="Leo9 Logo"
                  className="w-20 h-20"
                />
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-item text-gray-700 hover:text-gray-900 font-medium transition-colors relative group"
                onMouseEnter={(e) =>
                  gsap.to(e.target, { y: -2, duration: 0.2 })
                }
                onMouseLeave={(e) => gsap.to(e.target, { y: 0, duration: 0.2 })}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all group-hover:w-full"></span>
              </a>
            ))}

            <button
              className="nav-item bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors"
              onMouseEnter={(e) =>
                gsap.to(e.target, { scale: 1.05, duration: 0.2 })
              }
              onMouseLeave={(e) =>
                gsap.to(e.target, { scale: 1, duration: 0.2 })
              }
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full text-left bg-black text-white px-3 py-2 rounded-lg font-medium mt-4">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
