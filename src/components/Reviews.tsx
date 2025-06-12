import React from 'react';
import { Star, Quote } from 'lucide-react';
import { reviews } from '../data/reviews';

export const Reviews: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-50 rounded-2xl p-8 relative hover:shadow-lg transition-shadow duration-300">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-blue-200" />
              
              <div className="flex items-center mb-6">
                <img
                  src={review.avatar || 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg'}
                  alt={review.userName}
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{review.userName}</h3>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                "{review.comment}"
              </p>

              <p className="text-sm text-gray-500">
                {new Date(review.date).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">2500+</div>
              <p className="text-gray-600">Clients satisfaits</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">4.8/5</div>
              <p className="text-gray-600">Note moyenne</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-gray-600">Recommandations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};