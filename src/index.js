const express=require('express');
const {PORT}=require('./config/serverconfig');
const setupAndStartServer = async ()=>{
    //create express object
    const app=express();
    const PORT=3000;
    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT}`);
        //console.log(process.env)
    })
}

setupAndStartServer();