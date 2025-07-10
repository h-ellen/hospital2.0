# Hospital 2.0 Project

This project is a full-stack application consisting of a React frontend and an Express backend. Below are the instructions for setting up and running both parts of the application.

## Project Structure

```
hospital2.0
├── backend
│   ├── src
│   │   ├── app.js
│   │   └── routes
│   │       └── index.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── src
│   │   ├── App.jsx
│   │   └── index.jsx
│   ├── public
│   │   └── index.html
│   ├── package.json
│   └── README.md
└── README.md
```

## Backend Setup

1. Navigate to the `backend` directory:
   ```
   cd backend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Start the Express server:
   ```
   npm start
   ```

The backend will be running on `http://localhost:5000` (or the port specified in your `app.js`).

## Frontend Setup

1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Start the React application:
   ```
   npm start
   ```

The frontend will be running on `http://localhost:3000` (or the port specified in your `package.json`).

## API Endpoints

Refer to the `backend/README.md` for detailed information about the available API endpoints.

## Additional Information

For any issues or contributions, please refer to the respective README files in the `backend` and `frontend` directories.