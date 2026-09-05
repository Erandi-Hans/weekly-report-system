const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const swaggerDocs = require('./swagger'); // swagger.js import

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get('/', (req, res) => {
    res.send('Weekly Report System API is running...');
});

const PORT = process.env.PORT || 5000;

// එක පාරක් පමණක් app.listen යොදා, එය ඇතුළේ swaggerDocs(app) ලබා දෙන්න
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    swaggerDocs(app); // Swagger UI ලෝඩ් වීම සඳහා
});