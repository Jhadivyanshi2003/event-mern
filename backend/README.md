# Event Management System Backend

This document provides an overview of the backend setup for the Event Management System project, which is built using the MERN stack (MongoDB, Express, React, Node.js). 

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Running the Application](#running-the-application)
4. [API Endpoints](#api-endpoints)
5. [Contributing](#contributing)
6. [License](#license)

## Prerequisites

- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)
- npm (Node package manager)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/event-management-system.git
   cd event-management-system/backend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Running the Application

1. Ensure that your MongoDB server is running.
2. Start the backend server:
   ```
   npm start
   ```

The server will run on `http://localhost:5000` by default.

## API Endpoints

- `GET /api/events` - Retrieve all events
- `POST /api/events` - Create a new event
- `GET /api/events/:id` - Retrieve a specific event by ID
- `PUT /api/events/:id` - Update a specific event by ID
- `DELETE /api/events/:id` - Delete a specific event by ID

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.