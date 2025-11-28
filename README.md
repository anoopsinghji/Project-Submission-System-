# **Competition Management Platform - Project Submission & Judging System**

A full-stack web application designed to streamline project competitions, submissions, and judging processes. This platform provides a comprehensive solution for organizers to manage events and for participants to submit their projects seamlessly.

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

## 🚀 **Live Demo**
[View Live Project](https://project-submission-system.vercel.app/home) <!-- Add your actual live demo link here -->

## 📖 **About The Project**

The Competition Management Platform is a sophisticated full-stack application that revolutionizes how project competitions are organized, submitted, and judged. Built with modern web technologies, it provides a seamless experience for both competition organizers and participants with real-time updates and dynamic user interfaces.

### **Key Highlights**
- **End-to-End Competition Management** - From creation to winner declaration
- **Role-Based Access Control** - Separate interfaces for Admins and Participants
- **Real-Time Updates** - Dynamic UI with live data synchronization
- **Professional Judging Workflow** - Streamlined submission review and approval process

## ✨ **Features**

### 🎯 **For Competition Organizers (Admin)**
- **Competition Creation** - Set up and configure new project events
- **Submission Management** - Review, approve, or reject project entries
- **Judging Dashboard** - Comprehensive overview of all submissions
- **Winner Declaration** - Announce and manage competition results
- **User Management** - Monitor participant activities and submissions

### 👥 **For Participants**
- **Project Submission** - Easy upload and submission process
- **Competition Browser** - Discover and join available events

### 🛠 **Technical Features**
- **RESTful API Architecture** - Clean, scalable backend structure
- **Role-Based Dashboards** - Customized interfaces for different user types
- **Real-Time Data Updates** - Dynamic content without page refresh
- **Responsive Design** - Optimized for desktop, tablet, and mobile
- **Secure Authentication** - Protected routes and data access

## 🏗 **Technology Stack**

### **Frontend**
- **Angular 16+** - Modern frontend framework
- **TypeScript** - Type-safe JavaScript development
- **Bootstrap 5** - Responsive CSS framework
- **Custom CSS** - Tailored styling and animations
- **FontAwesome** - Professional icon library
- **RxJS** - Reactive programming and state management

### **Backend**
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **RESTful APIs** - Structured backend communication
- **JWT Authentication** - Secure user authentication

### **Database & Deployment**
- **MongoDB** - NoSQL database for flexible data storage
- **Mongoose** - MongoDB object modeling
- **Git** - Version control system

## 📦 **Installation & Setup**

### **Prerequisites**
- Node.js (v16 or higher)
- Angular CLI (v15 or higher)
- MongoDB (local or cloud instance)
- Git

### **Frontend Setup**
```bash
# Clone the repository
git clone https://github.com/anoopsinghji/Project-Submission-System.git

# Navigate to frontend directory
cd Project-Submission-System/frontend

# Install dependencies
npm install

# Start development server
ng serve

# Application will be available at http://localhost:4200
```

### **Backend Setup**
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Set environment variables
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret

# Start backend server
npm run dev

# Server will run on http://localhost:3000
```

### **Environment Variables**
```env
MONGODB_URI=mongodb://localhost:27017/competition-platform
JWT_SECRET=your_jwt_secret_here
PORT=3000
```

## 🏃‍♂️ **Quick Start**

1. **Access the Platform**
   - Open your browser and navigate to `http://localhost:4200`

2. **Register as Participant**
   - Create an account and browse available competitions
   - Submit your project to participate

3. **Admin Access**
   - Use admin credentials to access the admin dashboard
   - Create competitions and manage submissions

## 🔧 **API Endpoints**

### **Authentication**
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### **Competitions**
- `GET /api/competitions` - Get all competitions
- `POST /api/competitions` - Create new competition (Admin)
- `PUT /api/competitions/:id` - Update competition (Admin)
- `DELETE /api/competitions/:id` - Delete competition (Admin)

### **Submissions**
- `POST /api/submissions` - Submit project
- `GET /api/submissions` - Get all submissions (Admin)
- `PUT /api/submissions/:id` - Update submission status
- `GET /api/submissions/competition/:id` - Get submissions by competition

## 🎨 **UI/UX Features**

- **Custom Animations** - Smooth transitions and micro-interactions
- **Responsive Grid System** - Adapts to all screen sizes
- **Professional Color Scheme** - Consistent branding throughout
- **Interactive Components** - Dynamic forms and modals
- **Loading States** - Enhanced user experience during operations

## 🚀 **Deployment**

### **Frontend Deployment (Angular)**
```bash
# Build for production
ng build --prod

# Deploy to your preferred hosting service
# Recommended: Vercel, Netlify, or Firebase Hosting
```

### **Backend Deployment (Node.js)**
```bash
# Set production environment variables
NODE_ENV=production
MONGODB_URI=your_production_mongo_uri

# Deploy to Heroku, AWS, or DigitalOcean
```

## 👨‍💻 **Development**

### **Contributing**
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### **Code Style**
- Follow Angular Style Guide
- Use TypeScript strict mode
- Implement proper error handling
- Write meaningful commit messages


## 👤 **Developer**

**Anoop Singh**  
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/anoopsinghji)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/anoopsinghji)

## 🤝 **Support**

If you have any questions or need help with setup, please open an issue on GitHub.

---

**⭐ Don't forget to star this repository if you find it helpful!**
