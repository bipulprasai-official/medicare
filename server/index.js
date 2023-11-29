const express = require('express');
const connectDB = require('./config/db');
require("dotenv").config();
const PORT = process.env.PORT;
const cors = require("cors");
const category_routes = require('./routes/category');
const patient_routes = require('./routes/patientRoute');
const notes_routes = require('./routes/progressnoteRoute');
const fluidchart_routes = require('./routes/patientfluidchartRoute')


const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
// routes and middlewares
app.use("/api/category",category_routes);
app.use("/api/patient",patient_routes);
app.use("/api/notes",notes_routes);
app.use("/api/fluidchart",fluidchart_routes);


const start = async() => {
    try {
        await connectDB();
        app.listen(PORT,()=>{
           console.log(`server running at port ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();