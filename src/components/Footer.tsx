import { useNavigate } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Hotel Kateel International</h3>
            <p className="text-gray-400">Experience luxury and comfort in the heart of the city.</p>
            <div className="flex space-x-4 mt-4">
              <SocialIcon Icon={Facebook} href="https://www.facebook.com/p/Hotel-Kateel-International-100046536266574/" />
              <SocialIcon Icon={Instagram} href="https://www.instagram.com/hotel_kateel_international?" />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink onClick={() => handleNavigation('/about')}>About Us</FooterLink>
              <FooterLink onClick={() => handleNavigation('/facilities')}>Facilities</FooterLink>
              <FooterLink onClick={() => handleNavigation('/contact')}>Contact</FooterLink>
              <li>
                <a
                  href="https://www.makemytrip.com/hotels/hotel_kateel_international-details-karkala.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="col-span-1 md:col-span-2"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-4">
              <ContactInfo Icon={MapPin} text="Hotel Kateel International, Vendors Lane, Market Road Near Bus Stand, Karkala, 574104, India" />
              <ContactInfo Icon={Phone} text="+91 7022593107, 7022593111" />
              <ContactInfo Icon={Mail} text="kateelinternational@gmail.com" />
            </div>
          </motion.div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Hotel Kateel International. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ Icon, href }: { Icon: React.ElementType; href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition-colors duration-300"
  >
    <Icon size={20} />
  </a>
);

const FooterLink = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
  <li>
    <button
      onClick={onClick}
      className="text-gray-400 hover:text-white transition-colors duration-300 bg-transparent border-none cursor-pointer"
    >
      {children}
    </button>
  </li>
);

const ContactInfo = ({ Icon, text }: { Icon: React.ElementType; text: string }) => (
  <div className="flex items-center space-x-3">
    {Icon === MapPin ? (
      <a
        href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyBggCEEUYOzIGCAMQRRg8MgYIBBBFGDwyBggFEEUYPDIGCAYQLhhA0gEIODI1MmowajGoAgiwAgE&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KakngmVDVrs7MTfX4hjKrqkb&daddr=Vendors+Lane,+Market+Rd,+near+Bus+Stand,+Karkala,+Karnataka+574104"
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-500 hover:text-purple-400 transition-colors duration-300"
      >
        <Icon size={20} />
      </a>
    ) : Icon === Phone ? (
      <a
        href="tel:+917022593107"
        className="text-purple-500 hover:text-purple-400 transition-colors duration-300"
      >
        <Icon size={20} />
      </a>
    ) : Icon === Mail ? (
      <a
        href="mailto:kateelinternational@gmail.com"
        className="text-purple-500 hover:text-purple-400 transition-colors duration-300"
      >
        <Icon size={20} />
      </a>
    ) : (
      <Icon size={20} className="text-purple-500" />
    )}
    <span>
      {Icon === Phone ? (
        <a href="tel:+917022593107" className="text-gray-400 hover:text-white transition-colors duration-300">
          {text}
        </a>
      ) : Icon === Mail ? (
        <a href="mailto:kateelinternational@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300">
          {text}
        </a>
      ) : (
        text
      )}
    </span>
  </div>
);

export default Footer;

