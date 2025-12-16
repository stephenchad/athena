/**
 * Seed or clear Product collection with sample data
 */
import dotenv from 'dotenv';
dotenv.config();

import connectToDatabase from './db.js';
import Product from './models/Product.js';

const sampleProducts = [
  {
    name: 'Air Zoom Pegasus 39',
    brand: 'Nike',
    category: 'Running',
    subtitle: 'Breathable lightweight running shoe',
    images: ['https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200&auto=format&fit=crop'],
    reviews: [],
    rating: 4.6,
    numberOfReviews: 1243,
    price: 129.99,
    stock: 25,
    productIsNew: true,
  },
  {
    name: 'Ultraboost 22',
    brand: 'Adidas',
    category: 'Running',
    subtitle: 'Responsive cushioning for daily miles',
    images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop'],
    reviews: [],
    rating: 4.5,
    numberOfReviews: 987,
    price: 180,
    stock: 18,
    productIsNew: false,
  },
  {
    name: 'Classic Leather',
    brand: 'Reebok',
    category: 'Lifestyle',
    subtitle: 'Timeless everyday sneaker',
    images: ['https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1200&auto=format&fit=crop'],
    reviews: [],
    rating: 4.2,
    numberOfReviews: 342,
    price: 85,
    stock: 40,
    productIsNew: false,
  },
  {
    name: 'Chuck Taylor All Star',
    brand: 'Converse',
    category: 'Lifestyle',
    subtitle: 'Iconic high-top canvas sneaker',
    images: ['https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&w=1200&auto=format&fit=crop'],
    reviews: [],
    rating: 4.3,
    numberOfReviews: 1590,
    price: 60,
    stock: 50,
    productIsNew: false,
  },
  {
    name: 'Gel-Kayano 29',
    brand: 'ASICS',
    category: 'Running',
    subtitle: 'Stability and cushioning for long runs',
    images: ['https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1200&auto=format&fit=crop'],
    reviews: [],
    rating: 4.7,
    numberOfReviews: 654,
    price: 160,
    stock: 12,
    productIsNew: true,
  },
  {
    name: 'FuelCell Rebel v3',
    brand: 'New Balance',
    category: 'Running',
    subtitle: 'Lightweight daily trainer with pop',
    images: ['https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1200&auto=format&fit=crop'],
    reviews: [],
    rating: 4.4,
    numberOfReviews: 231,
    price: 130,
    stock: 20,
    productIsNew: false,
  },
  {
    name: 'Metcon 8',
    brand: 'Nike',
    category: 'Training',
    subtitle: 'Stable base for strength and HIIT',
    images: ['https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop'],
    reviews: [],
    rating: 4.1,
    numberOfReviews: 118,
    price: 140,
    stock: 8,
    productIsNew: true,
  },
  {
    name: 'Wave Rider 26',
    brand: 'Mizuno',
    category: 'Running',
    subtitle: 'Smooth ride and durable outsole',
    images: ['https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1200&auto=format&fit=crop'],
    reviews: [],
    rating: 4.0,
    numberOfReviews: 156,
    price: 135,
    stock: 14,
    productIsNew: false,
  },
  {
    name: 'Old Skool',
    brand: 'Vans',
    category: 'Lifestyle',
    subtitle: 'Classic skate shoe with waffle sole',
    images: ['https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop'],
    reviews: [],
    rating: 4.3,
    numberOfReviews: 892,
    price: 65,
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
