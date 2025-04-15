import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-xl border border-gray-200 p-8 flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-medium mb-4">Qui sommes-nous ?</h2>
            <p className="text-gray-600 mb-6">
              MeunierDigital, c'est un entrepreneur passionné dédié à la création de solutions numériques sur mesure. 
              J'accompagne les entreprises avec des outils web innovants et performants, tout en privilégiant la qualité, 
              l'écoute et la transparence.
            </p>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-medium mb-4">Newsletter</h2>
            <p className="text-gray-600 mb-4">
              Inscrivez-vous à notre newsletter pour rester des mises à jour.
            </p>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-lg">
                Je m'abonne
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              En vous abonnant, vous acceptez notre Politique de confidentialité et consentez à recevoir des mises à jour.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;