/**
 * Seed or clear Product collection with sample data
 */
import dotenv from 'dotenv';
dotenv.config();

import connectToDatabase from './db.js';
import Product from './models/Product.js';

const sampleProducts = [
  {
    name: 'iPhone 15 Pro Max',
    brand: 'Apple',
    category: 'Smartphone',
    subtitle: 'Titanium design with A17 Pro chip',
    images: ['https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=1200&auto=format&fit=crop'],
    reviews: [],
    rating: 4.8,
    numberOfReviews: 1243,
    price: 1199,
    stock: 25,
    productIsNew: true,
  },
  {
    name: 'iPhone 15 Pro',
    brand: 'Apple',
    category: 'Smartphone',
    subtitle: 'Pro camera system with titanium',
    images: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop'],
    reviews: [],
    rating: 4.7,
    numberOfReviews: 987,
    price: 999,
    stock: 18,
    productIsNew: true,
  },
  {
    name: 'iPhone 15',
    brand: 'Apple',
    category: 'Smartphone',
    subtitle: 'Dynamic Island and 48MP camera',
    images: ['https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=1200&auto=format&fit=crop'],
    reviews: [],
    rating: 4.6,
    numberOfReviews: 342,
    price: 799,
    stock: 40,
    productIsNew: true,
  },
  {
    name: 'iPhone 14 Pro',
    brand: 'Apple',
    category: 'Smartphone',
    subtitle: 'A16 Bionic with Dynamic Island',
    images: ['https://images.unsplash.com/photo-1603921326210-6edd2d60ca68?q=80&w=1200&auto=format&fit=crop'],
    reviews: [],
    rating: 4.5,
    numberOfReviews: 1590,
    price: 899,
    stock: 50,
    productIsNew: false,
  },
  {
    name: 'iPhone 13',
    brand: 'Apple',
    category: 'Smartphone',
    subtitle: 'A15 Bionic chip with dual camera',
    images: ['https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?q=80&w=1200&auto=format&fit=crop'],
    reviews: [],
    rating: 4.4,
    numberOfReviews: 654,
    price: 629,
    stock: 12,
    productIsNew: false,
  },
  {
    name: 'iPhone SE',
    brand: 'Apple',
    category: 'Smartphone',
    subtitle: 'A15 Bionic in compact design',
    images: ['https://images.unsplash.com/photo-1567581935884-3349723552ca?q=80&w=1200&auto=format&fit=crop'],
    reviews: [],
    rating: 4.2,
    numberOfReviews: 231,
    price: 429,
    stock: 20,
    productIsNew: false,
  },
  {
    name: 'iPhone 12',
    brand: 'Apple',
    category: 'Smartphone',
    subtitle: '5G speed with A14 Bionic',
    images: ['https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1200&auto=format&fit=crop'],
    reviews: [],
    rating: 4.3,
    numberOfReviews: 118,
    price: 529,
    stock: 8,
    productIsNew: false,
  },
  {
    name: 'iPhone 11',
    brand: 'Apple',
    category: 'Smartphone',
    subtitle: 'Dual camera system with A13 Bionic',
    images: ['https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop'],
    reviews: [],
    rating: 4.1,
    numberOfReviews: 156,
    price: 399,
    stock: 14,
    productIsNew: false,
  },
  {
    name: 'iPhone XR',
    brand: 'Apple',
    category: 'Smartphone',
    subtitle: 'Liquid Retina display with Face ID',
    images: ['https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=1200&auto=format&fit=crop'],
    reviews: [],
    rating: 4.0,
    numberOfReviews: 892,
    price: 319,
    stock: 35,
    productIsNew: false,
  },
];

const seedProducts = async () => {
  try {
    await connectToDatabase();
    await Product.deleteMany();
    const created = await Product.insertMany(sampleProducts);
    console.log(`Seeded ${created.length} products.`);
    process.exit(0);
  } catch (err) {
    console.error('Seeding failed:', err);
    process.exit(1);
  }
};

const clearProducts = async () => {
  try {
    await connectToDatabase();
    await Product.deleteMany();
    console.log('Cleared products collection.');
    process.exit(0);
  } catch (err) {
    console.error('Clearing failed:', err);
    process.exit(1);
  }
};

const arg = process.argv[2];
if (arg === '--clear') {
  clearProducts();
} else {
  seedProducts();
}