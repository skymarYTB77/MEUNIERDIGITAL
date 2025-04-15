import React from 'react';
import { Monitor, RefreshCw, Search } from 'lucide-react';

const ServiceCard = ({ title, description, icon: Icon }: { title: string, description: string, icon: any }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-400/50">
    <Icon className="w-12 h-12 text-blue-600 mb-4" />
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Besoin d'un site web performant et moderne ?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            icon={Monitor}
            title="Site vitrine / e-commerce"
            description="Conception de sites vitrines et de boutiques en ligne sur mesure, alliant design moderne et performance."
          />
          <ServiceCard
            icon={RefreshCw}
            title="Refonte Web"
            description="Si votre site web est lent, peu intuitif ou dépassé, la refonte web est la meilleure option pour moderniser celui-ci."
          />
          <ServiceCard
            icon={Search}
            title="Référencement Web"
            description="Atteignez la première page de Google grâce à une stratégie SEO sur mesure. Maximisez votre visibilité."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;