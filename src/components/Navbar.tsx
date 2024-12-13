import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/">
            <Logo />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/facilities">Facilities</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          {/* Book Now Button */}
          <motion.a
            href="https://www.google.com/search?q=hotel+kateel+international&oq=hote&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyBggCEEUYPDIGCAMQRRg8MgYIBBBFGDwyBggFEEUYPDIGCAYQLhhA0gEIODY5MmowajGoAgiwAgE&sourceid=chrome&ie=UTF-8"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 px-6 py-2 rounded-full font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300"
          >
            Explore
          </motion.a>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-sm rounded-lg">
                <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
                <MobileNavLink to="/facilities" onClick={() => setIsOpen(false)}>Facilities</MobileNavLink>
                <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
                <MobileNavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
                <motion.a
                  href="https://www.makemytrip.com/hotels/hotel_kateel_international-details-karkala.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  className="block w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 px-6 py-2 rounded-full font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 mt-4 text-center"
                >
                  Book Now
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="text-white font-semibold hover:text-yellow-400 transition-colors duration-300"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-white font-semibold hover:text-yellow-400 block px-3 py-2 text-base transition-colors duration-300"
  >
    {children}
  </Link>
);

export default Navbar;