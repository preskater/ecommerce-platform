import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { useAuth } from '../hooks/useAuth';

interface HeaderProps {
  onOpenCart: () => void;
  onOpenAuth: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCart, onOpenAuth }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getTotalItems } = useCart();
  const { user, logout } = useAuth();

  const totalItems = getTotalItems();

  const navigation = [
    { name: 'Accueil', href: '#' },
    { name: 'Produits', href: '#products' },
    { name: 'Catégories', href: '#categories' },
    { name: 'À propos', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-600">TechStore</h1>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Rechercher des produits..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* User Menu */}
            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                  <User className="h-6 w-6" />
                  <span className="hidden sm:block text-sm font-medium">{user.name}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mon compte</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mes commandes</a>
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Déconnexion
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={onOpenAuth}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <User className="h-6 w-6" />
                <span className="hidden sm:block text-sm font-medium">Connexion</span>
              </button>
            )}

            {/* Cart */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
              <span className="hidden sm:block text-sm font-medium">Panier</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
            {/* Mobile Search */}
            <div className="mt-4 px-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher des produits..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};