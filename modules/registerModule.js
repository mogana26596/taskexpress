const mongo = require('../connect');
const jwt = require('jsonwebtoken');

exports.adminlogin = async (req,res,next) => {

    const savedResponse = await mongo.selectedDb.collection('admin').insertOne({"email":"user123@gmail.com", "password":"user123"});
    let { email, password } = req.body;
    let existingUser = await mongo.selectedDb.collection('admin').findOne({ email: email });
    console.log(existingUser);
    
    let existingPassword = await mongo.selectedDb.collection('admin').findOne({ password: password });
    console.log(existingPassword);
        

    if(!existingUser  && !existingPassword  ) 
    return res.status(400).send({msg: "You are not a registered admin"});
  
    let token = jwt.sign({ userId: existingUser.id, email: existingUser.email }, process.env.SECRET_KEY, {expiresIn : '1hr'});
    res.send(token);
};

exports.userlogin = async (req,res,next) => {

    const existUser = await mongo.selectedDb.collection('user').findOne({email: req.body.email});
    if(existUser) return res.status(400).send({msg : "You are a registered user"})

     // Generate and send the token
    const token = jwt.sign(existUser, process.env.SECRET_KEY, {expiresIn : '1hr'});
    res.send(token);
}