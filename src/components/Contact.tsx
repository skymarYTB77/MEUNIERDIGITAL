import React from 'react';
import { MessageSquare, Phone, Mail } from 'lucide-react';

const ContactCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <div className="text-center">
    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center">
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-xl font-medium mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Contact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <ContactCard
            icon={MessageSquare}
            title="CHAT EN DIRECT"
            description="Discutez avec nous en temps réel via l'icone en bas à droite"
          />
          <ContactCard
            icon={Phone}
            title="Numéro de téléphone"
            description="+33 0650278718"
          />
          <ContactCard
            icon={Mail}
            title="EMAIL ADDRESS"
            description="Kristopher@meunierdigital.fr"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;