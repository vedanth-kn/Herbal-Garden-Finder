# Harbal Garden Finder Web Application

## Project Introduction

This project aims to recommend medicinal plants based on user-reported symptoms. The backend is developed using Express.js and interfaces with MongoDB to manage plant-related data. At the same time, the frontend, built with React.js, offers a user-friendly interface for users to interact with the application.

## Technologies Used

- **Backend**: Express.js, MongoDB
- **Frontend**: React.js
- **Database**: MongoDB Atlas
- **Styling**: Bootstrap

## Prerequisites

Before setting up the project, ensure you have the following installed:
- Node.js (Download [here](https://nodejs.org/en/download/))
- MongoDB (Set up a MongoDB Atlas account [here](https://www.mongodb.com/cloud/atlas))
- Git (Download [here](https://git-scm.com/downloads))

## Installation Instructions

### Backend Setup

1. **Navigate to the Backend Folder**:
    ```bash
    cd backend
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Environment Variables**:
    - Add your MongoDB connection string in the backend at index.js line 10:
        ```js
        MONGO_URI=your_mongodb_atlas_connection_string_here
        ```

4. **Start the Server**:
    ```bash
    npm start
    ```
    This will run the backend server on `http://localhost:3000`.

### Frontend Setup

1. **Open a New Terminal Window**:
    - Ensure the backend server is running.

2. **Navigate to the Frontend Folder**:
    ```bash
    cd ../frontend
    ```

3. **Install Dependencies**:
    ```bash
    npm install
    ```

4. **Start the Frontend Application**:
    ```bash
    npm start
    ```
    This will automatically open `http://localhost:3000` in your default web browser.

## Running the Project

1. **Open the Web Browser**:
    - Visit `http://localhost:3000`.

2. **Using the Application**:
    - Select symptoms from the dropdown menu.
    - Submit the form to receive recommendations based on the selected symptoms.
    - The backend fetches data from MongoDB and returns relevant plant details.

## Data Management

### Loading Data into MongoDB

- Use MongoDB Compass to import the `.csv` or `.json` files located in the `dataset` folder into your MongoDB database.
- Ensure the collection is set up correctly with fields such as `COMMON_NAME`, `SCIENTIFIC_NAME`, `USAGE`, `NO_OF_DOSAGE`, and `SYMPTOMS`.
