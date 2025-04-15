import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <SocialLink href="#" icon={Facebook} />
          <SocialLink href="#" icon={Twitter} />
          <SocialLink href="#" icon={Instagram} />
          <SocialLink href="#" icon={Linkedin} />
          <SocialLink href="#" icon={Github} />
        </div>
        <div className="text-gray-600 text-sm">
          <span className="mx-2">Meunierdigital - 2025 Tous droits réservés</span>
          <span className="mx-2">—</span>
          <a href="#" className="underline mx-2">Mentions légales</a>
          <span className="mx-2">•</span>
          <a href="#" className="underline mx-2">CGV</a>
          <span className="mx-2">•</span>
          <a href="#" className="underline mx-2">Confidentialité</a>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon: Icon }: { href: string; icon: any }) => (
  <a 
    href={href} 
    className="text-gray-600 hover:text-blue-600 transition-colors"
  >
    <Icon size={20} />
  </a>
);

export default Footer;