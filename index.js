require('dotenv').config();
const express=require("express");
const app=express();
const path=require("path");
const PORT=process.env.PORT ||8000;
const stockRouter=require("./routes/stock");

// set ejs 
app.set("view engine","ejs");
app.set("views", path.resolve("./views"));

// middleware
app.use(express.urlencoded ({extended:false}));

// routes
app.use('/',stockRouter);
// app.use('/data',stockRouter);



app.listen(PORT, ()=>{console.log(`Server is running at Port : ${PORT}`)});