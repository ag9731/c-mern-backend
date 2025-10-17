const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./db/db");

dotenv.config({path:'./config/config.env'})

port = process.env.PORT || 5000

connectDB

app.listen(port,()=>{
    console.log(`Connected to port ${port}`);
})