const express = require('express');
const router = express.Router();
const task= require('../modules/taskModule');

router.get('/get', task.getTask);

router.post('/create', task.createTask);

router.put('/update/:adminId', task.updateTask);

router.delete('/delete/:adminId', task.deleteTask);

module.exports = router;