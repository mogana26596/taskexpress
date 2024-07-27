const express = require('express');
const mongo = require('./connect');
const cors = require('cors');
const dotenv = require('dotenv');
const register1 = require('./router/registerRouter');
const auth = require("./modules/authModule");
const task1 = require('./router/taskRouter');
const user1 = require('./router/userRouter');

dotenv.config();
mongo.connect();
const app = express();

app.use(cors());
app.use(express.json());


app.use('/register',register1);
app.use('/adminlogin', auth.authenticateUser);
app.use('/task', task1);
app.use('/user', user1);
app.listen(process.env.PORT);