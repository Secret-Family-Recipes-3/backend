require('dotenv').config();

module.exports = {
    jwtSecret: process.env.JWT_SECRET,
    rounds: 14,
    PORT: process.env.PORT || 5000,
    // PORT: 5000,
};