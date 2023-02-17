const {Router} = require("express")
const express = require('express');
const CryptoModel = require("../models/crypto.model");
const axios = require('axios');

const cryptoRouter = Router();


cryptoRouter.get("/",async(req,res)=>{
    try{
        let deleted = await CryptoModel.deleteMany({})
        let cryptodata = await axios.get("https://api.wazirx.com/api/v2/tickers")
        let crypto = []
        let count = 0
        for(let key in cryptodata.data){
            count++
            if(count <= 10){
                crypto.push(cryptodata.data[key])
            }else{
                break;
            }
        }
        let inserted = await CryptoModel.insertMany(crypto)
        return res.send(inserted)
    }catch(e){
        return res.status(401).send({message:"error"});
    }
})



module.exports = cryptoRouter;