const express = require('express');

const router = express.Router();

const customerController = require('../app/controllers/CustomerController');

router.get('/:id/create', customerController.create);
router.patch('/:id/delivery', customerController.delivery);

router.post('/store', customerController.store);

router.delete('/:id', customerController.destroy);



module.exports = router;