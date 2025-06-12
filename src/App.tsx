import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { Reviews } from './components/Reviews';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { AuthModal } from './components/AuthModal';
import { useCart } from './hooks/useCart';
import { useAuth } from './hooks/useAuth';

function App() {
  const { isOpen: isCartOpen, setIsOpen: setIsCartOpen } = useCart();
  const { isAuthModalOpen, setIsAuthModalOpen } = useAuth();

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAuth={() => setIsAuthModalOpen(true)}
      />
      
      <main>
        <Hero />
        <ProductGrid />
        <Reviews />
      </main>
      
      <Footer />
      
      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </div>
  );
}

export default App;