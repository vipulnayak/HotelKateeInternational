import { motion } from 'framer-motion';
import { Utensils, Car, Wifi, Coffee, Wine } from 'lucide-react';

const services = [
  {
    icon: Utensils,
    title: "24/7 Room Service",
    description: "Gourmet dining at your convenience"
  },
  {
    icon: Car,
    title: "Valet Parking",
    description: "Complimentary valet service"
  },
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Stay connected everywhere"
  },
  {
    icon: Coffee,
    title: "Executive Lounge",
    description: "Exclusive business facilities"
  },
  {
    icon: Wine,
    title: "Premium Bar",
    description: "Fine wines and spirits"
  },
  {
    icon: Utensils,
    title: "Banquet Hall",
    description: "Perfect for weddings and special occasions"
  },
];

const Services = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">Our Services</h2>
          <p className="text-sm sm:text-base text-gray-400">Experience luxury in every detail</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-4 sm:p-5 md:p-6 rounded-lg shadow-xl"
            >
              <div className="bg-purple-500/10 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;