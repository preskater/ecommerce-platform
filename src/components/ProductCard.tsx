import React from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../hooks/useCart';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(price);
  };

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {product.badge && (
          <span className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {product.badge}
          </span>
        )}
        
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold">
              Rupture de stock
            </span>
          </div>
        )}

        <button className="absolute top-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100">
          <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
        </button>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full shrink-0 ml-2">
            {product.category}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">
            {product.rating} ({product.reviewCount} avis)
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
              product.inStock
                ? 'bg-blue-600 hover:bg-blue-700 text-white hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Ajouter</span>
          </button>
        </div>
      </div>
    </div>
  );
};