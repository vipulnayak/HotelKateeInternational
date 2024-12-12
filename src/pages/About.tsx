import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import images from '../constants/images';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-gray-900 text-white pt-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[60vh] flex items-center justify-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${images.upperview})`,
          }}
        >
          <div className="absolute inset-0 bg-gray-900/70" />
        </div>
        <div className="relative text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-xl text-gray-300">A Legacy of Luxury and Excellence</p>
        </div>
      </motion.section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Heritage</h2>
            <p className="text-gray-300 mb-4">
            Welcome to Hotel Kateel International – Your Perfect Getaway!

Conveniently located just 200 meters from the bus stand, Hotel Kateel International combines comfort, elegance, and exceptional hospitality. With 22 deluxe rooms, we provide a relaxing retreat for both leisure and business travelers.

Indulge your taste buds at our restaurant, offering a delightful menu of South Indian specialties, tandoor dishes, and Indian cuisines, all crafted to perfection.

            </p>
            <p className="text-gray-300">
            Our hotel features a spacious banquet hall and a charming garden area, ideal for hosting memorable events and gatherings. Guests can also enjoy modern amenities, including a well-equipped gym, an inviting swimming pool, and ample parking space for your convenience.

At Hotel Kateel International, we ensure every moment of your stay is special. Whether for a stay, dining, or celebrations, we’re here to make your experience unforgettable.
            </p>
          </div>
          <div className="relative h-96">
            <img
              src="https://images.unsplash.com/photo-1529290130-4ca3753253ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Hotel Heritage"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              title="Excellence"
              description="We strive for excellence in every detail of our service"
            />
            <ValueCard
              title="Innovation"
              description="Continuously evolving to exceed guest expectations"
            />
            <ValueCard
              title="Sustainability"
              description="Committed to environmental responsibility"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const ValueCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-gray-800 p-6 rounded-lg text-center">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default About;