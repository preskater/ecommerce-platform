import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-400">TechStore</h3>
            <p className="text-gray-300 leading-relaxed">
              Votre partenaire de confiance pour tous vos besoins en technologie. 
              Nous proposons les dernières innovations à des prix compétitifs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Liens rapides</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Accueil</a>
              <a href="#products" className="text-gray-300 hover:text-white transition-colors">Produits</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">À propos</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Support</a>
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Catégories</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Informatique</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Téléphones</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Audio</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Photo</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Accessoires</a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">123 Rue de la Technologie<br />75001 Paris, France</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">contact@techstore.fr</span>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-2">Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md transition-colors">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} TechStore. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Conditions d'utilisation
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};