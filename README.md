# Event Management System

This project is an Event Management System built using the MERN stack (MongoDB, Express, React, Node.js). It provides a platform for users to create, manage, and participate in events.

## Project Structure

The project is organized into two main parts: the backend and the frontend.

### Backend

The backend is built with Node.js and Express. It handles API requests and interacts with the MongoDB database.

- **src/controllers**: Contains controller files that handle the business logic for different routes.
- **src/models**: Contains model files that define the data structure and schema for the MongoDB database using Mongoose.
- **src/routes**: Contains route files that define the API endpoints and link them to the corresponding controllers.
- **src/app.js**: The entry point of the backend application, setting up the Express server and connecting to the MongoDB database.
- **package.json**: Configuration file for the backend, listing dependencies and scripts.
- **README.md**: Documentation specific to the backend.

### Frontend

The frontend is built with React. It provides a user interface for interacting with the event management system.

- **public**: Contains static files such as the HTML file and images.
- **src/components**: Contains reusable React components for the UI.
- **src/pages**: Contains React components that represent different pages in the application.
- **src/App.js**: The main component that sets up routing and renders the application layout.
- **package.json**: Configuration file for the frontend, listing dependencies and scripts.
- **README.md**: Documentation specific to the frontend.

### CI/CD Pipeline

The project includes a CI/CD pipeline defined using GitHub Actions.

- **.github/workflows/ci-cd.yml**: Configuration file for the CI/CD pipeline, specifying steps to build, test, and deploy the application.

### Docker

The project uses Docker for containerization.

- **docker-compose.yml**: Defines services, networks, and volumes for the application, allowing for easy setup and management of the environment.

### Git

- **.gitignore**: Specifies files and directories to be ignored by Git, such as `node_modules` and environment files.

## Getting Started

To get started with the Event Management System, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory and install dependencies:
   ```
   cd backend
   npm install
   ```

3. Set up your MongoDB database and update the connection string in `src/app.js`.

4. Start the backend server:
   ```
   npm start
   ```

5. Navigate to the frontend directory and install dependencies:
   ```
   cd ../frontend
   npm install
   ```

6. Start the frontend application:
   ```
   npm start
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License.