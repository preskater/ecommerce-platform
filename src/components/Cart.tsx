import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../hooks/useCart';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(price);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              <ShoppingBag className="h-6 w-6 mr-2" />
              Mon Panier ({cartItems.length})
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
                <p className="text-xl font-semibold text-gray-900 mb-2">Votre panier est vide</p>
                <p className="text-gray-600 mb-6">Ajoutez des produits pour commencer vos achats</p>
                <button
                  onClick={onClose}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Continuer mes achats
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 bg-gray-50 rounded-lg p-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-gray-900 truncate">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600">{formatPrice(item.price)}</p>
                      
                      <div className="flex items-center mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-200 rounded transition-colors"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="mx-3 text-sm font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-200 rounded transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-900">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="mt-1 p-1 text-red-500 hover:text-red-700 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}

                <button
                  onClick={clearCart}
                  className="w-full text-sm text-red-600 hover:text-red-800 transition-colors"
                >
                  Vider le panier
                </button>
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t p-6 space-y-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span>{formatPrice(getTotalPrice())}</span>
              </div>
              
              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Procéder au paiement
                </button>
                <button
                  onClick={onClose}
                  className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Continuer mes achats
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};