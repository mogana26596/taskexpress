const { ObjectId } = require('mongodb');
const mongo = require('../connect');

module.exports.createTask = async (req,res,next) => {
     try{
       const insertedResponse = await mongo.selectedDb.collection("task").insertOne(req.body);
         res.send(insertedResponse);
     } catch(err) {
        console.error(err);
         res.status(500).send(err);
    }
}

module.exports.getTask = async (req,res,next) => {
   try{
       const productData = await mongo.selectedDb.collection("task").find().toArray();
       res.send(productData);
   } catch(err) {
    console.error(err);
    res.status(500).send(err);
   }
}

module.exports.updateTask = async (req,res,next) => {
    try{
        const updatedData = await mongo.selectedDb.collection("task")
                        .findOneAndUpdate({_id:ObjectId(req.params.adminId)}, 
                                          {$set: {...req.body}}, 
                                          {returnOriginal : true});
        res.send(updatedData);
    } catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
}

module.exports.deleteTask = async (req,res,next) => {
    try{
        const deletedData = await mongo.selectedDb.collection("task").remove({_id: ObjectId(req.params.taskId)});
        res.send(deletedData);
    }catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
}