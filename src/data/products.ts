import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'MacBook Pro 14" M3',
    description: 'Le MacBook Pro 14 pouces avec la puce M3 révolutionnaire. Performance exceptionnelle pour les professionnels créatifs.',
    price: 2299,
    originalPrice: 2499,
    image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg',
    images: [
      'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg',
      'https://images.pexels.com/photos/18105/pexels-photo.jpg',
      'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg'
    ],
    category: 'Informatique',
    inStock: true,
    rating: 4.8,
    reviewCount: 124,
    badge: 'Bestseller'
  },
  {
    id: '2',
    name: 'iPhone 15 Pro Max',
    description: 'Le smartphone le plus avancé d\'Apple. Appareil photo professionnel, performance titanium.',
    price: 1299,
    image: 'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg',
    images: [
      'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg',
      'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg'
    ],
    category: 'Téléphones',
    inStock: true,
    rating: 4.9,
    reviewCount: 89,
    badge: 'Nouveau'
  },
  {
    id: '3',
    name: 'Sony WH-1000XM5',
    description: 'Casque sans-fil à réduction de bruit active. Qualité audio exceptionnelle pour les audiophiles.',
    price: 399,
    originalPrice: 449,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
    category: 'Audio',
    inStock: true,
    rating: 4.7,
    reviewCount: 203
  },
  {
    id: '4',
    name: 'Canon EOS R6 Mark II',
    description: 'Appareil photo hybride professionnel 24,2 MP. Parfait pour la photographie et la vidéo 4K.',
    price: 2799,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg',
    category: 'Photo',
    inStock: true,
    rating: 4.6,
    reviewCount: 67
  },
  {
    id: '5',
    name: 'iPad Pro 12.9" M2',
    description: 'La tablette la plus puissante d\'Apple. Écran Liquid Retina XDR et puce M2 pour une productivité maximale.',
    price: 1299,
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg',
    category: 'Tablettes',
    inStock: false,
    rating: 4.8,
    reviewCount: 156
  },
  {
    id: '6',
    name: 'Samsung Galaxy Watch 6',
    description: 'Montre connectée avec suivi de santé avancé. Design élégant et autonomie exceptionnelle.',
    price: 329,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
    category: 'Montres',
    inStock: true,
    rating: 4.5,
    reviewCount: 98
  },
  {
    id: '7',
    name: 'Dell XPS 13 Plus',
    description: 'Ultrabook premium avec écran InfinityEdge. Performance Intel Core i7 dans un design ultra-fin.',
    price: 1899,
    image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg',
    category: 'Informatique',
    inStock: true,
    rating: 4.4,
    reviewCount: 76
  },
  {
    id: '8',
    name: 'AirPods Pro 2',
    description: 'Écouteurs sans-fil avec réduction de bruit adaptative. Son spatial personnalisé.',
    price: 279,
    image: 'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg',
    category: 'Audio',
    inStock: true,
    rating: 4.7,
    reviewCount: 234,
    badge: 'Populaire'
  }
];

export const categories = [
  { id: '1', name: 'Tous les produits', count: products.length },
  { id: '2', name: 'Informatique', count: products.filter(p => p.category === 'Informatique').length },
  { id: '3', name: 'Téléphones', count: products.filter(p => p.category === 'Téléphones').length },
  { id: '4', name: 'Audio', count: products.filter(p => p.category === 'Audio').length },
  { id: '5', name: 'Photo', count: products.filter(p => p.category === 'Photo').length },
  { id: '6', name: 'Tablettes', count: products.filter(p => p.category === 'Tablettes').length },
  { id: '7', name: 'Montres', count: products.filter(p => p.category === 'Montres').length }
];