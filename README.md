
# Login Webflow

A simple, secure login/signup flow with email OTP verification and JWT authentication, designed for a smooth user experience on both desktop and mobile.

## Features

- **Signup Flow**: Email OTP verification with comprehensive error handling. Automatic redirection to the Login page post-verification.
- **Login Flow**: Secure login using email and password, with a personalized welcome page upon successful login.
- **Security**: Passwords are hashed for protection, and JWT (JSON Web Token) is used for secure authentication.
- **Design**: Mobile-friendly UI that adheres to provided design specifications.

## Installation

### Clone the Repository

```bash
git clone https://github.com/dmelloaries/Login-Webflow.git

```

## Frontend

```bash
cd frontend
npm install 
npm run dev
```
### Create a .env file in the frontend directory with the following content:


##### VITE_BACKEND_URL=http://localhost:5000



## Backend

```bash
cd backend
npm install 
npm start
```

### Create a .env file in the backend directory with the following content:
##### PORT=5000
##### MONGODB_URL=  
##### JWT_SECRET=   
##### EMAIL_USER=    
##### EMAIL_PASS=

__________________________________________________________________________________

## Technology Stack

### Frontend
- **Framework**: React.js (TypeScript)
- **Styling**: Tailwind CSS
- **Deployment**: Netlify

### Backend
- **Framework**: Node.js (TypeScript)
- **Database**: MongoDB
- **Deployment**: Render

### Other Tools
- **Version Control**: Git (GitHub)


