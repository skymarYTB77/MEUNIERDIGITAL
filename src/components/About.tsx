import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
            alt="Team working" 
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold">Accompagnement personnalisé</h2>
          <h3 className="text-2xl text-gray-600">Designer & Developer</h3>
          <div className="space-y-4 text-gray-600">
            <p>💡 De l'idée à la réalité, je vous accompagne à chaque étape !</p>
            <p>Besoin d'un site performant, attractif et optimisé ? Je vous aide à créer une solution digitale adaptée à votre activité, en combinant design moderne et technologie avancée.</p>
            <ul className="space-y-2">
              <li>🔹 UX/UI Design – Un design pensé pour une expérience utilisateur fluide et efficace.</li>
              <li>🔹 Développement sur mesure – Un site rapide, sécurisé et évolutif.</li>
              <li>🔹 Optimisation et maintenance – Gardez un site performant sur le long terme.</li>
            </ul>
            <p>🚀 Lancez votre projet dès maintenant !</p>
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-lg uppercase font-medium hover:from-blue-600 hover:to-blue-800 transition-all">
            Me contacter
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;