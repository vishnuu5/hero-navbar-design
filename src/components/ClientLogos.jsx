import { motion } from "framer-motion";

const ClientLogos = () => {
  const clients = [
    { name: "KPIT", logo: "/kpit-logo.jpg" },
    { name: "Tata", logo: "/tata-logo.png" },
    { name: "Sony", logo: "/sony-logo.png" },
    { name: "Hughes", logo: "/hughes-logo.jpg" },
    { name: "Eton", logo: "/eton-logo.jpg" },
    { name: "Indium", logo: "/indium-logo.jpg" },
    { name: "Choice", logo: "/choice-logo.jpg" },
    { name: "P&G", logo: "/letter-p-typography.png" },
    { name: "Fabf", logo: "/fabf-logo.jpg" },
  ];

  return (
    <section id="clients" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600">
            We've partnered with some of the world's most innovative companies
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={client.logo || "/placeholder.svg"}
                alt={`${client.name} logo`}
                className="max-h-12 w-auto opacity-60 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;
