import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-gray-900 text-white pt-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[40vh] flex items-center justify-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('../assets/outerview.png')",
          }}
        >
          <div className="absolute inset-0 bg-gray-900/70" />
        </div>
        <div className="relative text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300">Get in Touch with Our Team</p>
        </div>
      </motion.section>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
            <ContactInfo
              Icon={MapPin}
              title="Address"
              content="Hotel Kateel International,Vendors Lane, Market Road Near Bus Stand, Karkala,574104,India"
            />
            <ContactInfo
              Icon={Phone}
              title="Phone"
              content="+91 7022593107"
            />
            <ContactInfo
              Icon={Mail}
              title="Email"
              content="kateelinternational@gmail.com"
            />
            <ContactInfo
              Icon={Clock}
              title="Working Hours"
              content="24/7 - Always at Your Service"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const ContactInfo = ({ Icon, title, content }: { Icon: any; title: string; content: string }) => (
  <div className="flex items-start space-x-4">
    <div className="bg-purple-600/20 p-3 rounded-lg">
      <Icon size={24} className="text-purple-500" />
    </div>
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-400">{content}</p>
    </div>
  </div>
);

export default Contact;