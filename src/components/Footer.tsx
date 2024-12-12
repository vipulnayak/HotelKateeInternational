import { Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
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
              <SocialIcon Icon={Facebook} href="#" />
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
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/facilities">Facilities</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="#">Book Now</FooterLink>
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
              <ContactInfo Icon={MapPin} text="Hotel Kateel International,Vendors Lane, Market Road Near Bus Stand, Karkala,574104,India" />
              <ContactInfo Icon={Phone} text="+91 7022593107" />
              <ContactInfo Icon={Mail} text="kateelinternational@gmail.com" />
            </div>
          </motion.div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} HotelKateelInternational. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ Icon, href }: { Icon: any; href: string }) => (
  <a
    href={"https://www.facebook.com/p/Hotel-Kateel-International-100046536266574/"}
    className="text-gray-400 hover:text-white transition-colors duration-300"
  >
    <Icon size={20} />
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a
      href={href}
      className="text-gray-400 hover:text-white transition-colors duration-300"
    >
      {children}
    </a>
  </li>
);

const ContactInfo = ({ Icon, text }: { Icon: any; text: string }) => (
  <div className="flex items-center space-x-3">
    <Icon size={20} className="text-purple-500" />
    <span>{text}</span>
  </div>
);

export default Footer;