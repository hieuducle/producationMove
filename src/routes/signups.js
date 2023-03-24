const express = require('express');

const router = express.Router();

const signupController = require('../app/controllers/SignupController');

router.get('/', signupController.signup);
router.post('/store', signupController.store);



module.exports = router;