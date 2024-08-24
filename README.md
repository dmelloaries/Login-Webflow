

## Signup & Login Flow

Signup: Email OTP verification with error handling. Redirect to Login page post-verification.

Login: Email and password login. Welcome page shown after successful login.

Security: Passwords hashed; JWT used for authentication.

Design: Mobile-friendly and follows provided design specs.
## Installation



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

### Create a .env file in the frontend directory with the following content:
##### PORT=5000
##### MONGODB_URL=  
##### JWT_SECRET=   
##### EMAIL_USER=    
##### EMAIL_PASS=

