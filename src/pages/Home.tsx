import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import images from '../constants/images';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 text-white">
      <Hero />
      
      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          >
            <FeatureCard
              title="Luxury Rooms"
              description="Experience ultimate comfort in our meticulously designed rooms"
              image={images.rooms}
            />
            <FeatureCard
              title="Fine Dining"
              description="Savor exquisite cuisine prepared by world-renowned chefs"
              image={images.banquetHall}
            />
            <FeatureCard
              title="Swimming Pool"
              description="Rejuvenate yourself in our premium pool facilities"
              image={images.swimming}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 sm:mt-10 md:mt-12 text-center"
          >
            <motion.button
              onClick={() => navigate('/facilities')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
            >
              Explore More Facilities
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative py-12 sm:py-16 md:py-20"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${images.background})`
          }}
        >
          <div className="absolute inset-0 bg-gray-900/80" />
        </div>
        <div className="relative max-w-7xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Experience Luxury Today</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8">Book your stay and create unforgettable memories</p>
          <motion.a
            href="https://www.makemytrip.com/hotels/hotel_kateel_international-details-karkala.html"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
          >
            Book Now
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};

const FeatureCard = ({ 
  title, 
  description, 
  image
}: { 
  title: string; 
  description: string; 
  image: string; 
}) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
    <img src={image} alt={title} className="w-full h-40 sm:h-44 md:h-48 object-cover" />
    <div className="p-4 sm:p-5 md:p-6">
      <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-gray-400">{description}</p>
    </div>
  </div>
);

export default Home;

