# Food Delivery App Backend

This is the backend server for a food delivery app, responsible for handling sign-up requests from delivery agents and storing their information in a MongoDB database.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS

## Setup Instructions
1. Clone the repository to your local machine.
2. Make sure you have Node.js and MongoDB installed on your system.
3. Navigate to the project directory in your terminal.
4. Install dependencies using the command: `npm install`.
5. Start the server using the command: `npm start`.

## Connecting to MongoDB
Make sure to replace the MongoDB connection string in `server.js` with your own MongoDB connection string. You can obtain this connection string from your MongoDB Atlas dashboard.

## API Endpoints
- `POST /signup`: Endpoint for signing up delivery agents. It expects a JSON object containing the following fields:
  - `name`: Name of the delivery agent.
  - `mobileNumber`: Mobile number of the delivery agent.
  - `email`: Email address of the delivery agent.
  - `password`: Password for the delivery agent's account.
  - `address`: Address of the delivery agent.
  - `pincode`: Pincode of the delivery agent's location.
  - `city`: City of the delivery agent's location.

## CORS Configuration
CORS (Cross-Origin Resource Sharing) is configured to allow requests from http://localhost:3000, which is the default URL for React development servers. Adjust the `origin` value in `server.js` if your frontend is hosted elsewhere.

## Error Handling
Errors are logged to the console and appropriate HTTP status codes are returned with error messages in JSON format.

## License
This project is licensed under the MIT License. Feel free to use, modify, and distribute it as needed.

mongodb+srv://ukkasnaina99:50Y4XrsXMhHqge5d@projectk.yqods5s.mongodb.net/?retryWrites=true&w=majority&appName=ProjectK