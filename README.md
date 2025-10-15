# Fullstack Home Assignment – Adi Malka

## Overview
A simple task manager application with a Node.js + Express backend and a React frontend.  
Includes task creation, editing, deletion, filtering, and a continuous carousel display.

## Technologies
**Backend:** Node.js, Express, Helmet, CORS, http-status-codes, uuid  
**Frontend:** React (Vite), Formik, Yup, CSS

## Setup

### Backend
```bash
cd server
npm install
npm start
```
Runs on `http://localhost:3000`

### Frontend
```bash
cd client
npm install
npm run dev
```
Runs on `http://localhost:5173`

## API Endpoints
| Method | Endpoint | Description |
|---------|-----------|-------------|
| GET | /api/tasks | Get all tasks |
| POST | /api/tasks | Create a new task |
| PUT | /api/tasks/:id | Update a task |
| PATCH | /api/tasks/:id/toggle | Toggle task completion |
| DELETE | /api/tasks/:id | Delete a task |


## Notes
- In-memory storage (no database)
- Simple REST structure with clear separation of concerns
- CSS-only carousel for smooth animation
- Formik + Yup for validation

## Time Spent
- Backend: 1.5 hours (including Postman testing)
- Frontend: 2.5 hours (including browser testing)
