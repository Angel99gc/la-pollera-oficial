import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '@/hooks/useLanguage';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const { t } = useLanguage();
  const { toast } = useToast();

  const handleSocialClick = () => {
    toast({
      title: t.common.notImplemented,
      duration: 3000,
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: t.nav.home, id: 'hero' },
    { label: t.nav.menu, id: 'menu' },
    { label: t.nav.about, id: 'about' },
    { label: t.nav.contact, id: 'contact' }
  ];

  const socialLinks = [
    { icon: FaFacebook, label: 'Facebook' },
    { icon: FaInstagram, label: 'Instagram' },
    { icon: FaTwitter, label: 'Twitter' },
    { icon: FaWhatsapp, label: 'Whatsapp' }
  ];

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/79257f20-aa13-454e-9ca7-57fabbfefedb/e3928dd534ee3db168a7710943a22bfc.jpg" alt="La Pollera Logo" className="w-16 h-16" />
            </div>
            <p className="text-gray-400 leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  onClick={handleSocialClick}
                  className="w-10 h-10 bg-gray-800 hover:bg-brand-orange rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-xl font-bold text-brand-orange">
              {t.footer.quickLinks}
            </span>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-300 hover:text-brand-orange transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-xl font-bold text-brand-orange">
              {t.contact.title}
            </span>
            <div className="space-y-4">
              <a href="https://www.google.com/maps/search/?api=1&query=Avenida+Central,+San+José,+Costa+Rica" target="_blank" rel="noopener noreferrer" className="flex items-start space-x-3 group">
                <FaMapMarkerAlt className="w-5 h-5 text-brand-orange mt-1 flex-shrink-0 group-hover:text-brand-yellow transition-colors" />
                <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                  Avenida Central, San José, Costa Rica
                </span>
              </a>
              <a href="tel:+50622223333" className="flex items-center space-x-3 group">
                <FaPhone className="w-5 h-5 text-brand-orange flex-shrink-0 group-hover:text-brand-yellow transition-colors" />
                <span className="text-gray-300 text-sm group-hover:text-white transition-colors">+506 2222-3333</span>
              </a>
              <a href="mailto:contacto@lapollera.cr" className="flex items-center space-x-3 group">
                <FaEnvelope className="w-5 h-5 text-brand-orange flex-shrink-0 group-hover:text-brand-yellow transition-colors" />
                <span className="text-gray-300 text-sm group-hover:text-white transition-colors">contacto@lapollera.cr</span>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-xl font-bold text-brand-orange">
              {t.contact.hours}
            </span>
            <div className="space-y-3">
              <div className="text-gray-300 text-sm">
                <p className="font-medium">Lunes - Domingo</p>
                <p>11:00 - 23:00</p>
              </div>
              <div className="text-gray-400 text-sm">
                <p>¡Te esperamos!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 La Pollera. {t.footer.rights}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;