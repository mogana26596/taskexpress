const express = require('express');
const router = express.Router();
const user= require('../modules/userModule');

router.get('/get', user.getUser);

router.post('/create', user.createUser);

router.put('/update/:adminId', user.updateUser);

router.delete('/delete/:adminId', user.deleteUser);

module.exports = router;