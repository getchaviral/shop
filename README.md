nn# Traditional Shop - React & Express E-commerce Application

A modern e-commerce application built with React frontend and Express backend, specializing in traditional Indian products including clothing, puja items, and festive essentials.

## 🌟 Features

### Frontend (React)
- **Modern UI/UX**: Beautiful responsive design with traditional Indian aesthetics
- **Product Catalog**: Browse products by categories with advanced filtering
- **Shopping Cart**: Add, remove, and manage cart items
- **User Authentication**: Register, login, and user profile management
- **Order Management**: Place orders, track order history
- **Wishlist**: Save favorite products
- **Search Functionality**: Find products easily
- **Responsive Design**: Works on desktop, tablet, and mobile

### Backend (Express)
- **RESTful API**: Well-structured API endpoints
- **User Authentication**: JWT-based authentication system
- **Product Management**: CRUD operations for products
- **Order Processing**: Complete order lifecycle management
- **Cart Management**: Shopping cart functionality
- **Admin Features**: Product and user management for admins
- **Database Integration**: MongoDB with Mongoose ODM
- **Security**: Password hashing, input validation

### Product Categories
- **Traditional Attire**: Sarees, Lehengas, Kurta Sets
- **Puja Samagri**: Religious items, brass accessories, incense
- **Festive Essentials**: Diwali items, decorations, rangoli colors
- **Home Decor**: Traditional handicrafts and decorative items

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd traditional-shop-app
   ```

2. **Set up the Backend**
   ```bash
   cd backend
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the backend directory:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/traditional-shop
   JWT_SECRET=your-super-secret-jwt-key-for-traditional-shop
   CORS_ORIGIN=http://localhost:3000
   ```

4. **Seed the Database (Optional)**
   ```bash
   # From the backend directory
   node seeds/products.js
   ```

5. **Start the Backend Server**
   ```bash
   npm run dev
   # or for production
   npm start
   ```

6. **Set up the Frontend**
   ```bash
   cd ../frontend
   npm install
   ```

7. **Start the Frontend Development Server**
   ```bash
   npm start
   ```

8. **Access the Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 📁 Project Structure

```
traditional-shop-app/
├── backend/
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── middleware/      # Custom middleware
│   ├── seeds/           # Database seeders
│   ├── uploads/         # File uploads
│   ├── server.js        # Express server
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── images/      # Product images
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── store/       # Redux store and slices
│   │   ├── App.js       # Main App component
│   │   └── index.js     # Entry point
│   └── package.json
└── README.md
```

## 🛠 Technology Stack

### Frontend
- **React 18**: Modern React with hooks
- **Redux Toolkit**: State management
- **React Router**: Client-side routing
- **Axios**: HTTP client for API calls
- **Framer Motion**: Smooth animations
- **Lucide React**: Beautiful icons
- **React Toastify**: Toast notifications

### Backend
- **Express.js**: Web framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **JWT**: JSON Web Tokens for authentication
- **bcryptjs**: Password hashing
- **CORS**: Cross-origin resource sharing
- **Multer**: File upload handling

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile

### Products
- `GET /api/products` - Get all products (with filtering)
- `GET /api/products/:id` - Get single product
- `GET /api/products/categories` - Get product categories
- `GET /api/products/featured` - Get featured products
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### Cart
- `GET /api/cart` - Get user cart
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update/:productId` - Update cart item
- `DELETE /api/cart/remove/:productId` - Remove from cart
- `DELETE /api/cart/clear` - Clear entire cart

### Orders
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create new order
- `GET /api/orders/:id` - Get single order
- `PUT /api/orders/:id/pay` - Mark order as paid
- `PUT /api/orders/:id/cancel` - Cancel order

## 🎨 Design Features

- **Traditional Color Scheme**: Browns, golds, and warm tones
- **Responsive Grid Layouts**: CSS Grid and Flexbox
- **Smooth Animations**: Framer Motion transitions
- **Modern Card Designs**: Product and category cards
- **Indian Typography**: Traditional-inspired fonts
- **Mobile-First Approach**: Responsive design principles

## 🔐 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt for secure password storage
- **Input Validation**: Server-side validation
- **CORS Configuration**: Controlled cross-origin requests
- **Error Handling**: Comprehensive error management

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-featured experience
- **Tablet**: Touch-friendly interface
- **Mobile**: Optimized mobile experience

## 🚀 Deployment

### Backend Deployment
1. Set up MongoDB Atlas or your preferred database
2. Configure environment variables for production
3. Deploy to platforms like Heroku, Vercel, or DigitalOcean

### Frontend Deployment
1. Build the production version: `npm run build`
2. Deploy to platforms like Netlify, Vercel, or AWS S3

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Links

- **Frontend Demo**: [Coming Soon]
- **API Documentation**: [Coming Soon]
- **Design System**: [Coming Soon]

## 📞 Support

For support, email support@traditionalshop.com or create an issue on GitHub.

---

**Built with ❤️ for preserving and promoting traditional Indian culture through modern technology.**
