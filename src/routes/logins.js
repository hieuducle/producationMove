const express = require('express');

const router = express.Router();

const signupController = require('../app/controllers/SignupController');

router.get('/', signupController.login);
router.post('/login/store', signupController.storeLogin);



module.exports = router;