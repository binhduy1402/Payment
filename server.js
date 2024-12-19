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

// Kết nối Database
connectDB();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());

// Cấu hình CORS
const allowedOrigins = [
    "http://localhost:3000",  // Local development URL
    "https://fe-rfyq.onrender.com",  // Allow the frontend from Render
    "https://www.binhduy1402.id.vn"  // New URL added
];

app.use(cors({
    origin: (origin, callback) => {
        // Kiểm tra nếu origin hợp lệ, cho phép hoặc trả về lỗi
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,  // Cho phép cookies và credentials
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Các phương thức HTTP được phép
    allowedHeaders: ["Content-Type", "Authorization"], // Các tiêu đề được phép
}));

// Định tuyến các API
const payment = require('./api/PaymentManagement/Payment.api.js');
app.use('/payment', payment);

// Khởi chạy server
app.listen(PORT, () => {
    console.log('Payment Management Service is running on port ' + PORT);
});
