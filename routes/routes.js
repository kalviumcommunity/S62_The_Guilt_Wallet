const express = require('express');
const app = express.Router();
const { getDb, connection } = require('../Database/mongo-client');
const {ObjectId}= require('mongodb');



app.get ("/user", async(req,res)=>{
    try{
      const db=await getDb();
const userData=await db.find().toArray();
return res.status(200).send(userData);
    }
    catch(er){
      return res.status(500).send({message:er.message});
    }
  })
  app.post ("/", async(req,res)=>{
    try{
      const db=await getDb();
const insertData= await db.insertOne({...req.body});
return res.status(201).send ({message: 'Data inserted successfully', insertData})
    }
    catch(er){
      return res.status(500).send({message:er.message});
    }
  })
  app.delete ("/:id", async(req,res)=>{
    try{
      const db=await getDb();
const {id}= req.params;
const deleteUser = await db.deleteOne({ _id: new ObjectId(id)})
return res.status(200).send({message:'Deleted successfully', deleteUser})
    }
    catch(er){
      return res.status(500).send({message:er.message});
    }
  })
  app.put ("/:id", async(req,res)=>{
    try{
      const db=await getDb();
const {id}= req.params;
const updateUser = await db.updateOne({ _id: new ObjectId(id)}, {$set:{...req.body}})
return res.status(200).send({message:'Updated successfully', updateUser})
    }
    catch(er){
      return res.status(500).send({message:er.message});
    }
  })

  module.exports=app;