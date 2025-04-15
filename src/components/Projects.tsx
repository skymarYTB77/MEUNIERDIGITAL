import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
    <h3 className="text-xl font-bold text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
    <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 text-sm uppercase font-medium">
      Découvrir
      <ArrowRight size={16} />
    </button>
  </div>
);

const Projects = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Mes projets les plus tendances</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            title="Créateur d'Icônes de Dossier"
            description="Personnalise l'apparence de tes dossiers en quelques clics. Choisis une couleur, ajoute un emoji, une image ou un titre, et télécharge une icône prête à l'emploi au format .ico ou .png."
          />
          <ProjectCard
            title="Jeu Petit-bac"
            description="Joue au Petit Bac directement depuis ton navigateur, seul ou en multijoueur. Une lettre aléatoire, des catégories variées, et un temps limité pour trouver un mot dans chaque case."
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;