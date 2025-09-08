import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Palette, Zap, Target, Users } from "lucide-react";

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description:
        "Creating intuitive and beautiful user experiences that drive engagement and conversion.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Digital Transformation",
      description:
        "Modernizing your digital presence with cutting-edge technology and design principles.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategy & Consulting",
      description:
        "Data-driven insights and strategic guidance to accelerate your business growth.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Behavioral Science",
      description:
        "Leveraging psychology and user behavior to optimize user journeys and experiences.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine design thinking, behavioral science, and cutting-edge
            technology to create experiences that truly resonate with your
            users.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
