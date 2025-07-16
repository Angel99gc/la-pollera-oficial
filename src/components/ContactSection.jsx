import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '@/hooks/useLanguage';

const ContactSection = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: t.contact.address,
      content: `${t.contact.exactAddress} ${t.contact.fullAddress}`,
      href: `https://maps.app.goo.gl/Qj7j42zfnbjGMWj3A`,
      color: 'text-brand-orange'
    },
    {
      icon: FaPhone,
      title: t.contact.phone,
      content: '+506 2478-0213',
      href: 'tel:+50624780213',
      color: 'text-brand-orange'
    },
    {
      icon: FaWhatsapp,
      title: "Whatsapp",
      content: '+506 2478-0213',
      href: 'https://wa.me/50624780213',
      color: 'text-brand-orange'
    },
    {
      icon: FaEnvelope,
      title: t.contact.email,
      content: 'fhelleng@hotmail.com',
      href: 'mailto:fhelleng@hotmail.com',
      color: 'text-brand-orange'
    },
    {
      icon: FaClock,
      title: t.contact.hours,
      content: t.contact.days,
      href: null,
      color: 'text-brand-orange'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div
          data-aos="fade-up"
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            {t.contact.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div
            data-aos="fade-right"
            className="space-y-8"
          >
            {contactInfo.map((info, index) => {
              const Wrapper = info.href ? 'a' : 'div';
              return (
                <Wrapper
                  key={index}
                  href={info.href}
                  target={info.href ? '_blank' : undefined}
                  rel={info.href ? 'noopener noreferrer' : undefined}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="flex items-start space-x-4 p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 transition-transform duration-300 hover:transform hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0 ${info.color}`}>
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {info.title}
                    </h3>
                    <p className="text-gray-300">
                      {info.content}
                    </p>
                  </div>
                </Wrapper>
              );
            })}
          </div>

          <div
            data-aos="fade-left"
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              {t.contact.location}
            </h3>

            <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl border-2 border-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1649.14303213788!2d-84.65056463232504!3d10.552132552256491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa00a5fd5af9f6d%3A0x44ddc8ec26a671ee!2sRestaurante%20la%20pollera!5e0!3m2!1ses-419!2scr!4v1752574684807!5m2!1ses-419!2scr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Restaurant Location"
                className="rounded-xl"
              ></iframe>

              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-1">La Pollera</h4>
                <p className="text-sm text-gray-600">{t.contact.fullAddress}</p>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/Qj7j42zfnbjGMWj3A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-orange to-brand-yellow text-white px-6 py-3 rounded-full font-medium hover:from-brand-yellow hover:to-brand-orange transition-all duration-300 shadow-lg transform hover:scale-105"
            >
              <FaMapMarkerAlt className="w-5 h-5" />
              <span>{t.contact.viewOnMap}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;