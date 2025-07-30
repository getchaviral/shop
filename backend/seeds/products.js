const mongoose = require('mongoose');
const Product = require('../models/Product');
const dotenv = require('dotenv');

dotenv.config();

const products = [
  {
    name: "Banarasi Silk Saree",
    description: "Exquisite handwoven Banarasi silk saree with intricate gold zari work. Perfect for weddings and special occasions. This traditional saree features beautiful floral patterns and comes with a matching blouse piece.",
    price: 6500,
    originalPrice: 8000,
    discount: 18.75,
    category: "Traditional Attire",
    subcategory: "Sarees",
    images: [
      { url: "/images/sari.jpg", alt: "Banarasi Silk Saree" }
    ],
    stock: 15,
    rating: 4.5,
    numReviews: 23,
    specifications: [
      { key: "Material", value: "Pure Silk" },
      { key: "Work", value: "Zari" },
      { key: "Length", value: "6.3 meters" },
      { key: "Blouse", value: "Included" }
    ],
    tags: ["silk", "banarasi", "wedding", "traditional"],
    isFeatured: true,
    material: "Pure Silk",
    care_instructions: "Dry clean only",
    brand: "Heritage Weaves"
  },
  {
    name: "Kurta Pajama Set",
    description: "Comfortable cotton kurta pajama set perfect for festivals and casual wear. Features elegant button work and comfortable fit.",
    price: 2800,
    originalPrice: 3200,
    discount: 12.5,
    category: "Traditional Attire",
    subcategory: "Men's Wear",
    images: [
      { url: "/images/kurtapajamaset.jpg", alt: "Kurta Pajama Set" }
    ],
    stock: 25,
    rating: 4.2,
    numReviews: 18,
    specifications: [
      { key: "Material", value: "Cotton" },
      { key: "Fit", value: "Regular" },
      { key: "Occasion", value: "Casual/Festive" }
    ],
    tags: ["kurta", "pajama", "cotton", "men"],
    isFeatured: true,
    material: "Cotton",
    care_instructions: "Machine wash cold",
    brand: "Traditional Threads"
  },
  {
    name: "Lehenga Choli",
    description: "Stunning designer lehenga choli with heavy embroidery work. Perfect for weddings and grand celebrations.",
    price: 8000,
    category: "Traditional Attire",
    subcategory: "Lehengas",
    images: [
      { url: "/images/lehngacholi.jpeg", alt: "Lehenga Choli" }
    ],
    stock: 8,
    rating: 4.8,
    numReviews: 15,
    specifications: [
      { key: "Material", value: "Net & Silk" },
      { key: "Work", value: "Heavy Embroidery" },
      { key: "Components", value: "3 Piece Set" }
    ],
    tags: ["lehenga", "choli", "embroidery", "wedding"],
    isFeatured: true,
    material: "Net & Silk",
    care_instructions: "Dry clean only",
    brand: "Royal Collection"
  },
  {
    name: "Brass Puja Thali Set",
    description: "Traditional brass puja thali set with intricate designs. Includes diya, kalash, and other essential items for worship.",
    price: 1200,
    category: "Puja Samagri",
    subcategory: "Puja Accessories",
    images: [
      { url: "/images/Brass Puja Thali Set.jpeg", alt: "Brass Puja Thali Set" }
    ],
    stock: 30,
    rating: 4.4,
    numReviews: 45,
    specifications: [
      { key: "Material", value: "Brass" },
      { key: "Items", value: "7 Piece Set" },
      { key: "Diameter", value: "12 inches" }
    ],
    tags: ["brass", "puja", "thali", "worship"],
    isFeatured: false,
    material: "Brass",
    care_instructions: "Clean with brass cleaner",
    brand: "Divine Crafts"
  },
  {
    name: "Incense Sticks Set",
    description: "Premium quality incense sticks with natural fragrances. Pack includes multiple varieties for different occasions.",
    price: 150,
    category: "Puja Samagri",
    subcategory: "Incense",
    images: [
      { url: "/images/incense_sticks.jpg", alt: "Incense Sticks Set" }
    ],
    stock: 100,
    rating: 4.6,
    numReviews: 67,
    specifications: [
      { key: "Quantity", value: "100 Sticks" },
      { key: "Varieties", value: "5 Fragrances" },
      { key: "Burn Time", value: "45 minutes each" }
    ],
    tags: ["incense", "fragrance", "puja", "meditation"],
    isFeatured: false,
    material: "Natural Ingredients",
    care_instructions: "Store in dry place",
    brand: "Sacred Scents"
  },
  {
    name: "Copper Kalash",
    description: "Pure copper kalash for religious ceremonies and home decor. Beautifully crafted with traditional designs.",
    price: 600,
    category: "Puja Samagri",
    subcategory: "Vessels",
    images: [
      { url: "/images/kalash.jpg", alt: "Copper Kalash" }
    ],
    stock: 20,
    rating: 4.3,
    numReviews: 28,
    specifications: [
      { key: "Material", value: "Pure Copper" },
      { key: "Height", value: "6 inches" },
      { key: "Capacity", value: "500ml" }
    ],
    tags: ["copper", "kalash", "vessel", "religious"],
    isFeatured: false,
    material: "Pure Copper",
    care_instructions: "Clean with lemon and salt",
    brand: "Copper Craft"
  },
  {
    name: "Brass Lamp (Diya)",
    description: "Traditional brass oil lamp perfect for daily prayers and festivals. Features elegant design and sturdy construction.",
    price: 450,
    category: "Puja Samagri",
    subcategory: "Lamps",
    images: [
      { url: "/images/brasslamp.jpg", alt: "Brass Lamp" }
    ],
    stock: 40,
    rating: 4.5,
    numReviews: 35,
    specifications: [
      { key: "Material", value: "Brass" },
      { key: "Height", value: "4 inches" },
      { key: "Wicks", value: "Single wick" }
    ],
    tags: ["brass", "lamp", "diya", "oil"],
    isFeatured: false,
    material: "Brass",
    care_instructions: "Clean regularly with brass cleaner",
    brand: "Divine Crafts"
  },
  {
    name: "Diwali Diyas Set",
    description: "Beautiful set of clay diyas perfect for Diwali celebrations. Handcrafted with traditional designs.",
    price: 500,
    category: "Festive Essentials",
    subcategory: "Diwali Items",
    images: [
      { url: "/images/diyaset.jpg", alt: "Diwali Diyas Set" }
    ],
    stock: 50,
    rating: 4.4,
    numReviews: 42,
    specifications: [
      { key: "Material", value: "Clay" },
      { key: "Quantity", value: "20 Pieces" },
      { key: "Design", value: "Traditional" }
    ],
    tags: ["diya", "diwali", "clay", "festival"],
    isFeatured: true,
    material: "Clay",
    care_instructions: "Handle with care",
    brand: "Festival Lights"
  },
  {
    name: "Rangoli Colors Pack",
    description: "Vibrant rangoli colors for creating beautiful floor art during festivals. Natural and safe colors.",
    price: 1200,
    category: "Festive Essentials",
    subcategory: "Decoration",
    images: [
      { url: "/images/rangoli.jpg", alt: "Rangoli Colors Pack" }
    ],
    stock: 35,
    rating: 4.2,
    numReviews: 25,
    specifications: [
      { key: "Colors", value: "12 Different Colors" },
      { key: "Weight", value: "2kg Total" },
      { key: "Type", value: "Natural Colors" }
    ],
    tags: ["rangoli", "colors", "decoration", "festival"],
    isFeatured: false,
    material: "Natural Pigments",
    care_instructions: "Store in dry place",
    brand: "Color Magic"
  },
  {
    name: "Toran Door Hanging",
    description: "Traditional toran for decorating doorways during festivals. Made with fresh flowers and leaves.",
    price: 800,
    category: "Festive Essentials",
    subcategory: "Decoration",
    images: [
      { url: "/images/toran.jpg", alt: "Toran Door Hanging" }
    ],
    stock: 25,
    rating: 4.6,
    numReviews: 31,
    specifications: [
      { key: "Material", value: "Artificial Flowers" },
      { key: "Length", value: "4 feet" },
      { key: "Style", value: "Traditional" }
    ],
    tags: ["toran", "door", "hanging", "decoration"],
    isFeatured: false,
    material: "Artificial Flowers & Leaves",
    care_instructions: "Dust regularly",
    brand: "Festive Decor"
  }
];

const seedProducts = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/traditional-shop');
    console.log('Connected to MongoDB');

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert new products
    const createdProducts = await Product.insertMany(products);
    console.log(`Successfully seeded ${createdProducts.length} products`);

    process.exit(0);
  } catch (error) {
    console.error('Error seeding products:', error);
    process.exit(1);
  }
};

// Run the seeder if this file is executed directly
if (require.main === module) {
  seedProducts();
}

module.exports = { products, seedProducts };
