import { useState } from 'react';
import { User } from '../types';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const login = (email: string, password: string) => {
    // Simulation de connexion
    const mockUser: User = {
      id: '1',
      name: 'Jean Dupont',
      email,
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg'
    };
    setUser(mockUser);
    setIsAuthModalOpen(false);
  };

  const register = (name: string, email: string, password: string) => {
    // Simulation d'inscription
    const mockUser: User = {
      id: '1',
      name,
      email,
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg'
    };
    setUser(mockUser);
    setIsAuthModalOpen(false);
  };

  const logout = () => {
    setUser(null);
  };

  return {
    user,
    isAuthModalOpen,
    setIsAuthModalOpen,
    login,
    register,
    logout
  };
};