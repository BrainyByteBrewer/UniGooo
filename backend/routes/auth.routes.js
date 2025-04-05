const express = require('express');
const router = express.Router();

// Import controllers
const { sendOTP } = require('../controllers/auth/sendOTP');
const { verifyOTP } = require('../controllers/auth/verifyOTP');
const { signup } = require('../controllers/auth/signup');
const { login } = require('../controllers/auth/login');
const { socialLogin } = require('../controllers/auth/socialLogin');
const { User } = require('../models/User');

// Routes
router.post('/send-otp', sendOTP);
router.post('/verify-otp', verifyOTP);
router.post('/signup', signup);
router.post('/login', login);
router.post('/social-login', socialLogin);

// Add this route for debugging
router.get('/check-user/:email', async (req, res) => {
    try {
        const email = req.params.email.toLowerCase();
        const user = await User.findOne({ email });
        return res.json({
            exists: !!user,
            user: user ? {
                email: user.email,
                phoneNumber: user.phoneNumber,
                role: user.role
            } : null
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

module.exports = router; 