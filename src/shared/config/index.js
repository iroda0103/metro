import 'dotenv/config'

export default {
    env: process.env.NODE_ENV,
    port:process.env.PORT,
    db:{
        name:process.env.DB_NAME,
        user:process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        host:process.env.DB_HOST,
        port:process.env.DB_PORT
    },
    jwt:{
        secret:process.env.JWT_SECRET
    }
}