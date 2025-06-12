import React from 'react';
import { ArrowRight, Zap, Shield, Truck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                La technologie
                <span className="block text-orange-400">à portée de main</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Découvrez notre sélection premium de produits high-tech. 
                Des dernières innovations aux classiques incontournables.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Découvrir nos produits</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                En savoir plus
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-500 p-2 rounded-lg">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">Livraison rapide</p>
                  <p className="text-sm text-blue-200">24-48h chrono</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-500 p-2 rounded-lg">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">Garantie 2 ans</p>
                  <p className="text-sm text-blue-200">Sur tous nos produits</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-500 p-2 rounded-lg">
                  <Truck className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">Livraison gratuite</p>
                  <p className="text-sm text-blue-200">Dès 99€ d'achat</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-400 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
            <img
              src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg"
              alt="Produits high-tech"
              className="relative w-full h-96 object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white text-blue-600 p-4 rounded-2xl shadow-xl">
              <div className="text-2xl font-bold">2500+</div>
              <div className="text-sm">Clients satisfaits</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};