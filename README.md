# Assessment App

A full-stack application with a **Node.js (Express)** backend and a **React (TypeScript)** frontend. This app allows users to view and add items to a list.

## Setup

### Prerequisites

- **Node.js** (v14 or higher)

### Installation

1. **Clone the repository** and navigate to the root directory.

   ```bash
   git clone <repository-url>
   cd assessment-app
   ```

2. **Install all dependencies** for both frontend and backend.

   ```bash
   npm install
   ```

## Running the App

To start both the backend and frontend in development mode, run:

```bash
npm run dev
```

- **Backend** runs on `http://localhost:5000`
- **Frontend** runs on `http://localhost:5173`

## Project Structure

```
assessment-app/
├── package.json          # Root package.json with workspaces
├── packages/
│   ├── server/           # Backend code (Express)
│   └── client/           # Frontend code (React with TypeScript)
```

## Scripts

| Command       | Description                        |
| ------------- | ---------------------------------- |
| `npm install` | Installs all dependencies          |
| `npm run dev` | Runs backend and frontend together |
