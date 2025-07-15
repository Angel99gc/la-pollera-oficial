import React from 'react';
import { FaAward, FaUsers, FaClock } from 'react-icons/fa';
import { useLanguage } from '@/hooks/useLanguage';

const AboutSection = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: FaClock,
      number: '10+',
      label: t.about.experience,
      color: 'text-brand-orange'
    },
    {
      icon: FaAward,
      number: '50+',
      label: t.about.dishes,
      color: 'text-brand-orange'
    },
    {
      icon: FaUsers,
      number: '10K+',
      label: t.about.customers,
      color: 'text-brand-orange'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            data-aos="fade-right"
            className="space-y-8"
          >
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6" dangerouslySetInnerHTML={{ __html: t.about.title }}></h2>
              <p className="text-xl text-gray-300 font-medium mb-6">
                {t.about.subtitle}
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                {t.about.description}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  data-aos="fade-up" data-aos-delay={index * 100}
                  className="text-center"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-700 shadow-lg flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-700">
              <img  alt="Interior del restaurante La Pollera" className="w-full h-96 object-cover" src="https://images.unsplash.com/photo-1527811313086-1971349d0fce" />
            </div>

            <div
              data-aos="zoom-in" data-aos-delay="300"
              className="absolute -bottom-8 -left-8 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-gray-700"
            >
              <img  alt="Plato de comida de La Pollera" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1656548784985-7006f26a901d" />
            </div >

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-brand-orange to-brand-yellow rounded-full opacity-20 animate-pulse-slow"></div>
            <div className="absolute bottom-16 -right-8 w-16 h-16 bg-gradient-to-br from-brand-orange to-brand-yellow rounded-full opacity-30 animate-float"></div>
          </div >
        </div>
      </div>
    </section>
  );
};

export default AboutSection;