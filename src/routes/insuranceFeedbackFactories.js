const express = require('express');

const router = express.Router();

const insuranceFeedbackFactoryController = require('../app/controllers/InsuranceFeedbackFactoryController');

// router.get('/create', factoryController.create);
// router.get('/switch', factoryController.switch_data);

// router.post('/store', factoryController.store);
// router.patch('/:id/deliveryAgency1', factoryController.deliveryAgency1);
// router.patch('/:id/deliveryAgency2', factoryController.deliveryAgency2);
// router.get('/:id/edit', factoryController.edit);
// router.put('/:id', factoryController.update);
// router.patch('/:id/restore', factoryController.restore);

router.delete('/:id', insuranceFeedbackFactoryController.destroy);
// router.post('/:id', factoryController.destroy);
// router.delete('/:id/force', factoryController.forceDestroy);
// router.get('/:slug', factoryController.show);



module.exports = router;