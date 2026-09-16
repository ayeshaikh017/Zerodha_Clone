
# Zerodha Clone – Full-Stack Trading Platform

A full-stack trading platform inspired by Zerodha, built using the MERN stack. This project demonstrates frontend development, backend API integration, database management, and deployment of a web application.

## 🚀 Live Demo

| Component | Live Link |
|---|---|
| Main Website | [Visit Website](https://zerodha-clone-1-82hd.onrender.com/) |
| Frontend | [View Frontend](https://zerodha-clone-3-5ftu.onrender.com/) |
| Trading Dashboard | [View Dashboard](https://zerodha-clone-5-yhck.onrender.com/) |

## 📌 Project Overview

The Zerodha Clone is a full-stack web application inspired by the design and functionality of the Zerodha trading platform.

It includes a user-facing website and a trading dashboard, with a backend responsible for handling API requests and managing application data.

The project was developed to gain practical experience in building and deploying a full-stack application.

## ✨ Features

- Responsive user interface inspired by Zerodha.
- Interactive trading dashboard.
- Portfolio holdings and stock-related data visualization.
- React Router for navigation between pages.
- REST API integration between frontend and backend.
- Backend development using Node.js and Express.js.
- MongoDB database integration.
- Component-based frontend architecture.
- Separate deployment of frontend, dashboard, and backend.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend development |
| React Router | Client-side navigation |
| Node.js | Backend runtime |
| Express.js | Backend API development |
| MongoDB | Database |
| Mongoose | MongoDB object modeling |
| Chart.js | Data visualization |
| REST APIs | Frontend-backend communication |
| Axios | HTTP requests |
| Bootstrap | Responsive UI styling |
| Render | Application deployment |
| Git & GitHub | Version control |

## 📂 Project Structure

```text
Zerodha_Clone/
│
├── frontend/       # Main website
│
├── dashboard/     # Trading dashboard
│
├── backend/       # Backend APIs and database
│
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/ayeshaikh017/Zerodha_Clone.git
```

### 2. Navigate to the Project

```bash
cd Zerodha_Clone
```

### 3. Install Dependencies

Install dependencies separately in each project directory.

```bash
cd frontend
npm install
```

```bash
cd ../dashboard
npm install
```

```bash
cd ../backend
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the backend directory and configure the required environment variables.

Example:

```env
PORT=3002
MONGO_URL=your_mongodb_connection_string
```

Use your actual database connection string and any other environment variables required by your application.

### 5. Run the Application

Start the backend:

```bash
cd backend
npm start
```

Start the frontend:

```bash
cd frontend
npm start
```

Start the dashboard:

```bash
cd dashboard
npm start
```

The frontend, dashboard, and backend can be run independently.

## 🔗 Application Architecture

```text
           User
            |
            v
      React Frontend
            |
            | REST API Requests
            v
     Node.js + Express
            |
            v
         MongoDB
            |
            v
      Trading Dashboard
```

## 🎯 Learning Outcomes

Through this project, I gained practical experience in:

- Developing full-stack web applications using the MERN stack.
- Building reusable React components and implementing navigation.
- Creating and integrating REST APIs.
- Connecting a backend application with MongoDB.
- Visualizing stock-related data using Chart.js.
- Managing source code using Git and GitHub.
- Deploying frontend, dashboard, and backend applications on Render.

## 👩‍💻 Author

**Ayesha Shaikh**

B.Tech Information Technology Student

[GitHub Profile](https://github.com/ayeshaikh017)

## ⚠️ Disclaimer

This project is created for educational and portfolio purposes only. It is inspired by Zerodha and is not affiliated with or endorsed by Zerodha.

It does not provide real stock trading, investment advice, or financial services.
