FindIt – Lost & Found Management System

## Overview

**FindIt** is a full-stack web application designed to help users report, track, and recover lost and found items within a community. It provides a centralized platform where users can post lost or found items and collaborate to reconnect items with their rightful owners.

The application demonstrates core concepts of modern web development using the MERN stack and is suitable for academic projects, demonstrations, and portfolio use.


## Features

### Authentication

* User registration and login
* Secure authentication using JWT
* Persistent sessions
* Logout functionality

### Dashboard

* Overview of user activity
* Track lost and found items reported by the user
* View status of each report (Pending / Resolved)

### Item Reporting

* Report lost or found items
* Add details:

  * Item name
  * Description
  * Location
  * Category (Lost / Found)
* Upload images using Multer

### Search & Filter

* Search items by:

  * Name
  * Description
  * Location
* Efficient filtering for quick navigation

### Profile

* View user details (Name, Email)
* Track all submitted reports
* Manage account session

### Status Tracking

* Mark items as Pending or Resolved
* Monitor progress of reports


## Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT)
* Multer (File Uploads)

### Frontend

* React.js (MERN Stack)


## 📂 Project Structure

```
FindIt/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   └── package.json
│
└── README.md
```


## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/findit.git
cd findit
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run the backend:

```bash
npm run dev
```


### 3. Frontend Setup

```bash
cd frontend
npm install
npm start
```


## Use Cases

* Colleges and Universities
* Offices and Organizations
* Public Spaces
* Training projects for full-stack learners


## Future Enhancements

* Keyword-based automatic item matching
* Email or notification alerts
* Admin moderation dashboard
* Mobile application support
* AI-based feature enhancements


## Conclusion

FindIt is a practical and beginner-friendly full-stack application that solves a real-world problem. It demonstrates essential MERN stack concepts and serves as a strong project for academic submissions and developer portfolios.


* GitHub repo description (1 line + tags)
* Resume project description
* Viva explanation script

Just tell 👍
