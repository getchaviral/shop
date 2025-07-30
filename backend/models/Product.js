const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  comment: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  originalPrice: {
    type: Number,
    min: 0
  },
  discount: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  },
  category: {
    type: String,
    required: true,
    enum: ['Traditional Attire', 'Puja Samagri', 'Home Decor', 'Festive Essentials', 'Jewelry', 'Handicrafts']
  },
  subcategory: {
    type: String,
    required: true
  },
  images: [{
    url: String,
    alt: String
  }],
  stock: {
    type: Number,
    required: true,
    min: 0,
    default: 0
  },
  sold: {
    type: Number,
    default: 0
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  numReviews: {
    type: Number,
    default: 0
  },
  reviews: [reviewSchema],
  specifications: [{
    key: String,
    value: String
  }],
  tags: [String],
  isActive: {
    type: Boolean,
    default: true
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  dimensions: {
    length: Number,
    width: Number,
    height: Number,
    weight: Number
  },
  material: String,
  origin: {
    type: String,
    default: 'India'
  },
  care_instructions: String,
  brand: String
}, {
  timestamps: true
});

// Index for search functionality
productSchema.index({
  name: 'text',
  description: 'text',
  category: 'text',
  subcategory: 'text',
  tags: 'text'
});

// Calculate average rating
productSchema.methods.calculateAverageRating = function() {
  if (this.reviews.length === 0) {
    this.rating = 0;
    this.numReviews = 0;
  } else {
    const totalRating = this.reviews.reduce((sum, review) => sum + review.rating, 0);
    this.rating = Math.round((totalRating / this.reviews.length) * 10) / 10;
    this.numReviews = this.reviews.length;
  }
};

// Pre-save middleware to calculate discount price
productSchema.pre('save', function(next) {
  if (this.originalPrice && this.discount > 0) {
    this.price = this.originalPrice - (this.originalPrice * this.discount / 100);
  }
  next();
});

module.exports = mongoose.model('Product', productSchema);
