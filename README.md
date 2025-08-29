# User Manager System

A full-stack user management application built with React (frontend) and Node.js/Express (backend) with MySQL database. The system provides user registration, authentication, and admin functionality for managing users.

## 🚀 Features

### User Features
- User registration and login
- JWT-based authentication
- User profile management
- Secure password hashing with bcrypt

### Admin Features
- Admin login with elevated privileges
- View all registered users
- Delete user accounts
- Protected admin routes

### Technical Features
- RESTful API architecture
- MySQL database integration
- CORS enabled for cross-origin requests
- Environment-based configuration
- Responsive UI with Tailwind CSS

## 🏗️ Architecture

### Backend
- **Framework**: Node.js with Express.js
- **Database**: MySQL
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: bcryptjs for password hashing
- **CORS**: Enabled for frontend communication

### Frontend
- **Framework**: React with Vite
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Build Tool**: Vite

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager
- **MySQL** database server
- **Git** for version control

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd brief_UserManager
```

### 2. Database Setup

1. Install and start MySQL server
2. Create a database named `usermanager`
3. Create the `users` table:

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  fullname VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('user', 'admin') DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

4. (Optional) Create an admin user:

```sql
INSERT INTO users (fullname, email, password, role) VALUES
('Admin User', 'admin@example.com', '$2a$10$encrypted_password_hash', 'admin');
```

### 3. Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
   - Copy the existing `.env` file or create a new one
   - Update the database credentials if needed:

```env
PORT=5000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=your_password
DB_NAME=usermanager
JWT_SECRET=your_secret_key
```

4. Start the backend server:
```bash
# Development mode (with nodemon)
npm run dev

# Production mode
npm start
```

The backend server will start on `http://localhost:5000`

### 4. Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend application will be available at `http://localhost:5173`

## 🚀 Usage

### For Regular Users

1. **Registration**: Visit the home page and click "Register" to create a new account
2. **Login**: Use your email and password to log in
3. **Profile**: After login, you can view your profile information

### For Administrators

1. **Admin Login**: Navigate to `/admin/login` and use admin credentials
2. **Dashboard**: Access the admin dashboard to:
   - View all registered users
   - Delete user accounts
   - Manage user data

## 📡 API Endpoints

### Authentication Endpoints

#### User Registration
```http
POST /register
Content-Type: application/json

{
  "fullname": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### User Login
```http
POST /login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Admin Login
```http
POST /admin/login
Content-Type: application/json

{
  "email": "admin@example.com",
  "password": "admin_password"
}
```

### Protected Endpoints

#### Get User Profile
```http
GET /users/:id
Authorization: Bearer <jwt_token>
```

#### Get All Users (Admin Only)
```http
GET /admin/users
Authorization: Bearer <admin_jwt_token>
```

#### Delete User (Admin Only)
```http
DELETE /admin/users/:id
Authorization: Bearer <admin_jwt_token>
```

#### Health Check
```http
GET /health
```

## 🔧 Development

### Available Scripts

#### Backend
```bash
npm run dev      # Start development server with nodemon
npm start        # Start production server
```

#### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Project Structure

```
brief_UserManager/
├── backend/
│   ├── server.js              # Main server file
│   ├── package.json           # Backend dependencies
│   ├── .env                   # Environment variables
│   └── middleware/
│       └── auth.js            # JWT authentication middleware
├── frontend/
│   ├── src/
│   │   ├── App.jsx            # Main React app
│   │   ├── main.jsx           # App entry point
│   │   ├── components/        # React components
│   │   │   ├── Home.jsx
│   │   │   ├── formLogin.jsx
│   │   │   ├── formRegister.jsx
│   │   │   ├── UserPage.jsx
│   │   │   └── admin/         # Admin components
│   │   │       ├── AdminLogin.jsx
│   │   │       ├── AdminDashbord.jsx
│   │   │       └── AdminNavBar.jsx
│   │   └── assets/            # Static assets
│   ├── package.json           # Frontend dependencies
│   └── vite.config.js         # Vite configuration
└── README.md                  # This file
```

## 🔒 Security Features

- **Password Hashing**: All passwords are hashed using bcryptjs
- **JWT Authentication**: Secure token-based authentication
- **Role-based Access**: Admin and user role separation
- **Input Validation**: Server-side validation for all inputs
- **CORS Protection**: Configured for secure cross-origin requests

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 📞 Support

If you encounter any issues or have questions:

1. Check the API health endpoint: `GET /health`
2. Verify your environment variables are correctly set
3. Ensure MySQL server is running and database is created
4. Check browser console for frontend errors
5. Check server logs for backend errors

## 🔄 Future Enhancements

- [ ] Email verification for user registration
- [ ] Password reset functionality
- [ ] User profile editing
- [ ] Admin user creation
- [ ] User activity logging
- [ ] API rate limiting
- [ ] File upload for profile pictures
- [ ] Two-factor authentication
