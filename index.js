const express = require('express');
const app = express();

const mongoose = require('mongoose');
const PORT = 4000;
const mongoUrl = "mongodb+srv://yuvrajjha2001:yuvrajjha@cluster0.ujiuuav.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongoUrl).then(() => {
    console.log("Database Connected Successfully");
}).catch((error) => {
    console.log(error);
})

// Inbuilt middleware and JSON parser
app.use(express.json());

const employeeRouter = require('./routes/employee');

app.use("/employee", employeeRouter);



app.listen(PORT, () => {
    console.log(`App running at ${PORT}`);
} )