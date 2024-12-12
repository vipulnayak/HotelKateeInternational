import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import images from '../constants/images';

const Facilities = () => {
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
            backgroundImage: `url(${images.outerview})`
          }}
        >
          <div className="absolute inset-0 bg-gray-900/70" />
        </div>
        <div className="relative text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Our Facilities</h1>
          <p className="text-xl text-gray-300">Experience World-Class Amenities</p>
        </div>
      </motion.section>

      {/* Facilities Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FacilityCard
            title="Luxury Rooms"
            description="Spacious rooms with premium amenities and stunning views"
            image={images.rooms}
            bookingLinks={[
              {
                name: "Book on MakeMyTrip",
                url: "https://www.makemytrip.com/hotels/hotel_kateel_international-details-karkala.html"
              },
              {
                name: "Book on Goibibo",
                url: "https://www.goibibo.com/hotels/hotel-listing/?checkin=20241214&checkout=20241215&roomString=1-2-0&searchText=Hotel%20Kateel%20International&locusId=CTKARK&locusType=city&cityCode=CTKARK&cc=IN&_uCurrency=INR&metaPartner=google&mmtId=201905132305123390&cmp=META|google|cpc_hpa|googlehoteldfinder|Free|Hotel_Price_Ads_445005027225303292|META&vendor=gds&p=2575.00&c=INR&bookingSource=GoogleCPC&adType=0"
              }
            ]}
          />
          <FacilityCard
            title="Dining Hall"
            description="Fine dining experience with world-class cuisine"
            image={images.banquetHall}
            bookingLinks={[
              {
                name: "Dining Directions",
                url: "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyBggCEEUYOzIGCAMQRRg8MgYIBBBFGDwyBggFEEUYPDIGCAYQLhhA0gEIODI1MmowajGoAgiwAgE&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KakngmVDVrs7MTfX4hjKrqkb&daddr=Vendors+Lane,+Market+Rd,+near+Bus+Stand,+Karkala,+Karnataka+574104"
              },
            ]}
          />
          <FacilityCard
            title="Swimming Pool"
            description="Luxurious pool with temperature control and poolside service"
            image={images.swimming}
          />
          <FacilityCard
            title="Modern Gym"
            description="State-of-the-art fitness equipment and personal training services"
            image={images.gym}
          />
          <FacilityCard
            title="Green Garden"
            description="Serene landscaped gardens perfect for relaxation and outdoor events"
            image={images.background}
          />
          <FacilityCard
            title="Banquet Hall"
            description="Elegant venue for weddings, conferences, and special occasions"
            image={images.banquet}
          />
        </div>
      </div>
    </div>
  );
};

interface BookingLink {
  name: string;
  url: string;
}

interface FacilityCardProps {
  title: string;
  description: string;
  image: string;
  bookingLinks?: BookingLink[];
}

const FacilityCard = ({ title, description, image, bookingLinks }: FacilityCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="bg-gray-800 rounded-lg overflow-hidden"
    >
      <div className="relative h-64">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        {bookingLinks && (
          <div className="space-y-2">
            {bookingLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Facilities;