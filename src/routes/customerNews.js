const express = require('express');

const router = express.Router();

const customerNewController = require('../app/controllers/CustomerNewController');

router.get('/:id/createNew', customerNewController.create);
router.patch('/:id/delivery', customerNewController.delivery);

router.post('/store', customerNewController.store);

router.delete('/:id', customerNewController.destroy);



module.exports = router;