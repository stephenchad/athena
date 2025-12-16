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
  {
    name: 'iPhone X',
    brand: 'Apple',
    category: 'Smartphone',
    subtitle: 'All-screen design with Face ID',
    images: ['https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=1200&auto=format&fit=crop'],
    reviews: [],
    rating: 3.9,
    numberOfReviews: 567,
    price: 299,
    stock: 15,
    productIsNew: false,
  },
  {
    name: 'iPad Pro 12.9',
    brand: 'Apple',
    category: 'Tablet',
    subtitle: 'M2 chip with Liquid Retina XDR display',
    images: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1200&auto=format&fit=crop'],
    reviews: [],
    rating: 4.7,
    numberOfReviews: 432,
    price: 1099,
    stock: 20,
    productIsNew: true,
  },
  {
    name: 'iPad Air',
    brand: 'Apple',
    category: 'Tablet',
    subtitle: 'M1 chip with 10.9-inch display',
    images: ['https://images.unsplash.com/photo-1561154464-82e9adf32764?q=80&w=1200&auto=format&fit=crop'],
    reviews: [],
    rating: 4.5,
    numberOfReviews: 321,
    price: 599,
    stock: 30,
    productIsNew: false,
  },
  {
    name: 'iPad',
    brand: 'Apple',
    category: 'Tablet',
    subtitle: 'A14 Bionic with 10.9-inch display',
    images: ['https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?q=80&w=1200&auto=format&fit=crop'],
    reviews: [],
    rating: 4.3,
    numberOfReviews: 654,
    price: 449,
    stock: 45,
    productIsNew: false,
  },
  {
    name: 'iPad mini',
    brand: 'Apple',
    category: 'Tablet',
    subtitle: 'A15 Bionic with 8.3-inch display',
    images: ['https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?q=80&w=1200&auto=format&fit=crop'],
    reviews: [],
    rating: 4.4,
    numberOfReviews: 287,
    price: 499,
    stock: 25,
    productIsNew: false,
  },
  {
    name: 'MacBook Pro 16',
    brand: 'Apple',
    category: 'Laptop',
    subtitle: 'M3 Pro chip with 16-inch display',
    images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop'],
    reviews: [],
    rating: 4.8,
    numberOfReviews: 198,
    price: 2499,
    stock: 12,
    productIsNew: true,
  },
  {
    name: 'MacBook Air M2',
    brand: 'Apple',
    category: 'Laptop',
    subtitle: 'M2 chip with 13.6-inch display',
    images: ['https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop'],
    reviews: [],
    rating: 4.6,
    numberOfReviews: 543,
    price: 1199,
    stock: 18,
    productIsNew: false,
  },
  {
    name: 'iMac 24',
    brand: 'Apple',
    category: 'Desktop',
    subtitle: 'M3 chip with 24-inch 4.5K display',
    images: ['https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1200&auto=format&fit=crop'],
    reviews: [],
    rating: 4.5,
    numberOfReviews: 234,
    price: 1299,
    stock: 15,
    productIsNew: true,
  },
  {
    name: 'Mac Studio',
    brand: 'Apple',
    category: 'Desktop',
    subtitle: 'M2 Max chip for pro workflows',
    images: ['https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1200&auto=format&fit=crop'],
    reviews: [],
    rating: 4.7,
    numberOfReviews: 156,
    price: 1999,
    stock: 8,
    productIsNew: false,
  },
  {
    name: 'Apple Watch Ultra 2',
    brand: 'Apple',
    category: 'Wearable',
    subtitle: 'Rugged titanium with precision GPS',
    images: ['https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=1200&auto=format&fit=crop'],
    reviews: [],
    rating: 4.6,
    numberOfReviews: 389,
    price: 799,
    stock: 22,
    productIsNew: true,
  },
  {
    name: 'AirPods Pro 2',
    brand: 'Apple',
    category: 'Audio',
    subtitle: 'Active Noise Cancellation with H2 chip',
    images: ['https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?q=80&w=1200&auto=format&fit=crop'],
    reviews: [],
    rating: 4.5,
    numberOfReviews: 678,
    price: 249,
    stock: 40,
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