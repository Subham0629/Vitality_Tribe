const express=require("express");
const { connection } = require("./db");
const jwt = require('jsonwebtoken');
const { foodRouter } = require("./routes/Food.routes");
var cors = require('cors');
const { userRouter } = require("./routes/User.routes");
const { auth } = require("./middleware/auth.middleware");
const { exerciseRouter } = require("./routes/Exercise.routes");
const { dashboardRouter } = require("./routes/dashboard.route");
const { socialRouter } = require("./routes/social.route");
require('dotenv').config()
const app =express();
app.use(express.json());
app.use(cors())

//User
app.use("/users",userRouter)
app.use("/food",foodRouter)
app.use("/exercise",exerciseRouter)
app.use("/social",socialRouter)

//Proctected
app.use(auth)
app.use("/dashboard",dashboardRouter)

app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log("Conected to Database")
        
    } catch (error) {
        console.log(error)
    }
})