const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require('./connection');
const app = express();
const cookieParser = require("cookie-parser");
dotenv.config();

var multer = require('multer');

const PORT = process.env.PORT || 8072;

connectDB();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: [
        "http://localhost:3000",  // Local development URL
        "https://fe-rfyq.onrender.com",  // Allow the frontend from Render
        "https://www.binhduy1402.id.vn/" // New URL added
    ],
    credentials: true,  // Allow cookies to be sent across origins
}));

app.use(bodyParser.json());

// Payment Management
const payment = require('./api/PaymentManagement/Payment.api.js');
app.use('/payment', payment);

app.listen(PORT, () => {
    console.log('Payment Management Service is running');
});
