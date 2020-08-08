const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')

const app=express();

const studentRouter=require('./Student');
app.use(express.static('./'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/StudentDb');
mongoose.connect('mongodb://localhost/StudentDb',{useNewUrlParser: true});
const db=mongoose.connection;
if(!db)
{
    console.log("unable to connect to database");
}
else{
    console.log("database Connection Successfull");
}

app.use("/students",studentRouter);

var server=app.listen(7800,()=>
{

    console.log("Server is Listening at"+server.address().address+ " :"+server.address().port );
});