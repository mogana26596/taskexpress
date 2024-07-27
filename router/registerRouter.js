const express = require('express');
const router = express.Router();
const register = require('../modules/registerModule');

router.post('/adminlogin', register.adminlogin);

router.post('/userlogin', register.userlogin);

module.exports = router;