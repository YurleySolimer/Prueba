export default {
    SECRET: process.env.JWT_SECRET || 'API-USERS',
    DB: {
        URI: process.env.MONGODB_URI || 'mongodb://localhost/apiUsers',
        USER: process.env.MONGODB_USER,
        PASSWORD: process.env.MONGODB_PASSWORD
    }
}