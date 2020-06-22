require('dotenv').config()

module.exports = {
    jwtSecret: process.env.JWT_SECRET,
    rounds: process.env.HASH_ROUNDS,
    PORT: process.env.PORT
};