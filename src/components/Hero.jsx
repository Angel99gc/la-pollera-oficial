import React from 'react';
import { FaUtensils, FaStar } from 'react-icons/fa';
import { useLanguage } from '@/hooks/useLanguage';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const { t } = useLanguage();
  const { toast } = useToast();

  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img alt="Plato de pollo frito crujiente" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1605543986887-5c59f90e1a54" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
      </div>

      <div className="absolute top-20 left-10 animate-float">
        <div
          data-aos="zoom-in" data-aos-delay="800"
          className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center backdrop-blur-sm"
        >
          <FaUtensils className="w-8 h-8 text-brand-orange" />
        </div>
      </div>

      <div className="absolute top-32 right-16 animate-float" style={{ animationDelay: '2s' }}>
        <div
          data-aos="zoom-in" data-aos-delay="1000"
          className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center backdrop-blur-sm"
        >
          <FaStar className="w-6 h-6 text-brand-yellow" />
        </div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div
          data-aos="fade-up"
          className="space-y-6"
        >
          <div
            data-aos="fade-up" data-aos-delay="200"
            className="inline-flex items-center space-x-2 bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-2 text-orange-300"
          >
            <FaStar className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">{t.hero.badge}</span>
          </div>

          <h1
            data-aos="fade-up" data-aos-delay="300"
            className="font-display text-5xl md:text-7xl font-bold text-white leading-tight"
            dangerouslySetInnerHTML={{ __html: t.hero.title }}
          >
          </h1>

          <p
            data-aos="fade-up" data-aos-delay="400"
            className="text-xl md:text-2xl text-gray-200 font-light"
          >
            {t.hero.subtitle}
          </p>

          <p
            data-aos="fade-up" data-aos-delay="500"
            className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            {t.hero.description}
          </p>

          <div
            data-aos="fade-up" data-aos-delay="600"
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8"
          >
            <Button
              onClick={scrollToMenu}
              size="lg"
              className="bg-gradient-to-r from-brand-orange to-brand-yellow hover:from-brand-yellow hover:to-brand-orange text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              {t.hero.cta}
            </Button>
            {/* <a
              target='_blank'
              href='tel:+50624780213'
            >
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
              >
                {t.hero.reserve}
              </Button>
            </a> */}
          </div>
        </div>

        {/* <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;