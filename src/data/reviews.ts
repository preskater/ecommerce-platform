import { Review } from '../types';

export const reviews: Review[] = [
  {
    id: '1',
    userName: 'Marie Dubois',
    rating: 5,
    comment: 'Service client exceptionnel ! Livraison rapide et produits de qualité. Je recommande vivement TechStore.',
    date: '2024-01-15',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
  },
  {
    id: '2',
    userName: 'Pierre Martin',
    rating: 5,
    comment: 'Interface très intuitive, commande facile. Mon MacBook est arrivé en parfait état, emballage soigné.',
    date: '2024-01-12',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg'
  },
  {
    id: '3',
    userName: 'Sophie Laurent',
    rating: 4,
    comment: 'Large choix de produits et prix compétitifs. Petit délai de livraison mais qualité au rendez-vous.',
    date: '2024-01-10',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
  }
];