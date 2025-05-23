const expres = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
require("dotenv").config()
const app = new expres();


// ✅ CORS configuration
// ✅ CORS configuration
const corsOptions = {
  origin: "http://localhost:5173", // allow frontend Vite app
  methods: ["GET", "POST", "PUT", "DELETE"], // allowed HTTP methods
  credentials: true, // if you're using cookies or auth headers
};

app.use(cors(corsOptions)); // ✅ apply CORS middleware

app.use(expres.json());
app.use(expres.urlencoded({ extended: true }));
const dbPort = process.env.DB_URL

mongoose.connect(dbPort).then((res)=>{
    console.log(`Database connection successfully`)
}).catch((err)=>{
    console.log(`Database connection fail`)
})



module.exports = app