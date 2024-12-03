# **Plant Disease Diagnosis and Medicinal Plant Recommendation App**

## **Project Overview**

You’re building a web application that helps diagnose plant leaf diseases and recommends medicinal plants based on symptoms. The backend is built using **Express.js** and **MongoDB**, while the frontend is developed with **React.js**.

### **Backend (Express.js + MongoDB):**

- **Database (MongoDB Atlas)**:
  - You created a database on **MongoDB Atlas** to store plant-related data, including symptoms, medicinal plant names, scientific names, usage instructions, and dosages.
  - MongoDB Compass is used to manage the database and documents.
  - The collection stores various medicinal plants and their corresponding symptoms, scientific names, dosages, and usage.

- **API Development**:
  - Developed a RESTful **API** using **Express.js** to interact with MongoDB.
  - The API allows the frontend to fetch plant data based on symptoms.
  - The API routes include:
    - Fetching plant data based on symptoms passed from the frontend.
    - Returning a list of all available symptoms.
    - Returning plant details such as plant name, scientific name, usage, and dosage.

- **MongoDB Schema**:
  - The schema contains fields such as `COMMON_NAME`, `SCIENTIFIC_NAME`, `USAGE`, `NO_OF_DOSAGE`, and `SYMPTOMS`.
  - Renamed fields with spaces (e.g., `"Medicinal Plant Name"` to `medicinalPlantName`) for consistency and easier access.

- **CORS Configuration**:
  - Handled **CORS** (Cross-Origin Resource Sharing) by using the **cors middleware** to allow the frontend React app to communicate with the Express backend.

- **Data Updates in MongoDB**:
  - Updated the database fields in MongoDB Compass using the `updateMany` operation to rename fields for better consistency and easier access.

### **Frontend (React.js):**

- **Symptom Selection UI**:
  - The frontend displays symptoms grouped into categories such as **Respiratory Issues**, **Skin & Hair Conditions**, **Mental Health**, and others.
  - Categories are displayed as clickable boxes. When a category is clicked, the corresponding symptoms are shown.
  - Symptoms are presented in a horizontal row with checkboxes that allow users to select symptoms.

- **Displaying Results**:
  - After symptom selection, the frontend sends the symptoms to the backend via an API call, and the backend returns matching plant data.
  - Plant details such as **Medicinal Plant Name**, **Scientific Name**, **Usage**, **No. of Dosage**, and **Symptoms** are displayed with bold headings for clarity.

- **Error Handling**:
  - The frontend shows error messages when there is an issue fetching plant data, providing feedback to users.

- **Manual Symptom List**:
  - Symptoms and categories are manually entered in the frontend, ensuring that the selection process is more user-friendly and organized.

### **Tools Used**

#### Frontend:
- **React.js**: For building the user interface.
- **Bootstrap**: For styling (e.g., displaying symptoms as checkboxes and categories as clickable boxes).
- **Axios**: For making HTTP requests to the backend API.

#### Backend:
- **Express.js**: To set up the server and API endpoints.
- **MongoDB Atlas**: For hosting the database.
- **Mongoose**: For interacting with MongoDB and defining schemas.
- **MongoDB Compass**: Used for managing and visualizing the database, as well as for updating field names.

#### Other Tools:
- **Postman**: Used for testing the API during development.

---

## **Requirements**

Before you begin, ensure that you have the following installed on your machine:

1. **Node.js** (v14.x or above) and **npm**:
   - Download Node.js from [https://nodejs.org/](https://nodejs.org/).

2. **MongoDB Atlas Account** (for MongoDB database):
   - Create an account and set up a cluster at [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas).
   - Get your MongoDB connection string from MongoDB Atlas to connect your backend to the database.

---

## **Installation Instructions**

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/plant-disease-diagnosis.git
cd plant-disease-diagnosis
