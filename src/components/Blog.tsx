import React from 'react';

const BlogCard = ({ date, title, excerpt, image }: { date: string; title: string; excerpt: string; image: string }) => (
  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <div className="inline-block px-3 py-1 mb-4 text-white text-sm bg-gradient-to-r from-blue-500 to-blue-700 rounded">
        {date}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{excerpt}</p>
      <a href="#" className="text-blue-600 font-semibold uppercase text-sm">Lire plus</a>
    </div>
  </div>
);

const Blog = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Les derniers posts du blog</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <BlogCard
            date="12 Fev"
            title="Pourquoi créer un site web ? - 6 points pour vous convaincre"
            excerpt="Plus de 80% des consommateurs recherchent des informations en ligne avant d'acheter. Sans site web, votre entreprise risque de passer inaperçue."
            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
          />
          <BlogCard
            date="12 Fev"
            title="Refonte de site web : quand est-ce le bon moment ?"
            excerpt="En 2023, plus de 60% du trafic web provient des smartphones. Un site non optimisé pour les mobiles perd des visiteurs et nuit à votre SEO."
            image="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80"
          />
          <BlogCard
            date="12 Fev"
            title="Mesurez l'efficacité de votre site web"
            excerpt="Un site web performant est un site qui attire, retient et convertit. Suivre vos données et tester régulièrement vos pages vous permettra de maximiser vos résultats."
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;