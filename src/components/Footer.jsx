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
              {/** TODO: Imagen redonda y cambiar a logo oficial */}
              <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/79257f20-aa13-454e-9ca7-57fabbfefedb/e3928dd534ee3db168a7710943a22bfc.jpg" alt="La Pollera Logo" className="w-16 h-16" />
              <span className="font-display text-2xl font-bold">
                La Pollera
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                social.label === 'Whatsapp' ?
                  <a
                    key={index}
                    href='https://wa.me/50624780213'
                    target='_blank'
                    className="w-10 h-10 bg-gray-800 hover:bg-brand-orange rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <social.icon className="w-5 h-5" />
                  </a> :
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
              <a href="https://maps.app.goo.gl/Qj7j42zfnbjGMWj3A" target="_blank" rel="noopener noreferrer" className="flex items-start space-x-3 group">
                <FaMapMarkerAlt className="w-5 h-5 text-brand-orange mt-1 flex-shrink-0 group-hover:text-brand-yellow transition-colors" />
                <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                  {t.contact.exactAddress} {t.contact.fullAddress}
                </span>
              </a>
              <a href="tel:+50624780213" className="flex items-center space-x-3 group">
                <FaPhone className="w-5 h-5 text-brand-orange flex-shrink-0 group-hover:text-brand-yellow transition-colors" />
                <span className="text-gray-300 text-sm group-hover:text-white transition-colors">+506 2478-0213</span>
              </a>
              <a href="mailto:fhelleng@hotmail.com" className="flex items-center space-x-3 group">
                <FaEnvelope className="w-5 h-5 text-brand-orange flex-shrink-0 group-hover:text-brand-yellow transition-colors" />
                <span className="text-gray-300 text-sm group-hover:text-white transition-colors">fhelleng@hotmail.com</span>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-xl font-bold text-brand-orange">
              {t.contact.hours}
            </span>
            <div className="space-y-3">
              <div className="text-gray-300 text-sm">
                <p className="font-medium">{t.footer.days}</p>
                <p>11:00 AM - 11:00 PM</p>
              </div>
              <div className="text-gray-400 text-sm">
                <p>{t.footer.waitingForYou}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 La Pollera. {t.footer.rights}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;