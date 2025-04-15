import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[600px] bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <div className="text-white space-y-6">
          <h1 className="text-6xl font-bold leading-tight">
            MEUNIER<span className="text-gray-200">DIGITAL</span>
          </h1>
          <h2 className="text-5xl font-bold">
            Transforme vos idées en <span className="text-blue-400">site web</span>
          </h2>
          <p className="text-xl max-w-3xl">
            Développement de sites modernes et performants.
            Nous concevons des solutions digitales sur mesure 
            pour entrepreneurs et entreprises
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;