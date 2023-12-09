import express from "express";

import bodyParser from "body-parser";


import Expo from "expo-server-sdk"

const app = express(); 
const port = 8000;

const expo = new Expo()

const jsonParser = bodyParser.json();
const httpParser = bodyParser.urlencoded({extended:false});



app.post('/sample',jsonParser,async(_,res)=>{
  // const {token} = await FirebaseService.getToken("0000001");
  expo.sendPushNotificationsAsync([
    {
      to:'ExponentPushToken[-Ji6d1F69jCS1l4qGHB3Zw]',
      title: "Soil Water Level",
      body:'water your plan'
    },
  ])

  return res.status(200).send("success");
})


app.listen(port,()=> console.log(`running on Port ${port}`));
