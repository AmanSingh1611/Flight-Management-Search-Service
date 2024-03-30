const express=require('express');
const {PORT}=require('./config/serverconfig');
const CityRepository=require('./repository/city-repository')
const setupAndStartServer = async ()=>{
    //create express object
    const app=express();
    app.listen(PORT,async ()=>{
        console.log(`Server started at ${PORT}`);
        //console.log(City);
        //console.log(process.env)
       
    })
}

setupAndStartServer();