const express = require('express');

const router = express.Router();

const insuranceController = require('../app/controllers/InsuranceController');

// router.get('/:id/create', insuranceController.create);

router.patch('/:id/delivery-factory', insuranceController.deliveryFactory);
router.patch('/:id/delivery-agency', insuranceController.deliveryAgency);

router.patch('/:id/fix', insuranceController.fix);

// router.post('/store', insuranceController.store);
// router.get('/:id/edit', insuranceController.edit);
// router.put('/:id', insuranceController.update);
// router.delete('/:id', insuranceController.destroy);
// router.get('/:slug', insuranceController.show);


module.exports = router;